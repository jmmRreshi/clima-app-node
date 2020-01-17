const axios = require("axios");

const getLugarLatitud = async(dir) => {

    const encondeURL = encodeURI(dir);

    console.log(encondeURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeURL}`,

        headers: { "x-rapidapi-key": "ee16e5e569msh5fbe9c2e8fef590p1901d4jsn0d28a6264ca9" }
    })

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Erro(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatitud
}