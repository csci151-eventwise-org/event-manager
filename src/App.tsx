import { useState } from "react";
import type { AppEvent, EventFormData } from "./types/index";
import { EventForm } from "./components/EventForm";

function App() {
  const [events, setEvents] = useState<AppEvent[]>([]);

  const handleCreateEvent = (formData: EventFormData) => {
    const newEvent: AppEvent = {
      ...formData,
      id: crypto.randomUUID(), // Generates a unique ID for React keys
      isAttended: false, // Default status for new events
    };

    setEvents((prev) => [...prev, newEvent]);
  };

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
            {/* Your team member's Event List component will go here */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              {/* List items... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
