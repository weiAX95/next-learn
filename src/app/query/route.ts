// app/query/route.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 执行 SQL 查询
    const result = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666
    `;

    // 返回查询结果
    return NextResponse.json({ result: result.rows }, { status: 200 });
  } catch (error:unknown) {
    let errorMessage = 'An error occurred';
    
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