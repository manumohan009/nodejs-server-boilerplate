const moment = require('moment');
const momenttz = require('moment-timezone');
const timeZone = 'Asia/Calcutta';

const now = () => {
  return moment.utc().format();
}

const getLocalTime = () => {
  return moment().tz(timeZone).format();
}

const convertToLocalTime = (time) => {
  return momenttz.tz(time, timeZone).format('LLLL');
}
module.exports = {
  now: now,
  getLocalTime: getLocalTime,
  convertToLocalTime: convertToLocalTime
};
