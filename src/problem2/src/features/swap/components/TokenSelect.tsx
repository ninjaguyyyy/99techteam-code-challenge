import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Token } from '@/features/swap/types';
import React from 'react';

type Props = {
    token: Token;
    onSelect: (t: Token) => void;
    options: Token[];
};

export default function TokenSelect({ token, onSelect, options }: Props) {
    const [open, setOpen] = React.useState(false);

    if (!token) {
        return null;
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    className="h-12 rounded-2xl !bg-white px-3 pr-2 shadow-sm hover:!border-transparent hover:bg-white focus:!border-transparent focus:!outline-none"
                >
                    <img src={token.icon} alt="" className="size-7 rounded-full" />
                    <div className="mx-2 text-left">
                        <div className="text-base leading-5 font-semibold">{token.symbol}</div>
                        <div className="text-muted-foreground text-[10px] leading-3">
                            {token.chain}
                        </div>
                    </div>
                    <ChevronDown className="ml-1 size-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-[320px] overflow-hidden p-0">
                <Command>
                    <CommandInput placeholder="Search token..." />
                    <CommandList className="max-h-72 overflow-y-auto">
                        <CommandEmpty>No results.</CommandEmpty>
                        <CommandGroup>
                            {options.map((t) => (
                                <CommandItem
                                    key={t.symbol}
                                    onSelect={() => {
                                        onSelect(t);
                                        setOpen(false);
                                    }}
                                    className="gap-3"
                                >
                                    <img src={t.icon} alt="" className="size-6 rounded-full" />
                                    <div className="flex-1">
                                        <div className="text-sm font-medium">{t.symbol}</div>
                                        <div className="text-muted-foreground text-xs">
                                            {t.name}
                                        </div>
                                    </div>
                                    <span className="text-muted-foreground text-xs">{t.chain}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
