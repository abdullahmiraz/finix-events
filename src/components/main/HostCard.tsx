import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HostCard() {
    return (
        <section className="bg-brand-secondary-blue rounded-xl p-6 flex items-center gap-6">
            <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Host avatar"
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
                width={64}
                height={64}
            />
            <div className="flex-1 text-white">
                <div className="font-semibold text-lg">Alex Mercer</div>
                <div className="text-sm opacity-80">23 activities hosted</div>
                <div className="text-sm opacity-80">4.5 host rating</div>
            </div>
            <div className="flex flex-col gap-2 min-w-[120px]">
                <Button className="bg-white text-brand-secondary-blue font-semibold hover:bg-gray-100">Message</Button>
                <Button className="bg-white text-brand-secondary-blue font-semibold hover:bg-gray-100">View Profile</Button>
            </div>
        </section>
    );
}