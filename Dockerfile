# Build stage
FROM node:20 AS builder

WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source files
COPY . .

# Build the app (compiles TS, builds .next)
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
ENV NODE_ENV=production

CMD ["npx", "next", "start"]
