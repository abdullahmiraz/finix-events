import { Button } from "../ui/button";

export default function EventJoinCard() {
    return (
        <div className="w-full col-span-1">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between border border-brand-primary/30 rounded-lg px-4 py-2">
                    <span className="text-sm text-[#e26a2c] font-medium">6 spots left</span>
                    <span className="text-lg font-semibold">320tk <span className="text-sm ">/player </span> <span className="text-sm font-normal text-gray-500">(both)</span></span>
                </div>
                <Button className="w-full bg-brand-primary-light hover:bg-brand-primary-light/90 text-base font-semibold !rounded-full py-4 text-black">Join event</Button>
            </div>
        </div>

    )
}