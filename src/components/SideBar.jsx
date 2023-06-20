import { Link } from "react-router-dom";


// prev = w-1/4 for main div
//Baumans not adopting

const SideBar = ()=>{
    return <div className="sticky w-80 h-scren bg-primary-dark text-text-color-dark "> 


        <div className="flex items-center justify-center text-center p-2 ">
            <img src="/prof1.jpg" alt="" className="rounded-full w-36 mb-3 border-4 border-text-grey" />
            {/* <h1 className="text-text-color-heading font-Itim">I'm Pradeep Tarakar</h1> */}
        </div>

        

        <div className=" p-3 h-2/3 bg-secondary-dark-2 m-2 text-center rounded-2xl grid grid-row-4 items-center font-Baumans text-lg">
            <div className="p-4 bg-item-active-dark rounded-xl"><Link to='/' >Home</Link></div>
            <div className="p-4 bg-item-bg-dark  rounded-xl"><Link to='/skills' >Skills</Link></div>
            <div className="p-4 bg-item-bg-dark  rounded-xl"><Link to='/projects' >Projects</Link></div>
            <div className="p-4 bg-item-bg-dark  rounded-xl"><Link to='/contact' >Contact</Link></div>
            <div>
                <footer className="text-item-bg-dark">&#169; Pradeep Taarkar</footer>
            </div>
        </div>


    </div>
}

export default SideBar;