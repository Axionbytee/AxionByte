"use client";

import { useZoerIframe } from "@/hooks/useZoerIframe";

export default function GlobalClientEffects() {
  // Global hooks
  useZoerIframe();

  return null;
}

