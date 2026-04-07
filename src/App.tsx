import { useState } from "react";
import type { AppEvent, EventFormData } from "./types/index";
import { EventForm } from "./components/EventForm";
import { EventList } from "./components/EventList";
import { EditForm } from "./components/EditForm";

function App() {
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  const handleCreateEvent = (formData: EventFormData) => {
    const newEvent: AppEvent = {
      ...formData,
      id: crypto.randomUUID(), // Generates a unique ID for React keys
      isAttended: false, // Default status for new events
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

  const editingEvent = events.find((event) => event.id === editingEventId);

  return (
    // Use a subtle background color for the main canvas
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
            <EventList events={events} onEdit={handleStartEdit} />
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
          }}
          onSubmit={handleSaveEdit}
          onCancel={() => setEditingEventId(null)}
        />
      ) : null}
    </div>
  );
}

export default App;
