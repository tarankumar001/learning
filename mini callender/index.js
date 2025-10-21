const monthName=document.getElementById("month-name")
const dayName=document.getElementById("day-name")
const dayNumber=document.getElementById("day-number")
const yearEL=document.getElementById("year")

const date=new Date();
const month=date.getMonth()//unnessary
monthName.innerHTML=date.toLocaleString("en",{
    month:"long"
})
const weekday=date.getDay()//unnessary
dayName.innerHTML=date.toLocaleString("en",{
    weekday:"long"
})
dayNumber.innerHTML=date.getDate()
yearEL.innerHTML=date.getFullYear()
