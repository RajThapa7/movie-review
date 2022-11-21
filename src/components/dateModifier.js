export const dateModifier = (date) => {
    if(date == undefined) return ;
  const monthNum = date.split("-")[1];
  var month;
  switch (monthNum) {
    case "01":
      var month = "Jan";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "02":
      var month = "Feb";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "03":
      var month = "Mar";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "04":
      var month = "Apr";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "05":
      var month = "May";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "06":
      var month = "Jun";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];

      break;
    case "07":
      var month = "Jul";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "08":
      var month = "Aug";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "09":
      var month = "Sep";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "10":
      var month = "Oct";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "11":
      var month = "Nov";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
    case "12":
      var month = "Dec";
      return month + " " + date.split("-")[2] + ", " + date.split("-")[0];
      break;
     
    default:
      break;
  }
};
