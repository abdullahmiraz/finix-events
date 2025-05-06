"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, X } from "lucide-react";
import { useState } from "react";
import { Icons } from "../ui/icons";

export function EventPaymentModal({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const [method, setMethod] = useState("bkash");

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="z-[9999] !max-w-[400px] bg-primary rounded-2xl p-8  border-0"
                // Radix portals may require this if modal isn't displaying:
                forceMount
            >
                <DialogClose asChild>
                    <button className="absolute right-4 top-4 text-creamy hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                </DialogClose>

                <DialogHeader>
                    <div className="flex justify-center mb-4">
                        <Icons.cashMultiple className="w-16 h-16 text-creamy" />
                    </div>
                    <DialogTitle className="text-4xl font-bold mb-2 text-creamy text-center">
                        Choose Payment Method
                    </DialogTitle>
                    <DialogDescription className="text-creamy/80 mb-4">
                    </DialogDescription>
                </DialogHeader>

                <form className="flex flex-col gap-6 items-start w-full">
                    {["bkash", "cash"].map((value) => (
                        <label
                            key={value}
                            className="flex items-start gap-3 cursor-pointer w-full"
                        >
                            <input
                                type="radio"
                                name="payment"
                                value={value}
                                checked={method === value}
                                onChange={() => setMethod(value)}
                                className="accent-creamy mt-1"
                            />
                            <div>
                                <div className="flex items-center gap-2 font-semibold text-lg text-white">
                                    {value === "bkash" ? "bKash" : "Cash"}{" "}
                                    {value === "bkash" ? (
                                        <Icons.bkash className="w-5 h-5" />
                                    ) : (
                                        <Icons.cash className="w-5 h-5" />
                                    )}
                                </div>
                                <div className="text-sm text-white/80 font-normal">
                                    {value === "bkash"
                                        ? "Send the payment now via bKash to confirm your spot instantly."
                                        : "Pay the event fee directly to the host before the game starts."}
                                </div>
                            </div>
                        </label>
                    ))}
                </form>

                <DialogFooter>
                    <Button className="w-full bg-[#222] hover:bg-[#222]/90 text-white rounded-full mt-8 py-6 text-base font-semibold">
                        Continue
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
