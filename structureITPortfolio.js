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
  formInfo: {
    label: {
      name: "Name",
      email: "Email",
      message: "Message",
      project: "Project title",
      technology: "Technologies",
    },
    inputPlaceholder: {
      name: "Your name",
      email: "email@example.com",
      message: "Hello, my name is...",
      project: "Project title",
      technology: "html,css,javascript",
    },
    errorMessage: {
      min: function minErrorMessage(word, digit) {
        return `The ${word} must be at least ${digit} characters long`;
      },
      max: function maxErrorMessage(word, digit) {
        return `The ${word} must not exceed ${digit} characters.`;
      },
      email: "Please enter a valid email address",
      message: "The message cannot be empty",
      technology: "Please add some technologies"
    },
  },
};

export default structureApp;
