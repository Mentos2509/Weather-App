const timeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
function getTime(isDate: string) {
  const date = new Date(isDate);
  return timeFormat.format(date);
}

export default getTime;
