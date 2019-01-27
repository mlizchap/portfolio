import React, { Component } from 'react';
import styled from 'styled-components';
import Project from './Project';

const filterMobile = require('../static/proj_filter_mobile.png');
const filterDesktop = require('../static/proj_filter_desktop.png');

const projectData = [
    {        
        title: 'photo-filter',
        mobileImage: filterMobile,
        desktopImage: filterDesktop,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        sourceLink: 'https://github.com/mlizchap/photo-filters',
        siteLink: "https://mlizchap.github.io/photo-filters/"
    }
]

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledProjects>
                <div className="projectContainer">

                    {projectData.map((project) => {
                        console.log(project.title)
                        return (
                            <Project key={project.title} projectData={project}/>
                        )
                    })}

                    {/* <div className="project">
                    <h1>Propject Title</h1>
                        <div className="projectImages">
                            <div><img src={filterDesktop} width="80%"/></div>
                            <div><img src={filterMobile} width="80%"/></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <button>view source</button>
                    </div>


                    <div className="project">
                    <h1>Propject Title</h1>
                        <div className="projectImages">
                            <div><img src={filterDesktop} width="80%"/></div>
                            <div><img src={filterMobile} width="80%"/></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <button>view source</button>
                    </div> */}





                </div>
            </StyledProjects>
        );
    }
}

export default Projects;

const StyledProjects = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    .projectContainer {
        display: flex;
        justify-content: space-around;
        // background-color: green;
        width: 80%;
    }
`