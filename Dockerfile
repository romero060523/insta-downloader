FROM node:18

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN apt-get update && apt-get install -y python3 python3-pip ffmpeg
RUN pip3 install yt-dlp --break-system-packages

EXPOSE 3000

CMD ["node", "app.js"]
