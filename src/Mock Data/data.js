import img1 from "./images/images.jpeg";
import img2 from "./images/images (1).jpeg";
import img3 from "./images/images (2).jpeg";
import img4 from "./images/images (3).jpeg";
import img5 from "./images/images (4).jpeg";
import img6 from "./images/images (6).jpeg";
import img7 from "./images/images (5).jpeg";
import img8 from "./images/images (7).jpeg";
import img9 from "./images/images (8).jpeg";
import img10 from "./images/images (9).jpeg";
import img11 from "./images/images (10).jpeg";
import img12 from "./images/images (11).jpeg";
import img13 from "./images/images (12).jpeg";
import img14 from "./images/images (13).jpeg";
import img15 from "./images/images (14).jpeg";

//end of image imports

const data = [
  {
    id: 1,
    img: img8,
    category: "Data Structures",
    title: "Data Structure and Algorithms: Deep Dive Using Java",
    author: "Tim Buchalka",
    rating: "4.4",
    stars: "⭐⭐⭐⭐",
    views: "(14,721)",
    price: "419"
  },
  {
    id: 2,
    img: img12,
    category: "Web Development",
    title: "Modern React with Redux[2023 Update]",
    author: "Stephen Grider",
    rating: "4.7",
    stars: "⭐⭐⭐⭐",
    views: "(84,222)",
    price: "499"
  },
  {
    id: 3,
    img: img5,
    category: "Data Structures",
    title: "Mastering Data Structures & Algorithms using C and C++",
    author: "Abdul Bari",
    rating: "4.6",
    stars: "⭐⭐⭐⭐",
    views: "(41,835)",
    price: "419"
  },
  {
    id: 4,
    img: img1,
    category: "Web Development",
    title: "The Complete 2023 Web Development Bootcamp",
    author: "Dr. Angela Yu",
    rating: "4.7",
    stars: "⭐⭐⭐⭐",
    views: "(323,695)",
    price: "419"
  },
  {
    id: 5,
    img: img10,
    category: null,
    title: "Complete Python Developer in 2023: Zero to Mastery",
    author: "Andrei Neagoie",
    rating: "4.6",
    stars: "⭐⭐⭐⭐",
    views: "(55,142)",
    price: "419"
  },
  {
    id: 6,
    img: img15,
    category: null,
    title: "Adobe Photoshop CC-Essentials Traning Course",
    author: "Daniel Walter Scott",
    rating: "4.7",
    stars: "⭐⭐⭐⭐",
    views: "(31,302)",
    price: "499"
  },
  {
    id: 7,
    img: img6,
    category: "Data Structures",
    title: "Master the Coding Interview: Data Structures + Algorithms",
    author: "Andrei Neagoie",
    rating: "4.6",
    stars: "⭐⭐⭐⭐",
    views: "(32,985)",
    price: "799"
  },
  {
    id: 8,
    img: img2,
    category: "Web Development",
    title: "The Web Developer Bootcamp 2023",
    author: "Colt Steele",
    rating: "4.7",
    stars: "⭐⭐⭐⭐",
    views: "(263,295)",
    price: "419"
  },
  {
    id: 9,
    img: img9,
    category: null,
    title: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
    author: "Dr. Angela Yu",
    rating: "4.7",
    stars: "⭐⭐⭐⭐",
    views: "(235,112)",
    price: "449"
  },
  {
    id: 10,
    img: img4,
    category: null,
    title: "The Complete Flutter Development Bootcamp with Dart",
    author: "Dr. Angela Yu",
    rating: "4.5",
    stars: "⭐⭐⭐⭐",
    views: "(50,775)",
    price: "419"
  },
  {
    id: 11,
    img: img14,
    category: "User Experience Design",
    title: "User Experience Design Essentials-Adobe XD UI UX Design",
    author: "Daniel Walter Scott",
    rating: "4.7",
    stars: "⭐⭐⭐⭐",
    views: "(44,882)",
    price: "419"
  },
  {
    id: 12,
    img: img13,
    category: "User Experience Design",
    title: "Complete Figma Megacourse: UI/UX Design Beginner to Expert",
    author: "Creativity Unleashed",
    rating: "4.3",
    stars: "⭐⭐⭐⭐",
    views: "(2,422)",
    price: "499"
  },
  {
    id: 13,
    img: img3,
    category: null,
    title: "Git a Web Developer Job: Mastering the Modern Workflow",
    author: "Brad Schiff",
    rating: "4.8",
    stars: "⭐⭐⭐⭐⭐",
    views: "(7,195)",
    price: "499"
  },
  {
    id: 14,
    img: img11,
    category: "Web Development",
    title: "React-The Complete Guide 2023(incl.React Router & Redux",
    author: "Maximilian Schwarzmuller",
    rating: "4.6",
    stars: "⭐⭐⭐⭐",
    views: "(195,442)",
    price: "799"
  },
  {
    id: 15,
    img: img7,
    category: "Data Structures",
    title: "The Coding Interview Bootcamp: Algorithms + Data Structures",
    author: "Stephen Grider",
    rating: "4.8",
    stars: "⭐⭐⭐⭐",
    views: "(12,905)",
    price: "399"
  }
];

const filterOptions = [
  {
    id: 1,
    opt1: "All",
    opt2: "Web Development",
    opt3: "User Experience Design",
    opt4: "Data Structures",
    label: "Category"
  },
  {
    id: 2,
    opt1: "All",
    opt2: "Dr. Angela Yu",
    opt3: "Daniel Walter Scott",
    opt4: "Tim Buchalka",
    label: "Author"
  }
];

export { data, filterOptions };
