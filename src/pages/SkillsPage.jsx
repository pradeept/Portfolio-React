import SideBar from "../components/SideBar";
import { useTheme } from "../context/ThemeContext";
import SkillsCard from "../components/SkillsCard";
import ThemeToggle from "../components/ThemeToggle";
import Experience from "../components/Experience";

const SkillsPage = () => {
  const { colors } = useTheme();

  return (
    <>
      <SideBar />
      <ThemeToggle classNames='absolute right-4 top-4' />
      <div className={`${colors.bg.primary} w-screen min-h-screen`}>
        <Experience />
        <SkillsCard />
      </div>
    </>
  );
};

export default SkillsPage;
