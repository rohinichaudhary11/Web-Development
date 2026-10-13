import { useState, useEffect } from 'react';
import { lookupTopicInfo } from '../data/knowledgeBase';

/**
 * Custom React Hook using `useEffect` to reactively look up detailed information
 * about whatever text is typed into the textbox.
 *
 * @param {string} text - User input text from the textbox
 * @returns {{ topicInfo: Object|null, stats: Object, effectLogs: Object }}
 */
export function useTextAnalyzer(text) {
  const [topicInfo, setTopicInfo] = useState(null);
  const [stats, setStats] = useState({
    charCount: 0,
    wordCount: 0,
    sentenceCount: 0,
    readingTimeSeconds: 0,
  });

  const [effectLogs, setEffectLogs] = useState({
    triggerCount: 0,
    lastExecutionTime: null,
    calculationDurationMs: 0,
    logs: []
  });

  // -------------------------------------------------------------
  // REACT USEEFFECT HOOK
  // Runs every time `text` changes in the input textbox!
  // -------------------------------------------------------------
  useEffect(() => {
    const startTime = performance.now();
    const rawText = text || '';
    const trimmed = rawText.trim();

    // 1. Calculate basic metrics
    const charCount = rawText.length;
    const wordsArray = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
    const wordCount = wordsArray.length;
    const sentenceCount = trimmed ? (trimmed.split(/[.!?]+/).filter(Boolean).length || 1) : 0;
    const readingTimeSeconds = Math.ceil((wordCount / 200) * 60);

    setStats({
      charCount,
      wordCount,
      sentenceCount,
      readingTimeSeconds
    });

    // 2. Look up detailed topic information based on typed text
    const info = lookupTopicInfo(rawText);
    setTopicInfo(info);

    const endTime = performance.now();
    const durationMs = +(endTime - startTime).toFixed(2);

    // 3. Update useEffect execution telemetry
    setEffectLogs((prev) => {
      const newTriggerCount = prev.triggerCount + 1;
      const timestamp = new Date().toLocaleTimeString();
      return {
        triggerCount: newTriggerCount,
        lastExecutionTime: timestamp,
        calculationDurationMs: durationMs,
        logs: [
          { id: newTriggerCount, timestamp, input: rawText.slice(0, 20), durationMs },
          ...prev.logs
        ].slice(0, 5)
      };
    });

  }, [text]); // <-- Dependency array: triggers whenever input text updates!

  return { topicInfo, stats, effectLogs };
}
