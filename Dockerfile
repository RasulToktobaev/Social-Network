#Используем образ Lunux Alpine с версией node 14.

FROM node:19.5.0-alpine

 #Указываем нашу рабочую дирикторию
 WORKDIR /app

#Скопировать package.json , package-lock.json внутрь контейнера
COPY package.json ./

#Устанавливаем зависимости
RUN npm install

#Копируем оставшееся приложение в контейнер
COPY . .

#Установить prisma
RUN npm install -g prisma

#Генерируем Prisma client
RUN prisma generate

#Копируем prisma-schema
COPY prisma/schema.prisma ./prisma/

#Открыть порт в нашем контейнере
EXPOSE 3000

#Запускаем наш сервер

CMD npm start

