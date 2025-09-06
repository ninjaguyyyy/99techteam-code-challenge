import { useQuery } from '@tanstack/react-query'

const PRICES_URL = 'https://interview.switcheo.com/prices.json'

export type PriceMap = Record<string, number>

async function fetchPrices(): Promise<PriceMap> {
    const res = await fetch(PRICES_URL)
    if (!res.ok) throw new Error('Failed to fetch prices')
    const raw = await res.json()
    console.log('raw', raw)
    const clean: PriceMap = {}
    for (const [k, v] of Object.entries(raw)) {
        if (typeof v === 'number' && Number.isFinite(v)) clean[k] = v
    }

    console.log('clean', clean)

    return clean
}

export function usePrices() {
    return useQuery({
        queryKey: ['prices'],
        queryFn: fetchPrices,
        staleTime: 60_000,
        refetchOnWindowFocus: false,
    })
}
