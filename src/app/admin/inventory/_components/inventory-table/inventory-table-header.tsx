import * as React from "react";

export interface InventoryTableHeaderProps {
  allChecked: boolean;
  someChecked?: boolean;
  onToggleAll: () => void;
}

export function InventoryTableHeader({
  allChecked,
  someChecked,
  onToggleAll,
}: InventoryTableHeaderProps) {
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = Boolean(someChecked && !allChecked);
    }
  }, [someChecked, allChecked]);

  return (
    <thead>
      <tr className="border-b border-neutral-200 text-xs font-medium text-neutral-500 bg-neutral-50/50">
        <th className="w-10 py-2.5 pl-4">
          <input
            ref={checkboxRef}
            type="checkbox"
            checked={allChecked}
            onChange={onToggleAll}
            aria-label="Select all inventory items"
            className="h-4 w-4 rounded border-neutral-300 accent-neutral-900 cursor-pointer"
          />
        </th>
        <th className="py-2.5 font-medium text-neutral-600 min-w-[280px]">
          Product
        </th>
        <th className="py-2.5 font-medium text-neutral-600 min-w-[120px]">
          SKU
        </th>
        <th className="py-2.5 font-medium text-neutral-600 text-right pr-4">
          Unavailable
        </th>
        <th className="py-2.5 font-medium text-neutral-600 text-right pr-4">
          Committed
        </th>
        <th className="py-2.5 font-medium text-neutral-600 text-right pr-4">
          Available
        </th>
        <th className="py-2.5 font-medium text-neutral-600 text-right pr-4">
          On hand
        </th>
        <th className="py-2.5 font-medium text-neutral-600 text-right pr-6">
          Incoming
        </th>
      </tr>
    </thead>
  );
}
