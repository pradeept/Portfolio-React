import SideBar from "../components/SideBar";
import { useTheme } from "../context/ThemeContext";
import Carousel from "../components/Carousel";
import ThemeToggle from "../components/ThemeToggle";

const ProjectsPage = () => {
  const { colors } = useTheme();

  return (
    <>
      <SideBar />
      <div className={`${colors.bg.primary} w-full h-screen`}>
        <ThemeToggle classNames={" absolute right-4 top-4"} />
        <div className='mt-[7rem] w-2/3 m-auto '>
          <Carousel />
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
