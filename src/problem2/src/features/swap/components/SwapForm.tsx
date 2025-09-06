'use client';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useSwapForm } from '@/features/swap/hooks/useSwapForm';
import SwapField from '@/features/swap/components/SwapField';

export default function SwapForm() {
    const { form, onSwap, onSubmit } = useSwapForm();

    return (
        <div className="mx-auto w-full max-w-[560px]">
            <Card className="rounded-3xl border-0 bg-gradient-to-b from-sky-50 to-white p-4 shadow-xl">
                <CardContent className="space-y-4 p-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <SwapField
                                control={form.control}
                                label="From:"
                                tokenName={'fromToken'}
                                amountName={'fromAmount'}
                            />

                            <div className="flex justify-center">
                                <Button
                                    type="button"
                                    size="icon"
                                    onClick={onSwap}
                                    className="rounded-full border-0 text-[#20D5F5] shadow hover:!border-transparent hover:bg-white/90"
                                >
                                    ⇅
                                </Button>
                            </div>

                            <SwapField
                                control={form.control}
                                label="To:"
                                tokenName={'toToken'}
                                amountName={'toAmount'}
                                readOnly
                            />

                            <div className="rounded-2xl border bg-white p-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="h-12 w-full rounded-2xl border-0 bg-gradient-to-r from-[#20D5F5] to-[#0BC0D3] text-base font-semibold text-white shadow-md hover:!border-transparent hover:opacity-90 focus-visible:ring-0"
                                >
                                    Swap
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
