import React, { useState, useEffect } from "react";
import type { EventFormData } from "../types";

interface EventFormProps {
  initialData?: EventFormData;
  onSubmit: (data: EventFormData) => void;
}

const defaultState: EventFormData = {
  title: "",
  date: "",
  time: "",
  location: "",
  description: "",
};

export const EventForm: React.FC<EventFormProps> = ({
  initialData,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<EventFormData>(
    initialData || defaultState,
  );

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) setFormData(defaultState);
  };

  return (
    // Modern card: slight border, very subtle shadow, crisp white background
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full max-w-md"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {initialData ? "Edit Event" : "Add New Event"}
      </h2>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Event Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Department Meeting"
            // Modern inputs: clear border, outline rings on focus
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all text-gray-600"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Room 404"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Event details, agenda, etc."
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all min-h-[60px]"
          />
        </div>

        {/* Modern button: Solid color, slight hover state, no massive gradients unless intentional */}
        <button
          type="submit"
          className="w-full mt-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all"
        >
          {initialData ? "Save Changes" : "Create Event"}
        </button>
      </div>
    </form>
  );
};
