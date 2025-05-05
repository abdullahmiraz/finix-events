import { Button } from "@/components/ui/button";

export function EventLocation() {
    return (
        <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Location</h2>
            <div className="flex items-center gap-4">
                <div>
                    <div className="font-medium text-cyan-700">NDE Field</div>
                    <div className="text-gray-500 text-sm">Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois</div>
                </div>
                <Button variant="outline" className="ml-auto">Open maps</Button>
            </div>
        </section>
    );
}