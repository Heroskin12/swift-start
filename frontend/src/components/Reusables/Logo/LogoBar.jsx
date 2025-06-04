import Logo from "../../../assets/Logo.png";
export default function LogoBar() {
  return (
    <div className="flex items-center text-dark-primary">
      <p
        style={{
          fontSize: "clamp(0.5rem, 0.8vw + 0.5rem, 1.2rem)",
        }}
        className="whitespace-nowrap "
      >
        Welcome to
      </p>
      <img src={Logo} alt="English Sponge Logo" />
      <p
        className="whitespace-nowrap ml-2"
        style={{
          fontSize: "clamp(0.5rem, 0.8vw + 0.5rem, 1.2rem)",
        }}
      >
        English Sponge!
      </p>
    </div>
  );
}
