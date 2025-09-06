import { Token } from '@/features/swap/types';
import { useForm } from 'react-hook-form';
import { SwapFormValues } from '@/features/swap/schemas';
import { useEffect } from 'react';

export function useDefaultTokens(
    form: ReturnType<typeof useForm<SwapFormValues>>,
    ready: boolean,
    tokens: Token[]
) {
    useEffect(() => {
        if (!ready || !tokens.length) return;
        if (!form.getValues('fromToken')) {
            form.setValue('fromToken', tokens[0]);
            form.setValue('toToken', tokens[1] ?? tokens[0]);
        }
    }, [ready, tokens, form]);
}
