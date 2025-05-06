import { EllipsisVertical } from "lucide-react"

import { Heart } from "lucide-react"

import { Upload } from "lucide-react";

export default function EventDetails() {
    return (
        <div className="w-full ">
            <div  >
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-1">Road to the Football Finals</h1>
                    </div>                    <div className="flex items-center gap-2">
                        <div className="p-1 rounded-full border">
                            <Upload className="w-4 h-4 text-primary" />
                        </div>
                        <div className="p-1 rounded-full border">
                            <Heart className="w-4 h-4 text-primary" />
                        </div>
                        <div className="p-1 rounded-full border">
                            <EllipsisVertical className="w-4 h-4 text-primary" />
                        </div>
                    </div>
                </div>
                <div className="text-gray-500 text-base">Bashundhara Sports Complex</div>
                <div className="text-gray-500 text-base">Mar 14 from 7:30 PM - 9:30 PM</div>
            </div>

        </div>
    )
}
