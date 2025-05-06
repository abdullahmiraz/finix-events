import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SignalLow } from "lucide-react";
import EventInfo from "./EventInfo";
// 1. Define the tags array
const eventTags = [
    { label: "Football", className: "bg-brand-primary-light/20", icon: null },
    { label: "Relay", className: "bg-brand-primary-light/20", icon: null },
    { label: "Female", className: "bg-pink-100", icon: null },
    { label: "Age: Below 25", className: "bg-purple-100", icon: null },
    { label: "Beginner", className: "bg-green-100", icon: <SignalLow className="w-4 h-4" strokeWidth={2.5} /> },
];

function EventTags() {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {eventTags.map((tag, idx) => (
                <span
                    key={idx}
                    className={`${tag.className} px-3 py-1 rounded-full text-xs flex items-center gap-1`}
                >
                    {tag.icon}
                    {tag.label}
                </span>
            ))}
        </div>
    );
}

const eventTabList = [
    { value: "info", label: "Info" },
    { value: "player", label: "Player" },
    { value: "comments", label: "Comments" },
];

export function EventTabs() {
    return (
        <Tabs defaultValue="info" className="w-full  ">
            <TabsList className="mb-4 border-b border-gray-200 bg-transparent p-0 w-full rounded-none">
                {eventTabList.map(tab => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="
                        border-0
                          border-b-2
                          border-transparent
                          data-[state=active]:border-brand-destructive
                          bg-transparent
                          data-[state=active]:text-brand-destructive
                          data-[state=active]:bg-transparent
                          data-[state=active]:shadow-none
                          rounded-none
                          px-4 py-2
                          text-base font-medium
                         "
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value="info">
                <EventTags />
                <EventInfo />
            </TabsContent>
            <TabsContent value="player">
                <div className="text-gray-500 text-sm">Player info coming soon...</div>
            </TabsContent>
            <TabsContent value="comments">
                <div className="text-gray-500 text-sm">Comments coming soon...</div>
            </TabsContent>
        </Tabs>
    );
}