//import moment from "moment";
const moment = require.requireActual("moment");

// Mocked version of moment
export default (timestamp = 0) => {
  return moment(timestamp);
};
