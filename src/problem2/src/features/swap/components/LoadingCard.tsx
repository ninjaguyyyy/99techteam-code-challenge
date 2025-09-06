import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import * as React from 'react';

export function LoadingCard() {
    return (
        <div className="mx-auto w-full max-w-[560px]">
            <Card className="grid place-items-center rounded-3xl border-0 bg-gradient-to-b from-sky-50 to-white p-10 shadow-xl">
                <div className="text-muted-foreground flex items-center gap-2">
                    <Loader2 className="size-5 animate-spin" />
                    <span>Loading prices…</span>
                </div>
            </Card>
        </div>
    );
}
