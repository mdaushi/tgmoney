import { QuickAccessItemProps } from '@/types/types';

export const QuickAccessConfig: QuickAccessItemProps[] = [
  {
    title: 'settings',
    icon: 'settings',
    action: '/settings',
  },
  {
    title: 'categories',
    icon: 'archive',
    action: '/categories',
  },
  {
    title: 'transactions',
    icon: 'arrow-left-right',
    action: '/transactions',
  },
];
