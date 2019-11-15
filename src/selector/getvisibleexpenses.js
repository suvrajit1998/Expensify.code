import moment from "moment";

export default (expenses, { text, shortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdmatch = moment(expenses.createdAt);
      const startdatematch = startDate
        ? startDate.isSameOrBefore(createdmatch, "day")
        : true;
      const enddatematch = endDate
        ? endDate.isSameOrAfter(createdmatch, "day")
        : true;
      const textmatch = expense.decription
        .toLowerCase()
        .includes(text.toLowerCase());

      return startdatematch && enddatematch && textmatch;
    })
    .sort((a, b) => {
      if (shortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (shortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
