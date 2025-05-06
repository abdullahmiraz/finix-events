import { Button } from "@/components/ui/button";
import { Icons } from "../ui/icons";
import { Input } from "../ui/input";
import { Menu, User2 } from "lucide-react";
import { DefaultContainer } from "../layouts/default-container";

export function Header() {
    return (
        <header className="bg-white shadow-xs">
            <DefaultContainer>
                <div className=" flex items-center justify-between  ">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-2">
                        <span className="inline-block">
                            <Icons.logo />
                        </span>
                    </div>
                    {/* Center: Date & Search */}
                    <div className="flex items-center gap-3  justify-center">
                        {/* Date Input with Icon */}
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Select date"
                                className="rounded-full shadow-lg pr-12 pl-4 py-3 w-full text-base bg-white placeholder:text-gray-500"
                                readOnly
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#57d6a5] rounded-full p-2 flex items-center justify-center">
                                <Icons.calendar className="w-3 h-3 text-black" />
                            </span>
                        </div>
                        {/* Search Input with Icon */}
                        <div className="relative">
                            <Input
                                placeholder="Search"
                                className="rounded-full shadow-lg pr-12 pl-4 py-2 w-full text-base bg-white placeholder:text-gray-500"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center">
                                <Icons.search className="w-7 h-7 text-gray-500" />
                            </span>
                        </div>
                    </div>
                    {/* Right: Leaderboard, Login, Menu, Avatar */}
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" className="bg-brand-primary/10 text-brand-primary rounded-full px-4 py-2 font-medium flex items-center gap-2">
                            <Icons.logo className="text-brand-primary" /> Leaderboard
                        </Button>
                        <Button variant="outline" className="rounded-full px-4 py-2 font-medium border-brand-primary text-brand-primary">Login / Sign up</Button>
                        <div className="flex items-center gap-3 p-1 rounded-full border-brand-primary/30 border">
                            <Menu className="w-4 h-4 text-brand-primary" />
                            <div className="p-1 rounded-full bg-gray-300">
                                <User2 className="w-6 h-5 text-brand-primary " />
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultContainer>
        </header>
    );
}
