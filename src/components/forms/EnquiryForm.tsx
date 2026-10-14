"use client";

import { useState } from "react";
import Link from "next/link";
import { cities, enquiryTypes, validateEnquiry, type Enquiry, type EnquiryErrors } from "@/lib/enquiry";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/format";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "sent";

function enquiryMessage(data: Enquiry): string {
  return [
    `Hello ${site.name}, I'd like to: *${data.type}*`,
    "",
    `Name: ${data.name}`,
    `Mobile: ${data.phone}`,
    `City: ${data.city}`,
    data.machine && `Machine: ${data.machine}`,
    data.message && `Message: ${data.message}`,
  ]
    .filter((l) => l !== undefined)
    .join("\n");
}

export function EnquiryForm({ machines, defaultMachine }: { machines: { slug: string; label: string }[]; defaultMachine?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [waUrl, setWaUrl] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget));
    const { data, errors } = validateEnquiry(raw);
    setErrors(errors);
    if (!data) return;

    // Open WhatsApp synchronously, inside the click, so browsers don't block it as a pop-up.
    const url = whatsappLink(enquiryMessage(data));
    setWaUrl(url);
    // ("noopener" as a feature makes window.open return null, so detach the opener manually.)
    const tab = window.open(url, "_blank");
    if (tab) tab.opener = null;
    else window.location.href = url;

    // Keep a server-side copy of the lead; WhatsApp is the primary channel, so don't wait on it.
    fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), keepalive: true }).catch(() => {});
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[2rem] border border-brass/40 bg-cream p-8 text-center sm:p-12" role="status">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#25D366] text-white">
          <Icon name="whatsapp" className="size-8" />
        </span>
        <h3 className="mt-6 text-4xl">Opening WhatsApp…</h3>
        <p className="mx-auto mt-4 max-w-sm text-muted">Your enquiry is ready in WhatsApp — just tap send. If it didn’t open, use the button below.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={waUrl} target="_blank" rel="noopener" className="btn btn-brass">
            <Icon name="whatsapp" /> Open WhatsApp
          </a>
          <button type="button" onClick={() => setStatus("idle")} className="btn btn-ghost">
            Edit enquiry
          </button>
        </div>
      </div>
    );
  }

  const field = "mt-2 min-h-12 w-full rounded-xl border bg-ivory px-4 text-base text-ink placeholder:text-muted/60 focus:border-brass focus:outline-none sm:text-sm";
  const border = (k: keyof EnquiryErrors) => (errors[k] ? "border-kumkum" : "border-line");
  const err = (k: keyof EnquiryErrors) =>
    errors[k] && (
      <p id={`${k}-error`} className="mt-1.5 text-xs text-kumkum">
        {errors[k]}
      </p>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-[2rem] border border-line bg-ivory p-6 shadow-[0_30px_60px_-40px_rgba(43,27,18,0.5)] sm:grid-cols-2 sm:p-10">
      <label className="block text-sm font-medium">
        Full name
        <input name="name" autoComplete="name" placeholder="Your name" className={`${field} ${border("name")}`} aria-invalid={!!errors.name} aria-describedby="name-error" />
        {err("name")}
      </label>
      <label className="block text-sm font-medium">
        Mobile number
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="98xxx xxxxx"
          className={`${field} ${border("phone")}`}
          aria-invalid={!!errors.phone}
          aria-describedby="phone-error"
        />
        {err("phone")}
      </label>
      <label className="block text-sm font-medium">
        City
        <select name="city" defaultValue="" className={`${field} ${border("city")}`} aria-invalid={!!errors.city}>
          <option value="" disabled>
            Select city
          </option>
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        {err("city")}
      </label>
      <label className="block text-sm font-medium">
        I’d like to
        <select name="type" defaultValue={defaultMachine ? "Book a free demo" : ""} className={`${field} ${border("type")}`} aria-invalid={!!errors.type}>
          <option value="" disabled>
            Choose one
          </option>
          {enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {err("type")}
      </label>
      <label className="block text-sm font-medium sm:col-span-2">
        Machine of interest <span className="font-normal text-muted">(optional)</span>
        <select name="machine" defaultValue={machines.find((m) => m.slug === defaultMachine)?.label ?? ""} className={`${field} border-line`}>
          <option value="">Not sure yet — please advise</option>
          {machines.map((m) => (
            <option key={m.slug}>{m.label}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium sm:col-span-2">
        Message <span className="font-normal text-muted">(optional)</span>
        <textarea name="message" rows={4} placeholder="Cups per day, preferred demo time, anything else…" className={`${field} min-h-28 border-line py-3`} />
      </label>

      <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We’ll only use your number to respond to this enquiry. See our{" "}
          <Link href="/privacy" className="font-semibold text-brass-deep hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button type="submit" className="btn btn-brass w-full sm:w-auto">
          <Icon name="whatsapp" /> Send enquiry on WhatsApp
        </button>
      </div>
    </form>
  );
}
