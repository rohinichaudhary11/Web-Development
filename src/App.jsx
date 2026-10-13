import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  // 1. Personal API URL (Editable so you can connect ANY custom API!)
  const [apiUrl, setApiUrl] = useState('http://localhost:5000/api/files');
  const [apiConnected, setApiConnected] = useState(false);

  // 2. Input states for file operations
  const [filename, setFilename] = useState('sample.txt');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // 3. Inspection states to clearly see fetch() in action
  const [fetchCode, setFetchCode] = useState('// Click any button to see your fetch() call in action');
  const [responseOutput, setResponseOutput] = useState(null);
  const [fileList, setFileList] = useState([]);

  // Check connection to the personal API
  const testApiConnection = async (url = apiUrl) => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        setApiConnected(true);
        const data = await res.json();
        setFileList(data.files || []);
        setMessage({ type: 'success', text: `Connected to API at: ${url}` });
      } else {
        setApiConnected(false);
        setMessage({ type: 'error', text: `API responded with status: ${res.status}` });
      }
    } catch (err) {
      setApiConnected(false);
      setMessage({ type: 'error', text: `Could not connect to API at: ${url}. Make sure your server is running!` });
    }
  };

  useEffect(() => {
    testApiConnection();
    handleGet('sample.txt');
  }, []);

  // -----------------------------------------------------------------
  // 1. GET (Read File using fetch)
  // -----------------------------------------------------------------
  const handleGet = async (target = filename) => {
    const file = target.trim();
    if (!file) {
      setMessage({ type: 'error', text: 'Please enter a file name.' });
      return;
    }

    const requestUrl = `${apiUrl}?name=${encodeURIComponent(file)}`;
    const code = `// 1. GET Request to your personal API
fetch('${requestUrl}', {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
})
.then(response => response.json())
.then(data => {
  console.log('File Content:', data.content);
});`;

    setFetchCode(code);
    setLoading(true);

    try {
      const res = await fetch(requestUrl, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      });
      const data = await res.json();

      setResponseOutput({
        status: `${res.status} ${res.ok ? 'OK' : 'Error'}`,
        ok: res.ok,
        data
      });

      if (res.ok) {
        setContent(data.content !== undefined ? data.content : '');
        setMessage({ type: 'success', text: `Successfully read "${file}" (Status: ${res.status})` });
        setApiConnected(true);
      } else {
        setMessage({ type: 'error', text: data.error || `File "${file}" not found` });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Connection failed: ' + err.message });
      setResponseOutput({ status: 'Failed', ok: false, data: { error: err.message } });
      setApiConnected(false);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------------------------------
  // 2. POST (Create File using fetch)
  // -----------------------------------------------------------------
  const handlePost = async () => {
    const file = filename.trim();
    if (!file) {
      setMessage({ type: 'error', text: 'Please enter a file name to create.' });
      return;
    }

    const payload = { filename: file, content };
    const code = `// 2. POST Request to your personal API
fetch('${apiUrl}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(${JSON.stringify(payload, null, 2)})
})
.then(response => response.json())
.then(data => {
  console.log('Created:', data);
});`;

    setFetchCode(code);
    setLoading(true);

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      setResponseOutput({
        status: `${res.status} ${res.ok ? 'Created' : 'Error'}`,
        ok: res.ok,
        data
      });

      if (res.ok) {
        setMessage({ type: 'success', text: `File "${file}" created on server! (Status: ${res.status})` });
        testApiConnection(); // Refresh file list
      } else {
        setMessage({ type: 'error', text: data.error || `Failed to create file (Status: ${res.status})` });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Connection failed: ' + err.message });
      setResponseOutput({ status: 'Failed', ok: false, data: { error: err.message } });
      setApiConnected(false);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------------------------------
  // 3. PUT (Update File using fetch)
  // -----------------------------------------------------------------
  const handlePut = async () => {
    const file = filename.trim();
    if (!file) {
      setMessage({ type: 'error', text: 'Please enter a file name to update.' });
      return;
    }

    const payload = { filename: file, content };
    const code = `// 3. PUT Request to your personal API
fetch('${apiUrl}', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(${JSON.stringify(payload, null, 2)})
})
.then(response => response.json())
.then(data => {
  console.log('Updated:', data);
});`;

    setFetchCode(code);
    setLoading(true);

    try {
      const res = await fetch(apiUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      setResponseOutput({
        status: `${res.status} ${res.ok ? 'OK' : 'Error'}`,
        ok: res.ok,
        data
      });

      if (res.ok) {
        setMessage({ type: 'success', text: `File "${file}" updated on server! (Status: ${res.status})` });
        testApiConnection();
      } else {
        setMessage({ type: 'error', text: data.error || `Failed to update file (Status: ${res.status})` });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Connection failed: ' + err.message });
      setResponseOutput({ status: 'Failed', ok: false, data: { error: err.message } });
      setApiConnected(false);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------------------------------
  // 4. DELETE (Delete File using fetch)
  // -----------------------------------------------------------------
  const handleDelete = async () => {
    const file = filename.trim();
    if (!file) {
      setMessage({ type: 'error', text: 'Please enter a file name to delete.' });
      return;
    }

    const requestUrl = `${apiUrl}?name=${encodeURIComponent(file)}`;
    const code = `// 4. DELETE Request to your personal API
fetch('${requestUrl}', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => {
  console.log('Deleted:', data);
});`;

    setFetchCode(code);
    setLoading(true);

    try {
      const res = await fetch(requestUrl, {
        method: 'DELETE'
      });
      const data = await res.json();

      setResponseOutput({
        status: `${res.status} ${res.ok ? 'OK' : 'Error'}`,
        ok: res.ok,
        data
      });

      if (res.ok) {
        setMessage({ type: 'success', text: `File "${file}" deleted from server! (Status: ${res.status})` });
        setContent('');
        testApiConnection();
      } else {
        setMessage({ type: 'error', text: data.error || `Failed to delete file (Status: ${res.status})` });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Connection failed: ' + err.message });
      setResponseOutput({ status: 'Failed', ok: false, data: { error: err.message } });
      setApiConnected(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>File Operations using Fetch API</h1>
      <p className="subtitle">
        Connect your own Node.js API and test GET, POST, PUT, and DELETE operations.
      </p>

      {/* API Connection Bar */}
      <div className="api-config-box">
        <div className="api-config-header">
          <span className="api-config-title">Connected API Endpoint:</span>
          <span className={`api-status-badge ${apiConnected ? 'status-connected' : 'status-disconnected'}`}>
            {apiConnected ? '● Online & Connected' : '○ Offline / Not Connected'}
          </span>
        </div>
        <div className="api-input-row">
          <input
            id="api-url-input"
            type="text"
            className="api-url-input"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            placeholder="http://localhost:5000/api/files"
          />
          <button
            id="btn-test-connection"
            className="btn-test-api"
            onClick={() => testApiConnection(apiUrl)}
            type="button"
          >
            Connect / Test
          </button>
        </div>
      </div>

      {/* Status Message */}
      {message && (
        <div className={`status-msg ${message.type === 'success' ? 'msg-success' : 'msg-error'}`}>
          {message.text}
        </div>
      )}

      {/* Text Box: File Name */}
      <div className="form-group">
        <label htmlFor="filename-box">File Name (Text Box):</label>
        <input
          id="filename-box"
          type="text"
          placeholder="Enter file name (e.g. myfile.txt)"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
      </div>

      {/* Text Area: File Content */}
      <div className="form-group">
        <label htmlFor="content-box">File Content (Text Area):</label>
        <textarea
          id="content-box"
          placeholder="Enter the file text or content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* 4 Colored Yellow Buttons */}
      <div className="buttons-row">
        <button
          id="btn-get"
          className="btn-yellow"
          onClick={() => handleGet()}
          disabled={loading}
          type="button"
        >
          GET (Read)
        </button>

        <button
          id="btn-post"
          className="btn-yellow"
          onClick={handlePost}
          disabled={loading}
          type="button"
        >
          POST (Create)
        </button>

        <button
          id="btn-put"
          className="btn-yellow"
          onClick={handlePut}
          disabled={loading}
          type="button"
        >
          PUT (Update)
        </button>

        <button
          id="btn-delete"
          className="btn-yellow"
          onClick={handleDelete}
          disabled={loading}
          type="button"
        >
          DELETE (Delete)
        </button>
      </div>

      {/* Server Files List */}
      <div className="files-section">
        <div className="files-title">
          <span>Files in your API Storage ({fileList.length}):</span>
          <button className="refresh-link" onClick={() => testApiConnection(apiUrl)} type="button">
            Refresh List
          </button>
        </div>
        <div className="files-chips">
          {fileList.length === 0 ? (
            <span style={{ fontSize: '0.85rem', color: '#888888' }}>
              No files currently stored. Type a name & content, then click POST!
            </span>
          ) : (
            fileList.map((f) => (
              <span
                key={f.name}
                className="file-chip"
                onClick={() => {
                  setFilename(f.name);
                  handleGet(f.name);
                }}
                title="Click to load this file"
              >
                {f.name} ({f.size} B)
              </span>
            ))
          )}
        </div>
      </div>

      {/* Fetch Function Visibility Section */}
      <div className="info-section">
        <div className="info-box">
          <div className="info-header">
            <span>Fetch Function Used:</span>
          </div>
          <pre className="info-content">
            <code>{fetchCode}</code>
          </pre>
        </div>

        {/* Server Response Output */}
        {responseOutput && (
          <div className="info-box">
            <div className="info-header">
              <span>Your API Response:</span>
              <span className={`status-tag ${responseOutput.ok ? 'status-success' : 'status-error'}`}>
                {responseOutput.status}
              </span>
            </div>
            <pre className="info-content">
              <code>{JSON.stringify(responseOutput.data, null, 2)}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
