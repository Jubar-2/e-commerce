import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { CollectionTableHeaderProps } from "../../_types";

export function CollectionTableHeader({
  allChecked,
  someChecked,
  onToggleAll,
}: CollectionTableHeaderProps) {
  return (
    <thead>
      <tr className="border-b border-neutral-200 text-xs font-medium text-neutral-500">
        <th className="w-10 py-2.5 pl-4">
          <Checkbox
            checked={allChecked}
            onCheckedChange={onToggleAll}
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
  );
}
