import moment from "moment";

export default [
  {
    id: "1",
    decription: "gum",
    amount: 156,
    note: "",
    createdAt: 0
  },
  {
    id: "2",
    decription: "rent",
    amount: 195,
    note: "",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    decription: "credit card",
    amount: 29000,
    note: "",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
