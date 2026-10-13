import React from 'react';

export function UseEffectLogger({ effectLogs, textLength }) {
  return (
    <div className="info-card useeffect-box">
      <h3 className="useeffect-title">useEffect Trigger Monitor</h3>
      <p style={{ fontSize: '0.85rem', color: '#4b5563' }}>
        <strong>Execution Count:</strong> {effectLogs.triggerCount} times<br />
        <strong>Last Fired:</strong> {effectLogs.lastExecutionTime || 'Not fired yet'}<br />
        <strong>Dependency state:</strong> <code>[text]</code> ({textLength} chars)
      </p>

      <div className="code-block">
{`useEffect(() => {
  // Re-calculates text statistics dynamically
  calculateStats(text);
}, [text]);`}
      </div>

      <h4 style={{ fontSize: '0.85rem', marginTop: '0.75rem', color: '#334155' }}>Trigger History:</h4>
      <ul className="log-list">
        {effectLogs.logs.map((log) => (
          <li key={log.id}>
            #{log.id} @ {log.timestamp} — {log.charLength} chars ({log.durationMs}ms)
          </li>
        ))}
      </ul>
    </div>
  );
}
