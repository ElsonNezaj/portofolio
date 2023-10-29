import HTML from "./assets/images/html.svg";
import SCSS from "./assets/images/sass.svg";
import JS from "./assets/images/javascript.svg";
import TS from "./assets/images/typescript.svg";
import REACT from "./assets/images/react.svg";
import REDUX from "./assets/images/redux.svg";
import GITHUB from "./assets/images/github.svg";
import GITLAB from "./assets/images/gitlab.svg";

import gsystem from "./assets/projects/gsystem.png";
import payupme from "./assets/projects/payupme.png";
import remus from "./assets/projects/remus.png";
import gsystemLogo from "./assets/projects/gsystemLogo.jpg";
import payupmeLogo from "./assets/projects/payupmeLogo.svg";
import remusLogo from "./assets/projects/remusLogo.svg";

export const SKILLS = [
  {
    name: "HTML",
    src: HTML,
    stars: 5,
  },
  {
    name: "SCSS / SASS",
    src: SCSS,
    stars: 5,
  },
  {
    name: "JAVASCRIPT",
    src: JS,
    stars: 4,
  },
  {
    name: "TYPESCRIPT",
    src: TS,
    stars: 4,
  },
  {
    name: "REACT",
    src: REACT,
    stars: 4,
  },
  {
    name: "REDUX",
    src: REDUX,
    stars: 3.5,
  },
  {
    name: "GITHUB",
    src: GITHUB,
    stars: 4,
  },
  {
    name: "GITLAB",
    src: GITLAB,
    stars: 4,
  },
];

export const PROJECTS = [
  {
    name: "GSystem",
    teamProject: true,
    finished: true,
    desc: "GSystem is a Web Application, where it's main functionality is sport betting & livebetting, featuring casino and virtual games.",
    src: gsystem,
    logo: gsystemLogo,
    url: "https://test-demo.gsystem.live/",
  },
  {
    name: "PayUpMe",
    teamProject: true,
    finished: true,
    desc: "PayUpMe is an application that helps the user make payments to different providers and sites, depending on the user's needs.",
    src: payupme,
    logo: payupmeLogo,
    url: "https://dev-demo.payupme.com/",
  },
  {
    name: "Remus",
    teamProject: false,
    finished: false,
    desc: "Remus is a restaurant / market managing application, making your business easier to manage. ",
    logo: remusLogo,
    src: remus,
  },
];
