// ===============================================================
// MY PERSONAL API (Pure Node.js - No Express)
// ===============================================================
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 1. Directory and Port Configuration
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STORAGE_DIR = path.join(__dirname, 'storage');
const PORT = 5000;

// Ensure local storage directory exists
await fs.mkdir(STORAGE_DIR, { recursive: true });

// 2. Helper: Enable CORS so browsers can connect to this API
function enableCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
}

// 3. Helper: Send JSON Response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data, null, 2));
}

// 4. Helper: Read JSON payload from request (POST & PUT)
function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body.trim() ? JSON.parse(body) : {});
      } catch (err) {
        reject(new Error('Invalid JSON format: ' + err.message));
      }
    });
    req.on('error', reject);
  });
}

// 5. Create HTTP Server and Define Endpoints
const server = http.createServer(async (req, res) => {
  enableCORS(res);

  // Handle browser preflight check
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = reqUrl.pathname;
  const fileName = reqUrl.searchParams.get('name');

  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${pathname}${reqUrl.search}`);

  // Base Health Check
  if (pathname === '/' || pathname === '/api/health') {
    return sendJson(res, 200, {
      status: 'online',
      message: 'My Personal API is active!',
      port: PORT
    });
  }

  // File CRUD Endpoint: /api/files
  if (pathname === '/api/files') {

    // -----------------------------------------------------------
    // GET: Read file content OR list all existing files
    // -----------------------------------------------------------
    if (req.method === 'GET') {
      try {
        // If no file name provided, list all files in storage
        if (!fileName) {
          const files = await fs.readdir(STORAGE_DIR);
          const fileStats = await Promise.all(
            files.map(async name => {
              const stat = await fs.stat(path.join(STORAGE_DIR, name));
              return { name, size: stat.size };
            })
          );
          return sendJson(res, 200, { success: true, files: fileStats });
        }

        // Read the specified file
        const safeName = path.basename(fileName);
        const filePath = path.join(STORAGE_DIR, safeName);
        const content = await fs.readFile(filePath, 'utf-8');
        return sendJson(res, 200, { success: true, filename: safeName, content });
      } catch (err) {
        return sendJson(res, 404, { success: false, error: `File "${fileName}" not found` });
      }
    }

    // -----------------------------------------------------------
    // POST: Create a new file
    // -----------------------------------------------------------
    if (req.method === 'POST') {
      try {
        const body = await readRequestBody(req);
        if (!body.filename) {
          return sendJson(res, 400, { success: false, error: 'Filename is required' });
        }

        const safeName = path.basename(body.filename);
        const filePath = path.join(STORAGE_DIR, safeName);

        // Save content to file on disk
        await fs.writeFile(filePath, body.content || '', 'utf-8');
        return sendJson(res, 201, {
          success: true,
          message: `File "${safeName}" created successfully!`,
          filename: safeName
        });
      } catch (err) {
        return sendJson(res, 500, { success: false, error: err.message });
      }
    }

    // -----------------------------------------------------------
    // PUT: Update an existing file
    // -----------------------------------------------------------
    if (req.method === 'PUT') {
      try {
        const body = await readRequestBody(req);
        if (!body.filename) {
          return sendJson(res, 400, { success: false, error: 'Filename is required' });
        }

        const safeName = path.basename(body.filename);
        const filePath = path.join(STORAGE_DIR, safeName);

        // Update / overwrite content
        await fs.writeFile(filePath, body.content || '', 'utf-8');
        return sendJson(res, 200, {
          success: true,
          message: `File "${safeName}" updated successfully!`,
          filename: safeName
        });
      } catch (err) {
        return sendJson(res, 500, { success: false, error: err.message });
      }
    }

    // -----------------------------------------------------------
    // DELETE: Delete a file
    // -----------------------------------------------------------
    if (req.method === 'DELETE') {
      try {
        let fileToDelete = fileName;
        if (!fileToDelete) {
          const body = await readRequestBody(req).catch(() => ({}));
          fileToDelete = body.filename;
        }

        if (!fileToDelete) {
          return sendJson(res, 400, { success: false, error: 'Filename is required' });
        }

        const safeName = path.basename(fileToDelete);
        const filePath = path.join(STORAGE_DIR, safeName);

        await fs.unlink(filePath);
        return sendJson(res, 200, {
          success: true,
          message: `File "${safeName}" deleted successfully!`,
          filename: safeName
        });
      } catch (err) {
        return sendJson(res, 404, { success: false, error: `File "${fileName}" not found or already deleted` });
      }
    }

    return sendJson(res, 405, { error: `Method ${req.method} not allowed` });
  }

  // Not found
  sendJson(res, 404, { error: 'Endpoint not found' });
});

// Start the server
server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 My Personal API running at: http://localhost:${PORT}`);
  console.log(`📁 Files are stored in: ${STORAGE_DIR}`);
  console.log(`==================================================\n`);
});
