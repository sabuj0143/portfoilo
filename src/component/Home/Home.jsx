import Contact from "../Contact/Contact";
import Skill from "../Skills/Skill";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;