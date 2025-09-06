'use client';
import * as React from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import TokenSelect from '@/features/swap/components/TokenSelect';
import { Token } from '@/features/swap/types';

type SwapFieldProps<T extends FieldValues> = {
    control: Control<T>;
    label: string;
    tokenName: Path<T>;
    amountName: Path<T>;
    readOnly?: boolean;
    options: Token[];
};

export default function SwapField<T extends FieldValues>({
    control,
    label,
    tokenName,
    amountName,
    readOnly,
    options,
}: SwapFieldProps<T>) {
    return (
        <FormField
            control={control}
            name={amountName}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-muted-foreground text-xs font-medium">
                        {label}
                    </FormLabel>
                    <div className="rounded-3xl bg-violet-50 p-4">
                        <div className="flex items-center gap-3">
                            <Controller
                                control={control}
                                name={tokenName}
                                render={({ field: f }) => (
                                    <TokenSelect
                                        token={f.value}
                                        onSelect={f.onChange}
                                        options={options}
                                    />
                                )}
                            />
                            <div className="ml-auto text-right">
                                <FormControl>
                                    <Input
                                        readOnly={readOnly}
                                        value={(field.value as string) ?? ''}
                                        onChange={(e) =>
                                            field.onChange(e.target.value.replace(/[^0-9.]/g, ''))
                                        }
                                        type="number"
                                        inputMode="decimal"
                                        placeholder="0.00"
                                        className={cn(
                                            'no-spinner h-12 w-[140px] rounded-2xl border-0 bg-transparent text-right tracking-tight !shadow-none sm:w-[200px]',
                                            '!text-2xl font-semibold focus-visible:ring-0'
                                        )}
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
