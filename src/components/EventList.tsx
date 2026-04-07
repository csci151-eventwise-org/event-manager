
import type { AppEvent } from "../types";

// 1. We combine both props: the events array AND your toggle function
import EventCard from "./EventCard";
interface EventListProps {
	events: AppEvent[];
	onToggleStatus: (id: string) => void;
}


const getEventTimestamp = (event: AppEvent): number => {
	return new Date(`${event.date}T${event.time}`).getTime();
};

const formatEventDate = (event: AppEvent): string => {
	const date = new Date(`${event.date}T${event.time}`);
	return new Intl.DateTimeFormat("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit",
	}).format(date);
};

export const EventList = ({ events, onToggleStatus }: EventListProps) => {
	const sortedEvents = [...events].sort((a, b) => getEventTimestamp(a) - getEventTimestamp(b));

	if (sortedEvents.length === 0) {
		return (
			<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
				<h2 className="mb-2 text-lg font-semibold text-gray-900">Events</h2>
				<p className="text-sm text-gray-500">No events yet. Add one using the form.</p>
			</div>
		);
	}

	return (
		<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-lg font-semibold text-gray-900">Events</h2>
				<span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
					{sortedEvents.length} total
				</span>
			</div>
			<div className="space-y-3">
				{sortedEvents.map((event) => (
					<EventCard key={event.id} event={event} onToggleStatus={onToggleStatus} />
				))}
			</div>
		</div>
	);
};