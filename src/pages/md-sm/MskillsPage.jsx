import SkillsCard from "../../components/SkillsCard";
import { useTheme } from "../../context/ThemeContext";
import NavBar from "../../components/NavBar";
import Experience from "../../components/Experience";

const MskillsPage = () => {
  const { colors } = useTheme();

  return (
    <>
      <div
        className={`${colors.bg.secondary} w-screen h-screen overflow-y-scroll`}
      >
        <NavBar />
        <div className={`${colors.bg.secondary} `}>
          <Experience />
          <SkillsCard classNames={"text-center justify-between"} />
        </div>
      </div>
    </>
  );
};

export default MskillsPage;
