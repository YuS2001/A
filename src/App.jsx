import React, { useState, useEffect } from 'react';
import Header from './Header';
import ActivityFeed from './ActivityFeed';
import ArchivedCalls from './ArchivedCalls';
import './app.css';

const BASE_URL = 'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app';

const App = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/activities`)
      .then(response => response.json())
      .then(data => setCalls(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const archiveCall = (id) => {
    fetch(`${BASE_URL}/activities/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ is_archived: true })
    })
    .then(response => response.json())
    .then(updatedCall => {
      setCalls(calls.map(call => call.id === updatedCall.id ? updatedCall : call));
    })
    .catch(error => console.error('Error archiving call:', error));
  };

  const unarchiveCall = (id) => {
    fetch(`${BASE_URL}/activities/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ is_archived: false })
    })
    .then(response => response.json())
    .then(updatedCall => {
      setCalls(calls.map(call => call.id === updatedCall.id ? updatedCall : call));
    })
    .catch(error => console.error('Error unarchiving call:', error));
  };

  const archiveAll = () => {
    const updatedCalls = calls.map(call => ({ ...call, is_archived: true }));
    setCalls(updatedCalls);
    updatedCalls.forEach(call => {
      fetch(`${BASE_URL}/activities/${call.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ is_archived: true })
      }).catch(error => console.error('Error archiving all calls:', error));
    });
  };

  const unarchiveAll = () => {
    const updatedCalls = calls.map(call => ({ ...call, is_archived: false }));
    setCalls(updatedCalls);
    updatedCalls.forEach(call => {
      fetch(`${BASE_URL}/activities/${call.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ is_archived: false })
      }).catch(error => console.error('Error unarchiving all calls:', error));
    });
  };

  return (
    <div id="app">
      <div className="container">
        <Header />
        <div className="container-view">
          <button onClick={archiveAll}>Archive All Calls</button>
          <ActivityFeed calls={calls} onArchive={archiveCall} />
          <button onClick={unarchiveAll}>Unarchive All Calls</button>
          <ArchivedCalls calls={calls} onUnarchive={unarchiveCall} />
        </div>
      </div>
    </div>
  );
};

export default App;
