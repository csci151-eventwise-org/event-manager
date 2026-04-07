import React, { useState, useEffect } from "react";
import type { EventFormData } from "../types";

interface EventFormProps {
  initialData?: EventFormData;
  onSubmit: (data: EventFormData) => void;
  submitButtonText?: string;
}

const defaultState: EventFormData = {
  title: "",
  date: "",
  time: "",
  location: "",
};

export const EventForm: React.FC<EventFormProps> = ({
  initialData,
  onSubmit,
  submitButtonText = "Create Event",
}) => {
  const [formData, setFormData] = useState<EventFormData>(
    initialData || defaultState,
  );

  // If initialData changes (e.g., when opening an edit modal), update the form
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    // Only reset if we are creating a new event (no initialData)
    if (!initialData) {
      setFormData(defaultState);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 max-w-md w-full hover:shadow-3xl transition-all duration-300"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {initialData ? "Edit Event" : "Add New Event"}
      </h2>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-700 mb-2"
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
            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border-2 focus:outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="e.g., Department Meeting"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-gray-700 mb-2"
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
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border-2 focus:outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-semibold text-gray-700 mb-2"
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
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border-2 focus:outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-semibold text-gray-700 mb-2"
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
            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border-2 focus:outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="e.g., Room 404"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
};
