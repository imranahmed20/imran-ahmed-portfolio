import icon1 from '../../../../assets/images/icon1.png'
import icon2 from '../../../../assets/images/icon2.png'
import icon3 from '../../../../assets/images/icon3.png'
import icon4 from '../../../../assets/images/icon4.png'
import icon5 from '../../../../assets/images/icon5.png'
import icon6 from '../../../../assets/images/icon6.png'

const Service = () => {
    return (
        <div id="service" style={{ marginTop: "90px" }}>
            <h1 data-aos="fade-up"
                data-aos-duration="1000" className='text-3xl font-semibold text-center' style={{ marginBottom: '50px', color: "#fec544" }}>SERVICES</h1>
            <div className="grid md:grid-cols-3 gap-5 mt-16 px-5">
                <div data-aos="zoom-in-right" className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon1} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">Webdesign</h2>
                        <p>Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important.</p>

                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon2} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">UI/UX Design</h2>
                        <p>Effective UI/UX design seamlessly integrates functionality with aesthetics, ensuring users can navigate an interface intuitively while enjoying a visually pleasing experience. Prioritizing user feedback and iterative testing allows designers to create products that not only meet user needs but also exceed their expectations.</p>

                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon3} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">Product Design</h2>
                        <p>Product design blends creativity with practicality, transforming innovative ideas into tangible items that are both functional and aesthetically pleasing. By focusing on user needs and employing iterative prototyping, designers can develop products that enhance everyday life and deliver exceptional value.</p>

                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon4} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">App Design</h2>
                        <p>App design begins with a user-centric approach, emphasizing the importance of understanding the target audience needs, preferences, and behaviors. By conducting thorough research and creating user personas, designers can ensure that the app resonates with its intended users. </p>

                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon5} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">Motion Graphics</h2>
                        <p>Motion graphics combine visual design and animation to create dynamic content that captures and retains audience attention. By using movement, color, and sound, motion graphics can effectively convey complex messages and enhance storytelling in a visually engaging manner.</p>

                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon6} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">Responsive Design</h2>
                        <p>Responsive design ensures that a website or application adapts seamlessly to different screen sizes and devices, providing an optimal user experience regardless of the platform. By employing flexible layouts, images, and CSS media queries, designers create interfaces that maintain functionality and aesthetics across desktops, tablets, and smartphones.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;