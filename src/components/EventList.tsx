import type { AppEvent } from "../types";
import { DeleteButton } from "./DeleteButton";
import { useState } from "react";

interface EventListProps {
	events: AppEvent[];
	onToggleStatus: (id: string) => void;
	onEdit: (event: AppEvent) => void;
	onDelete: (id: string) => void;
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

export const EventList = ({ events, onToggleStatus, onEdit, onDelete }: EventListProps) => {
	const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

	const toggleDescription = (eventId: string) => {
		setExpandedEventId((prev) => (prev === eventId ? null : eventId));
	};

	const sortedEvents = [...events].sort((a, b) => getEventTimestamp(a) - getEventTimestamp(b));

	if (sortedEvents.length === 0) {
		return (
			<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
				<h2 className="mb-2 text-lg font-semibold text-gray-900">Events</h2>
				<p className="text-sm text-gray-500">No events found. Add one using the form.</p>
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

			<ul className="space-y-3">
				{sortedEvents.map((event) => (
					<li
						key={event.id}
						onClick={() => toggleDescription(event.id)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								toggleDescription(event.id);
							}
						}}
						tabIndex={0}
						role="button"
						aria-expanded={expandedEventId === event.id}
						className={`rounded-lg border px-4 py-3 transition-colors cursor-pointer ${
                            event.isAttended ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                        }`}
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
									onClick={(e) => {
										e.stopPropagation();
										onToggleStatus(event.id);
									}}
                                    className={`rounded-md px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                        event.isAttended
                                            ? 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
                                            : 'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-gray-500'
                                    }`}
                                >
                                    {event.isAttended ? 'Completed ✓' : 'Mark as Attended'}
                                </button>

								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										onEdit(event);
									}}
									className="rounded-md bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
								>
									Edit
								</button>
								
								<div onClick={(e) => e.stopPropagation()}>
									<DeleteButton
										eventTitle={event.title}
										onDelete={() => onDelete(event.id)}
									/>
								</div>
							</div>
						</div>

						{expandedEventId === event.id ? (
							<p className="mt-3 text-sm text-gray-700 border-t pt-2 border-gray-200/60">
								{event.description || "No description provided."}
							</p>
						) : null}
					</li>
				))}
			</ul>
		</div>
	);
};