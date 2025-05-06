import { EventAbout } from "./EventAbout";
import { EventHighlights } from "./EventHighlights";
import { EventLocation } from "./EventLocation";
import { HostCard } from "./HostCard";
export default function EventInfo() {

    return (
        <div className="space-y-6">
            <EventAbout />
            <EventLocation />
            <section>
                <h2 className="text-xl font-semibold mb-4">Good to know</h2>
                <EventHighlights />
            </section>
            <HostCard />
        </div>
    )
}