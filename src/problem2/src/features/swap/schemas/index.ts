import * as z from 'zod';
import { Token } from '@/features/swap/types';

export const SwapFormSchema = z.object({
    fromToken: z.custom<Token>(),
    toToken: z.custom<Token>(),
    fromAmount: z
        .string()
        .min(1, 'Amount is required')
        .refine((v) => Number(v) > 0, { message: 'Amount must be > 0' }),
    toAmount: z.string().optional(),
});

export type SwapFormValues = z.infer<typeof SwapFormSchema>;
