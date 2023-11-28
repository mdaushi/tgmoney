import dynamicIconImports from 'lucide-react/dynamicIconImports';

export interface QuickAccessItemProps {
  title: string;
  icon: keyof typeof dynamicIconImports;
  action: `/${string}`;
}

export interface QuickAccessProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
