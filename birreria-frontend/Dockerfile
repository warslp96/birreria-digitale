# Fase 1: Compilazione
FROM node:20 AS build
WORKDIR /app

# Copiamo i file di configurazione delle dipendenze
COPY package*.json ./

# Installiamo tutte le dipendenze in modo pulito
RUN npm install

# Copiamo tutto il codice sorgente del progetto
COPY . .

# Usiamo lo script nativo di npm che richiama l'eseguibile corretto
RUN npm run build -- --configuration=production

# Fase 2: Server Web Nginx
FROM nginx:alpine
# Usiamo l'asterisco per essere flessibili sul percorso di output della build
COPY --from=build /app/dist/*/browser /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]