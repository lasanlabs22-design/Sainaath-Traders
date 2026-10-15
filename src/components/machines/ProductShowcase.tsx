"use client";

import { useState } from "react";
import Image from "next/image";
import type { Machine } from "@/lib/types";
import { machineTitle } from "@/lib/format";
import { MachineMedia } from "./MachineMedia";

/** Product imagery + finish selector. Uses photos when present, illustration otherwise. */
export function ProductShowcase({ machine }: { machine: Machine }) {
  const [finish, setFinish] = useState(0);
  const [photo, setPhoto] = useState(0);
  const hasPhotos = machine.images.length > 0;

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      {/* Width is derived from the viewport height so the whole 4:5 image fits on screen without scrolling. */}
      <div className={`relative mx-auto aspect-[4/5] w-full max-w-[calc(56dvh*0.8)] overflow-hidden rounded-[2rem] border lg:max-w-[calc((100dvh_-_14rem)*0.8)] ${hasPhotos ? "border-brass/30 stage" : "border-line bg-gradient-to-b from-cream via-sand to-cream"}`}>
        {hasPhotos ? (
          <div className="absolute inset-x-10 top-1/4 h-1/2 rounded-full bg-brass/15 blur-3xl" />
        ) : (
          <div className="kolam absolute inset-0 opacity-40" />
        )}
        <div className="absolute inset-3 rounded-[1.6rem] border border-brass/20" />
        <MachineMedia
          key={`${finish}-${photo}`}
          machine={machine}
          index={photo}
          finishColor={machine.finishes[finish]?.color}
          priority
          steam
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="h-full w-full animate-[fadeIn_.6s_ease]"
        />
        {machine.badge && (
          <span className="absolute left-1/2 top-7 -translate-x-1/2 rounded-full border border-brass/40 bg-espresso/80 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brass-light backdrop-blur">
            {machine.badge}
          </span>
        )}
      </div>

      {machine.images.length > 1 && (
        <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto">
          {machine.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setPhoto(i)}
              aria-label={`View photo ${i + 1}`}
              className={`relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl border stage ${i === photo ? "border-brass" : "border-line"}`}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-contain" />
            </button>
          ))}
        </div>
      )}

      {!hasPhotos && machine.finishes.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Finish · <span className="font-semibold text-espresso">{machine.finishes[finish].name}</span>
          </p>
          <div className="mt-3 flex justify-center gap-3" role="radiogroup" aria-label={`${machineTitle(machine)} finishes`}>
            {machine.finishes.map((f, i) => (
              <button
                key={f.name}
                type="button"
                role="radio"
                aria-checked={i === finish}
                aria-label={f.name}
                onClick={() => setFinish(i)}
                className={`size-9 rounded-full border-2 transition-all ${i === finish ? "scale-110 border-brass" : "border-transparent"}`}
              >
                <span className="block size-full rounded-full shadow-inner ring-1 ring-black/10" style={{ background: f.color }} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
