export type Token = {
    symbol: string;
    name?: string;
    icon: string;
    chain?: string;
};

export type PriceItem = {
    currency: string;
    date: string;
    price: number;
};
