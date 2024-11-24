"use client";

import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  customers: UserGroupIcon,
};

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'collected' | 'pending' | 'invoices' | 'customers';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">{title}</h3>
        {Icon && <Icon className="h-5 w-5 text-gray-700" />}
      </div>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}