import * as React from "react";
import { Package, ChevronDown } from "lucide-react";
import { AdminPageHeader } from "@/components/common/admin-page-header";

export interface ProductHeaderProps {
  onImport?: () => void;
  onExport?: () => void;
  onMoreActions?: () => void;
  onAddProduct?: () => void;
}

export function ProductHeader({
  onImport,
  onExport,
  onMoreActions,
  onAddProduct,
}: ProductHeaderProps) {
  return (
    <AdminPageHeader
      title="Products"
      icon={Package}
      secondaryActions={[
        { label: "Import", onClick: onImport },
        { label: "Export", onClick: onExport },
        {
          label: "More actions",
          onClick: onMoreActions,
          icon: ChevronDown,
          className: "gap-1",
        },
      ]}
      primaryAction={{
        label: "Add product",
        onClick: onAddProduct,
      }}
    />
  );
}
