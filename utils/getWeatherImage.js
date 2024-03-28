const sunny_image = require('../assets/sunny.jpg');
const cloudy_image = require('../assets/cloudy.jpg');
const overcasts_image = require('../assets/overcasts.jpg');
const partly_cloudy = require('../assets/partly_cloudy.jpg');

const getWeatherImage = (cloudPercentage) => {

    if (cloudPercentage <= 20) {
        return sunny_image;
    } else if (cloudPercentage <= 50) {
        return partly_cloudy;
    } else if (cloudPercentage <= 80) {
        return overcasts_image;
    } else {
        return cloudy_image;
    }
};

export default getWeatherImage;
