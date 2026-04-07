import { useState } from "react";
import { AppEvent, EventFormData } from "./types";
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Form */}
        <div className="md:col-span-1">
          <EventForm onSubmit={handleCreateEvent} />
        </div>

        {/* Right Column: Future Event List Component */}
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Upcoming Events
            </h2>
            {events.length === 0 ? (
              <p className="text-gray-500">No events scheduled yet.</p>
            ) : (
              <ul className="space-y-3">
                {events.map((evt) => (
                  <li key={evt.id} className="p-4 border rounded bg-gray-50">
                    <strong>{evt.title}</strong> at {evt.time} on {evt.date} -{" "}
                    {evt.location}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
