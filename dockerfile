FROM node:18-alpine

WORKDIR /app

# Instalamos la CLI de Expo globalmente
RUN npm install -g expo-cli

# Exponemos los puertos necesarios para Expo
EXPOSE 8081 19000 19001 19002

CMD ["sh"]