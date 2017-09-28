.PHONY: loader-builder dev-build dev-start dist start
.DEFAULt: all

all: install dist

dev: install dev-dist
 
loader-builder:
	@./node_modules/loader-builder/bin/builder ./src/server/views ./src/server

dev-build: loader-builder
	@WEB_PORT=3001 PORT=3001 npm run build -- --release

dist: loader-builder
	@NODE_ENV=production WEB_PORT=3000 PORT=3000 npm run build -- --release

start:
	@NODE_ENV=production WEB_PORT=3000 PORT=3000 pm2 start server.js -- --release

install:
	@npm install

dev-dist: loader-builder
	@NODE_ENV=pre WEB_PORT=3000 PORT=3000 npm run build -- --release

dev-start:
	@NODE_ENV=pre WEB_PORT=3000 PORT=3000 pm2 start server.js -- --release