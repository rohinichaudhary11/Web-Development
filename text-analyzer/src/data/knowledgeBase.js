// Knowledge base dictionary for topics and keywords

export const KNOWLEDGE_BASE = {
  java: {
    title: 'Java Programming Language',
    category: 'Software & Technology',
    tag: 'Language',
    icon: '☕',
    accentColor: '#d97706',
    summary: 'Java is a class-based, object-oriented, high-level programming language designed by James Gosling at Sun Microsystems in 1995. It follows the philosophy "Write Once, Run Anywhere" (WORA).',
    details: [
      { label: 'Paradigm', value: 'Object-Oriented, Multi-paradigm, Concurrent' },
      { label: 'Original Creator', value: 'James Gosling (Sun Microsystems / Oracle)' },
      { label: 'First Released', value: 'May 23, 1995' },
      { label: 'Execution Model', value: 'Compiled to Bytecode, executed on JVM (Java Virtual Machine)' },
    ],
    keyPoints: [
      'Runs on over 3 billion devices worldwide including Android smartphones, enterprise servers, and embedded hardware.',
      'Automatic Memory Management using robust Garbage Collection.',
      'Core foundation for major enterprise frameworks like Spring Boot, Hibernate, and Apache Kafka.',
      'Strictly typed language with strong backward compatibility across versions.'
    ],
    tags: ['JVM', 'Spring Boot', 'Object-Oriented', 'Android', 'Enterprise', 'Bytecode']
  },

  react: {
    title: 'React.js',
    category: 'Web Development',
    tag: 'UI Library',
    icon: '⚛️',
    accentColor: '#0284c7',
    summary: 'React is a free and open-source front-end JavaScript library created by Meta (Facebook) for building component-based user interfaces and single-page applications.',
    details: [
      { label: 'Original Creator', value: 'Jordan Walke (Meta / Facebook)' },
      { label: 'Initial Release', value: 'May 29, 2013' },
      { label: 'Core Mechanism', value: 'Virtual DOM & Declarative JSX' },
      { label: 'Popular Ecosystem', value: 'Next.js, Redux, React Native, Vite' },
    ],
    keyPoints: [
      'Uses a Virtual DOM to optimize UI updates and minimize expensive browser re-renders.',
      'Hooks system (useState, useEffect, useMemo) enables modular function components.',
      'Unidirectional data flow makes application state predictable and easy to debug.',
      'Powers major platforms like Facebook, Instagram, WhatsApp Web, and Netflix.'
    ],
    tags: ['JavaScript', 'Frontend', 'Virtual DOM', 'JSX', 'Hooks', 'Meta']
  },

  python: {
    title: 'Python',
    category: 'Software & Data Science',
    tag: 'Language',
    icon: '🐍',
    accentColor: '#2563eb',
    summary: 'Python is a high-level, interpreted, general-purpose programming language renowned for its clean readability, easy learning curve, and dominant presence in AI and Data Science.',
    details: [
      { label: 'Creator', value: 'Guido van Rossum' },
      { label: 'First Released', value: 'February 20, 1991' },
      { label: 'Primary Uses', value: 'Artificial Intelligence, Machine Learning, Data Analysis, Web Backends' },
      { label: 'Famous Libraries', value: 'NumPy, Pandas, PyTorch, TensorFlow, Django, FastAPI' },
    ],
    keyPoints: [
      'Uses indentation for block scope, creating exceptionally clean and readable code.',
      'De facto standard language for Artificial Intelligence, Machine Learning, and Neural Networks.',
      'Dynamically typed with an extensive standard library ("Batteries Included").',
      'Supported by a massive open-source package index (PyPI).'
    ],
    tags: ['AI / Machine Learning', 'Data Science', 'Django', 'PyTorch', 'Interpreted']
  },

  javascript: {
    title: 'JavaScript (JS)',
    category: 'Web Technology',
    tag: 'Language',
    icon: '🟨',
    accentColor: '#ca8a04',
    summary: 'JavaScript is a lightweight, interpreted or JIT-compiled programming language with first-class functions. It is the programming language of the Web.',
    details: [
      { label: 'Creator', value: 'Brendan Eich (Netscape)' },
      { label: 'Creation Time', value: 'Created in 10 days in May 1995' },
      { label: 'Specification', value: 'ECMAScript (ECMA-262)' },
      { label: 'Runtimes', value: 'Web Browsers (V8, JavaScriptCore), Node.js, Deno, Bun' },
    ],
    keyPoints: [
      'Runs natively in all modern web browsers alongside HTML and CSS.',
      'Single-threaded event loop model enables efficient non-blocking asynchronous I/O.',
      'Powers both frontend (React, Vue, Angular) and backend (Node.js) applications.',
      'Constantly evolving with annual ECMAScript standard updates.'
    ],
    tags: ['Web', 'ECMAScript', 'Node.js', 'Frontend', 'Async', 'Event Loop']
  },

  js: {
    title: 'JavaScript (JS)',
    category: 'Web Technology',
    tag: 'Language',
    icon: '🟨',
    accentColor: '#ca8a04',
    summary: 'JavaScript is the core scripting language that powers interactive behavior on the web.',
    details: [
      { label: 'Creator', value: 'Brendan Eich' },
      { label: 'Standard', value: 'ECMAScript' },
    ],
    keyPoints: ['Powers 98%+ of all web applications on the internet.'],
    tags: ['Web', 'Frontend', 'Node.js']
  },

  html: {
    title: 'HTML (HyperText Markup Language)',
    category: 'Web Standard',
    tag: 'Markup Language',
    icon: '🌐',
    accentColor: '#ea580c',
    summary: 'HTML is the standard markup language used to structure and present content on the World Wide Web.',
    details: [
      { label: 'Creator', value: 'Tim Berners-Lee (CERN)' },
      { label: 'First Version', value: '1993' },
      { label: 'Current Version', value: 'HTML5' },
    ],
    keyPoints: [
      'Defines the semantic skeleton of web pages using tags like <header>, <article>, and <div>.',
      'Standardized by the WHATWG and W3C web consortiums.',
    ],
    tags: ['Web', 'DOM', 'Structure', 'HTML5', 'Markup']
  },

  css: {
    title: 'CSS (Cascading Style Sheets)',
    category: 'Web Design',
    tag: 'Style Sheet',
    icon: '🎨',
    accentColor: '#0284c7',
    summary: 'CSS is a style sheet language used for describing the presentation, visual aesthetics, layout, and responsiveness of an HTML document.',
    details: [
      { label: 'Creator', value: 'Håkon Wium Lie' },
      { label: 'First Version', value: 'December 1996' },
      { label: 'Key Features', value: 'Flexbox, CSS Grid, Media Queries, Custom Properties (Variables)' },
    ],
    keyPoints: [
      'Separates content structure (HTML) from visual presentation and design.',
      'Supports responsive mobile-first layouts with Flexbox and CSS Grid.',
    ],
    tags: ['Design', 'Flexbox', 'Grid', 'Styling', 'UI']
  },

  cplusplus: {
    title: 'C++',
    category: 'Software Engineering',
    tag: 'Language',
    icon: '⚡',
    accentColor: '#0d9488',
    summary: 'C++ is a cross-platform language created by Bjarne Stroustrup as an extension of the C programming language, delivering high performance and hardware access.',
    details: [
      { label: 'Creator', value: 'Bjarne Stroustrup' },
      { label: 'Year', value: '1985' },
      { label: 'Uses', value: 'Game Development (Unreal Engine), Operating Systems, Game Engines, High-Frequency Trading' }
    ],
    keyPoints: [
      'Direct control over system memory and hardware registers.',
      'Powers major game engines, browsers, and real-time graphics applications.'
    ],
    tags: ['High Performance', 'Memory Control', 'Game Engines', 'Systems']
  },

  cpp: {
    title: 'C++',
    category: 'Software Engineering',
    tag: 'Language',
    icon: '⚡',
    accentColor: '#0d9488',
    summary: 'C++ is an extension of C with object-oriented capabilities and maximum execution performance.',
    details: [{ label: 'Creator', value: 'Bjarne Stroustrup' }],
    keyPoints: ['Extremely fast execution with low-level memory access.'],
    tags: ['C++', 'Performance', 'Systems']
  },

  sql: {
    title: 'SQL (Structured Query Language)',
    category: 'Database Management',
    tag: 'Query Language',
    icon: '🗄️',
    accentColor: '#4f46e5',
    summary: 'SQL is the domain-specific language used for managing, querying, and manipulating relational database management systems (RDBMS).',
    details: [
      { label: 'Creators', value: 'Donald D. Chamberlin & Raymond F. Boyce (IBM)' },
      { label: 'Popular Engines', value: 'PostgreSQL, MySQL, SQLite, Microsoft SQL Server, Oracle' }
    ],
    keyPoints: [
      'Standardized language for querying tables, relationships, joins, and aggregates.',
      'Ensures ACID compliance (Atomicity, Consistency, Isolation, Durability) for transaction safety.'
    ],
    tags: ['Database', 'PostgreSQL', 'MySQL', 'Relational', 'Queries']
  },

  ai: {
    title: 'Artificial Intelligence (AI)',
    category: 'Computer Science',
    tag: 'Field of Study',
    icon: '🤖',
    accentColor: '#7c3aed',
    summary: 'Artificial Intelligence refers to the simulation of human intelligence in machines programmed to learn, reason, perceive, and solve complex problems.',
    details: [
      { label: 'Subfields', value: 'Machine Learning, Deep Learning, Natural Language Processing, Computer Vision' },
      { label: 'Key Architectures', value: 'Transformers, Neural Networks, Large Language Models (LLMs)' }
    ],
    keyPoints: [
      'Powers modern breakthrough technologies like ChatGPT, Gemini, autonomous driving, and medical diagnosis.',
      'Driven by modern GPU acceleration, big data datasets, and deep neural network architectures.'
    ],
    tags: ['Machine Learning', 'LLMs', 'Neural Networks', 'Automation', 'Deep Learning']
  },

  docker: {
    title: 'Docker & Containerization',
    category: 'DevOps & Cloud',
    tag: 'Tooling',
    icon: '🐳',
    accentColor: '#0284c7',
    summary: 'Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in lightweight packages called containers.',
    details: [
      { label: 'Initial Release', value: '2013' },
      { label: 'Ecosystem', value: 'Docker Hub, Kubernetes, Docker Compose' }
    ],
    keyPoints: [
      'Eliminates the "it works on my machine" problem by bundling code with all system dependencies.',
      'Lightweight alternative to traditional Virtual Machines (VMs).'
    ],
    tags: ['Containers', 'DevOps', 'Cloud', 'Kubernetes']
  },

  india: {
    title: 'India (Bharat)',
    category: 'Geography & Culture',
    tag: 'Nation',
    icon: '🇮🇳',
    accentColor: '#16a34a',
    summary: 'India is a country in South Asia, the world\'s most populous nation, and the largest democracy. Known for rich ancient heritage, diverse cultures, and a booming tech economy.',
    details: [
      { label: 'Capital', value: 'New Delhi' },
      { label: 'Official Languages', value: 'Hindi, English (plus 22 recognized regional languages)' },
      { label: 'Major Tech Hubs', value: 'Bengaluru, Hyderabad, Pune, NCR, Chennai, Mumbai' }
    ],
    keyPoints: [
      'Home to one of the world\'s fastest-growing major economies and digital infrastructure (UPI).',
      'Birthplace of major ancient civilizations, yoga, and world religions.'
    ],
    tags: ['South Asia', 'Democracy', 'Tech Hub', 'History']
  }
};

