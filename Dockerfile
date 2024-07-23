# syntax = docker/dockerfile:1

# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.1.20
FROM oven/bun:${BUN_VERSION}-slim as base

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3

# Mount the GH_NPM_TOKEN secret and use it to create bunfig.toml
RUN --mount=type=secret,id=GH_NPM_TOKEN \
    echo '[install.scopes]' > bunfig.toml && \
    echo 'neodyland = { token = "'$(cat /run/secrets/GH_NPM_TOKEN)'", url = "https://npm.pkg.github.com/" }' >> bunfig.toml

# Install node modules
COPY --link bun.lockb package.json ./
RUN bun install

# Copy application code
COPY --link . .

# Build application
RUN bun run build

# Remove development dependencies
RUN rm -rf node_modules && \
    bun install --ci

# Remove bunfig.toml to avoid token leakage
RUN rm -f bunfig.toml

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app/.next/standalone /app
COPY --from=build /app/.next/static /app/.next/static
COPY --from=build /app/public /app/public

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "server.js" ]