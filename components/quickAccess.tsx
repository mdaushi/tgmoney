import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { QuickAccessConfig } from '@/config/quickAccess';
import { QuickAccessProps } from '@/types/types';
import { QuickAccessItem } from './quickAccessItem';

export function QuickAccess({ isOpen, setIsOpen }: QuickAccessProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side='top'>
        <SheetHeader>
          <SheetTitle className='capitalize'>quick access</SheetTitle>
          <div className='my-4 grid grid-cols-4 gap-4'>
            {QuickAccessConfig.map(({ title, icon, action }) => (
              <QuickAccessItem
                key={title}
                title={title}
                icon={icon}
                action={action}
              />
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
