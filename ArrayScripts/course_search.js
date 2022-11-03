"use strict"; 

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
// Write Code that Search the Array

function getCourseArray(courses, StartDate) {
  let Search = [] ;

  let NumCourses = courses.length;
  for(let i = 0; i < NumCourses; i++) {
    if(courses[i].StartDate == StartDate) {
        Search.push(courses[i])
    }
  }
  return Search
}

let startdateOutput = getCourseArray(courses, "11/22/22");
let srtdate= startdateOutput.length;
for(let i = 0; i < srtdate; i++) {
    console.log("PRO200 Class Start on " + startdateOutput[i].StartDate)
}

function getCourseArray(courses, Title) {
    let Search = [] ;
  
    let NumCourses = courses.length;
    for(let i = 0; i < NumCourses; i++) {
      if(courses[i].Title == Title) {
          Search.push(courses[i])
      }
    }
    return Search
  }
  
  let TitleOutput = getCourseArray(courses, "Introduction to Angular");
  let titleOut= TitleOutput.length;
  for(let i = 0; i < titleOut; i++) {
      console.log("The title of PROJ500 " + TitleOutput[i].Title)
    }