//skill section
import tailwindIcon from "./public/icons8-tailwindcss.svg";
import mysqlIcon from "./public/icons8-mysql.svg";
import nodeJsIcon from "./public/icons8-nodejs.svg";
import pythonIcon from "./public/icons8-python.svg";
import reactIcon from "./public/icons8-react.svg";
import nextIcon from "./public/icons8-next.js-96.svg";

const skill = [
  {
    img: nodeJsIcon,
    text: "NodeJs",
    target: "/",
  },
  {
    img: reactIcon,
    text: "ReactJs",
    target: "/",
  },
  {
    img: mysqlIcon,
    text: "MySQL",
    target: "/",
  },
  {
    img: pythonIcon,
    text: "Python",
    target: "/",
  },
  {
    img: nextIcon,
    text: "NextJS",
    target: "/",
  },
  {
    img: tailwindIcon,
    text: "TailwindCSS",
    target: "/",
  },
];

//Contact Section
import igContact from "./public/instagram-contact.svg";
import linkedinContact from "./public/linkedin-contact.svg";
import githubContact from "./public/github-contact.svg";
import gmailContact from "./public/gmail-contact.svg";

const contact = [
  {
    username: "Muhammad Luthfi Irfan",
    img: linkedinContact,
    target: "/",
  },
  {
    username: "@luthfi9251",
    img: igContact,
    target: "/",
  },
  {
    username: "@luthfi9251",
    img: githubContact,
    target: "/",
  },
  {
    username: "luthfi.irfan11@gmail.com",
    img: gmailContact,
    target: "/",
  },
];

//Project dan what can i do

import backendPhoto from "./public/backend-min.jpg";
import frontendPhoto from "./public/frontend2-min.jpg";
import pythonPhoto from "./public/python-min.jpg";

const jobDesk = [
  {
    title: "Front End Developer",
    img: frontendPhoto,
    detail:
      "Membuat atau mengubah tampilan website anda menjadi lebih dinamis sesuai dengan apa yang anda harapkan",
    total: "3",
  },
  {
    title: "Back End Developer",
    img: backendPhoto,
    detail:
      "Membuat API dan menghubungkan website anda ke database secara aman dan optimal.",
    total: "2",
  },
  {
    title: "Python Developer",
    img: pythonPhoto,
    detail: "Membuat script sesuai kebutuhan anda secara custom dan eksklusif",
    total: "1",
  },
];

//List Project

const projectList = [
  {
    nama: "Chat App Aplication",
    kategori: "web development",
    img: frontendPhoto,
    text: "Website chatting yang dibuat menggunakan ReactJs, NodeJs dan SocketJs. Website ini menyediakan fitur untuk chatting dengan teman, menambah teman, mengubah fotoprodil dan lainnya.",
    target: "/",
    detail: {
      type: "fullstack",
      stack: "ExpressJs, ReactJs, SocketIo",
      database: "MongoDb (cloud)",
      repository: "https://github.com/",
      livePreview: "-",
    },
  },
  {
    nama: "Group Divider",
    kategori: "web development",
    img: backendPhoto,
    text: "Sebuah website sederhana yang dibuat menggunakan ReactJs, website ini berfungsi untuk memudahkan ketika kita perlu membagi kelompok dari beberapa data secara random.",
    target: "/",
    detail: {
      type: "frontend",
      stack: "ReactJs",
      database: "-",
      repository: "https://github.com/",
      livePreview: "-",
    },
  },
  {
    nama: "Truth or Dare",
    kategori: "web development",
    img: pythonPhoto,
    text: "Ide utama website ini adalah untuk mendigitalisasi permainan kartu Truth Or Dare menjadi berbentuk website. Web ini dibuat menggunakan ReactJs. ",
    target: "/",
    detail: {
      type: "frontend",
      stack: "ReactJs",
      database: "-",
      repository: "https://github.com/",
      livePreview: "-",
    },
  },
  {
    nama: "Dbandeng App",
    kategori: "android development",
    img: pythonPhoto,
    text: "Ide utama website ini adalah untuk mendigitalisasi permainan kartu Truth Or Dare menjadi berbentuk website. Web ini dibuat menggunakan ReactJs. ",
    target: "/",
    detail: {
      type: "App",
      stack: "Java, Laravel",
      database: "-",
      repository: "https://github.com/",
      livePreview: "-",
    },
  },
  {
    nama: "Mesin Pensortir Bandeng",
    kategori: "iot project",
    img: backendPhoto,
    text: "Ide utama website ini adalah untuk mendigitalisasi permainan kartu Truth Or Dare menjadi berbentuk website. Web ini dibuat menggunakan ReactJs. ",
    target: "/",
    detail: {
      type: "IOT",
      stack: "Arduino, MQTT",
      database: "-",
      repository: "https://github.com/",
      livePreview: "-",
    },
  },
  {
    nama: "AI Diagnosys Model",
    kategori: "python project",
    img: frontendPhoto,
    text: "Ide utama website ini adalah untuk mendigitalisasi permainan kartu Truth Or Dare menjadi berbentuk website. Web ini dibuat menggunakan ReactJs. ",
    target: "/",
    detail: {
      type: "Script, API",
      stack: "Sklearn, Django Rest, Pandas",
      database: "SQLite3",
      repository: "https://github.com/",
      livePreview: "-",
    },
  },
];

