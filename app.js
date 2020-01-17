const clima = require("./clima/clima");
const lugar = require("./lugar/lugar");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad",
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatitud(direccion);
        const tempe = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${ tempe}`
    } catch (error) {
        return `No SE PUDO DETERMINAR EL CLIMA ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log())
    .catch(console.log())