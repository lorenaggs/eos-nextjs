const path = require('path');
const express = require('express'); // Si no tienes express, puedes usar el middleware nativo de Next
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false;
const app = next({ dev, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Forzar el servicio de archivos estáticos desde la carpeta correcta
    if (pathname.startsWith('/_next/')) {
      handle(req, res, parsedUrl);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(process.env.PORT || 3000);
});