# Utiliza una imagen base de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Instala serve globalmente
RUN npm install -g serve

# Copia todo el contenido del proyecto al contenedor
COPY . .

# Cambiar propietario de node_modules para evitar problemas de permisos
RUN chown -R node:node /app/node_modules

# Exponer el puerto 3000
EXPOSE 3000

# Usuario no root
USER node

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "start"]
