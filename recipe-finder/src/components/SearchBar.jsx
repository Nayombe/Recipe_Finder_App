import React, { useState, useEffect } from "react";

export default functon searchBar({ onSearch, defaultValue=""}) {
    const [q, setQ] = useState(defaultValue);

    useEffect(() => setQ(defaultValue), [defaultValue]);

    const submit = (e) => {
        if (e) e.preventDefault();
        onSearch(q);
    };
    return (
      <form onSubmit={submit} className="my-6"
        <div className="flex gap-3">
          <input 
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search recipes by name (e.g., Arrabiata)"
          className="flex-1 rounded border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button type="submit" className="bg-orange-500 text-white px-6 rounded-lg">Search</button>
        </div>
      </form>
    );
};
