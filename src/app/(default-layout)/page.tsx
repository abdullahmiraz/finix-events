import { EventHeader } from '../../components/main/EventHeader'
import { EventTabs } from '../../components/main/EventTabs'
import { EventAbout } from '../../components/main/EventAbout'
import { EventLocation } from '../../components/main/EventLocation'
import { EventHighlights } from '../../components/main/EventHighlights'
import { HostCard } from '../../components/main/HostCard'
import { EventSuggestions } from '../../components/main/EventSuggestions'
import { DefaultContainer } from '../../components/layouts/default-container'
import EventJoinCard from '../../components/main/EventJoinCard'
import EventDetails from '../../components/main/EventDetails'
export default function HomePage() {
    return (
        <div className="space-y-12">
            <DefaultContainer className="space-y-12">
                <EventHeader />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="col-span-8 space-y-12">
                        <EventDetails />
                        <EventTabs />

                    </div>

                    <div className="col-span-4">
                        <EventJoinCard />
                    </div>
                </div>
            </DefaultContainer>
            <EventSuggestions />
        </div>
    )
}