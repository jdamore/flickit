var babelJest = require('babel-jest');

module.exports = {
    process: function(src, filename) {
        return (filename.match(/\.[css|less|scss]/)) ? '' : babelJest.process(src, filename);
    },
};