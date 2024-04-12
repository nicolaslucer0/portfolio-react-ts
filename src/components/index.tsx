import { GradientContainer, Lights, Lights2 } from "../styles/Grid";
import { AboutMe } from "./Aboutme";
import { Contact } from "./Contact";
import { Experience } from "./Experience/Experience";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Timer } from "./Timer";

export const Home = () => (
  <>
    <Lights />
    <Lights2 />
    <GradientContainer />
    <Navbar />
    <Header />
    <AboutMe />
    <Experience />
    <Contact />
    <Timer />
  </>
);
