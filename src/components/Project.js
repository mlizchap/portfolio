import React, { Component } from 'react';
import styled from 'styled-components';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledProject>
            <a className="liveLink" href={`${this.props.projectData.siteLink}`}>{this.props.projectData.title}</a>
                <div className="projectImages">
                    <div><img src={`${this.props.projectData.desktopImage}`} width="80%"/></div>
                    <div><img src={`${this.props.projectData.mobileImage}`} width="80%"/></div>
                </div>
                <p className="description">{this.props.projectData.description}</p>
                <div className="linkBtns">
                <a className="linkBtn" href={`${this.props.projectData.sourceLink}`}>source</a>
                <a className="linkBtn" href={`${this.props.projectData.siteLink}`}>site</a>
                </div>

            </StyledProject>
        );
    }
}

export default Project;


const StyledProject = styled.div`
    width: 300px;
    .projectTitle {
        margin: 0;
    }
    .liveLink {
        font-size: 32pt;
        text-decoration: none;
        color: ${props => props.theme.darkgray};
    }      
    .liveLink a:visited {
        text-decoration: none;
        color: ${props => props.theme.lightpurple};;
}      
    .liveLink a:hover {
        text-decoration: underline;
        color: ${props => props.theme.lightblue};;
    }      
    .liveLink a:active {
        text-decoration: underline;
        color: ${props => props.theme.lightblue};;;
    }
    .projectImages {
        margin-top: 5px;
        display: flex;
        width: 300px;
        justify-content: space-around;
    }
    .description {
        font-family: ${props => props.theme.mainFont};
        margin-top: 10px;
    }
    .linkBtns {
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
    }
    .linkBtn {
        text-decoration: none;
        background-color: ${props => props.theme.lightblue};
        padding: 7px;
        color: ${props => props.theme.darkgray};
        border-radius: 3px;
        font-family: ${props => props.theme.mainFont};
        box-shadow: 1px 1px 4px #acacac;
        width: 70px;
    }
`