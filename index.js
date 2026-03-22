process.chdir(__dirname);
process.env.NODE_ENV = 'production';
// Fix para cPanel/Passenger: Obligar a Next.js a escuchar en IPv4 en lugar de IPv6
process.env.HOSTNAME = '127.0.0.1';
process.env.PORT = process.env.PORT || 3000;
delete process.env.__NEXT_PRIVATE_STANDALONE_CONFIG;

require('./server.js');
