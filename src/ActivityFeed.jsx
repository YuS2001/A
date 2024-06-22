import React from 'react';

const ActivityFeed = ({ calls, onArchive }) => (
  <div>
    <h2>Inbox</h2>
    <ul>
      {calls.filter(call => !call.is_archived).map(call => (
        <li key={call.id} className="activity-item">
          <div>
            <div>{call.from} tried to call {call.to}</div>
            <div>{new Date(call.created_at).toLocaleString()}</div>
          </div>
          <button onClick={() => onArchive(call.id)}>Archive</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ActivityFeed;
