// ELEMENTS: main user data object

const userInfo = {
  firstName: "KRZYSZTOF",
  lastName: "WŁODOWSKI",
  tel: "514 455 242",
  email: "krzysztof_włodowski@onet.pl",
  info: {
    introduce:
      "Hello! I'm Krzysztof Włodowski, a person passionate about continuous growth and exploring new paths.\n My background is diverse, my approach to life is rooted in acquiring knowledge and achieving goals with full dedication.\n Feel free to discover more about my professional journey and interests!",
    myBackground:
      "I have a diverse background that enriches both my professional career and personal growth.\n I am constantly striving to develop myself and make progressin every area of life I am involved in.\n My professional experience has taught me to be diligent incarrying out my responsibilities, take ownership of assignedtasks, and aim for the best possible final result.",
    hobbies:
      "In my free time, I enjoy developing my passions, especially physical activity and DIY projects.\n Both of these hobbies allow me to spend my time creatively and productively, while constantly growing and becoming better at what I do.",
  },
  techSkill: [
    { skill: "HTML", experience: 2 },
    { skill: "CSS", experience: 1 },
    { skill: "Java Script", experience: 1 },
    { skill: "Git", experience: 1 },
    { skill: "Figma", experience: 1 },
    { skill: "Chrome", experience: 4 },
    { skill: "VSCode", experience: 2 },
    { skill: "GitHub", experience: 1 },
  ],
  cardsProjects: [
    { project: "Calculator", technology: "HTML" },
    { project: "Non-governmental organization", technology: "HTML,CSS" },
    { project: "Calculator program", technology: "Java Script" },
    { project: "Calculator", technology: "HTML,C++" },
    { project: "Non-governmental organization", technology: "HTML,CSS" },
  ],
  messages: [
    {
      name: "Karol",
      email: "karol@email.com",
      message: "Hello, I've reviewed your impressive portfolio and am interested in disscussing a potential collaboration. Please call me at 712-218-123 to talk further."
    },
    {
      name: "Ernest",
      email: "ernest@email.com",
      message: "Hello, Please call me at 351-152-555 to talk further."
    },
    {
      name: "Jan",
      email: "jan@email.com",
      message: "Welcome Jan. You created really nice project"
    }
  ]
};

export default userInfo