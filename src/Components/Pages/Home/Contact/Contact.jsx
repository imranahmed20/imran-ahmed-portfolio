import { FaPhoneAlt } from "react-icons/fa";
import { VscBriefcase } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";




const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Optionally, reset the form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };
    return (
        <div id="contact" style={{ marginTop: "150px" }}>
            <h1 data-aos="fade-up" className='text-3xl font-semibold text-center ' style={{ color: "#fec544", marginBottom: '50px', }}>CONTACT</h1>
            <div className="flex flex-col lg:flex-row-reverse min-h-screen gap-5">
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="card  w-full  ">
                    <h1 className="text-4xl font-semibold mb-2">Just say Hello</h1>
                    <form onSubmit={handleSubmit} className="card-body" >
                        <div className="form-control mb-5" >
                            <input type="text" name="name" value={formData.name}
                                onChange={handleChange} placeholder="Your Name" className="input input-warning p-4" required style={{ backgroundColor: "#0a101e" }} />
                        </div>
                        <div className="form-control  mb-5">
                            <input type="email" value={formData.email}
                                onChange={handleChange} name="email" placeholder="Your Email" className="input input-warning w-full" required style={{ backgroundColor: "#0a101e" }} />
                        </div>

                        <textarea type="text" className="textarea textarea-warning  mb-4 h-28" placeholder="Your Massage" value={formData.message}
                            onChange={handleChange} name="message" style={{ backgroundColor: "#0a101e" }} />
                        <div className=" mt-3">
                            <button type="submit" onClick={() => document.getElementById('my_modal_3').showModal()} className="btn  text-base btn-warning rounded-full">Send Massage</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Email sent successfully</p>
                                </div>
                            </dialog>
                        </div>
                    </form>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="text-center lg:text-left">
                    <h1 className="text-4xl font-semibold mb-8">Contact Info</h1>
                    <p className="text-lg"> I’d love to hear from you! Whether you have questions, feedback, or opportunities to discuss, feel free to reach out.</p>
                    <div className="flex items-center mt-5 mb-5">
                        <div className="rounded-full border p-4"> <VscBriefcase /></div>
                        <div className="ml-5 ">
                            <h3 className="text-2xl">Email</h3>
                            <p>amdimran328@gmail.com</p>
                            <p>amdimran328@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-5 mb-5">
                        <div className="rounded-full border p-4"> <FaPhoneAlt /></div>
                        <div className="ml-5 ">
                            <h3 className="text-2xl">Phone</h3>
                            <p>01300193867</p>
                            <p>01724641694</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-5 mb-5">
                        <div className="rounded-full border p-4"> <FaLocationDot /></div>
                        <div className="ml-5 ">
                            <h3 className="text-2xl">Address</h3>
                            <p>Haragach, Kaunia, Rangpur</p>
                            <p>Visite my social profile and get connected</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;