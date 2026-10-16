"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * A plain <img> that swaps to `fallback` if the photo fails to load
 * (offline, blocked CDN, or a removed Unsplash photo), so a card is never left with a broken image.
 */
export function Photo({
  src,
  alt,
  className = "",
  fallback,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
  eager?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // An image can fail before React hydrates and attaches onError, so check once on mount too.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return <>{fallback ?? null}</>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
