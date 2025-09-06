'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TOKENS } from '@/features/swap/constants';
import { SwapFormSchema, SwapFormValues } from '@/features/swap/schemas';

export function useSwapForm() {
    const form = useForm<SwapFormValues>({
        resolver: zodResolver(SwapFormSchema),
        defaultValues: {
            fromToken: TOKENS[0],
            toToken: TOKENS[1],
            fromAmount: '',
            toAmount: '',
        },
        mode: 'onChange',
    });

    const rate = 1;

    const fromAmount = form.watch('fromAmount');
    const fromToken = form.watch('fromToken');
    const toToken = form.watch('toToken');

    useEffect(() => {
        const n = parseFloat(fromAmount || '');
        form.setValue('toAmount', Number.isFinite(n) ? (n * rate).toFixed(2) : '', {
            shouldValidate: false,
        });
    }, [fromAmount, rate, fromToken, toToken, form]);

    const onSwap = () => {
        const a = form.getValues();
        form.setValue('fromToken', a.toToken);
        form.setValue('toToken', a.fromToken);
        form.setValue('fromAmount', a.toAmount || '');
        form.setValue('toAmount', a.fromAmount || '');
    };

    const onSubmit = (values: SwapFormValues) => {
        alert(JSON.stringify(values, null, 2));
    };

    return { form, onSwap, onSubmit };
}
