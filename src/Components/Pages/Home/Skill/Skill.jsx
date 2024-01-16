
const Skill = () => {
    return (
        <div id="skills" style={{ marginTop: "130px", marginBottom: "110px" }}>
            <h1 data-aos="fade-up"
                data-aos-duration="1000" className='text-3xl font-bold text-center' style={{ marginBottom: '50px', color: "#fec544" }}>SKILLS</h1>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1 className="text-4xl font-semibold mb-8">All the skills that I have in that field of work are mentioned.</h1>
                    <p className="text-lg" style={{ color: "#a9adb8" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div>
                    <div data-aos="fade-up" className="flex justify-between">
                        <p className="text-xl font-bold">HTML</p>
                        <p className="text-xl font-bold" style={{ color: "#fec544" }}>98%</p>
                    </div>
                    <hr data-aos="fade-up" className="mb-5 border-orange-300 border" />
                    <div data-aos="fade-up" className="flex justify-between">
                        <p className="text-xl font-semibold">CSS</p>
                        <p className="text-xl font-semibold" style={{ color: "#fec544" }}>96%</p>
                    </div>
                    <hr data-aos="fade-up" className="mb-5 border-orange-300 border" />
                    <div data-aos="fade-up" className="flex justify-between">
                        <p className="text-xl font-semibold">JAVASCRIPT</p>
                        <p className="text-xl font-semibold" style={{ color: "#fec544" }}>94%</p>
                    </div>
                    <hr data-aos="fade-up" className="mb-5 border-orange-300 border" />
                    <div data-aos="fade-up" className="flex justify-between">
                        <p className="text-xl font-semibold">REACT JS</p>
                        <p className="text-xl font-semibold" style={{ color: "#fec544" }}>85%</p>
                    </div>
                    <hr data-aos="fade-up" className="mb-5 border-orange-300 border" />
                    <div data-aos="fade-up" className="flex justify-between">
                        <p className="text-xl font-semibold">UX Design</p>
                        <p className="text-xl font-semibold" style={{ color: "#fec544" }}>90%</p>
                    </div>
                    <hr data-aos="fade-up" className="mb-5 border-orange-300 border" />
                    <div data-aos="fade-up" className="flex justify-between">
                        <p className="text-xl font-semibold">TAILWIND CSS</p>
                        <p className="text-xl font-semibold" style={{ color: "#fec544" }}>92%</p>
                    </div>
                    <hr data-aos="fade-up" className="mb-5 border-orange-300 border" />
                    <div data-aos="fade-up" className="flex justify-between">
                        <p className="text-xl font-semibold">BOOTSTRAP</p>
                        <p className="text-xl font-semibold" style={{ color: "#fec544" }}>94%</p>
                    </div>
                    <hr data-aos="fade-up" className="mb-2 border-orange-300 border" />
                </div>
            </div>
        </div>
    );
};

export default Skill;