import { lusitana } from '@/app/ui/fonts';
export function DashboardSkeleton() {
    return (
      <div className="space-y-6">
        <div className={`${lusitana.className} text-xl md:text-2xl`}>
          <div className="w-40 h-8 bg-gray-200 rounded-md animate-pulse" />
        </div>
        
        {/* Cards Skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
          {/* Revenue Chart Skeleton */}
          <div className="md:col-span-3 lg:col-span-5">
            <RevenueChartSkeleton />
          </div>
          {/* Latest Invoices Skeleton */}
          <div className="md:col-span-1 lg:col-span-3">
            <LatestInvoicesSkeleton />
          </div>
        </div>
      </div>
    );
  }


   function CardSkeleton() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
        <div className="mt-4 w-32 h-8 bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }
  

  export function RevenueChartSkeleton() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="w-36 h-6 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="w-full h-64 bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }


  export  function LatestInvoicesSkeleton() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="w-32 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
                <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="w-16 h-6 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }


  export function InvoicesTableSkeleton() {
    return (
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
                      <div className="ml-3 space-y-2">
                        <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
                        <div className="h-4 w-32 rounded bg-gray-200 animate-pulse" />
                      </div>
                    </div>
                    <div className="h-6 w-16 rounded bg-gray-200 animate-pulse" />
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <div className="h-6 w-20 rounded bg-gray-200 animate-pulse" />
                      <div className="mt-2 h-4 w-24 rounded bg-gray-200 animate-pulse" />
                    </div>
                    <div className="flex justify-end gap-2">
                      <div className="h-8 w-8 rounded bg-gray-200 animate-pulse" />
                      <div className="h-8 w-8 rounded bg-gray-200 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    <div className="h-6 w-32 rounded bg-gray-200 animate-pulse" />
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[...Array(5)].map((_, i) => (
                  <tr key={i} className="w-full border-b py-3 text-sm last-of-type:border-none">
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
                        <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <div className="h-6 w-32 rounded bg-gray-200 animate-pulse" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <div className="h-8 w-8 rounded bg-gray-200 animate-pulse" />
                        <div className="h-8 w-8 rounded bg-gray-200 animate-pulse" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }