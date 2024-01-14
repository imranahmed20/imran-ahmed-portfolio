import icon1 from '../../../../assets/images/icon1.png'
import icon2 from '../../../../assets/images/icon2.png'
import icon3 from '../../../../assets/images/icon3.png'
import icon4 from '../../../../assets/images/icon4.png'
import icon5 from '../../../../assets/images/icon5.png'
import icon6 from '../../../../assets/images/icon6.png'

const Service = () => {
    return (
        <div style={{ marginTop: "90px" }}>
            <h1 className='text-3xl font-semibold text-center' style={{ marginBottom: '50px', color: "#fec544" }}>SERVICES</h1>
            <div className="grid md:grid-cols-3 gap-5 mt-16">
                <div className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon1} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">Sketches</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>

                    </div>
                </div>
                <div className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon2} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">UI/UX Design</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>

                    </div>
                </div>
                <div className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon3} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">Product Design</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>

                    </div>
                </div>
                <div className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon4} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">App Design</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>

                    </div>
                </div>
                <div className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon5} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">Motion Graphics</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>

                    </div>
                </div>
                <div className="card w-96" style={{ backgroundColor: "#101624" }}>
                    <figure><img className='rounded-full mx-auto mt-16 border w-24 h-24 p-4 border-orange-300' src={icon6} alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center mb-4">Responsive Design</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;