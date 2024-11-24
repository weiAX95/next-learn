// app/seed/route.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 创建 customers 表
    await sql`
      CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255)
      );
    `;

    // 创建 invoices 表
    await sql`
      CREATE TABLE IF NOT EXISTS invoices (
        id SERIAL PRIMARY KEY,
        customer_id INTEGER NOT NULL,
        amount INTEGER NOT NULL,
        status VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      );
    `;

    // 插入示例客户数据
    await sql`
      INSERT INTO customers (name, email, image_url)
      VALUES 
        ('John Doe', 'john@example.com', '/customers/john.png'),
        ('Jane Smith', 'jane@example.com', '/customers/jane.png')
      ON CONFLICT (id) DO NOTHING;
    `;

    // 插入示例发票数据
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES 
        (1, 666, 'pending', '2024-01-01'),
        (2, 999, 'paid', '2024-01-02')
      ON CONFLICT (id) DO NOTHING;
    `;

    return NextResponse.json(
      { message: 'Database seeded successfully' }, 
      { status: 200 }
    );
  } catch (error: unknown) {  // 明确定义error类型为unknown
    let errorMessage = 'Database seeding failed';
    
    // 类型收窄
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    );
  }
}