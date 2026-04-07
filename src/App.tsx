import { useState } from "react";
// 1. Update to the named import with curly braces
import { EventList } from "./components/EventList";
import type { AppEvent, EventFormData } from "./types/index";
import { EventForm } from "./components/EventForm";
import "./App.css";

function App() {
  const [events, setEvents] = useState<AppEvent[]>([]);

  const handleCreateEvent = (formData: EventFormData) => {
    const newEvent: AppEvent = {
      ...formData,
      id: crypto.randomUUID(), 
      isAttended: false, 
    };
    setEvents((prev) => [...prev, newEvent]);
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
            {/* 2. Simply render the component with your props */}
            <EventList events={events} onToggleStatus={toggleEventStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;