const showDate = (d) => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Sathurday',
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];

  return `${day}, ${date} ${month}`;
};

export default showDate;
