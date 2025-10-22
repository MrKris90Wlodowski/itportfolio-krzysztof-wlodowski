import userInfo from "./userInfo.js";

const structureApp = {
  headerInfo: {
    home: {
      heading: `${userInfo.firstName} ${userInfo.lastName}`.toUpperCase(),
      paragraph: "WEB-DESIGNER",
    },
    projects: {
      heading: "MY PROJECTS",
      paragraph: "MADE WITH LOVE",
    },
    about: {
      heading: "ABOUT ME",
      paragraph: `IT'S A ME, ${userInfo.firstName}`.toUpperCase(),
    },
    contact: {
      heading: "CONTACT ME",
      paragraph: "SAY HELLO TO ME",
    },
    messages: {
      heading: "MESSAGES",
      paragraph: "MESSAGES FROM THE\n INTERESTED PERSON",
    },
  },
};

export default structureApp;
