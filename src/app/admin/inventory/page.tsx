"use client";

import * as React from "react";
import { useTableSelection } from "@/hooks/use-table-selection";
import { INITIAL_INVENTORY_ITEMS } from "./_data/mock-inventory";
import { InventoryHeader, InventoryTable } from "./_components";
import type { InventoryItem } from "./_types";

export default function InventoryPage() {
  const [items, setItems] = React.useState<InventoryItem[]>(
    INITIAL_INVENTORY_ITEMS
  );
  const [searchValue, setSearchValue] = React.useState("");

  const filteredItems = React.useMemo(() => {
    if (!searchValue.trim()) return items;
    const q = searchValue.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q) ||
        item.variant.toLowerCase().includes(q)
    );
  }, [items, searchValue]);

  const {
    checked,
    allChecked,
    someChecked,
    toggleAll,
    toggleOne,
  } = useTableSelection(filteredItems.length);

  function handleUpdateAvailable(id: string, newVal: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, available: newVal } : item
      )
    );
  }

  return (
    <div className="w-full px-8 py-6">
      {/* Page Header */}
      <InventoryHeader />

      {/* Main Inventory Data Table */}
      <InventoryTable
        items={filteredItems}
        checked={checked}
        allChecked={allChecked}
        someChecked={someChecked}
        onToggleAll={toggleAll}
        onToggleOne={toggleOne}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onUpdateAvailable={handleUpdateAvailable}
      />

      <div className="mt-6 text-center text-sm text-neutral-500">
        <a href="#" className="hover:underline">
          Learn more about managing inventory
        </a>
      </div>
    </div>
  );
}