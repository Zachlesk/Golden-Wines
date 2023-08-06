import express from 'express';
import dotenv from 'dotenv';
import Server from './models/server.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use('/public', express.static(`${__dirname}/storage/images`))

dotenv.config();

const server = new Server();

server.listen();