//Sertifikat
import fccRwd from "./public/fcc-rwd.png";
import fccBe from "./public/fcc-be.png";

const certificate = [
  {
    name: "Responsive Web Design",
    company: "FreeCodeCamp.org",
    brief:
      "Sertifikat ini didapatkan setelah menyelesaikan materi serta soal mengenai responsive web design yang ada pada platform FreeCodeCamp, serta membuat project akhir",
    img: fccRwd,
    date: "11 September 2021",
    link: "https://www.freecodecamp.org/certification/luthfi9251/responsive-web-design",
  },
  {
    name: "Backend Development and API",
    company: "FreeCodeCamp.org",
    brief:
      "Sertifikat sebagai tanda telah menyelesaikan project akhir dalam topik pengembangan backend  menggunakan NodeJs serta membuat API dengan ExpressJs dan Database MongoDB",
    img: fccBe,
    date: "18 Oktober 2021",
    link: "https://www.freecodecamp.org/certification/luthfi9251/back-end-development-and-apis",
  },
];

export const dataItem = {
  projectList,
  skill,
  contact,
  jobDesk,
  certificate,
};

export const dataText = {
  hero: {
    text: {
      indo: "Seorang freelancer di bidang pengembangan Web. Saya dapat membantu anda membuat website dinamis menggunakan ReactJS dan NodeJS.",
      eng: "",
    },
  },
  capabilities: {
    text: {
      indo: "Saya memiliki kemampuan untuk mengembangkan website secara full stack menggunakan kombinasi antara ReactJs dan NodeJs. Selain kedua teknologi tersebut, saya juga menguasai framework NextJs untuk membuat website yang SEO Friendly. Saya dapat mengubah desain website anda menjadi utuh menggunakan HTML, CSS dan JavaScript serta dapat mengimplementasikannya ke server menggunakan penyedia layanan cloud seperti AWS. Selain menguasai pengembangan website, saya juga menguasai bahasa pemrograman Python yang dapat mengotomasi kegiatan-kegiatan anda.",
      eng: "",
    },
  },
  project: {
    text: {
      indo: "Berikut merupakan contoh dari project-project yang telah saya selesaikan. Project tersebut berasal dari project pribadi saya dan beberapa contoh project klien saya.",
      eng: "",
    },
  },
  aboutMe: {
    text: {
      indo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus est, tincidunt at elit ac, bibendum mattis massa. Sed viverra tristique dui sed commodo. Suspendisse risus magna, gravida quis turpis non, gravida semper lorem. Duis mattis eleifend nisl, et egestas mauris fringilla a. Vestibulum sodales mauris dolor, sit amet efficitur nisi ullamcorper id. Ut hendrerit lectus ac lectus suscipit, placerat consequat mauris consectetur.",
      eng: "",
    },
  },
  contactMe: {
    text: {
      indo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit erat quis luctus placerat.",
      eng: "",
    },
  },
};
