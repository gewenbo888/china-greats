import { PROVINCES_1, type Province } from "./provinces-1";
import { PROVINCES_2 } from "./provinces-2";

export type { Province, Figure } from "./provinces-1";

export const PROVINCES: Province[] = [...PROVINCES_1, ...PROVINCES_2];

export const REGIONS = [
  "华北",
  "东北",
  "华东",
  "华中",
  "华南",
  "西南",
  "西北",
  "港澳台",
] as const;

export function getProvince(slug: string): Province | undefined {
  return PROVINCES.find((p) => p.slug === slug);
}

export const TOTAL_PROVINCES = PROVINCES.length;
export const TOTAL_FIGURES = PROVINCES.reduce((n, p) => n + p.figures.length, 0);
