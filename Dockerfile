# Build the CSS
FROM node:20-alpine AS builder

WORKDIR /app

RUN npm init -y && \
    npm install -D tailwindcss@3.4.1 @tailwindcss/typography

COPY . .

# Run the Tailwind Compiler
RUN npx tailwindcss -i ./styles/input.css -o ./styles/site.css --minify

# Serve the Site
FROM nginx:alpine

# Removing the default so I can copy in my custom config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
COPY faq.html /usr/share/nginx/html/faq.html
COPY changelog.html /usr/share/nginx/html/changelog.html

COPY changelog.md /usr/share/nginx/html/changelog.md

COPY assets /usr/share/nginx/html/assets
COPY scripts /usr/share/nginx/html/scripts
COPY --from=builder /app/styles/site.css /usr/share/nginx/html/styles/site.css

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]