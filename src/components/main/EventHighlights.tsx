export function EventHighlights() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-destructive rounded-xl p-6">
        <h3 className="text-base font-semibold text-white mb-2">Highlights</h3>
        <ul className="text-sm text-white space-y-1">
          <li>Mon, 2 Dec</li>
          <li>7:30 AM - 8:30 AM</li>
          <li>Arrive 15 min before start</li>
          <li>Venue booked</li>
        </ul>
      </div>
      <div className="bg-primary rounded-xl p-6">
        <h3 className="text-base font-semibold text-white mb-2">
          Refund & cancellation policy
        </h3>
        <ul className="text-sm text-white space-y-1">
          <li>Full refund if host cancels the game</li>
          <li>Full refund if you cancel 24+ hours in advance</li>
          <li>Full refund if game is cancelled due to low attendance</li>
        </ul>
        <a
          href="#"
          className="text-white text-sm font-medium hover:underline mt-2 inline-block"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
