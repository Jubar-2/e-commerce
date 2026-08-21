"use client";

import * as React from "react";
import {
  Tag,
  ChevronDown,
  ChevronRight,
  ArrowUpFromLine,
  Users2,
  Plus,
  X,
  LayoutGrid,
  List,
  Columns3,
  SlidersHorizontal,
  Search as SearchIcon
} from "lucide-react";

const attributes = [
  "Category",
  "Compare at price",
  "Inventory stock",
  "Metafield",
  "Price",
  "Status",
  "Tag",
  "Title",
  "Type",
  "Variant title",
  "Vendor",
];

export default function Page() {
  const [conditionOpen, setConditionOpen] = React.useState(false);
  const conditionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      if (
        conditionRef.current &&
        !conditionRef.current.contains(e.target as Node)
      ) {
        setConditionOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-8 py-6">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-1.5 text-neutral-500">
        <Tag className="h-4 w-4" />
        <ChevronRight className="h-3.5 w-3.5" />
        <h1 className="text-2xl font-semibold text-neutral-900">
          Add collection
        </h1>
      </div>

      <div className="grid grid-cols-[1fr_320px] gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Title/description card */}
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex gap-4">
              <label className="flex h-27.5 w-27.5 shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-neutral-300 text-neutral-400 hover:border-neutral-400">
                <ArrowUpFromLine className="h-5 w-5" />
                <input type="file" className="hidden" />
              </label>
              <div className="flex-1">
                <input
                  placeholder="Add title"
                  className="w-full border-none bg-transparent text-lg text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
                />
                <textarea
                  placeholder="Add description"
                  rows={2}
                  className="mt-1 w-full resize-none border-none bg-transparent text-neutral-500 placeholder:text-neutral-400 focus:outline-none"
                />
                <div className="mt-3 flex justify-end">
                  <button className="flex items-center gap-1.5 rounded-md border border-neutral-300 px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
                    <Users2 className="h-3.5 w-3.5" />
                    2 channels
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Collection items card */}
          <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-2">
                <h2 className="font-medium text-neutral-900">
                  Collection items
                </h2>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">
                  0
                </span>
              </div>
              <span className="text-neutral-400">
                Add conditions or products to populate your collection
              </span>
            </div>

            <div className="flex items-center gap-2 border-t border-neutral-200 px-5 py-2.5">
              <div className="flex items-center rounded-md border border-neutral-200 p-0.5">
                <button className="rounded p-1 text-neutral-500 hover:bg-neutral-100">
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button className="rounded p-1 text-neutral-400 hover:bg-neutral-100">
                  <List className="h-4 w-4" />
                </button>
              </div>
              <button className="flex items-center gap-1 rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-600 hover:bg-neutral-50">
                <Columns3 className="h-3.5 w-3.5" />4
              </button>
              <div className="flex-1" />
              <button className="rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100">
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 px-5 pb-3 pt-1">
              <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-700">
                Status: Active, Draft, Unlisted, and Suspended
                <X className="h-3 w-3 cursor-pointer text-neutral-400" />
              </span>
              <button className="text-xs text-neutral-400 hover:text-neutral-600 hover:underline">
                Clear all
              </button>
            </div>

            {/* Skeleton grid */}
            <div className="grid grid-cols-4 gap-4 px-5 pb-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 rounded-lg border border-neutral-100 p-2"
                >
                  <div className="aspect-square animate-pulse rounded-md bg-neutral-100" />
                  <div className="h-2.5 w-4/5 animate-pulse rounded bg-neutral-100" />
                  <div className="h-2.5 w-3/5 animate-pulse rounded bg-neutral-100" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 border-t border-neutral-200 px-5 py-3">
              <button className="flex items-center gap-1.5 rounded-md border border-neutral-300 px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
                <Plus className="h-3.5 w-3.5" />
                Add condition
              </button>
              <button className="flex items-center gap-1.5 rounded-md border border-neutral-300 px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
                <SearchIcon className="h-3.5 w-3.5" />
                Add products
              </button>
            </div>
          </div>

          {/* Theme template */}
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h2 className="font-medium text-neutral-900">
              Theme template
            </h2>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-1.5 font-medium text-neutral-900">
              <Tag className="h-4 w-4 text-neutral-500" />
              Products
              <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
            </div>

            <div className="relative flex flex-col gap-2" ref={conditionRef}>
              <button
                onClick={() => setConditionOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-md border border-neutral-300 px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
              >
                <Plus className="h-3.5 w-3.5" />
                Add condition
              </button>
              <button className="flex items-center gap-1.5 rounded-md border border-neutral-300 px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
                <SearchIcon className="h-3.5 w-3.5" />
                Add products
              </button>

              {conditionOpen && (
                <div className="absolute left-0 top-9 z-10 w-64 rounded-lg border border-neutral-200 bg-white p-1.5 shadow-lg">
                  <div className="relative mb-1">
                    <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
                    <input
                      autoFocus
                      placeholder="Search attributes"
                      className="h-8 w-full rounded-md border border-neutral-200 pl-8 text-xs text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-300"
                    />
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {attributes.map((attr) => (
                      <button
                        key={attr}
                        className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        {attr}
                        {attr === "Metafield" && (
                          <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="mt-3 flex items-center gap-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-900">
              <Plus className="h-3.5 w-3.5" />
              Exclude
            </button>
          </div>

          <button className="flex items-center justify-center rounded-xl border border-neutral-200 bg-white py-2.5 text-neutral-400 shadow-sm hover:bg-neutral-50">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}