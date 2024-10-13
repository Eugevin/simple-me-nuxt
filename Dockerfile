FROM oven/bun:latest
WORKDIR /app

COPY . .

RUN bun install
CMD bun run build ; bun .output/server/index.mjs
