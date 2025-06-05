import { useState } from "react";

const people = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    info: "Enthusiastic team player with 5 years of experience in marketing.",
    role: "Marketing Manager",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Smith",
    info: "Expert in UI/UX design and passionate about user-centered products.",
    role: "Lead Designer",
  },
  {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Mike Johnson",
    info: "Skilled developer specializing in frontend technologies.",
    role: "Frontend Developer",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + people.length) % people.length);
  const next = () => setCurrent((current + 1) % people.length);

  return (
    <div className="mx-auto flex flex-col items-start w-full">
      <div className="relative w-[300px] h-[200px]">
        <img
          src={people[current].image}
          alt={people[current].name}
          className="w-full h-full object-cover rounded"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2 py-1"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2 py-1"
        >
          &#8594;
        </button>
      </div>
      <div className="flex flex-col mt-4 items-start">
        <h2 className="text-lg font-semibold">{people[current].name}</h2>
        <p className="text-sm text-gray-600">{people[current].info}</p>
        <span className="text-xs text-blue-600 font-medium mt-1">
          {people[current].role}
        </span>
      </div>
      <div className="flex gap-2 mt-2">
        {people.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === current ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
