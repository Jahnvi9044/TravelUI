import React from "react";

const TravelForm = () => {
  return (
    <section className="bg-white p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book Your Trip</h2>
      <form className="space-y-4">
        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="$100 - $500"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between space-x-4">
          <button
            type="button"
            className="w-1/2 bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition"
          >
            Preview Hotel
          </button>
          <button
            type="submit"
            className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
};

export default TravelForm;
