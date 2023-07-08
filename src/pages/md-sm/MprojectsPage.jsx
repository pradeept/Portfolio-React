import NavBar from "../../components/NavBar";
import ProjectCards from "../../components/ProjectCards";
import { useTheme } from "../../context/ThemeContext";


const MprojectPage = () => {

    const {colors} = useTheme();


    const cards = [
        {
            title:"Favourite Books App",
            src:"/favBook.jpg",
            description:"Favourite Books Keeping app is a React application. Where we  can add, update, delete our favorite books. "
        },
        {
            title:"Real-time Chat App",
            src:"/chatApp.jpg",
            description:"A real-time Chat application built using Vanilla Node.js, Socket.io and MongoDB. Allows users to create and join chat-rooms."
        },
        {
            title:"Keeper App",
            src:"/keeper.jpg",
            description:"A simple Notes keeping React application inspired by Google's Keep app."
        },
        {
            title:"Blog Site",
            src:"/blogSite.jpg",
            description:"Blog-site is a node application for composing blogs. This project was built to learn EJS and routing in express. "
        },
        {
            title:"NullNet",
            src:"/nullNet.jpg",
            description:"An Android application for chat and file sharing using. Built using java and xml. The App uses WiFi-P2P to Search, Connect and exchange data with another Android device."
        }
    ]


    return<>
        <div className={`${colors.bg.secondary} w-screen `}>
        <NavBar/>
            <div className={`p-4 mt-10`} >
                <div >
                    {
                        cards.map((item,index)=>{
                            return <ProjectCards data={item} key={index} classNames={"mx-4 text-sm my-6 cursor-pointer"}/>
                        })
                    }
                </div>
                <div className='flex place-items-center justify-center mt-4'>
                <a href='https://github.com/pradeept' target='_blank' rel='noreferrer'><button className={`${colors.buttons.bg} ${colors.buttons.hover} font-bold py-2 px-4 border-b-4 ${colors.border.btnBorder} ${colors.border.btnHover} rounded`}>More</button></a>            
                </div>
            </div>
        </div>
       
        
    </>
}

export default MprojectPage;