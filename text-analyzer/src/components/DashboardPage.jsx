import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { lookupTopicInfo } from '../data/knowledgeBase';

export function DashboardPage() {
  const { user, logout } = useAuth(); // Access user & logout via Context - NO PROPS!
  const [text, setText] = useState('');
  const [info, setInfo] = useState('');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 1. useEffect for Top-Right Live Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 2. useEffect for Search Information Lookup
  useEffect(() => {
    if (!text.trim()) {
      setInfo('');
      return;
    }

    const topic = lookupTopicInfo(text);
    if (topic && topic.summary) {
      setInfo(`${topic.title} — ${topic.summary}`);
    } else {
      setInfo(`Information for "${text}": Displays real-time details about the text entered in the search box.`);
    }
  }, [text]);

  return (
    <div className="container">
      {/* Header Bar with User Info & Logout on left, Title, and Timer on top-right */}
      <header className="header-bar">
        <div>
          <h2 className="title">Search Information</h2>
          <div className="user-badge-row">
            <span>Welcome, <strong>{user}</strong></span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </div>
        </div>

        <div className="top-timer">
          🕒 {time}
        </div>
      </header>

      <input
        type="text"
        className="search-box"
        placeholder="Type anything (e.g. java, react, python)..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {info && (
        <div className="info-box">
          <p>{info}</p>
        </div>
      )}
    </div>
  );
}
