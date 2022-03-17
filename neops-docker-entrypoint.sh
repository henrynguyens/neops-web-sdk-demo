rm -r /usr/share/nginx/html/*
cp -r /app/dist/neops/${NEOPS_WEB_ENVIRONMENT:-prod}/* /usr/share/nginx/html
