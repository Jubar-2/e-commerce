"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tag,
  Search,
  ChevronDown,
  Columns3
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const collections = [
  {
    title: "New Arrived Turmeric Face Wash Deep Cleansing Remove Blackhead",
    products: 7,
    conditions: "Suitable for skin type includes All skin types",
    swatch: "bg-gradient-to-br from-amber-200 to-orange-300",
  },
  {
    title: "Bueauti Care",
    products: 18,
    conditions: "",
    swatch: "bg-neutral-200",
  },
];

export default function Page() {
  const [checked, setChecked] = React.useState<boolean[]>(
    collections.map(() => false)
  );
  const allChecked = checked.every(Boolean);
  const someChecked = checked.some(Boolean);

  function toggleAll() {
    setChecked(checked.map(() => !allChecked));
  }

  function toggleOne(i: number) {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <div className="w-full px-8 py-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tag className="h-5 w-5 text-neutral-700" />
          <h1 className="text-2xl font-semibold text-neutral-900">
            Collections
          </h1>
        </div>
        <Button className="bg-neutral-900 text-white hover:bg-neutral-800">
          <Link href="/admin/collections/new">
            Add collection
          </Link>
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        {/* Filter row */}
        <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-2.5">
          <button className="flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
            All
            <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
          </button>
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              placeholder="Search and filter"
              className="h-8 w-full rounded-md border-none bg-transparent pl-8 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none"
            />
          </div>
          <button className="rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100">
            <Columns3 className="h-4 w-4" />
          </button>
        </div>

        {/* Table */}
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-200 text-xs font-medium text-neutral-500">
              <th className="w-10 py-2.5 pl-4">
                <Checkbox
                  checked={allChecked}
                  onCheckedChange={toggleAll}
                  className={cn(
                    someChecked && !allChecked && "opacity-70"
                  )}
                />
              </th>
              <th className="py-2.5 font-medium text-neutral-600">
                Title
              </th>
              <th className="py-2.5 pr-8 text-right font-medium text-neutral-600">
                Products
              </th>
              <th className="py-2.5 pr-4 font-medium text-neutral-600">
                Conditions
              </th>
            </tr>
          </thead>
          <tbody>
            {collections.map((c, i) => (
              <tr
                key={c.title}
                className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50"
              >
                <td className="py-3 pl-4">
                  <Checkbox
                    checked={checked[i]}
                    onCheckedChange={() => toggleOne(i)}
                  />
                </td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "h-9 w-9 shrink-0 rounded-md border border-neutral-200",
                        c.swatch
                      )}
                    />
                    <span className="font-medium text-neutral-900 underline-offset-2 hover:underline">
                      {c.title}
                    </span>
                  </div>
                </td>
                <td className="py-3 pr-8 text-right text-neutral-800">
                  {c.products}
                </td>
                <td className="py-3 pr-4 text-neutral-600">
                  {c.conditions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center text-sm text-neutral-500">
        <a href="#" className="hover:underline">
          Learn more about collections
        </a>
      </div>
    </div>
  );
}