import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]'>
      <Logo />
      <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
        <Button variant='ghost' size='sm'>
          <Link href='https://github.com/CalebAkomaye' target='_blank'>
            <FaGithub className='mr-1 text-sm inline' /> Caleb Akomaye
          </Link>
        </Button>
        <Button variant='ghost' size='sm'>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
