import { useState, useEffect } from "react";
import type { AppEvent, EventFormData } from "./types/index";
import { EventForm } from "./components/EventForm";
import { EventFilter } from "./components/EventFilter";
import type { EventFilterType } from "./components/EventFilter";

// Simple event list display for testing filter
function EventList({ events }: { events: AppEvent[] }) {
  if (events.length === 0) {
    return <div className="text-slate-400">No events to display.</div>;
  }
  return (
    <ul className="space-y-2">
      {events.map((event) => (
        <li key={event.id} className="border rounded p-2">
          <div className="font-semibold">{event.title}</div>
          <div className="text-sm text-slate-600">
            {event.date} {event.time} @ {event.location}
          </div>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [filter, setFilter] = useState<EventFilterType>("all");
  const [filteredEvents, setFilteredEvents] = useState<AppEvent[]>([]);

  const handleCreateEvent = (formData: EventFormData) => {
    const newEvent: AppEvent = {
      ...formData,
      id: crypto.randomUUID(), // Generates a unique ID for React keys
      isAttended: false, // Default status for new events
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  const handleFilterChange = (newFilter: EventFilterType) => {
    setFilter(newFilter);
  };

  // Update filteredEvents whenever events or filter changes
  // Use the same logic as EventFilter for consistency
  function filterEvents(events: AppEvent[], filter: EventFilterType): AppEvent[] {
    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return events.filter((e) => {
      const eventDate = new Date(e.date);
      const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
      switch (filter) {
        case "past":
          return eventDateOnly < todayDate;
        case "current":
          return eventDateOnly.getTime() === todayDate.getTime();
        case "upcoming":
          return eventDateOnly > todayDate;
        default:
          return true;
      }
    });
  }

  useEffect(() => {
    setFilteredEvents(filterEvents(events, filter));
  }, [events, filter]);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="mx-auto max-w-5xl">
        {/* Header section */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Eventwise
          </h1>
          <p className="text-slate-500 mt-1">
            Manage and track your upcoming events.
          </p>
        </header>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form takes up 5 columns */}
          <div className="md:col-span-5 lg:col-span-4">
            <EventForm onSubmit={handleCreateEvent} />
          </div>
          {/* Right Column: List takes up remaining columns */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <EventFilter
                events={events}
                filter={filter}
                onFilterChange={handleFilterChange}
              />
              <div className="mt-6">
                <EventList events={filteredEvents} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
