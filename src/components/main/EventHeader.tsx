import { Button } from "@/components/ui/button";

export function EventHeader() {
    return (
        <section className="w-full flex flex-col gap-4 md:flex-row md:gap-8 items-start">
            {/* Images */}
            <div className="flex-1 w-full flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="Event main"
                        className="rounded-xl object-cover w-full h-56 md:h-64 bg-gray-200"
                    />
                </div>
                <div className="hidden md:flex flex-col gap-4 w-40 min-w-[160px]">
                    <img
                        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                        alt="Event side 1"
                        className="rounded-xl object-cover w-full h-28 bg-gray-200"
                    />
                    <div className="relative w-full h-28">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                            alt="Event side 2"
                            className="rounded-xl object-cover w-full h-full bg-gray-200 opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold bg-black/40 px-3 py-1 rounded-full">+2 photos</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Event Info Card */}
            <div className="w-full md:w-72 flex-shrink-0">
                <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-[#e26a2c] font-medium">6 spots left</span>
                        <span className="text-lg font-semibold">320tk <span className="text-sm font-normal text-gray-500">/player (both)</span></span>
                    </div>
                    <Button className="w-full bg-[#2ec28a] hover:bg-[#27a97a] text-base font-semibold py-2">Join event</Button>
                </div>
            </div>
            {/* Title, location, date */}
            <div className="w-full md:absolute left-0 top-[calc(100%+1rem)] md:static mt-4">
                <h1 className="text-2xl md:text-3xl font-bold mb-1">Road to the Football Finals</h1>
                <div className="text-gray-500 text-base mb-1">Bashundhara Sports Complex</div>
                <div className="text-gray-500 text-base">Mar 14 from 7:30 PM - 9:30 PM</div>
            </div>
        </section>
    );
}