FROM node:24-alpine3.21 AS base

# deps 
FROM base AS deps
WORKDIR /app

## Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# builder
FROM base AS builder
WORKDIR /app
ENV NODE_ENV=production

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build --if-present

# runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

## Add user & group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

USER nextjs

## Copy source from builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


CMD ["node", "server.js"]