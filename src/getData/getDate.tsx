
const dateFormat = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

function getDate(isDate: string) {
  const date = new Date(isDate);
  return dateFormat.format(date);
}

export default getDate;
