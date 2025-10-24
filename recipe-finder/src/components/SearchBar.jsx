import React from "react";

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="e.g., chicken, pasta, curry"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-l-lg px-4 py-3 outline-none"
      />
      <button
        onClick={onSearch}
        className="bg-yellow-400 px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-500 transition"
      >
        Search
      </button>
    </div>
  );
}
