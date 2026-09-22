import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { CollectionTableRowProps } from "../../_types";

export function CollectionTableRow({
  collection,
  index,
  isChecked,
  onToggle,
}: CollectionTableRowProps) {
  return (
    <tr className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50">
      <td className="py-3 pl-4">
        <Checkbox
          checked={isChecked}
          onCheckedChange={() => onToggle(index)}
        />
      </td>
      <td className="py-3 pr-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "h-9 w-9 shrink-0 rounded-md border border-neutral-200",
              collection.swatch
            )}
          />
          <span className="font-medium text-neutral-900 underline-offset-2 hover:underline">
            {collection.title}
          </span>
        </div>
      </td>
      <td className="py-3 pr-8 text-right text-neutral-800">
        {collection.products}
      </td>
      <td className="py-3 pr-4 text-neutral-600">
        {collection.conditions}
      </td>
    </tr>
  );
}
