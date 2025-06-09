import { useContext } from "react";
import Sidebar from "./SideBar";
import { GlobalContext } from "../context";

export default function Dashboard() {
  const persistedName = localStorage.getItem("persistedName");
  const { handleToggleSidebar } = useContext(GlobalContext);

  return (
    <div className="flex flex-col h-screen">
      <header className="shadow shadow-gray-600 p-4 flex items-center justify-between">
        <img
          className="h-8 md:h-10 mt-2 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          onClick={() => handleToggleSidebar()}
        />
        <div className="flex items-center justify-center gap-3 pr-2 md:pr-10">
          <img
            className="h-8 md:h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVR3TjkaFI32k7M8OGMye32jOxry45evTmjw&s"
            alt=""
          />
          <span className="text-sm md:text-base">{persistedName}</span>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex items-center justify-center w-full p-4">
          <h1 className="font-bold text-2xl md:text-4xl text-center">
            Welcome Dealer {persistedName}
          </h1>
        </div>
      </div>
    </div>
  );
}
