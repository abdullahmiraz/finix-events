import { cn } from "../../lib/utils";

export function DefaultContainer({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn(`max-w-screen-2xl mx-auto  px-2 md:px-4 py-2 md:py-4`, className)}>
            {children}
        </div>
    )
}
