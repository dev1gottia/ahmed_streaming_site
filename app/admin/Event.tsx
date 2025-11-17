/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function EventItem({ event, ACCENT_COLOR }: any) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    window.navigator.clipboard.writeText(
      `${window.location.origin}/event/${event.id}`
    );
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        clicked ? "bg-red-600 hover:bg-red-600" : "bg-neutral-900"
      } border border-neutral-800 px-4 py-2 rounded-md flex flex-col justify-center items-center gap-2 hover:bg-neutral-800 transition-all duration-300 cursor-pointer`}
    >
      <span className={`text-blue-600 text-lg`}>{event.sch_league} - {event?.espnEventId}</span>
      <span className="text-xl font-semibold">{event.title}</span>
    </div>
  );
}
