import "./Construction.css";
import videoSource from "./Coming_soon.MP4";

// Import Custom Hooks
import NavbarLogo from "../Components/Navbar/Logo/Logo";

const Construction = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>

      <NavbarLogo />
    </div>
  );
};

export default Construction;
