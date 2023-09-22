import img1 from "./images/Teachable Thumbnails (1).png";
import img2 from "./images/Teachable Thumbnails (1) (1).png";
import img3 from "./images/6.png";
// import img4 from "./images/Udemy Flutter (3).png";
// import img5 from "./images/3.png";
// import img6 from "./images/TeachableDesign.png";
// import img7 from "./images/TeachableMarketing.png"
// import img8 from "./images/Teachable Thumbnails (3).png";
// end of image imports

const data = [
  {
    id: 1,
    img: img1,
    Category: "Flutter (2)",
    author: "Angela Yu",
    title: "iOS 13 App Development Coding Lessons",
    subtitle: "Learn to develop iOS 13 apps using Swift 5.1 and Xcode 11",
  },
  {
    id: 2,
    img: img2,
    Category: "Web Development (1)",
    author: "Angela Yu",
    title: "The Complete Web Development Course",
    subtitle:
      "The complete full-stack web development bootcamp with HTML 5, CSS 3, Javascript ES6, Bootstrap 4, JQuery, Node.js, MongoDB and more!",
  },
  {
    id: 3,
    img: img3,
    Category: "Flutter (2)",
    author: "Love Babbar",
    title: "Introduction to Flutter Development Using Dart",
    subtitle: "10 Hours to Get Started with Flutter",
  },
  // {
  //     id: 4,
  //     img: img4,
  //     title: "The Complete 2021 Flutter Development Bootcamp with Dart",
  //     subtitle: "Built in collaboration with the Google Flutter team"
  // },
  // {
  //     id: 5,
  //     img: img5,
  //     title: "The Complete Data Science & Machine Learning Bootcamp",
  //     subtitle: ""
  // },
  // {
  //     id: 6,
  //     img: img6,
  //     title: "Learn App Design",
  //     subtitle: "Understand Digital Design Fundamentals to Make Beautiful Apps"
  // },
  // {
  //     id: 7,
  //     img: img7,
  //     title: "Learn App Marketing",
  //     subtitle: "Growth Hack Your Way to More Downloads on the App Stores."
  // },
  // {
  //     id: 8,
  //     img: img8,
  //     title: "12 Rules to Learn to Code",
  //     subtitle: "Top Tips and Tricks for Levelling Up as a Developer"
  // }
];

const filtered = [
  {
    id: 1,
    pref1: "All",
    pref2: "Web Development (1)",
    pref3: "Flutter (2)",
  },
  {
    id: 2,
    pref1: "All",
    pref2: "Angela Yu",
    pref3: "Love Babbar",
  },
];

export { data, filtered };
