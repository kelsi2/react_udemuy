// This allows us to mock the actual library
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};