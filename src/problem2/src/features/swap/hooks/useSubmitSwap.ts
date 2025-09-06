import { useForm } from 'react-hook-form';
import { SwapFormValues } from '@/features/swap/schemas';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useSubmitSwap(form: ReturnType<typeof useForm<SwapFormValues>>) {
    const mutation = useMutation({
        mutationFn: async (values: SwapFormValues) => {
            await new Promise((res) => setTimeout(res, 1500)); // mock API delay
            return values;
        },
        onSuccess: () => {
            toast.success('Swap submitted', {
                description: 'Your swap request was successful.',
            });
            if (form.resetField) {
                form.resetField('fromAmount', { keepDirty: false });
                form.resetField('toAmount', { keepDirty: false });
            } else {
                form.setValue('fromAmount', '');
                form.setValue('toAmount', '');
            }
        },
        onError: () => {
            toast.error('Error', { description: 'Failed to submit swap.' });
        },
    });

    return {
        isSubmitting: mutation.isPending,
        submit: (values: SwapFormValues) => mutation.mutate(values),
    };
}
