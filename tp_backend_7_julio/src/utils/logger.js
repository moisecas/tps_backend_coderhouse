const {createLogger,format,transports} = require ('winston');

module.exports = createLogger({
    format: format.combine(format.colorize(),
    format.simple(),
    format.timestamp(),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`), //mensaje modificado a nuestro gusto con los datos que quiero mostrar
    ), //formato para que se vea bonito en consola o etenible
    transports: [ //recibe un objeto como parametro
        new transports.File({
            maxsize: 5242880, //5MB, peso maximo del archivo
            maxFiles: 5, //numero maximo de archivos, si se sobrepasa se elimina el mas viejo, soporta solo 5 archivos
            filename: `${__dirname}/../logs/log-api.log`, //ruta del archivo, donde vamos a mostrar el estado de los mensajes de respuesta del servidor en consola
        }), //el objeto es una instancia de File
        new transports.Console({
            level:'debug', //estos niveles estan en la documentacion de winston 
             
            
        })
    ]
});