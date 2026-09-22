import * as React from "react";
import { Archive, Package } from "lucide-react";
import { AdminPageHeader } from "@/components/common/admin-page-header";

export interface InventoryHeaderProps {
  onImport?: () => void;
  onExport?: () => void;
}

export function InventoryHeader({
  onImport,
  onExport,
}: InventoryHeaderProps) {
  return (
    <AdminPageHeader
      title="Inventory"
      icon={Archive}
      secondaryActions={[
        { label: "Import", onClick: onImport },
        { label: "Export", onClick: onExport },
      ]}
      primaryAction={{
        label: "View products",
        href: "/admin/products",
        icon: Package,
      }}
    />
  );
}
