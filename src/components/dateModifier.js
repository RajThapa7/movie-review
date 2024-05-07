export const dateModifier = (date) => {
  if (date === undefined) return;
  const monthNum = date.split("-")[1];
  let month;
  switch (monthNum) {
    case "01":
      month = "Jan";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "02":
      month = "Feb";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "03":
      month = "Mar";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "04":
      month = "Apr";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "05":
      month = "May";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "06":
      month = "Jun";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];

    case "07":
      month = "Jul";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "08":
      month = "Aug";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "09":
      month = "Sep";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "10":
      month = "Oct";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "11":
      month = "Nov";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
    case "12":
      month = "Dec";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];

    default:
      break;
  }
};
