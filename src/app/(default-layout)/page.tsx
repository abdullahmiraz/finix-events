import { EventHeader } from '../../components/main/EventHeader'
import { EventTabs } from '../../components/main/EventTabs'
import { EventAbout } from '../../components/main/EventAbout'
import { EventLocation } from '../../components/main/EventLocation'
import { EventHighlights } from '../../components/main/EventHighlights'
import { HostCard } from '../../components/main/HostCard'
import { EventSuggestions } from '../../components/main/EventSuggestions'

export default function HomePage() {
    return (
        <main className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 space-y-12">
            <EventHeader />
            <EventTabs />
            <EventAbout />
            <EventLocation />
            <section>
                <h2 className="text-xl font-semibold mb-4">Good to know</h2>
                <EventHighlights />
            </section>
            <HostCard />
            <EventSuggestions />
        </main>
    )
}