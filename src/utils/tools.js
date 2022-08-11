function getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
}

function getTime() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const greet = date.getHours() < 12 ? 'Good Morning' : date.getDate() < 18 ? 'Good Afternoon' : 'Good Evening'
    const month = months[date.getMonth()];
    const day = days[date.getDay()];
    const numberDay = date.getDay();
    const values = {
        greet,
        month,
        day,
        numberDay
    }
    return values;
}

const utils = {
    getBase64,
    getTime,
}

export default utils;