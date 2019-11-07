export default (expenses, { text, shortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startdatematch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const enddatematch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
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
