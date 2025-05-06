import { Users2 } from "lucide-react";

const players = [
    { name: "Alex Mercer", isHost: true },
    { name: "Jamir Uddin", isHost: false },
    { name: "Biplu Ahmed", isHost: false },
    { name: "Topu Barman", isHost: false },
    { name: "Rakib Hossain", isHost: false },
];

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
}

export default function EventPlayers() {
    return (
        <section className="bg-[#f7f6f2]   rounded-xl">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Players</h2>
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <Users2 className="w-5 h-5" />
                    <span>5/11</span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                {players.map((player) => (
                    <div
                        key={player.name}
                        className="flex items-center justify-between bg-[#357863] rounded-xl px-4 py-3"
                    >
                        <div className="flex items-center gap-4">
                            <span className="bg-[#f7e9d0] text-[#357863] font-bold rounded-full w-10 h-10 flex items-center justify-center text-base">
                                {getInitials(player.name)}
                            </span>
                            <span className="text-white font-medium text-base">
                                {player.name}
                                {player.isHost && (
                                    <span className="text-xs text-[#f7e9d0] font-normal ml-2">(Host)</span>
                                )}
                            </span>
                        </div>
                        <button className="bg-white text-[#357863] rounded-lg px-4 py-1 font-medium shadow text-sm">Message</button>
                    </div>
                ))}
            </div>
        </section>
    );
}