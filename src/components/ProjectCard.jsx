import * as React from 'react';

const ProjectCard = props => {
    return (
        <div className="card pro-card-dimension-outer m-2 p-1">
            <img className="card-img-top" src={props.proImg} alt={props.proTitle}></img>
            <div className="card-body d-flex flex-wrap justify-content-center">
                <div>
                    <a href={props.proLinkName} target="_blank" rel="noopener noreferrer" className="btn btn-dustyrose text-light pro-title-font mt-1 mb-2">{props.proTitle}</a>
                </div>
                <p className="card-text text-center">{props.proDesc}</p>
            </div>
        </div>
    );
};

export default ProjectCard;