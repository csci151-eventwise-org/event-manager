import { useState } from 'react'
import EventList from './components/EventList';
import './App.css'

//Andrei
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  // Add your new property here:
  isCompleted: boolean; 
}

function App() {
  // We will set up a dummy event here just so the state exists (Andrei)
  const [events, setEvents] = useState<Event[]>([
    { 
      id: '1', 
      title: 'CSci 151 Practical Exam', 
      date: '2026-04-07', 
      time: '10:00 AM', 
      location: 'Lab A', 
      isCompleted: false 
    }
  ]);

  // 2. The Core Logic (Andrei)
  // This function finds the event by ID and flips its true/false status
  const toggleEventStatus = (eventId: string) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === eventId 
          ? { ...event, isCompleted: !event.isCompleted } 
          : event
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Event Manager</h1>
        {/* We will add the EventList component here in the next commit! (ANDREI)*/}
        <EventList events={events} onToggleStatus={toggleEventStatus} />
      </div>
    </div>
  );
}

export default App
