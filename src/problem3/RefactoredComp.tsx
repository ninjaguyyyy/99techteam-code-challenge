import React, { useMemo } from 'react';
import { Box, BoxProps } from '@mui/material';

export enum Blockchain {
    Osmosis = 'Osmosis',
    Ethereum = 'Ethereum',
    Arbitrum = 'Arbitrum',
    Zilliqa = 'Zilliqa',
    Neo = 'Neo',
}

interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: Blockchain;
}

interface FormattedWalletBalance extends WalletBalance {
    formatted: string;
}

interface PricesMap {
    [currency: string]: number | undefined;
}

interface Props extends BoxProps {}

const UNKNOWN_PRIORITY = -99;

const PRIORITY_MAP: Record<Blockchain, number> = {
    [Blockchain.Osmosis]: 100,
    [Blockchain.Ethereum]: 50,
    [Blockchain.Arbitrum]: 30,
    [Blockchain.Zilliqa]: 20,
    [Blockchain.Neo]: 20,
};

const getPriority = (blockchain: Blockchain): number =>
    PRIORITY_MAP[blockchain] ?? UNKNOWN_PRIORITY;

function useWalletBalances(): WalletBalance[] {
    return [];
}

function usePrices(): PricesMap {
    return {};
}

export const WalletPage: React.FC<Props> = (props) => {
    const { ...rest } = props;
    const balances = useWalletBalances();
    const prices = usePrices();

    const enriched = useMemo(
        () =>
            balances
                .map((b) => ({ ...b, priority: getPriority(b.blockchain) }))
                .filter((b) => b.priority > UNKNOWN_PRIORITY && b.amount > 0),
        [balances]
    );

    const sortedBalances = useMemo(() => {
        return [...enriched].sort((l, r) => r.priority - l.priority);
    }, [enriched]);

    const formatter = useMemo(
        () =>
            new Intl.NumberFormat(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 6,
            }),
        []
    );

    const formattedBalances: FormattedWalletBalance[] = useMemo(
        () =>
            sortedBalances.map((b) => ({
                ...b,
                formatted: formatter.format(b.amount),
            })),
        [sortedBalances, formatter]
    );

    const rows = useMemo(
        () =>
            formattedBalances.map((b) => {
                const price = prices[b.currency] ?? 0;
                const usdValue = price * b.amount;
                return (
                    <WalletRow
                        key={b.currency}
                        amount={b.amount}
                        usdValue={usdValue}
                        formattedAmount={b.formatted}
                    />
                );
            }),
        [formattedBalances, prices]
    );

    return <Box {...rest}>{rows}</Box>;
};
