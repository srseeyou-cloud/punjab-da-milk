"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Basket = { items: string[]; toggle: (id: string) => void; has: (id: string) => boolean };

const BasketCtx = createContext<Basket | null>(null);

export function BasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const toggle = (id: string) =>
    setItems((cur) => (cur.includes(id) ? cur.filter((i) => i !== id) : [...cur, id]));
  return (
    <BasketCtx.Provider value={{ items, toggle, has: (id) => items.includes(id) }}>{children}</BasketCtx.Provider>
  );
}

export function useBasket() {
  const ctx = useContext(BasketCtx);
  if (!ctx) throw new Error("useBasket must be used inside BasketProvider");
  return ctx;
}
