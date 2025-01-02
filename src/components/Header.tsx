
import MidHeader from "./MidHeader";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";



export default function Header(){

   
    return(
        <header className="w-full  bg-accentWhite border-b-[1px] border-b-lightText/50 ">
            
            {/* Top Header */}
            <TopHeader />

            {/* Middle Header */}
            <MidHeader />

            {/* Nav Bar */}
            <NavBar />
            

        </header>
    )
}