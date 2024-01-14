import image from '../../../../assets/images/imran.jpeg'
const About = () => {
    return (
        <div style={{ marginTop: "90px" }}>
            <h1 className='text-3xl font-semibold text-center' style={{ marginBottom: '50px', color: "#fec544" }}>ABOUT ME</h1>

            <div className='grid md:grid-cols-2 mt-8'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold mt-5 mb-3'>Hi There! I am Imran Ahmed</h1>
                    <h3 className='text-xl font-semibold mb-3' style={{ color: "#fec544" }}>Front End Web Developer</h3>
                    <p className='text-lg' style={{ color: "#a9adb8" }}>I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and otivate people to respond to messages, with a view to making a favorable impact.</p>
                    <div style={{ color: "#a9adb8" }}>
                        <p className='text-xl mt-5'><span className='mr-8'>Birthday </span> :  <span className='ml-1'>May 07, 1990</span></p>
                        <p className='text-xl mt-3'>
                            <span className='mr-12'>Phone </span> :  <span className='ml-1'>+1 876-369-9009</span>
                        </p>
                        <p className='text-xl mt-3'>
                            <span className='mr-14'>Email </span> :  <span className='ml-1'>devis@example.com</span>
                        </p>
                        <p className='text-xl mt-3'>
                            <span className='mr-14'>From </span> :  <span className='ml-1'>2661 Hich meadow lane bear creek</span>
                        </p>
                        <p className='text-xl mt-3'>
                            <span className='mr-4'>Language </span> :  <span className='ml-1'>English, Germanic</span>
                        </p>
                        <p className='text-xl mt-3 mb-8'>
                            <span className='mr-4'>Freelance </span> :  <span className='ml-1'>Available</span>
                        </p>
                    </div>
                    <button className="btn btn-warning rounded-full font-semibold text-base">Download CV</button>

                </div>
            </div>

        </div>
    );
};

export default About;