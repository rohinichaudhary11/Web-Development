import React from 'react';
import { Sparkles, FileText, Code2, ThumbsUp, BookOpen } from 'lucide-react';

const PRESETS = [
  {
    id: 'tech',
    label: 'Tech Article',
    icon: FileText,
    text: `React 19 introduces powerful paradigm shifts in full-stack web application development. With Server Components, actions, and automatic memoization, developers can write cleaner code with fewer render bottlenecks. The useEffect hook remains a fundamental building block for sync tasks, subscription setups, and reactive state derivation. Building responsive user interfaces requires intuitive visual state management and modular design systems.`,
  },
  {
    id: 'review',
    label: 'Positive Review',
    icon: ThumbsUp,
    text: `I absolutely love this new text analyzer tool! It is remarkably fast, elegant, and gives instant insights on character counts, reading time, and readability metrics. The clean dark mode design and smooth animations make it a sheer delight to use every single day. Highly recommended for writers, students, and software engineers alike!`,
  },
  {
    id: 'code',
    label: 'Code Snippet',
    icon: Code2,
    text: `function calculateStats(input) {\n  const length = input.length;\n  const words = input.trim().split(/\\s+/).filter(Boolean);\n  return { length, count: words.length };\n}\n\n// Trigger effect on state change\nuseEffect(() => {\n  console.log("Analyzing text in real-time...");\n}, [text]);`,
  },
  {
    id: 'story',
    label: 'Creative Story',
    icon: BookOpen,
    text: `Under the glowing neon lights of the subterranean city, Orion adjusted his cybernetic optical lenses. Rain glistened on the obsidian asphalt as synthetic hovercars glided silently past towering holographic billboards. He pulled out his pocket terminal and typed a encrypted message to the Resistance. Every character mattered; a single extra space could compromise their location signal across the grid.`,
  }
];

export function SamplePresets({ onSelectPreset }) {
  return (
    <div className="presets-wrapper">
      <span className="preset-label">
        <Sparkles size={14} /> Try Sample Presets:
      </span>
      <div className="preset-buttons">
        {PRESETS.map((preset) => {
          const Icon = preset.icon;
          return (
            <button
              key={preset.id}
              className="preset-btn"
              onClick={() => onSelectPreset(preset.text)}
            >
              <Icon size={14} /> {preset.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
