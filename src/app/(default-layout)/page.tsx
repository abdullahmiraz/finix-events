import { DefaultContainer } from "../../components/layouts/default-container";
import EventDetails from "../../components/main/EventDetails";
import { EventHeader } from "../../components/main/EventHeader";
import EventJoinCard from "../../components/main/EventJoinCard";
import { EventSuggestions } from "../../components/main/EventSuggestions";
import { EventTabs } from "../../components/main/EventTabs";
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
  );
}
