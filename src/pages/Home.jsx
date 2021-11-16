import React from 'react';
import { BsChevronDoubleRight, BsLinkedin, BsGithub } from "react-icons/bs";



const Home = () => {
    return (
        <main className="container">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <div>

                </div>
            </div>
            <h1 className="text-center m-3 text-light text-decoration-underline" style={{ fontFamily: 'Megrim', fontSize: '400%' }}>Elliott Parker</h1>
            <h3 className="text-center m-3 text-light" style={{ fontFamily: 'Mohave' }}>Web Development Student | Innovate Birmingham</h3>
            <div className="container d-flex flex-wrap justify-content-center">
                <div className="col-12 d-flex flex-wrap justify-content-center" style={{ backgroundColor: 'rosybrown', opacity: '80%'}}>
                    <p className="col-12 text-center text-light fs-4"  style={{ fontFamily: 'Mohave'}}>Social</p>
                    <a href="https://www.linkedin.com/in/elliott-parker-56b23b139" target="_blank" className="btn text-light m-2" style={{ backgroundColor: 'sienna' }}><BsLinkedin /> LinkedIn</a> 
                    <a href="https://github.com/kparker1848" target="_blank" className="btn text-light m-2" style={{ backgroundColor: 'sienna' }}><BsGithub /> Github</a> 

                </div>
                <div className="col-sm-6 m-4 d-flex flex-wrap justify-content-center" style={{ backgroundColor: 'darkslategrey', opacity: '80%'}}>
                    <h1 className="text-center text-light" style={{ fontFamily: 'Mohave'}}>Bio</h1>
                    <p className="text-center text-light">Passionate creative visionary ready to provide quality work experience to a software
                        team. Comes from an artistic background with a recent excellent, fast-paced study in web development.  A flexible
                        individual and team contributor that utilizes creative and analytical problem solving methods. An efficient learner
                        and critical thinker; has skills that will prove to be great assets to any organization. </p>
                </div>
                <div className="col-12 d-flex flex-wrap m-3 justify-content-evenly">

                    <div className="card shadow p-3 mb-5 rounded col-sm-4" style={{ backgroundColor: 'rosybrown', opacity: '80%' }}>
                        <div className="card-body" style={{ backgroundColor: 'darkslategrey' }}>
                            <h4 className="text-light" style={{ fontFamily: 'Mohave'}}>My Skills:</h4>
                            <ul className="list-group" style={{ fontFamily: 'Mohave'}}>
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

                    <div className="card shadow p-3 mb-5 rounded col-sm-4" style={{ backgroundColor: 'darkslategrey' }}>
                        <div className="card-body" style={{ backgroundColor: 'rosybrown' }}>
                            <img className="mb-2 card-img" src="/assets/images/self.jpg" alt="Elliott Parker" />
                            <p className ="text-center fw-bold" style={{ color: 'darkslategrey' }}>After graduating from Auburn University with a BA in History, I realized that I wanted to go down a different path.
                                Tech has been an exciting challenge for me and I hope to grow professionally as a developer, and personally as an artist.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
};

export default Home;