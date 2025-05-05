'use client'

import Image from "next/image";
import { useState } from "react";

function EventCard({ title, spots, price, date, tags, image, location, attending }: { title: string; spots: string; price: string; date: string; tags: { label: string; icon: string; color: string }[]; image: string; location: string; attending: string }) {
    return (
        <div className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow p-0 flex flex-col overflow-hidden relative">
            <div className="relative">
                <Image height={128} width={320} src={image} alt={title} className="w-full h-32 object-cover" />
                <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow text-gray-500 hover:text-red-500">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" /></svg>
                </button>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <div className="flex gap-2 flex-wrap mb-1">
                    {tags.map((tag) => (
                        <span key={tag.label} className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${tag.color}`}>{tag.icon} {tag.label}</span>
                    ))}
                </div>
                <div className="font-semibold text-base mb-1">{title}</div>
                <div className="text-xs text-gray-500 mb-1">{date}</div>
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#e26a2c" /></svg>
                    {location}
                </div>
                <div className="flex items-center justify-between text-xs mt-2">
                    <span className="text-[#e26a2c] font-medium">{spots} spots left</span>
                    <span className="text-gray-500">{attending} attending</span>
                    <span className="font-semibold text-base text-[#2ec28a]">{price}</span>
                </div>
            </div>
        </div>
    );
}

export function EventSuggestions() {
    const events = [
        {
            title: "Legends Rise on the Field",
            spots: "2 spots left",
            price: "320/person",
            date: "Thu, Dec 5 • 12:30AM - 12:30PM",
            tags: [
                { label: "Football", icon: "⚽", color: "bg-cyan-50 text-cyan-700" },
                { label: "Below 25y", icon: "🎂", color: "bg-purple-50 text-purple-700" },
                { label: "Advanced", icon: "��", color: "bg-green-50 text-green-700" },
            ],
            image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
            location: "Bashundhara Sports Complex",
            attending: "6/8",
        },
        {
            title: "Chasing Glory: Football Showdown",
            spots: "2 spots left",
            price: "320/person",
            date: "Thu, Dec 5 • 12:30AM - 12:30PM",
            tags: [
                { label: "Football", icon: "⚽", color: "bg-cyan-50 text-cyan-700" },
                { label: "Below 25y", icon: "🎂", color: "bg-purple-50 text-purple-700" },
                { label: "Advanced", icon: "📈", color: "bg-green-50 text-green-700" },
            ],
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            location: "Bashundhara Sports Complex",
            attending: "6/8",
        },
        {
            title: "United We Play, United Win",
            spots: "2 spots left",
            price: "320/person",
            date: "Thu, Dec 5 • 12:30AM - 12:30PM",
            tags: [
                { label: "Football", icon: "⚽", color: "bg-cyan-50 text-cyan-700" },
                { label: "Below 25y", icon: "🎂", color: "bg-purple-50 text-purple-700" },
                { label: "Advanced", icon: "📈", color: "bg-green-50 text-green-700" },
            ],
            image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
            location: "Bashundhara Sports Complex",
            attending: "6/8",
        },
    ];
    const [index, setIndex] = useState(0);
    return (
        <section className="relative">
            <h2 className="text-lg font-semibold mb-4">Other events you may like</h2>
            <div className="flex items-center gap-2">
                <button className="rounded-full p-2 bg-white shadow text-gray-400 hover:text-[#2ec28a]" aria-label="Previous">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {events.map((event, i) => (
                        <EventCard key={i} {...event} />
                    ))}
                </div>
                <button className="rounded-full p-2 bg-white shadow text-gray-400 hover:text-[#2ec28a]" aria-label="Next">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </div>
        </section>
    );
}