import 'dotenv/config';
import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReplica, getReplicas, generateVideo, getVideos } from './src/api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    
    if (req.method === 'GET' && req.url === '/') {
        try {
            const content = await fs.readFile(path.join(__dirname, 'public', 'index.html'));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        } catch (err) {
            console.error('Error reading index.html:', err);
            res.writeHead(500);
            res.end('Server Error');
        }
    } else if (req.method === 'GET' && req.url === '/styles.css') {
        try {
            const content = await fs.readFile(path.join(__dirname, 'public', 'styles.css'));
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        } catch (err) {
            console.error('Error reading styles.css:', err);
            res.writeHead(500);
            res.end('Server Error');
        }
    } else if (req.method === 'GET' && req.url === '/client.js') {
        try {
            const content = await fs.readFile(path.join(__dirname, 'public', 'client.js'));
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(content);
        } catch (err) {
            console.error('Error reading client.js:', err);
            res.writeHead(500);
            res.end('Server Error');
        }
    } else if (req.method === 'POST' && req.url === '/create-replica') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const { trainVideoUrl } = JSON.parse(body);
                console.log('Received trainVideoUrl:', trainVideoUrl);
                const result = await createReplica(trainVideoUrl);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            } catch (error) {
                console.error('Error creating replica:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: error.message }));
            }
        });
    } else if (req.method === 'GET' && req.url === '/get-replicas') {
        try {
            const replicas = await getReplicas();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(replicas));
        } catch (error) {
            console.error('Error fetching replicas:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
    } else if (req.method === 'POST' && req.url === '/generate-video') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const { script, replicaId } = JSON.parse(body);
                console.log('Received script and replicaId:', script, replicaId);
                const result = await generateVideo(script, replicaId);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            } catch (error) {
                console.error('Error generating video:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: error.message }));
            }
        });
    } else if (req.method === 'GET' && req.url === '/get-videos') {
        try {
            const videos = await getVideos();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(videos));
        } catch (error) {
            console.error('Error fetching videos:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});