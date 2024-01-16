

const Resume = () => {
    return (
        <div id="resume" style={{ marginTop: "130px" }}>
            <h1 data-aos="fade-up" className='text-3xl font-semibold text-center' style={{ marginBottom: '50px', color: "#fec544" }}>RESUME</h1>
            <div className="grid md:grid-cols-2 mt-16 gap-8">
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className="flex">
                        <img src="https://devis-react.vercel.app/images/icon/resume-icon1.png" alt="" />
                        <h1 className="text-4xl font-semibold  ml-8">Education</h1>
                    </div>
                    <h1 className="text-2xl font-semibold mt-8" style={{ color: "#fec544" }}>Master of Computer Science</h1>
                    <p className="text-xl font-semibold mt-3">2015 - 2016</p>
                    <p className="text-2xl font semibold mt-3 mb-3">University of XYZ</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                    <h1 className="text-2xl font-semibold mt-8" style={{ color: "#fec544" }}>Bachelor of Computer Science</h1>
                    <p className="text-xl font-semibold mt-3">2015 - 2016</p>
                    <p className="text-2xl font semibold mt-3 mb-3">University of XYZ</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                    <h1 className="text-2xl font-semibold mt-8" style={{ color: "#fec544" }}> Diploma in Computer Science</h1>
                    <p className="text-xl font-semibold mt-3">2006 - 2010</p>
                    <p className="text-2xl font semibold mt-3 mb-3">XYZ Institution</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className="flex ">
                        <img src="https://devis-react.vercel.app/images/icon/resume-icon2.png" alt="" />
                        <h1 className="text-4xl font-semibold ml-8"> Experience</h1>
                    </div>
                    <h1 className="text-2xl font-semibold mt-8" style={{ color: "#fec544" }}>Senior UX/UI Designer</h1>
                    <p className="text-xl font-semibold mt-3">Jan 2020 - Present</p>
                    <p className="text-2xl font semibold mt-3 mb-3">Bergnaum, Hills and Howe</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                    <h1 className="text-2xl font-semibold mt-8" style={{ color: "#fec544" }}>Product Designer</h1>
                    <p className="text-xl font-semibold mt-3">Jan 2016 - December 2019</p>
                    <p className="text-2xl font semibold mt-3 mb-3">Langosh, Sipes and Raynor</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                    <h1 className="text-2xl font-semibold mt-8" style={{ color: "#fec544" }}>UI/UX Designer</h1>
                    <p className="text-xl font-semibold mt-3">Jan 2014 - December 2015</p>
                    <p className="text-2xl font semibold mt-3 mb-3">Strosin, Maggio and Homenick</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                </div>
            </div>

        </div>
    );
};

export default Resume;