import { useNavigate } from "react-router-dom";
import icon from "../assets/icon2.png";
export default function Navbar() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/");
  };
  return (
    <div className="flex sticky z-50 top-0 bg-primary/20 backdrop-blur-2xl w-full items-center justify-between py-4 px-16">
      <h1
        onClick={click}
        className="flex items-center font-extrabold text-second text-xl font-archivo"
      >
        <img src={icon} className="w-12 h-12" alt="" />
      </h1>
      <div className="grid grid-cols-4 text-second">
        <button>HOME</button>
        <button>WORKS</button>
        <button>ABOUT</button>
        <button>TAMPLATE</button>
      </div>
      <button className="text-second rounded border border-second p-2">
        . CONTACT
      </button>
    </div>
  );
}
