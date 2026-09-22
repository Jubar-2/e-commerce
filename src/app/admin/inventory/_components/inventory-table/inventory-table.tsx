"use client";

import * as React from "react";
import { TableSearchFilter } from "@/components/common/table-search-filter";
import { InventoryTableHeader } from "./inventory-table-header";
import { InventoryTableRow } from "./inventory-table-row";
import type { InventoryItem } from "../../_types";

export interface InventoryTableProps {
  items: InventoryItem[];
  checked: boolean[];
  allChecked: boolean;
  someChecked: boolean;
  onToggleAll: () => void;
  onToggleOne: (index: number) => void;
  searchValue: string;
  onSearchChange: (val: string) => void;
  onUpdateAvailable?: (id: string, newVal: number) => void;
}

export function InventoryTable({
  items,
  checked,
  allChecked,
  someChecked,
  onToggleAll,
  onToggleOne,
  searchValue,
  onSearchChange,
  onUpdateAvailable,
}: InventoryTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      {/* Table Search & Filter Toolbar */}
      <TableSearchFilter
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        placeholder="Filter inventory by product or SKU"
        showColumnsButton={false}
      />

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse text-left">
          <InventoryTableHeader
            allChecked={allChecked}
            someChecked={someChecked}
            onToggleAll={onToggleAll}
          />
          <tbody>
            {items.map((item, index) => (
              <InventoryTableRow
                key={item.id}
                item={item}
                isSelected={Boolean(checked[index])}
                onToggleSelect={() => onToggleOne(index)}
                onAvailableChange={(newVal) =>
                  onUpdateAvailable?.(item.id, newVal)
                }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
