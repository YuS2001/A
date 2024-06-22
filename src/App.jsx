import React, { useState } from 'react';
import Header from './Header';
import ActivityFeed from './ActivityFeed';
import ArchivedCalls from './ArchivedCalls';

const App = () => {
  const [calls, setCalls] = useState([
    // Example calls data structure
    { id: 1, detail: 'Call 1', isArchived: false },
    { id: 2, detail: 'Call 2', isArchived: false },
  ]);

  const archiveCall = (id) => {
    setCalls(calls.map(call => call.id === id ? { ...call, isArchived: true } : call));
  };

  const unarchiveCall = (id) => {
    setCalls(calls.map(call => call.id === id ? { ...call, isArchived: false } : call));
  };

  const archiveAll = () => {
    setCalls(calls.map(call => ({ ...call, isArchived: true })));
  };

  const unarchiveAll = () => {
    setCalls(calls.map(call => ({ ...call, isArchived: false })));
  };

  return (
    <div>
      <Header />
      <ActivityFeed calls={calls} onArchive={archiveCall} />
      <ArchivedCalls calls={calls} onUnarchive={unarchiveCall} />
      <button onClick={archiveAll}>Archive All</button>
      <button onClick={unarchiveAll}>Unarchive All</button>
    </div>
  );
};

export default App;
