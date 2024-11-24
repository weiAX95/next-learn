import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape}>
        <AcmeLogo />
      </div>
      <Image
        src="/draft_cover.jpg"
        width={400}
        height={400}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <AcmeLogo />
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
          Next.js + Tailwind CSS
        </h1>
        <p className="text-xl leading-normal text-gray-700">  
          Check the{' '}
          <Link
            href="https://nextjs.org/docs/basic-features/pages"
            className="text-blue-600 underline"
          >
            documentation
          </Link>{' '}
          for more information.
        </p>
        <Link
          href="/dashboard/invoices"
          className="flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          Invoices 
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </main>
  )
}