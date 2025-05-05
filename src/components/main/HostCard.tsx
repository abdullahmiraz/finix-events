import { Button } from "@/components/ui/button";

export function HostCard() {
    return (
        <section className="bg-[#3b4a5a] rounded-xl p-6 flex items-center gap-6">
            <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Host avatar"
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
            />
            <div className="flex-1 text-white">
                <div className="font-semibold text-lg">Alex Mercer</div>
                <div className="text-sm opacity-80">23 activities hosted</div>
                <div className="text-sm opacity-80">4.5 host rating</div>
            </div>
            <div className="flex flex-col gap-2 min-w-[120px]">
                <Button className="bg-white text-[#3b4a5a] font-semibold hover:bg-gray-100">Message</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#3b4a5a]">View profile</Button>
            </div>
        </section>
    );
}