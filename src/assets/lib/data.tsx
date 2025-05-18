import { FiGithub, FiLink, FiLinkedin, FiMail } from 'react-icons/fi';
import { GoHome, GoStack } from 'react-icons/go';
import adobexdicon from '../../assets/icons/adobexdicon.svg';
import apiicon from '../../assets/icons/apiicon.svg';
import axiosicon from '../../assets/icons/axiosicon.svg';
import canvaicon from '../../assets/icons/canvaicon.svg';
import cicon from '../../assets/icons/cicon.svg';
import caricon from '../../assets/icons/car-icon.svg';
import cssicon from '../../assets/icons/cssicon.svg';
import expressicon from '../../assets/icons/expressicon.svg';
import expressiconwhite from '../../assets/icons/expressiconwhite.svg';
import figmaicon from '../../assets/icons/figmaicon.svg';
import hardwareicon from '../../assets/icons/hardware-icon.svg';
import htmlicon from '../../assets/icons/htmlicon.svg';
import javascripticon from '../../assets/icons/javascripticon.svg';
import jwticon from '../../assets/icons/jwticon.svg';
import mongodbicon from '../../assets/icons/mongoicon.svg';
import netlifyicon from '../../assets/icons/netlifyicon.svg';
import nodejsicon from '../../assets/icons/nodejsicon.svg';
import reacticon from '../../assets/icons/reacticon.svg';
import rendericon from '../../assets/icons/rendericon.svg';
import spotifyicon from '../../assets/icons/spotifyicon.svg';
import oracleicon from '../../assets/icons/oracleicon.svg';
import springbooticon from '../../assets/icons/springbooticon.svg';
import angularjsicon from '../../assets/icons/angularjsicon.svg';
import typescripticon from '../../assets/icons/typescripticon.svg';
import nextjsicon from '../../assets/icons/nextjsicon.svg'
import travelicon from '../../assets/icons/travel-icon.svg';
import trelloicon from '../../assets/icons/trelloicon.svg';
import webflowicon from '../../assets/icons/webflowicon.svg';
import wordpressicon from '../../assets/icons/wordpressicon.svg';
import postgreicon from '../../assets/icons/postgreicon.svg';
import nestjsicon from '../../assets/icons/nestjsicon.svg';
import javaicon from '../../assets/icons/javaicon.svg';
import instorMockup from '../../assets/img/instor_mockup.webp';
import silentmoonMockup from '../../assets/img/silentmoon_mockup.webp';
import tastyMockup from '../../assets/img/tasty_mockup.webp';
import Imprint from '../../components/Imprint';
import Privacy from '../../components/Privacy';
import profilepicture from '../img/me2.jpg';

