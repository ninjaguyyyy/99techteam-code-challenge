import { useMemo } from 'react';
import { Token } from '@/features/swap/types';

export function useSwapRate(priceMap: Map<string, number>, from?: Token, to?: Token) {
    return useMemo(() => {
        const pf = from ? priceMap.get(from.symbol) : undefined;
        const pt = to ? priceMap.get(to.symbol) : undefined;
        if (!pf || !pt) return;
        return pf / pt;
    }, [priceMap, from, to]);
}
