import SideBar from "../components/SideBar";
import { useTheme } from "../context/ThemeContext";
import SkillsCard from "../components/SkillsCard";
import ThemeToggle from "../components/ThemeToggle";

const SkillsPage = () => {
  const { colors } = useTheme();

  return (
    <>
      <SideBar />
      <ThemeToggle classNames='absolute right-4 top-4' />
      <div className={`${colors.bg.primary} w-screen min-h-screen`}>
        <SkillsCard />
      </div>
    </>
  );
};

export default SkillsPage;
