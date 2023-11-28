import { MainNav } from '@/components/mainNav';
import { Input } from '@/components/ui/input';

export default function Navbar() {
  return (
    <div className='hidden border-b md:block'>
      <div className='flex h-16 items-center px-4'>
        <MainNav className='mx-6' />
        <div className='ml-auto flex items-center space-x-4'>
          <Input
            type='search'
            placeholder='Search...'
            className='md:w-[100px] lg:w-[300px]'
          />
        </div>
      </div>
    </div>
  );
}
