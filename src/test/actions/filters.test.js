import moment from "moment";

import {
  setenddate,
  setstartdate,
  shortByamount,
  shortBydate,
  settextfilter
} from "../../action/filters";

test("Sholud filters startdate", () => {
  const filter = setstartdate(moment(0));
  expect(filter).toEqual({
    type: "START_DATE",
    startdate: moment(0)
  });
});

test("should filter end date", () => {
  const filter = setenddate(moment(0));

  expect(filter).toEqual({
    type: "END_DATE",
    enddate: moment(0)
  });
});

test("Should filter set text filter", () => {
  const filter = settextfilter("SomeOne in");

  expect(filter).toEqual({
    type: "EDITTEXT_FILTER",
    textupdate: "SomeOne in"
  });
});

test("Should filter set text filter for defailt value", () => {
  const filter = settextfilter();

  expect(filter).toEqual({
    type: "EDITTEXT_FILTER",
    textupdate: ""
  });
});

test("Sholud filter shortBy date", () => {
  const filter = shortBydate();

  expect(filter).toEqual({
    type: "SHORTBY_DATE"
  });
});

test("Sholud filter shortBy amount", () => {
  const filter = shortByamount();

  expect(filter).toEqual({
    type: "SHORTBY_AMOUNT"
  });
});
