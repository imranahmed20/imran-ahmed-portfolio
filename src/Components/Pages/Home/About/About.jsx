import image from '../../../../assets/images/imran.jpeg'
const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1>Hi There! I am Imran Ahmed</h1>
                    <h3>Web Developer</h3>
                    <p>I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and otivate people to respond to messages, with a view to making a favorable impact.</p>
                </div>
            </div>

        </div>
    );
};

export default About;