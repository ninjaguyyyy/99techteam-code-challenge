'use client';
import { useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SwapFormSchema, SwapFormValues } from '@/features/swap/schemas';
import { buildPriceIndex } from '@/features/swap/utils/token';
import { useTokenPricesQuery } from '@/features/swap/hooks/useTokenPrices';
import { useDefaultTokens } from '@/features/swap/hooks/useDefaultTokens';
import { useSwapRate } from '@/features/swap/hooks/useSwapRate';
import { useAutoComputeToAmount } from '@/features/swap/hooks/useAutoComputeToAmount';
import { useSubmitSwap } from '@/features/swap/hooks/useSubmitSwap';

export function useSwapForm() {
    const form = useForm<SwapFormValues>({
        resolver: zodResolver(SwapFormSchema),
        defaultValues: { fromToken: undefined, toToken: undefined, fromAmount: '', toAmount: '' },
        mode: 'onChange',
    });

    const { data, isLoading, error } = useTokenPricesQuery();

    const { priceMap, tokens } = useMemo(() => buildPriceIndex(data), [data]);

    useDefaultTokens(form, !isLoading && !error, tokens);

    const fromToken = useWatch({ control: form.control, name: 'fromToken' });
    const toToken = useWatch({ control: form.control, name: 'toToken' });
    const rate = useSwapRate(priceMap, fromToken, toToken);
    useAutoComputeToAmount(form, rate);

    const { isSubmitting, submit } = useSubmitSwap(form);

    const onSwap = () => {
        const values = form.getValues();
        form.setValue('fromToken', values.toToken);
        form.setValue('toToken', values.fromToken);
        form.setValue('fromAmount', values.toAmount || '');
        form.setValue('toAmount', values.fromAmount || '');
    };

    return {
        form,
        onSwap,
        onSubmit: submit,
        tokens,
        isLoading,
        error,
        isSubmitting,
    };
}
