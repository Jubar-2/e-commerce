export interface Collection {
  title: string;
  products: number;
  conditions: string;
  swatch: string;
}

export interface CollectionHeaderProps {
  title?: string;
  actionHref?: string;
  actionLabel?: string;
}

export interface CollectionTableFilterProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onFilterClick?: () => void;
  onColumnsClick?: () => void;
}

export interface CollectionTableHeaderProps {
  allChecked: boolean;
  someChecked: boolean;
  onToggleAll: () => void;
}

export interface CollectionTableRowProps {
  collection: Collection;
  index: number;
  isChecked: boolean;
  onToggle: (index: number) => void;
}

export interface CollectionTableProps {
  collections: Collection[];
  checked: boolean[];
  allChecked: boolean;
  someChecked: boolean;
  onToggleAll: () => void;
  onToggleOne: (index: number) => void;
}

export interface UseCollectionSelectionReturn {
  checked: boolean[];
  allChecked: boolean;
  someChecked: boolean;
  toggleAll: () => void;
  toggleOne: (index: number) => void;
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
}
