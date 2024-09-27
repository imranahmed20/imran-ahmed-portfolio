import image from '../../../../assets/images/image.png'
import resume from '../../../../assets/images/_Imran Resume .pdf'
const About = () => {
    return (
        <div id="about" style={{ marginTop: "90px" }}>
            <h1 data-aos="fade-up"
                data-aos-duration="1000" className='text-3xl font-semibold text-center' style={{ marginBottom: '50px', color: "#fec544" }}>ABOUT ME</h1>

            <div className='grid md:grid-cols-2 mt-8'>
                <div data-aos="zoom-in">
                    <img src={image} alt="" />
                </div>
                <div data-aos="zoom-in-left" className='p-10'>
                    <h1 className='text-4xl font-semibold mt-5 mb-3'>Hi There! I am Imran Ahmed</h1>
                    <h3 className='text-xl font-semibold mb-3' style={{ color: "#fec544" }}>Front End Web Developer</h3>
                    <p className='text-lg ' style={{ color: "#a9adb8" }}>Step into my digital realm where creativity meets functionality! As a fervent web developer specializing in JavaScript, React, and Next.js, I craft immersive online experiences that captivate and inspire. Dive into my portfolio to witness the fusion of cutting-edge technology with visionary design. Let embark on a journey together, shaping the digital landscape one pixel at a time.</p>
                    <div style={{ color: "#a9adb8" }}>
                        <p className='text-xl mt-5'><span className='mr-8'>Birthday </span> :  <span className='ml-1'>April 17, 2001</span></p>
                        <p className='text-xl mt-3'>
                            <span className='mr-12'>Phone </span> :  <span className='ml-1'>
                                01724641694
                            </span>
                        </p>
                        <p className='text-xl mt-3'>
                            <span className='mr-14'>Email </span> :  <span className='ml-1'>
                                amdimran328@gamil.com
                            </span>
                        </p>
                        <p className='text-xl mt-3'>
                            <span className='mr-14'>From </span> :  <span className='ml-1'>2661 Kaunia, Rangpur, Bangladesh</span>
                        </p>
                        <p className='text-xl mt-3'>
                            <span className='mr-4'>Language </span> :  <span className='ml-1'>English, Bangla, Hindi</span>
                        </p>
                        <p className='text-xl mt-3 mb-8'>
                            <span className='mr-4'>Freelance </span> :  <span className='ml-1'>Available</span>
                        </p>
                    </div>
                    <a target='_blank' download="Imran Ahmed Resume" href={resume} rel="noreferrer" >
                        <button className="btn btn-warning rounded-full font-semibold text-base">
                            Download Resume
                        </button>
                    </a>


                </div>
            </div>

        </div>
    );
};

export default About;