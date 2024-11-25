export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // 'pending' | 'paid'
  status: string;
  name: string;
  email: string;
  image_url: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};


export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export function formatInvoiceForForm(invoice: Invoice): InvoiceForm {
  return {
    id: invoice.id,
    customer_id: invoice.customer_id,
    amount: invoice.amount,
    status: invoice.status as 'pending' | 'paid'
  };
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  salt: string;
};