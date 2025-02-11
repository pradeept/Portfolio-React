import SideBar from "../components/SideBar";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import ProjectCards from "../components/ProjectCards";

const ProjectsPage = () => {
  const { colors } = useTheme();
  const cards = [
    {
      title: "Trello Clone",
      src: "/trello.png",
      description:
        "Trello Clone built using Next.js, Typescript, zustand, headlessui, appwrite, react-beautiful-dnd and openai",
      href: "https://trello-clone-pradeept.netlify.app/",
    },
    {
      title: "Todo MERN",
      src: "/todo-mern.jpg",
      description:
        "Todo Application built using MERN [MongoDB, Express.js, React.js, Node.js] ,It uses jsonwebtoken for Authentication and Authorization. crypto-js is used for AES & SHA3 encyption. AES - for encrypting & decrypting data sent through API calls. SHA3 for hashing password in database.",
      href: "https://github.com/pradeept/Todo-MERN",
    },
    {
      title: "Movies & Songs playlist - Redux",
      src: "/movie-redux.png",
      description:
        "A react application that make use of Redux to store, fetch and modify global state. The global state contains movie and song names fetched from an API.",
      href: "https://movies-songs-redux.netlify.app/",
    },
    {
      title: "Favourite Books App",
      src: "/favBook.jpg",
      description:
        "Favourite Books Keeping app is a React application. Where we  can add, update, delete our favorite books. ",
      href: "https://favourite-books-app.vercel.app/",
    },
    {
      title: "Real-time Chat App",
      src: "/chatApp.jpg",
      description:
        "A real-time Chat application built using Vanilla Node.js, Socket.io and MongoDB. Allows users to create and join chat-rooms.",
      href: "https://github.com/pradeept/Chat-Application",
    },
    {
      title: "Keeper App",
      src: "/keeper.jpg",
      description:
        "A simple Notes keeping React application inspired by Google's Keep app.",
      href: "https://pradeeps-keeperapp.netlify.app/",
    },
    {
      title: "Blog Site",
      src: "/blogSite.jpg",
      description:
        "Blog-site is a node application for composing blogs. This project was built to learn EJS and routing in express. ",
      href: "https://github.com/pradeept/Blog-Site",
    },
    {
      title: "NullNet",
      src: "/nullNet.jpg",
      description:
        "An Android application for chat and file sharing using. Built using java and xml. The App uses WiFi-P2P to Search, Connect and exchange data with another Android device.",
    },
  ];
  return (
    <>
      <SideBar />
      <div className={`${colors.bg.primary} w-full min-h-screen`}>
        <ThemeToggle classNames={" absolute right-4 top-4"} />
        <div className='mt-[7rem] w-2/3 m-auto '>
          {/* <Carousel /> */}
          {cards.map((project) => {
            return <ProjectCards data={project} classNames={"mt-10"} />;
          })}
        </div>

        <div className='flex place-items-center justify-center mt-4'>
          <a
            href='https://github.com/pradeept'
            target='_blank'
            rel='noreferrer'
          >
            <button
              className={`${colors.buttons.bg} ${colors.buttons.hover} font-bold py-2 px-4 border-b-4 ${colors.border.btnBorder} ${colors.border.btnHover} rounded`}
            >
              More
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
