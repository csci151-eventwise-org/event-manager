import type { Event } from '../App';
import EventCard from './EventCard';

//ANDREI
interface EventListProps {
  events: Event[];
  onToggleStatus: (id: string) => void;
}

export default function EventList({ events, onToggleStatus }: EventListProps) {
  // A nice fallback UI if there are no events to show (ANDREI)
  if (events.length === 0) {
    return <p className="text-gray-500 italic text-center p-8">No events found.</p>;
  }
  //Andrei
  return (
    //ANDREI
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Upcoming Events</h2>
      
      {/* This is where the magic happens: looping through the data */}
      {events.map((event) => (
        <EventCard 
          key={event.id} 
          event={event} 
          onToggleStatus={onToggleStatus} 
        />
      ))}
    </div>
    //Andrei
  );
}