export const headerIntroData = {
  title: {
    vi: 'Xin chào, Tôi là Tuan Nguyen',
    en: "Hi, I'm Tuan Nguyen",
  },
  subtitle: 'Software Engineer based in Viet Nam',
  description: {
    vi: 'Tôi là một kỹ sư phần mềm tại Việt Nam. Tôi chuyên về xây dựng các trang web chuyên nghiệp và mọi thứ liên quan.',
    en: "I'm a software engineer based in Viet Nam. I specialize in building professional websites and related technologies.",
  },
  buttons: [
    {
      name: 'Contact',
      label: {
        vi: 'Liên hệ tôi',
        en: 'Contact me',
      },
      icon: FiMail,
      color: 'main-btn',
    },
    {
      name: 'Projects',
      label: {
        vi: 'Dự án của tôi',
        en: 'My Projects',
      },
      icon: FiGithub,
      color: 'secondary-btn',
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: 'Tasty App',
    description:
      'Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.',
    description_EN:
      'A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.',
    technologies: [
      { name: 'Html', icon: htmlicon },
      { name: 'CSS', icon: cssicon },
      { name: 'JavaScript', icon: javascripticon },
      { name: 'REST Api', icon: apiicon },
      { name: 'React', icon: reacticon },
      { name: 'Figma', icon: figmaicon },
      { name: 'Canva', icon: canvaicon },
      { name: 'Netlify', icon: netlifyicon },
      { name: 'Trello', icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: 'https://github.com/ng-tuan/',
    githuburl: 'https://github.com/ng-tuan/',
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: 'main-btn',
      second: 'secondary-btn',
      icon: 'white',
      projectcolor: '#70B9BE',
    },
  },
  {
    title: 'Silentmoon',
    description:
      'Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.',
    description_EN:
      'A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.',
    technologies: [
      { name: 'Html', icon: htmlicon },
      { name: 'CSS', icon: cssicon },
      { name: 'JavaScript', icon: javascripticon },
      { name: 'Spotify Api', icon: spotifyicon },
      { name: 'React', icon: reacticon },
      { name: 'JWT & Bcrypt', icon: jwticon },
      { name: 'Axios', icon: axiosicon },
      { name: 'MongoDB', icon: mongodbicon },
      { name: 'Express', icon: expressiconwhite },
      { name: 'Node.js', icon: nodejsicon },
      { name: 'Figma', icon: figmaicon },
      { name: 'Render', icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: 'https://silentmoon-grpw.onrender.com/',
    githuburl:
      'https://github.com/ng-tuan/Fullstack_Abschlussprojekt_SilentMoon',
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: 'main-btn',
      second: 'secondary-btn',
      icon: 'white',
      projectcolor: '#FFD5BD',
    },
  },
  {
    title: 'Furniture Organizer',
    description:
      'Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.',
    description_EN:
      'A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.',
    technologies: [
      { name: 'Html', icon: htmlicon },
      { name: 'CSS', icon: cssicon },
      { name: 'JavaScript', icon: javascripticon },
      { name: 'React', icon: reacticon },
      { name: 'JWT & Bcrypt', icon: jwticon },
      { name: 'Axios', icon: axiosicon },
      { name: 'MongoDB', icon: mongodbicon },
      { name: 'Express', icon: expressiconwhite },
      { name: 'Node.js', icon: nodejsicon },
      { name: 'Figma', icon: figmaicon },
      { name: 'Render', icon: rendericon },
      { name: 'Trello', icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: 'https://mern-haushaltsbuch.onrender.com/',
    githuburl: 'https://github.com/ng-tuan/Furniture_MERN',
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: 'main-btn',
      second: 'secondary-btn',
      icon: 'white',
      projectcolor: '#E3964A',
    },
  },
] as const;

export const liveTickerData = {
  content: {
    vi: 'Weitere Projekte auf Github',
    en: 'More Projects on Github',
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: 'WebDevelopment',
    skills: [
      {
        title: 'Sping Boot',
        hash: '#spring',
        icon: springbooticon,
        color: '#8BC34A',
      },
      {
        title: 'NodeJS',
        hash: '#nodejs',
        icon: nodejsicon,
        color: '#339933',
      },
      {
        title: 'Express',
        hash: '#express',
        icon: [expressicon, expressiconwhite],
        color: ['#000000', '#FFFFFF'],
      },
      {
        title: 'NestJS',
        hash: '#nest',
        icon: nestjsicon,
        color: '#F51957',
      },
      {
        title: 'ReactJS',
        hash: '#react',
        icon: reacticon,
        color: '#00D8FF',
      },
      {
        title: 'Angular',
        hash: '#angular',
        icon: angularjsicon,
        color: '#DD2C00',
      },
      {
        title: 'NextJS',
        hash: '#next',
        icon: nextjsicon,
        color: '#C5C5C5',
      },
      {
        title: 'Typescipt',
        hash: '#typescript',
        icon: typescripticon,
        color: '#3178C6',
      },
    ],
  },
] as const;

export const skillsLanguage = [
  {
    skillsTitle: 'Languages',
    skills: [
      { title: 'Java', hash: '#java', icon: javaicon, color: '#F24E1E' },
      {
        title: 'Javascript',
        hash: '#javascript',
        icon: javascripticon,
        color: '#F7DF1E',
      },
      { title: 'C#', hash: '#c', icon: cicon, color: '#01C853' },
    ],
  },
] as const;

export const skillsData = [
  {
    skillsTitle: 'Database',
    skills: [
      {
        title: 'PostgreSQL',
        hash: '#postgre',
        icon: postgreicon,
        color: '#21759B',
      },
      {
        title: 'Oracle',
        hash: '#oracle',
        icon: oracleicon,
        color: '#E01B17',
      },
      {
        title: 'MongoDB',
        hash: '#mongo',
        icon: mongodbicon,
        color: '#4E9B4A',
      },
    ],
  },
] as const;

export const navLinks = [
  { vi: 'Trang chủ', en: 'Home', hash: '#home', icon: GoHome },
  { vi: 'Kỹ năng', en: 'Skills', hash: '#skills', icon: GoStack },
  // { vi: 'Dự án', en: 'Projects', hash: '#projects', icon: GoProject },
  // { vi: 'Về tôi', en: 'About Me', hash: '#about-me', icon: GoPerson },
  // { vi: 'Liên hệ', en: 'Contact', hash: '#contact', icon: GoMail },
] as const;

// TODO: Edit the content of the footer links
export const FooterLinks = [
  { vi: 'Impressum', en: 'Imprint', hash: '#imprint', data: <Imprint /> },
  { vi: 'Datenschutz', en: 'Privacy', hash: '#privacy', data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: 'mailto:ntuan.work@gmail.com',
  text: 'ntuan.work@gmail.com',
} as const;

export const sideBarLeftSocials = [
  {
    link: 'https://www.linkedin.com/in/tuan-nguyen-thanh-b71170222/',
    icon: FiLinkedin,
    altimgname: 'linkedin',
  },
  {
    link: 'https://github.com/ng-tuan',
    icon: FiGithub,
    altimgname: 'github',
  },
  {
    link: 'mailto:ntuan.work@gmail.com',
    icon: FiMail,
    altimgname: 'mail',
  },
] as const;

export const quotesData = [
  {
    vi: '"Đừng đợi cho đến khi học xong mới làm. Hãy bắt đầu làm ngay bây giờ để học hỏi và phát triển"',
    en: `"Don't wait until your studies are finished to take action. Start taking action now to learn and grow"`,
    author: 'Tuan Nguyen',
  },
  {
    vi: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece.="`,
  },
] as const;

export const aboutMeData = {
  title: 'Über mich',
  title_EN: 'About me',
  description: 'Ein paar Codeschnippsel über mich',
  description_EN: 'A few code snippets about me',
  paragraphs_DE: [
    {
      title: 'Die Schaltkreise meines Herzens',
      description:
        'Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.',
      icon: hardwareicon,
    },
    {
      title: 'Auf der Überholspur des Lebens',
      description:
        'Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.',
      icon: caricon,
    },
    {
      title: 'Entdeckungsfreude als Lebensmotto',
      description:
        'Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.',
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: 'The Circuits of My Heart',
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: 'On the Fast Lane of Life',
      description:
        'Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.',
      icon: caricon,
    },
    {
      title: 'The Joy of Discovery as a Life Motto',
      description:
        'My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.',
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    vi: 'Kontakt',
    en: 'Contact',
  },
  description: {
    vi: 'Schreib mir eine Nachricht und ich melde mich bei dir.',
    en: 'Write me a message and I will get back to you.',
  },
  inputfields: [
    {
      name: 'name',
      placeholder: {
        vi: 'Dein Name',
        en: 'Your Name',
      },
      type: 'text',
      validation: {
        vi: 'Bitte gebe deinen Namen ein',
        en: 'Please fill in your name',
      },
      pattern: '{2}',
    },
    {
      name: 'email',
      placeholder: {
        vi: 'Deine E-Mail Adresse',
        en: 'Your E-Mail',
      },
      type: 'email',
      validation: {
        vi: 'Bitte gebe deine Email ein',
        en: 'Please fill in your email',
      },
      pattern: '[@]{4}',
    },
    {
      name: 'subject',
      placeholder: {
        vi: 'Deine Betreff',
        en: 'Your Subject',
      },
      type: 'text',
      validation: {
        vi: 'Bitte gebe einen Betreff ein',
        en: 'Please fill in your subject',
      },
      pattern: '{10}',
    },
  ],
  textarea: {
    placeholder: {
      vi: 'Deine Nachricht',
      en: 'Your Message',
    },
    name: 'message',
    rows: 10,
    validation: {
      vi: 'Bitte gebe deine Nachricht ein',
      en: 'Please fill in your message',
    },
    pattern: '{10}',
  },
  button: {
    value: {
      vi: 'Absenden',
      en: 'Send',
    },
  },
  icon: FiMail,
  iconcolor: '#FFFFFF',
  colors: {
    main: 'main-btn',
    second: 'secondary-btn',
    icon: 'white',
  },
  privacyOptIn: {
    checkbox: {
      vi: 'Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.',
      en: 'I agree that Alpay may use my personal data (name and e-mail address) to contact me.',
    },
    description: {
      vi: 'Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben',
      en: 'By submitting this request, you acknowledge that you have read the Private Policy',
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    vi: '🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...',
    en: '🦄 The live demo will open shortly. Starting servers...',
  },
  successEmailSent: {
    vi: '🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden',
    en: '🦄 Thank you for your email. I will get back to you as soon as possible',
  },
  failedEmailSent: {
    vi: '🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal',
    en: '🦄 Unfortunately the sending of your email did not work. Please try again later',
  },
  failedValidationName: {
    vi: 'Bitte gebe deinen Namen ein',
    en: 'Please fill in your name',
  },
} as const;

export const buttonLabels = {
  language: {
    vi: 'VI',
    en: 'EN',
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  'outer-right-to-inner-left': {
    marginRight: '4rem',
  },
  'outer-left-to-inner-right': {
    marginLeft: '4rem',
    transform: 'scaleX(-1)',
  },
  'inner-right-to-middle': {
    width: '100%',
    transform: 'scaleY(1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'inner-left-to-middle': {
    width: '100%',
    transform: 'scaleX(-1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  'middle-to-inner-right': {
    width: '100%',
    transform: 'scale(1,-1)',
  },
  'middle-to-inner-left': {
    width: '100%',
    transform: 'scale(-1,-1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    width: '100%',
    transform: 'scaleX(-1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ['25rem', '15rem'],
  },
  middle: {
    heights: ['35rem', '25rem'],
  },
  large: {
    heights: ['45rem', '35rem'],
  },
  extraLarge: {
    heights: ['55rem', '45rem'],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  'outer-right-to-inner-left': {
    marginTop: '-6rem',
    width: '100%',
  },
  'outer-left-to-inner-right': {
    marginTop: '-6rem',
    width: '100%',
  },
  'inner-right-to-middle': {
    marginTop: '-20rem',
    width: '50%',
    zIndex: '-10',
  },
  'inner-left-to-middle': {
    marginTop: '-10rem',
    width: '50%',
    zIndex: '-10',
  },
  'middle-to-inner-right': {
    width: '75%',
  },
  'middle-to-inner-left': {
    marginTop: '-2.5rem',
    width: '50%',
  },
  middle: {
    marginTop: '-2.5rem',
    width: '0%',
    display: 'none',
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  'outer-right-to-inner-left': {
    widths: ['74.45%', '74.45%'],
  },
  'outer-left-to-inner-right': {
    widths: ['75%', '75%'],
  },
  'inner-right-to-middle': {
    widths: ['50.1%', '49%'],
  },
  'inner-left-to-middle': {
    widths: ['50.1%', '49%'],
  },
  'middle-to-inner-right': {
    widths: ['33.4%', '50.03%'],
  },
  'middle-to-inner-left': {
    widths: ['50.1%', '49%'],
  },
  middle: {
    widths: ['0%', '0%'],
  },
};
