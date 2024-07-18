import coffeLogo from "../assets/logo.jpg";
import "../index.css";
export default function Header() {
  return (
    <header className="bg-blue-600 p-4 flex items-center sticky top-0 z-50">
      <img
        src={coffeLogo}
        alt="out site beautyful logo is here!"
        className="w-12 h-12 mr-2 ml-8 rounded-full"
      />
      <h1 className="text-white text-2xl font-bold">TSIGE online shopping</h1>
    </header>
  );
}
