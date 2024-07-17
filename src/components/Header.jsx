import coffeLogo from "../assets/logo.jfif/s";
export default function Header() {
  return (
    <header className="flex">
      <img
        src={coffeLogo}
        alt="out site beautyful logo is here!"
        className="w-4 aspect-square"
      />
      <h1>TSIGE online shopping</h1>
    </header>
  );
}
