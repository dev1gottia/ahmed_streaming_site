export const runtime = 'edge'
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

export default async function Home() {
  const API = "https://api.v3.quest/api/v1/all-events"
  const ACCENT_COLOR = "blue-600";

  const res = await fetch(API, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return (
    <>
      <div className="flex flex-col gap-3">
        {data.map((event: any, index: number) => (
          <Link
            href={`/event/${event.id}`}
            className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-md flex flex-col justify-center items-center gap-2 hover:bg-neutral-800 transition-all duration-300"
            key={index}
          >
            <span className={`text-${ACCENT_COLOR} text-lg `}>
              {event.sch_league}
            </span>

            <span className="text-xl font-semibold">{event.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
