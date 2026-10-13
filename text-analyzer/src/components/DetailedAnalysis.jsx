import React from 'react';

export function DetailedAnalysis({ stats }) {
  return (
    <div className="info-card">
      <h3 className="card-heading">Detailed Information</h3>
      <table className="info-table">
        <tbody>
          <tr>
            <th>Characters (no spaces)</th>
            <td>{stats.charNoSpaces}</td>
          </tr>
          <tr>
            <th>Spaces Count</th>
            <td>{stats.spaceCount}</td>
          </tr>
          <tr>
            <th>Uppercase Letters</th>
            <td>{stats.uppercaseCount}</td>
          </tr>
          <tr>
            <th>Lowercase Letters</th>
            <td>{stats.lowercaseCount}</td>
          </tr>
          <tr>
            <th>Digits (0-9)</th>
            <td>{stats.digitCount}</td>
          </tr>
          <tr>
            <th>Special Characters</th>
            <td>{stats.specialCount}</td>
          </tr>
          <tr>
            <th>Vowels / Consonants</th>
            <td>{stats.vowelsCount} / {stats.consonantsCount}</td>
          </tr>
          <tr>
            <th>Avg Word Length</th>
            <td>{stats.avgWordLength} chars</td>
          </tr>
          <tr>
            <th>Longest Word</th>
            <td>{stats.longestWord || 'N/A'}</td>
          </tr>
          <tr>
            <th>Readability Grade</th>
            <td>{stats.readabilityGrade}</td>
          </tr>
          <tr>
            <th>Text Sentiment</th>
            <td>{stats.sentiment}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
