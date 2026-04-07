export type EventFilterType = "all" | "past" | "current" | "upcoming";

interface EventFilterProps {
  filter: EventFilterType;
  onFilterChange: (filter: EventFilterType) => void;
}

export const EventFilter: React.FC<EventFilterProps> = ({ filter, onFilterChange }) => {
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
    </div>
  );
};
