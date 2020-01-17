const axios = require("axios");

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bf2158f82ac0606c9a823b3d4c69c145&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}