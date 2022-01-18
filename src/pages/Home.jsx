import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';



const Home = () => {

    document.body.className = "home-bg";


    return (
        <main className="container">
            <div className="col-12 d-flex flex-wrap justify-content-center">
            </div>
            <h1 className="text-center m-3 display-font text-light text-decoration-underline tracking-in-expand-fwd">
                Elliott Parker</h1>
            <h3 className="text-center m-3 secondary-font text-light tracking-in-expand-fwd-2">
                Innovate Birmingham Graduate | Web Development</h3>
            <div className="container d-flex flex-wrap justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                   
                </div>
                <div className="col-sm-6 m-4 p-3 d-flex flex-wrap justify-content-center bg-darkpine">
                    <h1 className="text-center secondary-font text-light">Bio</h1>
                    <p className="text-center text-light">
                        Passionate creative visionary ready to provide quality work experience to a software
                        team. Comes from an artistic background with a recent excellent, fast-paced study in web development. A flexible
                        individual and team contributor that utilizes creative and analytical problem solving methods. An efficient learner
                        and critical thinker; has skills that will prove to be great assets to any organization. </p>
                </div>
                <div className="col-12 d-flex flex-wrap m-3 justify-content-evenly">

                    <div className="card shadow p-3 mb-5 rounded col-sm-4 bg-dustyrose">
                        <div className="card-body bg-darkpine">
                            <h4 className="secondary-font text-light">My Skills:</h4>
                            <ul className="secondary-font list-group">
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> HTML/CSS</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> Bootstrap</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> React</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> SQL</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> JavaScript</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> TypeScript</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> jQuery</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> Node.js</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> Independent Research</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> Basic Design Principles</li>
                                <li className="list-group-item bg-transparent text-light"><BsChevronDoubleRight /> Information Analysis and Synthesis</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card shadow p-3 mb-5 rounded col-sm-4 bg-darkpine">
                        <div className="card-body bg-dustyrose">
                            <img className="mb-2 card-img" src="/assets/images/self.jpg" alt="Elliott Parker" />
                            <p className="text-center fw-bold text-darkpine">After graduating from Auburn University with a BA in History and a passion for art, 
                                I realized that I wanted to go down a different path. Tech has been an exciting challenge for me and I hope to grow 
                                professionally as a developer, and personally as an artist.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Home;