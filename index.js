// index.js
// const head   = require('./head');
// const tail   = require('./tail');
// const middle = require('./middle');


const obj = { head: require('./head'), tail: require('./tail'), middle: require('./middle')};

const {head, tail, middle} = obj;

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle
};
