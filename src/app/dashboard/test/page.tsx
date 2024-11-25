import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { getInvoiceStats, getLatestInvoices, getCustomers } from '@/app/lib/data';

// 处理金额格式化的辅助函数
function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export default async function Page() {
  console.log('Fetching revenue data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const [
    invoiceStats,
    latestInvoices,
    customers
  ] = await Promise.all([
    getInvoiceStats(),
    getLatestInvoices(),
    getCustomers()
  ]);
  console.log('Data fetch completed after 3 seconds.');
  const {
    total_invoices: numberOfInvoices = 0,
    total_amount: totalAmount = 0,
    paid_invoices: paidInvoices = 0,
    pending_invoices: pendingInvoices = 0,
  } = invoiceStats;

  // 获取最新发票
  // const latestInvoices = await getLatestInvoices();
  // 获取客户总数
  // const customers = await getCustomers();
  const numberOfCustomers = customers.length;

   // 计算已收款和待收款金额
   const totalPaidInvoices = formatCurrency(totalAmount * (paidInvoices / numberOfInvoices));
   const totalPendingInvoices = formatCurrency(totalAmount * (pendingInvoices / numberOfInvoices));

   
   // 模拟收入数据（实际项目中应该从数据库获取）
  const revenue = [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 1800 },
    { month: 'Mar', revenue: 2200 },
    { month: 'Apr', revenue: 2500 },
    { month: 'May', revenue: 2300 },
    { month: 'Jun', revenue: 3000 },
    { month: 'Jul', revenue: 2800 },
  ];

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}