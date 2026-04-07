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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Form */}
        <div className="lg:col-span-1">
          <EventForm onSubmit={handleCreateEvent} />
        </div>

        {/* Right Column: Future Event List Component */}
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            {events.length === 0 ? (
              <p className="text-gray-600 text-lg">
                No events scheduled yet. Create your first event!
              </p>
            ) : (
              <ul className="space-y-4">
                {events.map((evt) => (
                  <li
                    key={evt.id}
                    className="p-6 border border-gray-200 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="text-xl text-gray-900">
                          {evt.title}
                        </strong>
                        <p className="text-gray-600 mt-1">
                          📅 {evt.date} at {evt.time}
                        </p>
                        <p className="text-gray-600">📍 {evt.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Upcoming
                        </span>
                      </div>
                    </div>
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
