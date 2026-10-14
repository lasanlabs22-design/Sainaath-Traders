import Image from "next/image";
import type { Machine } from "@/lib/types";
import { machineTitle } from "@/lib/format";
import { MachineVisual } from "./MachineVisual";

interface Props {
  machine: Machine;
  /** Index into machine.images; falls back to the illustration. */
  index?: number;
  finishColor?: string;
  sizes?: string;
  priority?: boolean;
  steam?: boolean;
  className?: string;
}

/**
 * Renders the machine photo if one is supplied, otherwise the illustrated
 * placeholder. Photos are 4:5 cut-outs on the shared `bg-stage` colour, so
 * place this inside a `bg-stage` frame for a seamless edge.
 */
export function MachineMedia({ machine, index = 0, finishColor, sizes = "(min-width: 1024px) 33vw, 100vw", priority, steam, className = "" }: Props) {
  const src = machine.images[index];
  const title = machineTitle(machine);

  if (src) {
    return (
      <div className={`relative ${className}`}>
        <Image src={src} alt={title} fill sizes={sizes} priority={priority} className="object-contain" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <MachineVisual
        kind={machine.visual}
        color={finishColor ?? machine.finishes[0]?.color}
        steam={steam}
        title={title}
        className="absolute inset-0 h-full w-full p-4"
      />
    </div>
  );
}
