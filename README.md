📥 Instagram Video Downloader (Dockerizado)

Aplicación web simple que permite descargar videos de Instagram a partir de una URL.
Incluye tres versiones de Dockerfile: básico, optimizado y multistage.

🚀 Tecnologías utilizadas
Node.js
Express
yt-dlp
Docker
📁 Estructura del proyecto
instagram-downloader/
│
├── app.js
├── package.json
├── views/
│   └── index.html
├── downloads/
├── Dockerfile
├── Dockerfile.optimizado
└── Dockerfile.multistage
⚙️ Requisitos

Antes de comenzar, asegúrate de tener instalado:

Git
Docker
📦 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/instagram-downloader.git
cd instagram-downloader
📁 2. Crear carpeta de descargas

Esta carpeta es necesaria para almacenar los videos descargados.

mkdir downloads
🐳 3. Construir las imágenes Docker
🔹 Imagen básica
docker build -t insta-basic .
🔹 Imagen optimizada
docker build -f Dockerfile.optimizado -t insta-opt .
🔹 Imagen multistage
docker build -f Dockerfile.multistage -t insta-pro .
▶️ 4. Ejecutar los contenedores
🔹 Contenedor básico
docker run -d -p 3000:3000 \
-v $(pwd)/downloads:/app/downloads \
--name insta-basic-container insta-basic
🔹 Contenedor optimizado
docker run -d -p 3001:3000 \
-v $(pwd)/downloads:/app/downloads \
--name insta-opt-container insta-opt
🔹 Contenedor multistage
docker run -d -p 3002:3000 \
-v $(pwd)/downloads:/app/downloads \
--name insta-pro-container insta-pro
🌐 5. Acceder a la aplicación

Abrir en el navegador:

http://localhost:3000   → versión básica
http://localhost:3001   → versión optimizada
http://localhost:3002   → versión multistage

📥 6. Uso
Pegar el enlace de un video de Instagram
Hacer clic en "Descargar"
El video se guardará en la carpeta:
/downloads

🧪 7. Verificar descargas
Los archivos descargados estarán en:
instagram-downloader/downloads/

🛑 8. Detener contenedores
docker stop insta-basic-container
docker stop insta-opt-container
docker stop insta-pro-container

❌ 9. Eliminar contenedores
docker rm insta-basic-container
docker rm insta-opt-container
docker rm insta-pro-container

⚠️ Notas importantes
Algunos videos de Instagram pueden no descargarse debido a restricciones de la plataforma.
Se recomienda usar URLs públicas.
El uso de yt-dlp puede requerir actualizaciones si Instagram cambia su sistema.

🧠 Autor
Proyecto desarrollado como práctica de Docker y despliegue en AWS.

📄 Licencia
Uso académico.
