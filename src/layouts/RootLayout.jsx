
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-between">
        
        <Outlet />
      </div>
    </div>
  );
}
