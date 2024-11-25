import { sql } from '@vercel/postgres';
import { CustomerField } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
// 定义数据类型
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: number;
  name: string;
  email: string;
  image_url: string;
};

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

// 数据获取函数
export async function getUsers() {
  try {
    const result = await sql<User>`SELECT * FROM users`;
    return result.rows;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function getCustomers() {
  try {
    const result = await sql<Customer>`SELECT * FROM customers`;
    return result.rows;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch customers.');
  }
}

export async function getInvoices() {
  try {
    const result = await sql<Invoice>`
      SELECT invoices.*, customers.name as customer_name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
    `;
    return result.rows;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function getInvoiceById(id: number| string) {
  try {
    const result = await sql<Invoice>`
      SELECT invoices.*, customers.name as customer_name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.id = ${id}
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function getCustomerById(id: number) {
  try {
    const result = await sql<Customer>`
      SELECT * FROM customers 
      WHERE id = ${id}
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch customer.');
  }
}

// 统计数据
export async function getInvoiceStats() {
  try {
    const stats = await sql`
      SELECT
        COUNT(*) as total_invoices,
        SUM(amount) as total_amount,
        COUNT(CASE WHEN status = 'paid' THEN 1 END) as paid_invoices,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_invoices
      FROM invoices
    `;
    return stats.rows[0];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch invoice statistics.');
  }
}

// 最近的发票
export async function getLatestInvoices(limit = 5) {
  try {
    const result = await sql`
      SELECT invoices.*, customers.name as customer_name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT ${limit}
    `;
    return result.rows as (Invoice & { customer_name: string })[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch latest invoices.');
  }
}

// 按状态查询发票
export async function getInvoicesByStatus(status: 'pending' | 'paid') {
  try {
    const result = await sql<Invoice>`
      SELECT invoices.*, customers.name as customer_name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.status = ${status}
      ORDER BY invoices.date DESC
    `;
    return result.rows;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(`Failed to fetch ${status} invoices.`);
  }
}




export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<Invoice>`
      SELECT 
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

// 定义常量
const ITEMS_PER_PAGE = 6;


export async function fetchCustomers() {
  noStore();
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customers');
  }
}