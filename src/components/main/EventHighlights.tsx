export function EventHighlights() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-base font-semibold text-red-700 mb-2">Highlights</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li>Mon, 2 Dec</li>
                    <li>7:30 AM - 8:30 AM</li>
                    <li>Arrive 15 min before start</li>
                    <li>Venue booked</li>
                </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-base font-semibold text-green-800 mb-2">Refund & cancellation policy</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li>Full refund if host cancels the game</li>
                    <li>Full refund if you cancel 24+ hours in advance</li>
                    <li>Full refund if game is cancelled due to low attendance</li>
                </ul>
                <a href="#" className="text-green-800 text-sm font-medium hover:underline mt-2 inline-block">Learn more</a>
            </div>
        </section>
    );
}