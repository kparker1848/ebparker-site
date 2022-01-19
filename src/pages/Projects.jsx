import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

    document.body.className = "projects-bg";

    return (
        <main className="container mt-4 pt-4">
            <div className="d-flex flex-wrap justify-content-center">
                <div className="text-center col-12">
                    <h1 className="m-3 display-font text-light text-decoration-underline tracking-in-expand-fwd">
                        Projects</h1>
                    <h3 className="secondary-font text-light">Check it out! Here are links to some of my favorite finished projects!</h3>
                </div>

                <ProjectCard
                    proImg="https://repository-images.githubusercontent.com/402867848/54716385-5b81-4653-85bf-648fc050b871"
                    proLinkName="https://kparker1848.github.io/Tic-Tac-Toe/"
                    proTitle="Tic Tac Toe"
                    proDesc="A 2-person Tic Tac Toe game made with JavaScript, HTML, and CSS!"
                />

            </div>
        </main>
    );
};

export default Projects;