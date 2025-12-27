FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY faq.html /usr/share/nginx/html/faq.html

COPY assets /usr/share/nginx/html/assets
COPY styles /usr/share/nginx/html/styles
COPY scripts /usr/share/nginx/html/scripts

# Expose HTTP port
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]