import Image from "next/image";

export function EventHeader() {
  return (
    <section className="w-full rounded-xl">
      {/* Image Grid */}
      <div className="w-full grid grid-cols-3 gap-4 mb-8">
        {/* Main Image */}
        <div className="col-span-2">
          <Image
            src="/images/hero/cover.jpg"
            alt="Event main"
            width={800}
            height={350}
            priority
            className="rounded-2xl object-cover w-full   bg-gray-200"
            style={{ aspectRatio: "16/8" }}
          />
        </div>
        {/* Side Images */}
        <div className="flex flex-col gap-2 ">
          <Image
            src="/images/hero/cover.jpg"
            alt="Event side 1"
            width={400}
            height={170}
            className="rounded-2xl object-cover w-full h-auto bg-gray-200"
            style={{ aspectRatio: "16/8" }}
          />
          <div className="relative w-full  ">
            <Image
              src="/images/hero/cover.jpg"
              alt="Event side 2"
              width={400}
              height={170}
              className="rounded-2xl object-cover w-full h-auto bg-gray-200"
              style={{ aspectRatio: "16/8" }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xl font-semibold bg-black/40 px-4 py-2 rounded-full">
                +2 photos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
