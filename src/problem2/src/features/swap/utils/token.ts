import { Token } from '@/features/swap/types';

export function getIconUrl(symbol: string) {
    return `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${symbol.toUpperCase()}.svg`;
}

export function buildPriceIndex(data?: { currency: string; price: number }[]) {
    const priceMap = new Map<string, number>();
    const tokens: Token[] = [];

    if (data?.length) {
        for (const { currency, price } of data) priceMap.set(currency, price);
        const uniq = Array.from(new Set(data.map((d) => d.currency))).sort();
        for (const s of uniq) tokens.push({ symbol: s, name: s, icon: getIconUrl(s) });
    }
    return { priceMap, tokens };
}
