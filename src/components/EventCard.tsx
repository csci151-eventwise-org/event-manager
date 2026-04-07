import type { AppEvent } from '../types/index';

//ANDREI
interface EventCardProps {
  event: AppEvent;
  // This is the function we created in App.tsx!
  onToggleStatus: (id: string) => void; 
}

import { useState } from "react";

export default function EventCard({ event, onToggleStatus }: EventCardProps) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      className={`p-5 mb-4 border rounded-lg shadow-sm transition-all duration-300 ${
        event.isAttended ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'
      }`}
      onClick={() => setShowDescription((prev) => !prev)}
      style={{ cursor: "pointer" }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
          <div className="text-gray-600 mt-2 text-sm space-y-1">
            <p>📅 {event.date} at {event.time}</p>
            <p>📍 {event.location}</p>
          </div>
        </div>
        <button
          onClick={e => {
            e.stopPropagation();
            onToggleStatus(event.id);
          }}
          className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 shadow-sm ${
            event.isAttended
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {event.isAttended ? 'Completed ✓' : 'Mark as Attended'}
        </button>
      </div>
      {showDescription && event.description && (
        <div className="mt-3 rounded bg-violet-50 px-3 py-2 text-sm text-violet-900 border border-violet-100">
          {event.description}
        </div>
      )}
    </div>
  );
}