import { FaPhoneAlt } from "react-icons/fa";
import { VscBriefcase } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
    return (
        <div id="contact" style={{ marginTop: "150px" }}>
            <h1 data-aos="fade-up" className='text-3xl font-semibold text-center ' style={{ color: "#fec544", marginBottom: '50px', }}>CONTACT</h1>
            <div className="hero min-h-screen">
                <div className="grid md:grid-cols-2 gap-5">

                    <div data-aos="fade-up"
                        data-aos-duration="3000" className="card  w-full  ">
                        <h1 className="text-4xl font-semibold mb-2">Just say Hello</h1>
                        <form className="card-body" >
                            <div className="form-control mb-5" >
                                <input type="text" placeholder="Your Name" className="input input-warning p-4" required style={{ backgroundColor: "#0a101e" }} />
                            </div>
                            <div className="form-control  mb-5">
                                <input type="email" placeholder="Your Email" className="input input-warning w-full" required style={{ backgroundColor: "#0a101e" }} />
                            </div>
                            <div className="form-control  mb-5 ">
                                <input type="text" placeholder="Your Subject" className="input input-warning" required style={{ backgroundColor: "#0a101e" }} />
                            </div>

                            <textarea className="textarea textarea-warning  mb-4 h-28" placeholder="Your Massage" style={{ backgroundColor: "#0a101e" }}></textarea>
                            <div className=" mt-3">
                                <button className="btn  text-base btn-warning rounded-full">Send Massage</button>
                            </div>
                        </form>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className="text-center lg:text-left">
                        <h1 className="text-4xl font-semibold mb-8">Contact Info</h1>
                        <p className="text-lg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.</p>
                        <div className="flex items-center mt-5 mb-5">
                            <div className="rounded-full border p-4"> <VscBriefcase /></div>
                            <div className="ml-5 ">
                                <h3 className="text-2xl">Email</h3>
                                <p>devis@example.com</p>
                                <p>info@support.com</p>
                            </div>
                        </div>
                        <div className="flex items-center mt-5 mb-5">
                            <div className="rounded-full border p-4"> <FaPhoneAlt /></div>
                            <div className="ml-5 ">
                                <h3 className="text-2xl">Phone</h3>
                                <p>+1 876-369-9009</p>
                                <p>+1 213-519-1786</p>
                            </div>
                        </div>
                        <div className="flex items-center mt-5 mb-5">
                            <div className="rounded-full border p-4"> <FaLocationDot /></div>
                            <div className="ml-5 ">
                                <h3 className="text-2xl">Address</h3>
                                <p>Olancha, KY 93544</p>
                                <p>Visite my social profile and get connected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;