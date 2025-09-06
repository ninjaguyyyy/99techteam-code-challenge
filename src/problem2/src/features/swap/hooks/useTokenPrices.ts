'use client';
import { useQuery } from '@tanstack/react-query';
import { PriceItem } from '@/features/swap/types';
import { FETCH_PRICES_API_URL } from '@/features/swap/constants';

async function fetchPrices(): Promise<PriceItem[]> {
    const res = await fetch(FETCH_PRICES_API_URL, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

export function useTokenPricesQuery() {
    return useQuery({
        queryKey: ['token-prices'],
        queryFn: fetchPrices,
        staleTime: 60_000, // 1 minute
        refetchOnWindowFocus: false,
    });
}
