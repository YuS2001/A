import React from 'react';

const ArchivedCalls = ({ calls, onUnarchive }) => (
  <div>
    <h2>Archived Calls</h2>
    <ul>
      {calls.filter(call => call.isArchived).map(call => (
        <li key={call.id}>
          {call.detail}
          <button onClick={() => onUnarchive(call.id)}>Unarchive</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ArchivedCalls;
