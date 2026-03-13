import http from 'http';
import https from 'https';

const req = https.request({
  hostname: 'ais-dev-bf3q3b7ur3usivrunwbvwh-226599077585.us-west2.run.app',
  port: 443,
  path: '/api/health',
  method: 'GET',
}, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Body:', data);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();
