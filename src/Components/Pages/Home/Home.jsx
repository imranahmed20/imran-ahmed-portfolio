import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
// import Resume from "./Resume/Resume";
import Service from "./Service/Service";
import Skill from "./Skill/Skill";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Skill></Skill>
            <Project></Project>
            {/* <Resume></Resume> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;