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
        target: "https://www.linkedin.com/in/muhammad-luthfi-irfan/",
    },
    {
        username: "@luthfi9251",
        img: igContact,
        target: "https://www.instagram.com/luthfi9251/",
    },
    {
        username: "@luthfi9251",
        img: githubContact,
        target: "https://github.com/luthfi9251",
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
        detail: "Membuat atau mengubah tampilan website agar lebih dinamis sesuai dengan harap Anda. Anjay",
        total: "3",
    },
    {
        title: "Back End Developer",
        img: backendPhoto,
        detail: "Membuat API menggunakan ExpressJs atau Django dan menghubungkannya dengan database SQL atau No-SQl.",
        total: "2",
    },
    {
        title: "Python Developer",
        img: pythonPhoto,
        detail: "Saya dapat melakukan pengolahan data dan membuat model pembelajaran sesuai dengan kebutuhan Anda.",
        total: "1",
    },
];

//List Project

const projectList = [
    {
        nama: "Chat App Aplication",
        kategori: "web development",
        img: "https://res.cloudinary.com/dwsf7qb6y/image/upload/f_auto,q_auto/v1/portfolio/yubawghxbwhqufdl6o9m",
        text: "Website chatting yang dibuat menggunakan ReactJs, NodeJs dan SocketJs. Website ini menyediakan fitur untuk chatting dengan teman, menambah teman, mengubah fotoprodil dan lainnya.",
        target: "/",
        detail: {
            type: "fullstack",
            stack: "ExpressJs, ReactJs, SocketIo",
            database: "MongoDb (cloud)",
            repository: "https://github.com/luthfi9251/chat-app-bckend",
            livePreview: "https://chatapp.luthficode.my.id/",
        },
    },
    {
        nama: "Group Divider",
        kategori: "web development",
        img: "https://res.cloudinary.com/dwsf7qb6y/image/upload/f_auto,q_auto/v1/portfolio/s5442gp84fndn12mia2r",
        text: "Sebuah website sederhana yang dibuat menggunakan ReactJs, website ini berfungsi untuk memudahkan ketika kita perlu membagi kelompok dari beberapa data secara random.",
        target: "/",
        detail: {
            type: "frontend",
            stack: "ReactJs",
            database: "-",
            repository: "https://github.com/luthfi9251/group-divider",
            livePreview: "https://easy-group-divider.vercel.app/",
        },
    },
    {
        nama: "Website Dbandeng",
        kategori: "web development",
        img: "https://res.cloudinary.com/dwsf7qb6y/image/upload/f_auto,q_auto/v1/portfolio/mxikaezrpjov4ob0uoue",
        text: "Website profil usaha bagi para pengusaha olahan bandeng yang berada pada desa krobokan, Semarang. Website ini bertujuan untuk memamerkan produk olahan bandeng kepada masyarakat luas",
        target: "/",
        detail: {
            type: "frontend",
            stack: "ReactJs",
            database: "-",
            repository: "-",
            livePreview: "-",
        },
    },
    {
        nama: "Dbandeng App - OnGoing",
        kategori: "android development",
        img: pythonPhoto,
        text: "Produk aplikasi dari peserta PPK ormawa, untuk masyarakat krobokan yang berfungsi untuk mengendalikan perangkat IOT dan memasarkan produk",
        target: "/",
        detail: {
            type: "App",
            stack: "Android Studio",
            database: "-",
            repository: "-",
            livePreview: "-",
        },
    },
    {
        nama: "Mesin Pensortir Bandeng - OnGoing",
        kategori: "iot project",
        img: backendPhoto,
        text: "Sebuah Perangkat IOT milik peserta PPK Ormawa, yang berfungsi untuk mensortir bandeng sesuai ukuran dan berat",
        target: "/",
        detail: {
            type: "IOT",
            stack: "Arduino, MQTT",
            database: "-",
            repository: "-",
            livePreview: "-",
        },
    },
    {
        nama: "AI Diagnosys Model - OnGoing",
        kategori: "python project",
        img: frontendPhoto,
        text: "Merupakan sebuah platform berisi model kecerdasan buatan, untuk mendeteksi penyakit melalui kondisi-kondisi tertentu",
        target: "/",
        detail: {
            type: "Script, API",
            stack: "Sklearn, Django Rest, Pandas",
            database: "SQLite3",
            repository: "-",
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
        brief: "Sertifikat ini didapatkan setelah menyelesaikan materi serta soal mengenai responsive web design yang ada pada platform FreeCodeCamp, serta membuat project akhir",
        img: fccRwd,
        date: "11 September 2021",
        link: "https://www.freecodecamp.org/certification/luthfi9251/responsive-web-design",
    },
    {
        name: "Backend Development and API",
        company: "FreeCodeCamp.org",
        brief: "Sertifikat sebagai tanda telah menyelesaikan project akhir dalam topik pengembangan backend  menggunakan NodeJs serta membuat API dengan ExpressJs dan Database MongoDB",
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
            indo: "Seorang freelancer di bidang pengembangan Web, saya dapat membantu Anda membuat website menggunakan ReactJS dan NodeJS.",
            eng: "",
        },
    },
    capabilities: {
        text: {
            indo: "Saya memiliki kemampuan untuk mengembangkan website secara full stack menggunakan kombinasi antara ReactJs dan NodeJs, serta menguasai framework NextJs untuk membuat website yang SEO Friendly. Saya dapat mendeploy website Anda ke server berbasis cloud seperti AWS. Selain itu, saya juga memiliki keahlian dalam bahasa pemrograman Python untuk pengolahan data dan scripting.",
            eng: "",
        },
    },
    project: {
        text: {
            indo: "Berikut adalah contoh beberapa proyek yang telah saya selesaikan atau sedang berlangsung, termasuk proyek pribadi dan proyek klien.",
            eng: "",
        },
    },
    aboutMe: {
        text: {
            indo: "Sebagai seorang Tech Enthusiast yang terobsesi pada bidang pengembangan website dan antusias dalam belajar hal-hal baru mengenai teknologi, saya siap membantu Anda dalam pembuatan website menggunakan ReactJs dan NodeJs.",
            eng: "",
        },
    },
    contactMe: {
        text: {
            indo: "Jika Anda tertarik untuk megetahui lebih lanjut, silahkan hubungi saya melalui berbagai platform yang tersedia.",
            eng: "",
        },
    },
};
