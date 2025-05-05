import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

function EventTags() {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">⚽ Football</span>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">🔁 Relay</span>
            <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">♀️ Female</span>
            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">🎂 Age: Below 25</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">📈 Beginner</span>
        </div>
    );
}

export function EventTabs() {
    return (
        <Tabs defaultValue="info" className="w-full">
            <TabsList className="mb-4 border-b border-gray-200 bg-transparent p-0">
                <TabsTrigger value="info" className="data-[state=active]:border-b-2 data-[state=active]:border-[#2ec28a] data-[state=active]:text-[#2ec28a] rounded-none px-4 py-2 text-base font-medium">Info</TabsTrigger>
                <TabsTrigger value="player" className="data-[state=active]:border-b-2 data-[state=active]:border-[#2ec28a] data-[state=active]:text-[#2ec28a] rounded-none px-4 py-2 text-base font-medium">Player</TabsTrigger>
                <TabsTrigger value="comments" className="data-[state=active]:border-b-2 data-[state=active]:border-[#2ec28a] data-[state=active]:text-[#2ec28a] rounded-none px-4 py-2 text-base font-medium">Comments</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
                <EventTags />
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