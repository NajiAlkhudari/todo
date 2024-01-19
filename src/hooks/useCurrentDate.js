import React from 'react'
const useCurrentDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
  if(day<10) 
{
    day='0'+day;
} 
if(month<10) 
{
    month='0'+month;
}
  let currentDate = `${year}-${month}-${day}`;
     return (
    {currentDate}
  )
}
export default useCurrentDate ; 
