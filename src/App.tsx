import { useState, useEffect } from "react";
import type { AppEvent, EventFormData } from "./types/index";
import { EventForm } from "./components/EventForm";
import { EventFilter } from "./components/EventFilter";
import type { EventFilterType } from "./components/EventFilter";
import { EventList } from "./components/EventList";
import { EditForm } from "./components/EditForm";
import "./App.css";

function App() {
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [filter, setFilter] = useState<EventFilterType>("all");
  const [filteredEvents, setFilteredEvents] = useState<AppEvent[]>([]);

  const handleCreateEvent = (formData: EventFormData) => {
    const newEvent: AppEvent = {
      ...formData,
      id: crypto.randomUUID(),
      isAttended: false,
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  const handleStartEdit = (event: AppEvent) => {
    setEditingEventId(event.id);
  };

  const handleSaveEdit = (formData: EventFormData) => {
    if (!editingEventId) return;
    setEvents((prev) =>
      prev.map((event) =>
        event.id === editingEventId ? { ...event, ...formData } : event,
      ),
    );
    setEditingEventId(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
    setEditingEventId((prev) => (prev === eventId ? null : prev));
  };

  const toggleEventStatus = (eventId: string) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? { ...event, isAttended: !event.isAttended }
          : event
      )
    );
  };

  const handleFilterChange = (newFilter: EventFilterType) => {
    setFilter(newFilter);
  };

  function filterEvents(events: AppEvent[], filter: EventFilterType): AppEvent[] {
    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return events.filter((e) => {
      const eventDate = new Date(`${e.date}T${e.time}`);
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

  const editingEvent = events.find((event) => event.id === editingEventId);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Eventwise
          </h1>
          <p className="text-slate-500 mt-1">
            Manage and track your upcoming events.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 lg:col-span-4">
            <EventForm onSubmit={handleCreateEvent} />
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="mb-4">
                <EventFilter
                  events={events}
                  filter={filter}
                  onFilterChange={handleFilterChange}
                />
              </div>
              
              {/* Combine all props into the EventList */}
              <EventList 
                events={filteredEvents} 
                onToggleStatus={toggleEventStatus}
                onEdit={handleStartEdit}
                onDelete={handleDeleteEvent}
              />
            </div>
          </div>
        </div>
      </div>

      {editingEvent ? (
        <EditForm
          initialData={{
            title: editingEvent.title,
            date: editingEvent.date,
            time: editingEvent.time,
            location: editingEvent.location,
            description: editingEvent.description,
          }}
          onSubmit={handleSaveEdit}
          onCancel={() => setEditingEventId(null)}
        />
      ) : null}
    </div>
  );
}

export default App;