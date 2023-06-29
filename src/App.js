
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MhomePage from "./pages/md-sm/MhomePage";
import ContactPage from "./pages/ContactPage";
import { useMediaQuery } from 'react-responsive';
import SkillsPage from "./pages/SkillsPage";
import MskillsPage from "./pages/md-sm/MskillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import MprojectPage from "./pages/md-sm/MprojectsPage";
import McontactPage from './pages/md-sm/McontactPage';


const App = ()=>{


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });
    

    return <div className="flex ">
        <Routes>
            {isDesktopOrLaptop?<Route path='/' element={<HomePage />} />:<Route path='/' element={<MhomePage/>} />}    
            {isDesktopOrLaptop?<Route path='/skills' element={<SkillsPage />} />:<Route path='/skills' element={<MskillsPage/>} />}    
            {isDesktopOrLaptop?<Route path='/projects' element={<ProjectsPage />} />:<Route path='/projects' element={<MprojectPage/>} />}    
            {isDesktopOrLaptop?<Route path='/contact' element={<ContactPage />} />:<Route path='/contact' element={<McontactPage/>} />}    
            
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </div>
}

export default App;