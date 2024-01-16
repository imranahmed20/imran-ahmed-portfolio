import { FaGithub, FaServer, FaExternalLinkAlt } from 'react-icons/fa';
import image1 from '../../../../assets/images/Screenshot_6.png'
import './Project.css'
const Project = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center' style={{ marginBottom: '50px', color: "#fec544" }}>PROJECT</h1>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className="card card-compact w-96 ">
                    <figure className='image-wrap'>
                        <img src={image1} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Chef Recipe</h2>
                        <div className="flex  justify-between items-center">
                            <div className='flex justify-between'>
                                <a className='text-3xl mr-5' href="https://github.com/imranahmed20/chef-recipe-client" target="_blank" title='Github Client' rel="noreferrer"> <FaGithub></FaGithub></a>
                                <a className='text-3xl mr-5' href="https://github.com/imranahmed20/chef-recipe-server" target="_blank" title='Github Server' rel="noreferrer"> <FaServer></FaServer></a>
                                <a className='text-3xl' href="https://chef-recipe-client-15e57.web.app" target="_blank" title='Live Site' rel="noreferrer"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                            </div>
                            <button className="btn btn-warning" onClick={() => document.getElementById('my_modal_1').showModal()}>View Details</button>
                        </div>
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box" style={{ backgroundColor: "#0a101e" }}>
                            <h3 className="font-bold text-lg">Project Name : Chef Recipe</h3>
                            <p className="py-4"><span>Technologies used</span> : React js, Tailwind CSS, DaisyUI, Firebase, React-lazy-load, React Carousel.</p>
                            <h2 className='text-xl font-semibold mb-4'>Features :</h2>
                            <ul>
                                <li className='mb-4'>A new user account can be created. Can login and logout.
                                </li>
                                <li className='mb-4'>All Chef and their short details in a card and All Recipe Page is a protected Page.
                                </li>
                                <li className='mb-4'>Many recipe and chef here.A user can visit and choice her recipe
                                </li>
                            </ul>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className="card card-compact w-96 ">
                    <figure className='image-wrap'>
                        <img src={image1} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Chef Recipe</h2>
                        <div className="flex  justify-between items-center">
                            <div className='flex justify-between'>
                                <a className='text-3xl mr-5' href="https://github.com/imranahmed20/chef-recipe-client" target="_blank" title='Github Client' rel="noreferrer"> <FaGithub></FaGithub></a>
                                <a className='text-3xl mr-5' href="https://github.com/imranahmed20/chef-recipe-server" target="_blank" title='Github Server' rel="noreferrer"> <FaServer></FaServer></a>
                                <a className='text-3xl' href="https://chef-recipe-client-15e57.web.app" target="_blank" title='Live Site' rel="noreferrer"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                            </div>
                            <button className="btn btn-warning" onClick={() => document.getElementById('my_modal_1').showModal()}>View Details</button>
                        </div>
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box" style={{ backgroundColor: "#0a101e" }}>
                            <h3 className="font-bold text-lg">Project Name : Chef Recipe</h3>
                            <p className="py-4"><span>Technologies used</span> : React js, Tailwind CSS, DaisyUI, Firebase, React-lazy-load, React Carousel.</p>
                            <h2 className='text-xl font-semibold mb-4'>Features :</h2>
                            <ul>
                                <li className='mb-4'>A new user account can be created. Can login and logout.
                                </li>
                                <li className='mb-4'>All Chef and their short details in a card and All Recipe Page is a protected Page.
                                </li>
                                <li className='mb-4'>Many recipe and chef here.A user can visit and choice her recipe
                                </li>
                            </ul>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className="card card-compact w-96 ">
                    <figure className='image-wrap'>
                        <img src={image1} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Chef Recipe</h2>
                        <div className="flex  justify-between items-center">
                            <div className='flex justify-between'>
                                <a className='text-3xl mr-5' href="https://github.com/imranahmed20/chef-recipe-client" target="_blank" title='Github Client' rel="noreferrer"> <FaGithub></FaGithub></a>
                                <a className='text-3xl mr-5' href="https://github.com/imranahmed20/chef-recipe-server" target="_blank" title='Github Server' rel="noreferrer"> <FaServer></FaServer></a>
                                <a className='text-3xl' href="https://chef-recipe-client-15e57.web.app" target="_blank" title='Live Site' rel="noreferrer"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                            </div>
                            <button className="btn btn-warning" onClick={() => document.getElementById('my_modal_1').showModal()}>View Details</button>
                        </div>
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box" style={{ backgroundColor: "#0a101e" }}>
                            <h3 className="font-bold text-lg">Project Name : Chef Recipe</h3>
                            <p className="py-4"><span>Technologies used</span> : React js, Tailwind CSS, DaisyUI, Firebase, React-lazy-load, React Carousel.</p>
                            <h2 className='text-xl font-semibold mb-4'>Features :</h2>
                            <ul>
                                <li className='mb-4'>A new user account can be created. Can login and logout.
                                </li>
                                <li className='mb-4'>All Chef and their short details in a card and All Recipe Page is a protected Page.
                                </li>
                                <li className='mb-4'>Many recipe and chef here.A user can visit and choice her recipe
                                </li>
                            </ul>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>

        </div>
    );
};

export default Project;