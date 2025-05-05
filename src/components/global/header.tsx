import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-screen-xl mx-auto  flex items-center justify-between px-6 py-3">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <span className="inline-block">
                        {/* Medal Icon */}
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#7ED9B6" /><path d="M16 8l2.09 4.26L23 13.27l-3.18 3.09L20.18 21 16 18.27 11.82 21l.36-4.64L9 13.27l4.91-.99L16 8z" fill="#fff" /></svg>
                    </span>
                </div>
                {/* Center: Date & Search */}
                <div className="flex items-center gap-3 flex-1 justify-center">
                    <div className="flex items-center bg-white rounded-full shadow px-4 py-2 gap-2">
                        <span className="text-gray-400">Select date</span>
                        <span className="bg-[#2ec28a] rounded-full p-1">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" fill="#fff" /><path d="M8 2v4M16 2v4M3 10h18" stroke="#2ec28a" strokeWidth="2" strokeLinecap="round" /></svg>
                        </span>
                    </div>
                    <div className="flex items-center bg-white rounded-full shadow px-4 py-2 gap-2">
                        <span className="text-gray-400">Search</span>
                        <span className="bg-gray-100 rounded-full p-1">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#888" strokeWidth="2" /><path d="M21 21l-4.35-4.35" stroke="#888" strokeWidth="2" strokeLinecap="round" /></svg>
                        </span>
                    </div>
                </div>
                {/* Right: Leaderboard, Login, Menu, Avatar */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="bg-[#f7f8f3] text-[#20504f] rounded-full px-4 py-2 font-medium flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline-block"><circle cx="16" cy="16" r="16" fill="#7ED9B6" /><path d="M16 8l2.09 4.26L23 13.27l-3.18 3.09L20.18 21 16 18.27 11.82 21l.36-4.64L9 13.27l4.91-.99L16 8z" fill="#fff" /></svg>
                        Leaderboard
                    </Button>
                    <Button variant="outline" className="rounded-full px-4 py-2 font-medium border-[#20504f] text-[#20504f]">Login / Sign up</Button>
                    <span className="bg-white rounded-full p-2 shadow flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="2" rx="1" fill="#20504f" /><rect x="4" y="6" width="16" height="2" rx="1" fill="#20504f" /><rect x="4" y="16" width="16" height="2" rx="1" fill="#20504f" /></svg>
                    </span>
                    <span className="bg-white rounded-full p-2 shadow flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="10" r="4" stroke="#20504f" strokeWidth="2" /><path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#20504f" strokeWidth="2" /></svg>
                    </span>
                </div>
            </div>
        </header>
    );
}