/**
 * Intelligent topic lookup function.
 * Matches input text against known topics or generates dynamic metadata analysis.
 */
export function lookupTopicInfo(text) {
  if (!text || !text.trim()) return null;

  const rawLower = text.trim().toLowerCase();
  const words = rawLower.split(/\s+/).map(w => w.replace(/[^a-z0-9]/g, '')).filter(Boolean);

  // 1. Direct key match
  if (KNOWLEDGE_BASE[rawLower]) {
    return KNOWLEDGE_BASE[rawLower];
  }

  // 2. Word match in knowledge base keys
  for (const word of words) {
    if (KNOWLEDGE_BASE[word]) {
      return KNOWLEDGE_BASE[word];
    }
  }

  // 3. Partial match inside titles/summaries
  for (const [key, item] of Object.entries(KNOWLEDGE_BASE)) {
    if (item.title.toLowerCase().includes(rawLower) || rawLower.includes(key)) {
      return item;
    }
  }

  // 4. Dynamic Topic Analyzer for general / unlisted text inputs
  const charCount = text.length;
  const wordCount = words.length;
  const isQuestion = text.includes('?');
  const isCode = text.includes('{') || text.includes('function') || text.includes('def ') || text.includes('var ') || text.includes('const ');
  
  let topicCategory = 'General Text / Sentence';
  let tag = 'General';
  let icon = '📝';
  let accent = '#4b5563';

  if (isCode) {
    topicCategory = 'Code Snippet / Script';
    tag = 'Source Code';
    icon = '💻';
    accent = '#2563eb';
  } else if (isQuestion) {
    topicCategory = 'Inquiry / Question';
    tag = 'Question';
    icon = '❓';
    accent = '#7c3aed';
  } else if (wordCount === 1) {
    topicCategory = 'Custom Term / Concept';
    tag = 'Word';
    icon = '🔍';
    accent = '#059669';
  }

  return {
    title: `Information about "${text.trim().slice(0, 30)}${text.trim().length > 30 ? '...' : ''}"`,
    category: topicCategory,
    tag: tag,
    icon: icon,
    accentColor: accent,
    summary: `Analysis of typed text containing ${wordCount} word${wordCount !== 1 ? 's' : ''} and ${charCount} character${charCount !== 1 ? 's' : ''}.`,
    details: [
      { label: 'Input Length', value: `${charCount} characters` },
      { label: 'Word Count', value: `${wordCount} words` },
      { label: 'Detected Type', value: isCode ? 'Code Syntax' : isQuestion ? 'Interrogative Sentence' : 'Text Statement' },
      { label: 'Reading Time', value: `~${Math.max(1, Math.ceil(wordCount / 200 * 60))} seconds` }
    ],
    keyPoints: [
      `Text contains ${words.length} distinct terms.`,
      isQuestion ? 'Formulated as a question.' : 'Formulated as a text description or term input.',
      `Analyzed in real-time using React's useEffect hook.`
    ],
    tags: words.slice(0, 5)
  };
}
