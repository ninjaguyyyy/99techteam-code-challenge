import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Command, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Token } from '@/features/swap/types';

type Props = {
    token: Token;
    onSelect: (t: Token) => void;
    options: Token[];
};

export default function TokenSelect({ token, onSelect, options }: Props) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    className="h-12 rounded-2xl !bg-white px-3 pr-2 shadow-sm hover:!border-transparent hover:bg-white"
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
            <PopoverContent align="start" className="w-[320px] p-0">
                <Command>
                    <CommandInput placeholder="Search token..." />
                    <ScrollArea className="max-h-72">
                        <CommandGroup>
                            {options.map((t) => (
                                <CommandItem
                                    key={t.symbol}
                                    onSelect={() => onSelect(t)}
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
                    </ScrollArea>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
