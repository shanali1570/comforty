import { MdSwitchAccount } from "react-icons/md";
import SideBarCartIcon from "./SideBarCartIcon";
import Image from "next/image";
import Link from "next/link";

const SideBar = async () => {

  return (
    <div className="fixed top-60 right-2 z-20 flex flex-col gap-2">
      <Link
        href={ "/signin"}
        className="bg-accentWhite w-16 h-[70px] rounded-md flex flex-col gap-1 text-accent justify-center items-center shadow-sm shadow-lightGreen overflow-x-hidden group cursor-pointer"
      >
        <div className="flex justify-center items-center">
          
            <Image
              src={""}
              alt=""
              width={35}
              height={35}
              className="rounded-full -translate-x-12 group-hover:translate-x-4 transition-transform duration-200"
            />
          
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          

          
            <Image
              src={''}
              alt=""
              width={35}
              height={35}
              className="rounded-full -translate-x-4 group-hover:translate-x-12 transition-transform duration-200"
            />
          
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          
        </div>
        <p className="text-xs font-semibold">Profile</p>
      </Link>
      <SideBarCartIcon />
    </div>
  );
};

export default SideBar;
