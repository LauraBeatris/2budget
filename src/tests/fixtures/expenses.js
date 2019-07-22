// Fixtures - base line test data
import moment from "moment";

export default [
  {
    id: "1",
    description: "Water rent",
    note: "Random note",
    amount: 195,
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "Gas rent",
    note: "Random note",
    amount: 3100,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "College rent",
    note: "Random note",
    amount: 31000,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
