import { useState } from "react";
import EventList from "./components/EventList";
import type { AppEvent, EventFormData } from "./types/index";
import { EventForm } from "./components/EventForm";
import "./App.css";

function App() {
  // 1. We use the team's official AppEvent type now
  const [events, setEvents] = useState<AppEvent[]>([]);

  // 2. Your teammate's event creation logic
  const handleCreateEvent = (formData: EventFormData) => {
    const newEvent: AppEvent = {
      ...formData,
      id: crypto.randomUUID(), 
      isAttended: false, // The team already set up your default status!
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  // 3. Your core logic, updated to use isAttended instead of isCompleted
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
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              {/* 4. We drop your component right into the placeholder they left! */}
              <EventList events={events} onToggleStatus={toggleEventStatus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;