import type { AppEvent } from "../types";
import { DeleteButton } from "./DeleteButton";

interface EventListProps {
	events: AppEvent[];
	onEdit: (event: AppEvent) => void;
	onDelete: (id: string) => void;
}

const getEventTimestamp = (event: AppEvent): number => {
	return new Date(`${event.date}T${event.time}`).getTime();
};

const isUpcomingEvent = (event: AppEvent): boolean => {
	return !event.isAttended;
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

export const EventList = ({ events, onEdit, onDelete }: EventListProps) => {
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

			<ul className="space-y-3">
				{upcomingEvents.map((event) => (
					<li
						key={event.id}
						className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-colors hover:bg-gray-100"
					>
						<div className="flex flex-wrap items-start justify-between gap-3">
							<div>
								<h3 className="text-sm font-semibold text-gray-900">{event.title}</h3>
								<p className="mt-1 text-sm text-gray-600">{formatEventDate(event)}</p>
							</div>
							<div className="flex items-center gap-2">
								<span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
									{event.location}
								</span>
								<button
									type="button"
									onClick={() => onEdit(event)}
									className="rounded-md bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
								>
									Edit
								</button>
								<DeleteButton
									eventTitle={event.title}
									onDelete={() => onDelete(event.id)}
								/>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};