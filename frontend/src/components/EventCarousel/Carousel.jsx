import { useState } from "react";

const events = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Annual Company Meetup",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Design Thinking Workshop",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=400&q=80",
    title: "Tech Innovation Day",
    link: "#",
  },
];

export default function EventCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + events.length) % events.length);
  const next = () => setCurrent((current + 1) % events.length);

  return (
    <div className="w-[500px] flex flex-col items-start">
      <div className="relative w-[500px] h-[300px]">
        <img
          src={events[current].image}
          alt={events[current].title}
          className="w-full h-full object-cover rounded shadow"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-2 py-1"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-2 py-1"
        >
          &#8594;
        </button>
      </div>
      <a
        href={events[current].link}
        className="my-3 mb-5 text-base font-semibold text-blue-700 hover:underline"
      >
        {events[current].title}
      </a>
    </div>
  );
}
