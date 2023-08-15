export const dateFormat = (createdDate: any) => {
 const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
 ];
 const day = new Date(createdDate).getDay();
 const date = new Date(createdDate).getDate();
 const month = new Date(createdDate).getMonth();
 const year = new Date(createdDate).getFullYear();
 return `${dayName[day]}, ${date}${getDaySuffix(date)} ${monthNames[month]}, ${year}`;
};

export const getDaySuffix = (dayNumber: any) => {
 if (dayNumber >= 11 && dayNumber <= 13) {
  return 'th';
 }
 switch (dayNumber % 10) {
 case 1:
  return 'st';
 case 2:
  return 'nd';
 case 3:
  return 'rd';
 default:
  return 'th';
 }
};
