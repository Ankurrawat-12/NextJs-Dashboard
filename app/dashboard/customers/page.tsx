import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { Suspense } from 'react';
import DashboardSkeleton from '@/app/ui/skeletons';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {

    const query = searchParams?.query || '';
    return (
        <Suspense fallback={<DashboardSkeleton />}>
            <CustomersTable query={query} />
        </Suspense>
    )
}