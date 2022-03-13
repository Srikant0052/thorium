let axios = require("axios")

let getByCity = async function (req, res) {
    try {
        const city = req.query.city;
        // const appId = " 8a164678fb55da9bcdf23398be5a5739"

        const options = {
            "method": "get",
            "url": `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8a164678fb55da9bcdf23398be5a5739`
        }
        const result = await axios(options)
        const data = result.data;
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getWeatherOfCities = async function (req, res) {
    try {
        const cities2 = [];
        const cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        // const appId = " 8a164678fb55da9bcdf23398be5a5739"
        //    const cities1 =cities.forEach((ele, i) => ele.cities[i])
        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            const options = {
                "method": "get",
                "url": `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=8a164678fb55da9bcdf23398be5a5739`
            }
            const result = await axios(options)
            obj.temp = result.data.main.temp;
            cities2.push(obj)
        }
        const sorted = cities2.sort(function (a, b) {
            return a.temp - b.temp
        })


        res.status(200).send({ msg: sorted, status: true })
    } catch (err) {

        res.status(500).send({ msg: err.message })
    }
}

const allMemes = async function (req, res) {
    try {
       

        const options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        const result = await axios(options);
        res.status(200).send({ status: true, data: result.data })

    } catch (err) {

        res.status(500).send({ msg: err.message })
    }
}


const memeCreation = async function (req, res) {
    try {
        const memeId = req.query.template_id;
        const text0 = req.query.text0;
        const text1 = req.query.text1;

        const options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
        }
        const result = await axios(options);
        res.status(200).send({ status: true, data: result.data })

    } catch (err) {

        res.status(500).send({ msg: err.message })
    }
}

module.exports.getByCity = getByCity
module.exports.getWeatherOfCities = getWeatherOfCities
module.exports.memeCreation = memeCreation
module.exports.allMemes = allMemes