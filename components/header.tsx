'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { QuickAccess } from '@/components/quickAccess';

interface HeaderPropsMore {
  showMoreAction?: boolean;
  actionCreateButton?: `/${string}`;
}

interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HeaderPropsMore {}

export function Header({
  className,
  children,
  showMoreAction = true,
  actionCreateButton,
  ...props
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn('mb-4 flex items-center justify-between', className)}
      {...props}
    >
      {children}

      <div className='flex space-x-2'>
        {actionCreateButton && (
          <Link
            href={actionCreateButton}
            className={`${buttonVariants({
              variant: 'outline',
              size: 'icon',
            })} !rounded-full`}
          >
            <Plus className='h-5 w-5' />
          </Link>
        )}
        {showMoreAction && (
          <div>
            <Button
              size='icon'
              onClick={() => setIsOpen(!isOpen)}
              className='rounded-full'
              variant='outline'
            >
              <ChevronDown className='h-5 w-5' />
            </Button>

            <QuickAccess isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* <SheetMoreAction isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          </div>
        )}
      </div>
    </div>
  );
}

interface HeaderTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

Header.Title = function HeaderTitle({ className, ...props }: HeaderTitleProps) {
  return (
    <p
      className={cn('text-2xl font-semibold tracking-tight', className)}
      {...props}
    />
  );
};
