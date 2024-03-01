import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MyProfile() {
  return (
    <>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/my-pokemons">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="user" />
                <AvatarFallback>me</AvatarFallback>
              </Avatar>
            </Link>
          </TooltipTrigger>
          <TooltipContent className="state-effects p-1">
            <span> My Pokemons</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
