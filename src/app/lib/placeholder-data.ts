// app/lib/placeholder-data.ts
export const users = [
  {
    id: 1,
    name: 'User 1',
    email: 'user1@example.com',
    password: 'password123'
  },
  {
    id: 2,
    name: 'User 2',
    email: 'user2@example.com',
    password: 'password123'
  }
];

export const invoices = [
  {
    id: 1,
    customer_id: 1,
    amount: 100,
    status: 'pending',
    date: '2024-01-01',
    name: 'John Doe',
    email: 'john@example.com',
    image_url: '/customers/john.png'
  },
  {
    id: 2,
    customer_id: 2,
    amount: 200,
    status: 'paid',
    date: '2024-01-02',
    name: 'Jane Smith',
    email: 'jane@example.com',
    image_url: '/customers/jane.png'
  }
];