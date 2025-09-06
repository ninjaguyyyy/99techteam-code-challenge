import { useForm, useWatch } from 'react-hook-form';
import { SwapFormValues } from '../schemas';
import { useEffect } from 'react';

export function useAutoComputeToAmount(
    form: ReturnType<typeof useForm<SwapFormValues>>,
    rate?: number
) {
    const fromAmount = useWatch({
        control: form.control,
        name: 'fromAmount',
    });
    const fromToken = useWatch({
        control: form.control,
        name: 'fromToken',
    });
    const toToken = useWatch({
        control: form.control,
        name: 'toToken',
    });

    useEffect(() => {
        const n = parseFloat(fromAmount || '');
        if (!Number.isFinite(n) || !rate) {
            form.setValue('toAmount', '', { shouldValidate: false });
        } else {
            form.setValue('toAmount', (n * rate).toFixed(6), { shouldValidate: false });
        }
    }, [fromAmount, rate, form, fromToken, toToken]);
}
