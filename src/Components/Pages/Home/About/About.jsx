import image from '../../../../assets/images/imran.jpeg'
const About = () => {
    return (
        <div className='mt-14'>
            <h1 className='text-5xl font-bold text-center'>About Me</h1>
            <div className='grid md:grid-cols-2 mt-8'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold mt-5 mb-3'>Hi There! I am Imran Ahmed</h1>
                    <h3 className='text-xl font-semibold mb-3'>Web Developer</h3>
                    <p>I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and otivate people to respond to messages, with a view to making a favorable impact.</p>
                    <p>Birthday : May 07, 1990</p>
                    <p>Phone : +1 876-369-9009</p>
                    <p>Email : devis@example.com</p>
                    <p>From : 2661 Hich meadow lane bear creek</p>
                    <p>Language : English, Germanic</p>
                    <p> Freelance : Available</p>
                    <button className="btn btn-warning">Download CV</button>

                </div>
            </div>

        </div>
    );
};

export default About;