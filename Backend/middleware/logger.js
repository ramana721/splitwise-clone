const morgan = require('morgan');
const colors = require('colors');

// Time token
morgan.token('time', () => {
  return new Date().toLocaleTimeString('en-GB', { hour12: false });
});

// CLF date token
morgan.token('clf-date', () => {
  return new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
});

// Service name hostname in dot env file
morgan.token('service', () => {
  return process.env.HOSTNAME || 'web';
});

// Status color -- 500 error 400 - unauthorized or page not found errors
morgan.token('statusColor', (req, res) => {
  const status = res.statusCode;
  if (status >= 500) return String(status).red;
  if (status >= 400) return String(status).yellow;
  return String(status).green;
});

// Export middleware
module.exports = morgan((tokens, req, res) => {
  return [
    tokens.time(req, res).green,
    tokens.service(req, res).cyan,
    '|'.gray,
    tokens['remote-addr'](req, res),
    '- -',
    `[${tokens['clf-date'](req, res)}]`,
    `"${tokens.method(req, res)} ${tokens.url(req, res)} HTTP/${tokens['http-version'](
      req,
      res
    )}"`.yellow,
    tokens.statusColor(req, res),
    '-'
  ].join(' ');
});
