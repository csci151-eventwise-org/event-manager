import type { AppEvent } from "../types";
import EventCard from "./EventCard";

// 1. We combine both props: the events array AND your toggle function
interface EventListProps {
    events: AppEvent[];
    onToggleStatus: (id: string) => void;
}

const getEventTimestamp = (event: AppEvent): number => {
    return new Date(`${event.date}T${event.time}`).getTime();
};

const isUpcomingEvent = (event: AppEvent): boolean => {
    return !event.isAttended;
};

// 2. We use their named export, but include your prop
export const EventList = ({ events, onToggleStatus }: EventListProps) => {
    const upcomingEvents = events
        .filter(isUpcomingEvent)
        .sort((a, b) => getEventTimestamp(a) - getEventTimestamp(b));

    if (upcomingEvents.length === 0) {
        return (
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-2 text-lg font-semibold text-gray-900">Upcoming Events</h2>
                <p className="text-sm text-gray-500">No upcoming events yet. Add one using the form.</p>
            </div>
        );
    }

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                    {upcomingEvents.length} total
                </span>
            </div>

            {/* 3. We use your EventCard component inside their new layout! */}
            <div className="space-y-3">
                {upcomingEvents.map((event) => (
                    <EventCard 
                        key={event.id} 
                        event={event} 
                        onToggleStatus={onToggleStatus} 
                    />
                ))}
            </div>
        </div>
    );
};