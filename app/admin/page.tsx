export const runtime = "edge";
/* eslint-disable @typescript-eslint/no-explicit-any */
import EventItem from "./Event";

export default async function Home() {
 const API = "https://api.v3.quest/api/v1/all-events"
  const ACCENT_COLOR = "blue-600";

  const res = await fetch(API, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return (
    <div
      className="flex flex-col gap-3"
      suppressContentEditableWarning
      suppressHydrationWarning
    >
      {data.map((event: any, index: number) => (
        <EventItem key={index} event={event} ACCENT_COLOR={ACCENT_COLOR} />
      ))}
    </div>
  );
}
