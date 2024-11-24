import { formatDate } from '@/app/lib/utils';
import { Invoice } from '@/app/lib/data';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function LatestInvoices({ 
  latestInvoices 
}: { 
  latestInvoices: Array<Invoice & { customer_name: string }> 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Latest Invoices</h2>
        <ArrowPathIcon className="h-5 w-5 text-gray-500" />
      </div>
      
      <div className="space-y-4">
        {latestInvoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <div className="min-w-0">
                <p className="truncate font-medium">{invoice.customer_name}</p>
                <p className="text-sm text-gray-500">{formatDate(invoice.date)}</p>
              </div>
            </div>
            <p className={`text-sm font-medium ${
              invoice.status === 'paid' 
                ? 'text-green-600' 
                : 'text-yellow-600'
            }`}>
              ${invoice.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}