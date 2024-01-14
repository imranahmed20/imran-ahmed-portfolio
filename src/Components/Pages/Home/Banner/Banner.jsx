import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import image from '../../../../assets/images/imran.jpeg'
const Banner = () => {
    return (
        <div className="text-center p-5">
            <div className="flex justify-center items-center">
                <img className="img-fluid w-72 mt-16" src={image} alt="" />
            </div>
            <h1 className="text-5xl mt-5 font-bold">Hi, I am <span style={{ color: "#fec544" }}>Imran Ahmed</span></h1>
            <p className="text-xl mt-8 " style={{ color: "#a9adb8" }}>I am a frontend web developer. I can provide clean code and pixel perfect design. <br />
                I also make website more & more interactive with web animations.
            </p>
            <div className="flex justify-center items-center mt-8">
                <FaFacebook className="text-4xl mr-5"></FaFacebook>
                <FaGithub className="text-4xl mr-5"></FaGithub>
                <FaTwitter className="text-4xl"></FaTwitter>
            </div>

        </div>
    );
};

export default Banner;
