import React from 'react';

export function MetricsGrid({ stats }) {
  return (
    <div className="stats-grid">
      <div className="stat-box">
        <div className="stat-num">{stats.wordCount}</div>
        <div className="stat-label">Words</div>
      </div>

      <div className="stat-box">
        <div className="stat-num">{stats.charCount}</div>
        <div className="stat-label">Characters</div>
      </div>

      <div className="stat-box">
        <div className="stat-num">{stats.sentenceCount}</div>
        <div className="stat-label">Sentences</div>
      </div>

      <div className="stat-box">
        <div className="stat-num">{stats.paragraphCount}</div>
        <div className="stat-label">Paragraphs</div>
      </div>

      <div className="stat-box">
        <div className="stat-num">
          {stats.readingTimeMinutes > 0 ? `${stats.readingTimeMinutes}m ` : ''}
          {stats.readingTimeSeconds}s
        </div>
        <div className="stat-label">Reading Time</div>
      </div>
    </div>
  );
}
