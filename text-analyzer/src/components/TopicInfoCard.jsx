import React from 'react';

export function TopicInfoCard({ topicInfo, text }) {
  if (!text || !text.trim()) {
    return (
      <div className="empty-info-card">
        <p className="empty-title">💡 Type anything in the box above</p>
        <p className="empty-sub">
          Try typing <strong>java</strong>, <strong>react</strong>, <strong>python</strong>, <strong>javascript</strong>, <strong>html</strong>, <strong>css</strong>, <strong>ai</strong>, <strong>docker</strong>, or any text to display full information!
        </p>
      </div>
    );
  }

  if (!topicInfo) return null;

  return (
    <div className="topic-card">
      {/* Header section with icon, title, and tag */}
      <div className="topic-header">
        <div className="topic-title-area">
          <span className="topic-icon">{topicInfo.icon}</span>
          <div>
            <h2 className="topic-title">{topicInfo.title}</h2>
            <span className="topic-category">{topicInfo.category}</span>
          </div>
        </div>
        <span className="topic-tag-badge" style={{ backgroundColor: `${topicInfo.accentColor}15`, color: topicInfo.accentColor, borderColor: `${topicInfo.accentColor}30` }}>
          {topicInfo.tag}
        </span>
      </div>

      {/* Summary Description */}
      <p className="topic-summary">{topicInfo.summary}</p>

      {/* Metadata Table / Key Details */}
      {topicInfo.details && topicInfo.details.length > 0 && (
        <div className="details-grid">
          {topicInfo.details.map((item, index) => (
            <div key={index} className="detail-item">
              <span className="detail-label">{item.label}</span>
              <span className="detail-val">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Key Points / Features */}
      {topicInfo.keyPoints && topicInfo.keyPoints.length > 0 && (
        <div className="key-points-section">
          <h4 className="section-subtitle">Key Highlights &amp; Features</h4>
          <ul className="points-list">
            {topicInfo.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags / Related Topics */}
      {topicInfo.tags && topicInfo.tags.length > 0 && (
        <div className="tags-row">
          <span className="tags-label">Related:</span>
          {topicInfo.tags.map((tag, index) => (
            <span key={index} className="sub-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
