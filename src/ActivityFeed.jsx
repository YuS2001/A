import React from 'react';

const ActivityFeed = ({ calls, onArchive }) => (
  <div>
    <h2>Activity Feed</h2>
    <ul>
      {calls.filter(call => !call.isArchived).map(call => (
        <li key={call.id}>
          {call.detail}
          <button onClick={() => onArchive(call.id)}>Archive</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ActivityFeed;
