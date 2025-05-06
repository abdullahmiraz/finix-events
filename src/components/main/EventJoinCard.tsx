"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { EventPaymentModal } from "./EventPaymentModal";

export default function EventJoinCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full col-span-1">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between border border-primary/30 rounded-lg px-4 py-2">
          <span className="text-sm text-[#e26a2c] font-medium">
            6 spots left
          </span>
          <span className="text-lg font-semibold">
            320tk <span className="text-sm ">/player </span>{" "}
            <span className="text-sm font-normal text-gray-500">(both)</span>
          </span>
        </div>
        <Button
          className="w-full bg-primary-light hover:bg-primary-light/90 text-base font-semibold !rounded-full py-4 text-black cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Join event
        </Button>
        <EventPaymentModal open={open} onOpenChange={setOpen} />
      </div>
    </div>
  );
}
