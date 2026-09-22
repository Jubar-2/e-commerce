"use client";

import * as React from "react";
import { INITIAL_COLLECTIONS } from "./_data/mock-collections";
import { useCollectionSelection } from "./_hooks";
import { CollectionHeader } from "./_components/collection-filters/collection-header";
import { CollectionTableFilter } from "./_components/collection-filters/collection-table-filter";
import { CollectionTable } from "./_components/collection-table/collection-table";

export default function CollectionsPage() {
  const {
    checked,
    allChecked,
    someChecked,
    toggleAll,
    toggleOne,
  } = useCollectionSelection(INITIAL_COLLECTIONS.length);

  return (
    <div className="w-full px-8 py-6">
      <CollectionHeader />

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <CollectionTableFilter />

        <CollectionTable
          collections={INITIAL_COLLECTIONS}
          checked={checked}
          allChecked={allChecked}
          someChecked={someChecked}
          onToggleAll={toggleAll}
          onToggleOne={toggleOne}
        />
      </div>

      <div className="mt-6 text-center text-sm text-neutral-500">
        <a href="#" className="hover:underline">
          Learn more about collections
        </a>
      </div>
    </div>
  );
}