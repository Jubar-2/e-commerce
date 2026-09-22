import * as React from "react";
import { CollectionTableHeader } from "./collection-table-header";
import { CollectionTableRow } from "./collection-table-row";
import type { CollectionTableProps } from "../../_types";

export function CollectionTable({
  collections,
  checked,
  allChecked,
  someChecked,
  onToggleAll,
  onToggleOne,
}: CollectionTableProps) {
  return (
    <table className="w-full border-collapse text-left">
      <CollectionTableHeader
        allChecked={allChecked}
        someChecked={someChecked}
        onToggleAll={onToggleAll}
      />
      <tbody>
        {collections.map((collection, index) => (
          <CollectionTableRow
            key={collection.title}
            collection={collection}
            index={index}
            isChecked={!!checked[index]}
            onToggle={onToggleOne}
          />
        ))}
      </tbody>
    </table>
  );
}
