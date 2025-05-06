import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HostCard() {
    return (
        <section className="bg-secondary-blue rounded-xl p-6 flex items-center gap-6">
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
            <div className="flex gap-2 min-w-[120px]">
                <Button className="bg-creamy font-semibold  rounded-full">Message</Button>
                <Button variant="outline" className="border-creamy bg-transparent text-creamy font-semibold  rounded-full">View Profile</Button>
            </div>
        </section>
    );
}