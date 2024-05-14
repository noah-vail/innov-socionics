const formatDate = (date) => {
  let d;

  // see if the date is coming from the server
  date === undefined ? (d = new Date()) : (d = new Date(Date.parse(date)));

  let _day = d.getDate();
  let _month = d.getMonth() + 1;
  let _year = d.getFullYear();
  let _hour = d.getHours();
  let _min = d.getMinutes();

  if (_min < 10) {
    _min = "0" + _min;
  }

  return _year + "-" + _month + "-" + _day;
};

export { formatDate };
