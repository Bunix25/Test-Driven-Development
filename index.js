//enter you radius values
radius = 5;
radius2 = 25;
//export the functions
module.exports = {

    getDiameter: function() {
        return radius ** 2;
    },
    getArea: function() {
        return Math.round(Math.PI * radius2);
    }
}