export const settextfilter = textupdate => ({
  type: "EDITTEXT_FILTER",
  textupdate
});

export const shortByamount = () => ({
  type: "SHORTBY_AMOUNT"
});

export const shortBydate = () => ({
  type: "SHORTBY_DATE"
});

export const setstartdate = startdate => ({
  type: "START_DATE",
  startdate
});

export const setenddate = enddate => ({
  type: "END_DATE",
  enddate
});
