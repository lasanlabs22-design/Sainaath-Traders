"use client";

import { useEffect, useMemo, useState } from "react";
import type { Category, CategorySlug, Machine, UseCase } from "@/lib/types";
import { MachineCard } from "./MachineCard";
import { Icon } from "@/components/ui/Icon";

const useCases: { value: UseCase; label: string }[] = [
  { value: "home", label: "Home" },
  { value: "office", label: "Office" },
  { value: "cafe", label: "Café & Hotel" },
];

const drinks = ["Espresso", "Cappuccino", "Filter Coffee", "Masala", "Lemon Tea", "Hot Milk", "Soup"] as const;

const sorts = [
  { value: "featured", label: "Recommended" },
  { value: "brand", label: "Brand A–Z" },
  { value: "menu", label: "Most drinks first" },
] as const;

type Sort = (typeof sorts)[number]["value"];

export function Catalogue({ machines, categories, initialCategory }: { machines: Machine[]; categories: Category[]; initialCategory?: CategorySlug }) {
  const [category, setCategory] = useState<CategorySlug | "all">(initialCategory ?? "all");
  const [uses, setUses] = useState<UseCase[]>([]);
  const [brand, setBrand] = useState<string | null>(null);
  const [drink, setDrink] = useState<string | null>(null);
  const brands = useMemo(() => Array.from(new Set(machines.map((m) => m.brand))), [machines]);
  const [sort, setSort] = useState<Sort>("featured");
  const [query, setQuery] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);

  // Keep ?category= in the URL shareable without a server round-trip.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (category === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", category);
    window.history.replaceState(null, "", url);
  }, [category]);

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? "hidden" : "";
  }, [sheetOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = machines.filter(
      (m) =>
        (category === "all" || m.category === category) &&
        (uses.length === 0 || uses.some((u) => m.idealFor.includes(u))) &&
        (!brand || m.brand === brand) &&
        (!drink || (m.beverages ?? []).some((d) => d.toLowerCase().includes(drink.toLowerCase()))) &&
        (!q || `${m.brand} ${m.line ?? ""} ${m.name} ${m.model} ${m.tagline} ${(m.beverages ?? []).join(" ")}`.toLowerCase().includes(q)),
    );
    if (sort === "brand") list.sort((a, b) => a.brand.localeCompare(b.brand));
    if (sort === "menu") list.sort((a, b) => (b.beverages?.length ?? 0) - (a.beverages?.length ?? 0));
    if (sort === "featured") list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return list;
  }, [machines, category, uses, brand, drink, sort, query]);

  const activeCount = uses.length + (brand ? 1 : 0) + (drink ? 1 : 0) + (sort !== "featured" ? 1 : 0);
  const reset = () => {
    setUses([]);
    setBrand(null);
    setDrink(null);
    setSort("featured");
    setQuery("");
    setCategory("all");
  };

  const filters = (
    <div className="space-y-8">
      <fieldset>
        <legend className="eyebrow mb-3">Ideal for</legend>
        <div className="flex flex-wrap gap-2">
          {useCases.map((u) => {
            const on = uses.includes(u.value);
            return (
              <button
                key={u.value}
                type="button"
                aria-pressed={on}
                onClick={() => setUses(on ? uses.filter((x) => x !== u.value) : [...uses, u.value])}
                className={`min-h-10 rounded-full border px-4 text-sm transition-colors ${on ? "border-espresso bg-espresso text-ivory" : "border-line bg-ivory hover:border-brass"}`}
              >
                {u.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="eyebrow mb-3">Must serve</legend>
        <div className="flex flex-wrap gap-2">
          {drinks.map((d) => {
            const on = drink === d;
            return (
              <button
                key={d}
                type="button"
                aria-pressed={on}
                onClick={() => setDrink(on ? null : d)}
                className={`min-h-10 rounded-full border px-4 text-sm transition-colors ${on ? "border-espresso bg-espresso text-ivory" : "border-line bg-ivory hover:border-brass"}`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="eyebrow mb-3">Brand</legend>
        <select
          value={brand ?? ""}
          onChange={(e) => setBrand(e.target.value || null)}
          className="min-h-11 w-full rounded-xl border border-line bg-ivory px-3 text-sm focus:border-brass"
        >
          <option value="">All brands</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend className="eyebrow mb-3">Sort by</legend>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="min-h-11 w-full rounded-xl border border-line bg-ivory px-3 text-sm focus:border-brass"
        >
          {sorts.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </fieldset>
    </div>
  );

  return (
    <div>
      {/* Category chips — scrollable rail on mobile */}
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        {[{ slug: "all" as const, name: "All machines" }, ...categories].map((c) => {
          const on = category === c.slug;
          return (
            <button
              key={c.slug}
              type="button"
              aria-pressed={on}
              onClick={() => setCategory(c.slug)}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-all ${
                on ? "border-espresso bg-espresso text-brass-light" : "border-line bg-ivory text-ink hover:border-brass"
              }`}
            >
              {c.name}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-3xl border border-line bg-ivory p-6">
            {filters}
            <button type="button" onClick={reset} className="mt-8 text-sm font-semibold text-brass-deep underline-offset-4 hover:underline">
              Reset all filters
            </button>
          </div>
        </aside>

        <div>
          <div className="flex items-center gap-3">
            <label className="relative flex-1">
              <span className="sr-only">Search machines</span>
              <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brand, model or drink…"
                className="min-h-12 w-full rounded-full border border-line bg-ivory pl-11 pr-4 text-sm placeholder:text-muted/70 focus:border-brass focus:outline-none"
              />
            </label>
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              className="relative flex min-h-12 items-center gap-2 rounded-full border border-line bg-ivory px-5 text-sm font-medium lg:hidden"
            >
              <Icon name="filter" className="size-4" /> Filters
              {activeCount > 0 && <span className="grid size-5 place-items-center rounded-full bg-brass text-[0.65rem] font-bold text-espresso">{activeCount}</span>}
            </button>
          </div>

          <p className="mt-5 text-sm text-muted" aria-live="polite">
            Showing <span className="font-semibold text-espresso">{results.length}</span> {results.length === 1 ? "machine" : "machines"}
          </p>

          {results.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((m, i) => (
                <MachineCard key={m.slug} machine={m} priority={i < 3} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-3xl border border-dashed border-line bg-cream px-6 py-16 text-center">
              <p className="font-display text-3xl">No machines match those filters.</p>
              <p className="mt-2 text-muted">Try another drink or brand — or ask us, we can source almost any model.</p>
              <button type="button" onClick={reset} className="btn btn-primary mt-6">
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile bottom sheet */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sheetOpen ? "" : "pointer-events-none"}`} role="dialog" aria-modal="true" aria-label="Filters">
        <div className={`absolute inset-0 bg-espresso/50 transition-opacity duration-300 ${sheetOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setSheetOpen(false)} />
        <div
          className={`absolute inset-x-0 bottom-0 max-h-[85dvh] overflow-y-auto rounded-t-[2rem] bg-ivory p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] transition-transform duration-500 ease-luxe ${
            sheetOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-line" />
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl">Refine</h2>
            <button type="button" onClick={reset} className="text-sm font-semibold text-brass-deep">
              Reset
            </button>
          </div>
          {filters}
          <button type="button" onClick={() => setSheetOpen(false)} className="btn btn-primary mt-8 w-full">
            Show {results.length} {results.length === 1 ? "machine" : "machines"}
          </button>
        </div>
      </div>
    </div>
  );
}
