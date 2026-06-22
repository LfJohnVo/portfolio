"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GitHubRepo } from "@/lib/github";
import { LANGUAGE_COLORS, LABELS } from "@/data/portfolio";
import { useLang } from "@/context/LangContext";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
const PAGE_SIZE = 12;
type SortOption = "stars" | "updated" | "name";
export default function GitHubRepos() {
  const { t } = useLang();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [sort, setSort] = useState<SortOption>("updated");
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch("/api/github?type=repos")
      .then((r) => r.json())
      .then((data: GitHubRepo[]) => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load repositories. Please try again later.");
        setLoading(false);
      });
  }, []);
  const languages = useMemo(() => {
    const langs = new Set(repos.map((r) => r.language).filter(Boolean) as string[]);
    return ["All", ...Array.from(langs).sort()];
  }, [repos]);
  const filtered = useMemo(() => {
    let result = repos.filter((r) => !r.fork);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          (r.description ?? "").toLowerCase().includes(q)
      );
    }
    if (language !== "All") {
      result = result.filter((r) => r.language === language);
    }
    result = [...result].sort((a, b) => {
      if (sort === "stars") return b.stargazers_count - a.stargazers_count;
      if (sort === "name") return a.name.localeCompare(b.name);
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
    return result;
  }, [repos, search, language, sort]);
  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = paginated.length < filtered.length;
  const resetFilters = useCallback(() => {
    setSearch("");
    setLanguage("All");
    setSort("updated");
    setPage(1);
  }, []);
  useEffect(() => { setPage(1); }, [search, language, sort]);
  return (
    <section id="repos" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge={t(LABELS.repos.badge)}
            title={t(LABELS.repos.title)}
            subtitle={t(LABELS.repos.subtitle)}
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                id="repo-search"
                type="text"
                placeholder={t(LABELS.repos.search)}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
              />
            </div>
            <select
              id="repo-language-filter"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all appearance-none cursor-pointer min-w-[140px]"
            >
              {languages.map((l) => (
                <option key={l} value={l} className="bg-slate-900">
                  {l === "All" ? t(LABELS.repos.allLanguages) : l}
                </option>
              ))}
            </select>
            <select
              id="repo-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all appearance-none cursor-pointer min-w-[140px]"
            >
              <option value="updated" className="bg-slate-900">{t(LABELS.repos.recentlyUpdated)}</option>
              <option value="stars" className="bg-slate-900">{t(LABELS.repos.mostStars)}</option>
              <option value="name" className="bg-slate-900">{t(LABELS.repos.nameAZ)}</option>
            </select>
            {(search || language !== "All" || sort !== "updated") && (
              <button
                id="repo-reset-filters"
                onClick={resetFilters}
                className="px-4 py-2.5 rounded-xl text-sm text-slate-400 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all"
              >
                {t(LABELS.repos.reset)}
              </button>
            )}
          </div>
          {!loading && (
            <p className="text-sm text-slate-500 mb-6">
              {t(LABELS.repos.showing)} <span className="text-slate-300 font-medium">{paginated.length}</span> {t(LABELS.repos.of)}{" "}
              <span className="text-slate-300 font-medium">{filtered.length}</span> {t(LABELS.repos.repositories)}
            </p>
          )}
        </FadeIn>
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-40 rounded-2xl bg-white/[0.03] border border-white/[0.06] animate-pulse"
              />
            ))}
          </div>
        )}
        {error && (
          <div className="text-center py-16">
            <p className="text-red-400">{error}</p>
          </div>
        )}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400">{t(LABELS.repos.noResults)}</p>
            <button
              onClick={resetFilters}
              className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
            >
              {t(LABELS.repos.clearFilters)}
            </button>
          </div>
        )}
        {!loading && !error && filtered.length > 0 && (
          <>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {paginated.map((repo, i) => (
                  <RepoCard key={repo.id} repo={repo} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  id="repo-load-more"
                  onClick={() => setPage((p) => p + 1)}
                  className="px-8 py-3 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {t(LABELS.repos.loadMore)} ({filtered.length - paginated.length} {t(LABELS.repos.remaining)})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const { t } = useLang();
  const langColor = repo.language
    ? LANGUAGE_COLORS[repo.language] ?? "#6b7280"
    : "#6b7280";
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      id={`repo-${repo.name}`}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
      whileHover={{ y: -4 }}
      className="group flex flex-col gap-3 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-indigo-500/20 transition-all"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors line-clamp-1">
          {repo.name}
        </h3>
        <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 flex-shrink-0 mt-0.5 transition-colors" />
      </div>
      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
        {repo.description ?? t(LABELS.repos.noDescription)}
      </p>
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-3 pt-1 border-t border-white/[0.05]">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: langColor }}
            />
            <span className="text-xs text-slate-500">{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1 text-slate-500 ml-auto">
          <StarIcon className="w-3.5 h-3.5" />
          <span className="text-xs">{repo.stargazers_count}</span>
        </div>
        {repo.forks_count > 0 && (
          <div className="flex items-center gap-1 text-slate-500">
            <ForkIcon className="w-3.5 h-3.5" />
            <span className="text-xs">{repo.forks_count}</span>
          </div>
        )}
      </div>
    </motion.a>
  );
}
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" d="m21 21-4.35-4.35" />
    </svg>
  );
}
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
function ForkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`} aria-hidden="true">
      <circle cx="12" cy="18" r="2" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M6 8v2a2 2 0 002 2h8a2 2 0 002-2V8M12 12v4" />
    </svg>
  );
}
