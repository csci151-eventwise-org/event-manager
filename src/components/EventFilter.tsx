import type { AppEvent } from "../types/index";

export type EventFilterType = "all" | "past" | "current" | "upcoming";

interface EventFilterProps {
  events: AppEvent[];
  filter: EventFilterType;
  onFilterChange: (filter: EventFilterType) => void;
}

const isPast = (dateStr: string) => {
  const today = new Date();
  const eventDate = new Date(dateStr);
  // Compare only the date part (ignore time)
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
  return eventDateOnly < todayDate;
};

const isCurrent = (dateStr: string) => {
  const today = new Date();
  const eventDate = new Date(dateStr);
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
  return eventDateOnly.getTime() === todayDate.getTime();
};

const isUpcoming = (dateStr: string) => {
  const today = new Date();
  const eventDate = new Date(dateStr);
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
  return eventDateOnly > todayDate;
};

export const EventFilter: React.FC<EventFilterProps> = ({ events, filter, onFilterChange }) => {
  const getFilteredEvents = () => {
    switch (filter) {
      case "past":
        return events.filter(e => isPast(e.date));
      case "current":
        return events.filter(e => isCurrent(e.date));
      case "upcoming":
        return events.filter(e => isUpcoming(e.date));
      default:
        return events;
    }
  };

  const filteredEvents = getFilteredEvents();

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => onFilterChange("all")}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors
            ${filter === "all"
              ? "bg-blue-600 text-white border-blue-600 shadow"
              : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"}
          `}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("past")}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors
            ${filter === "past"
              ? "bg-blue-600 text-white border-blue-600 shadow"
              : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"}
          `}
        >
          Past
        </button>
        <button
          onClick={() => onFilterChange("current")}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors
            ${filter === "current"
              ? "bg-blue-600 text-white border-blue-600 shadow"
              : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"}
          `}
        >
          Current
        </button>
        <button
          onClick={() => onFilterChange("upcoming")}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors
            ${filter === "upcoming"
              ? "bg-blue-600 text-white border-blue-600 shadow"
              : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"}
          `}
        >
          Upcoming
        </button>
      </div>
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date} {event.time} @ {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
};
