import { FaFacebook, FaGithub } from "react-icons/fa";
import image from '../../../../assets/images/image.png'
import { FaLinkedin } from "react-icons/fa6";
const Banner = () => {
    return (
        <div id="/" data-aos="fade-up"
            data-aos-duration="3000" className="text-center p-5">
            <div className="flex justify-center items-center">
                <img className="img-fluid w-72 mt-16 rounded-full border-red-600" src={image} alt="" />
            </div>
            <div >
                <h1 className="text-5xl mt-5 font-bold"> Hi, I am <span style={{ color: "#fec544" }}>Imran Ahmed</span>
                </h1>
                <p className="text-xl mt-8 " style={{ color: "#a9adb8" }}>I am a frontend web developer. I can provide clean code and pixel perfect design. <br />
                    I also make website more & more interactive with web animations.
                </p>


            </div>
            <div className="flex justify-center items-center mt-8">

                <a href="https://www.facebook.com/mdimranahmed.imran.568" target="_blank" rel="noreferrer">
                    <FaFacebook className="text-4xl mr-5"></FaFacebook>
                </a>


                <a href="https://github.com/imranahmed20" target="_blank" rel="noreferrer">
                    <FaGithub className="text-4xl mr-5"></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/md-imran-ahmed-07723b280/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="text-4xl"></FaLinkedin>
                </a>
            </div>

        </div>
    );
};

export default Banner;
