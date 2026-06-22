"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang } from "@/data/portfolio";
interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (obj: { en: string; es: string }) => string;
}
const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (obj) => obj.en,
});
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (obj: { en: string; es: string }) => obj[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
}
export function useLang() {
  return useContext(LangContext);
}
