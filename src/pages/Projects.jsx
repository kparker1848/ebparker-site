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
                <div className="d-flex flex-wrap justify-content-center">
                    <ProjectCard
                        proImg="https://repository-images.githubusercontent.com/402867848/54716385-5b81-4653-85bf-648fc050b871"
                        proLinkName="https://kparker1848.github.io/Tic-Tac-Toe/"
                        proTitle="Tic Tac Toe"
                        proDesc="A 2-person Tic Tac Toe game made with JavaScript, HTML, and CSS!"
                    />
                    <ProjectCard
                        proImg="https://repository-images.githubusercontent.com/411025943/d5f2b1cd-5e2a-480c-95c0-6f476a6cd131"
                        proLinkName="https://kparker1848.github.io/Just-My-Type/"
                        proTitle="Just My Type"
                        proDesc="A typing game! This project was created with jQuery and customized with CSS when given basic HTML and Bootstrap keyboard framework."
                    />
                    <ProjectCard
                        proImg="https://repository-images.githubusercontent.com/412172395/f46b5b40-a026-4df8-8dd0-bb816461872a"
                        proLinkName="https://kparker1848.github.io/context-clues/"
                        proTitle="Context Clues"
                        proDesc="A project using jQuery to manipulate DOM elements, providing functionally generated accusations in a Clue-like setting."
                    />
                    <ProjectCard
                        proImg="https://repository-images.githubusercontent.com/419491843/ecced979-566a-4933-ab78-befab3db8d25"
                        proLinkName="https://kparker1848.github.io/Reacting-to-API/"
                        proTitle="Using React and APIs"
                        proDesc="This project utilizes React and a third party API to showcase Studio Ghibli film and character information!"
                    />

                </div>

            </div>
        </main>
    );
};

export default Projects;