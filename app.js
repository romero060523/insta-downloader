const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

app.post('/download', (req, res) => {
    const url = req.body.url;

    if (!url) {
        return res.send("URL requerida");
    }

    const command = `yt-dlp -o "downloads/%(title)s.%(ext)s" ${url}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error("ERROR:", error);
            return res.send("Error al descargar video");
        }
        res.send("Video descargado correctamente. Revisa la carpeta /downloads");
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
