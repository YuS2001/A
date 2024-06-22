import React from 'react';

const ArchivedCalls = ({ calls, onUnarchive }) => (
  <div>
    <h2>Archived Calls</h2>
    <ul>
      {calls.filter(call => call.is_archived).map(call => (
        <li key={call.id} className="archived-item">
          <div>
            <div>{call.from} tried to call {call.to}</div>
            <div>{new Date(call.created_at).toLocaleString()}</div>
          </div>
          <button onClick={() => onUnarchive(call.id)}>Unarchive</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ArchivedCalls;
