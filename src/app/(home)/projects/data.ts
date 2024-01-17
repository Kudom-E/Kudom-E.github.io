import project_pic from "@/../public/project.jpeg";
import afps_pic from "@/../public/afps/image1.png";
import aiti_pic from "@/../public/aiti/Aimage.png";
import zro_pic from "@/../public/zro/zimage.png";
import scheduler_pic from "@/../public/scheduler/Simage.png";

export const projectlist = [
  // {
  //   name: "St. Luke Cardiac Clinic",
  //   image: project_pic,
  //   image_routes: [
  //     {v
  //       name: "home",
  //       route: "/afps/home_page.png",
  //     },
  //     {
  //       name: "events",
  //       route: "/afps/events_page.png",
  //     },
  //     {
  //       name: "team",
  //       route: "/afps/team_page.png",
  //     },
  //   ],
  //   role: "Web Developer",
  //   tools: "React, Node, Tailwind, Circle CI, Vercel, Jest",
  //   link: "flightlocal13",
  //   summary:
  //     "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  // },
  {
    name: "Movie Scheduler",
    image: scheduler_pic,
    image_routes: [
      {
        name: "home",
        route: "/scheduler/home.png",
      },
    ],
    role: "Web developer",
    tools:
      "Typescript, Github Actions, React Testing Library, Next, Tailwind, Jest",
    link: "scheduler",
    summary:
      "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  },
  // {
  //   name: "Insomniac Night",
  //   image: project_pic,
  //   image_routes: [
  //     {
  //       name: "home",
  //       route: "/afps/home_page.png",
  //     },
  //     {
  //       name: "events",
  //       route: "/afps/events_page.png",
  //     },
  //     {
  //       name: "team",
  //       route: "/afps/team_page.png",
  //     },
  //   ],
  //   role: "Web Developer",
  //   tools: "React, Node, Tailwind, Circle CI, Vercel, Jest",
  //   link: "flightlocal33",
  //   summary:
  //     "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  // },
  {
    name: "African Pharmaceutical Symposium",
    image: afps_pic,
    image_routes: [
      {
        name: "Home",
        route: "/afps/home_page.png",
      },
      {
        name: "Events",
        route: "/afps/events_page.png",
      },
      {
        name: "Team",
        route: "/afps/team_page.png",
      },
    ],
    tools: "React, TailwindCSS, SASS, PrimeReact, Jest",
    role: "Web Developer",
    link: "afps",
    summary: `The web app developed for the African Pharmaceutical Symposium 
    event in 2023, themed 'The Evolution of Pharmacy Practice: Innovation and 
    Capacity-Building.' As the developer behind this project, my 
    goal was to create a seamless digital experience that not only reflects 
    the dynamic evolution of the symposium but also encourage registration. 
    The app offers a sleek and user-friendly interface, 
    providing attendees with access to insightful content on plans for the event,
    updates and resources, and answers to questions. This was an exciting project 
    converting 95% of visitors into participants who registered, therefore 
    contributing massively to the success of the symposium.`,
  },
  {
    name: "ZroVerse",
    image: zro_pic,
    image_routes: [
      {
        name: "Home",
        route: "/zro/home.png",
      },
      {
        name: "Training",
        route: "/zro/training_info.png",
      },
      {
        name: "Courses",
        route: "/zro/courses.png",
      },
      {
        name: "Course_details",
        route: "/zro/course_details.png",
      },
      {
        name: "Course_progress",
        route: "/zro/course_info.png",
      },
      {
        name: "Students",
        route: "/zro/students.png",
      },
    ],
    tools: "Angular, SCSS, Tailwind",
    role: "Frontened Developer",
    link: "zroverse",
    summary:
      "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  },
  {
    name: "KACE Alumni Platform",
    image: aiti_pic,
    image_routes: [
      {
        name: "Home",
        route: "/aiti/home.png",
      },
      {
        name: "About",
        route: "/aiti/about.png",
      },
      {
        name: "Donate",
        route: "/aiti/donate.png",
      },
      {
        name: "Admin",
        route: "/aiti/admin_dash.png",
      },
      {
        name: "Student",
        route: "/aiti/student_dash.png",
      },
      {
        name: "Alumni",
        route: "/aiti/alumni_dash.png",
      },
    ],
    tools: "React, SCSS, Jest",
    role: "Frontend Developer",
    link: "aiti",
    summary:
      "Nisi incididunt est tempor aliquip fugiat deserunt eu dolor. In aute veniam irure aliquip reprehenderit tempor. Anim laboris reprehenderit proident quis cillum cillum adipisicing ullamco cillum proident reprehenderit. Culpa duis elit cillum labore cupidatat mollit proident mollit.",
  },
];
