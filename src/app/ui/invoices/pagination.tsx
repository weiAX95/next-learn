'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`${page}-${index}`}
                className="px-4 py-2 text-gray-500"
              >
                {page}
              </span>
            );
          }

          return (
            <Link
              key={page}
              href={createPageURL(page)}
              className={clsx(
                'flex h-10 w-10 items-center justify-center border text-sm',
                {
                  'border-blue-600 bg-blue-600 text-white': currentPage === page,
                  'hover:bg-gray-100': currentPage !== page,
                }
              )}
            >
              {page}
            </Link>
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center border',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-gray-100': !isDisabled,
    }
  );

  const Icon = direction === 'left' ? ArrowLeftIcon : ArrowRightIcon;

  return isDisabled ? (
    <div className={className}>
      <Icon className="w-4" />
    </div>
  ) : (
    <Link className={className} href={href}>
      <Icon className="w-4" />
    </Link>
  );
}