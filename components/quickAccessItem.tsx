import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import Icon from '@/components/icon';

import { QuickAccessItemProps } from '@/types/types';

export function QuickAccessItem({ title, icon, action }: QuickAccessItemProps) {
  return (
    <div className='flex flex-col items-center space-y-1'>
      <Link
        className={`${buttonVariants({
          variant: 'outline',
          size: 'icon',
        })}`}
        href={action}
      >
        <Icon name={icon} className='h-5 w-5' />
      </Link>

      <p className='text-sm capitalize'>{title}</p>
    </div>
  );
}
