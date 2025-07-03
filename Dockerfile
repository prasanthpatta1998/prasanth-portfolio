# -------- STAGE 1: Build the React app --------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# -------- STAGE 2: Serve with Distroless Nginx --------
FROM gcr.io/distroless/nginx-static

# Distroless expects the static site to be in /www
COPY --from=builder /app/build /www

# This base image already listens on port 8080
# So no CMD or EXPOSE needed — it's all predefined
