module.exports = function(Handlebars) {
    Handlebars.registerHelper('toUpperCase', function(str) {
        return str.toUpperCase();
    });
};
