import coffeLogo from "../assets/logo.jpg";
export default function Header() {
  return (
    <header className="bg-blue-600 p-4 flex items-center">
      <img
        src={coffeLogo}
        alt="out site beautyful logo is here!"
        // height={"50px"}
        // width={"50px"}
        className="w-4 h-4 mr-2"
      />
      <h1 className="text-white text-2xl font-bold">TSIGE online shopping</h1>
    </header>
  );
}
