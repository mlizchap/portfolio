import React, {Component}  from 'react';
import styled from 'styled-components';
import posed from "react-pose";
import About from './About';

const Background = require('../static/mainBackground.jpg');
const bgOpac = require('../static/bg_opac.png');
const navbarCollapse = require('../static/navbarCollapse.png');
const navbar = require('../static/navbarExpand.png');
const bgMain = require('../static/bg_main.png');
const bgContent = require('../static/bg_content.png');
const bgNavbar = require('../static/bg_navbar.png');

const Navbar = posed.div({
    closed: { height: '28%' },
    open: { height: '98%' }
  });

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isCollapsed: true,
            sectionDisplay: "none"
         };
    }
    toggleNavbar = (section) => {
        console.log(section)
        if (this.state.isCollapsed) {
            this.setState({
                sectionDisplay: section,
                isCollapsed: false
            })
        } else if (!this.state.isCollapsed && this.state.sectionDisplay !== section) {
            this.setState({
                sectionDisplay: section,
                isCollapsed: false
            })        
        } else {
            this.setState({
                isCollapsed: true,
                sectionDisplay: "none",
            })
        }        
    }
    // displayTitle = (title) => {
    //     // console.log(this.state.isCollapsed)
    //     if (!this.state.isCollapsed && this.state.sectionDisplay == title) {
    //         return <p>arrow</p>
    //     } else {
    //         return <p>{title}</p>
    //     }
    // }
    render() {
        return (
            <StyledApp>
                <div className="title">
                    <h2>MARY CHAPMAN</h2>
                    <p>WEB DEVELOPER</p>
                </div>
                <Navbar className="navBar" pose={this.state.isCollapsed ? "closed" : "open"}>
                    {/* <img src={navbarCollapse} /> */}
                        <div className="navHeaders">
                            <div>V</div>
                            <button className="navTitle aboutBtn" onClick={() => this.toggleNavbar("about")}>
                                {/* {this.displayTitle("about")} */}
                                about
                            </button>
                            <button className="navTitle projectsBtn" onClick={() => this.toggleNavbar("projects")}>
                                {/* {this.displayTitle("projects")} */}
                                projects
                            </button>
                            <div>X</div>
                        </div>


                        <div className="navContent"  style={{ display: (this.state.sectionDisplay === "none" ? "none" : "inline-block")}}>
                            <div className="section" style={{ display: (this.state.sectionDisplay === "about") ? "inline-block" : "none" }}>
                                {/* <p>ABOUT DETAIL</p> */}
                                <About />
                            </div>

                            <div className="section" style={{ display: (this.state.sectionDisplay === "projects") ? "inline-block" : "none" }}>
                                <p>PROJECT DETAIL</p>
                            </div>
                        </div>




                </Navbar>
                
            </StyledApp>
        );
    }
}

export default App;

const StyledApp = styled.div`
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-opacity: .5;
    display: inline-block;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: url('./static/dirtyBrush.ttf') format('ttf');
    .title {
        text-align: center;
        // text-shadow: 1px 1px #414141;
        color: rgba(252, 252, 252, .8);
        padding-top: 8%;
        letter-spacing: .7rem;
        h2 {
            // background-color: blue;
            font-size: 10vw;
            margin: 0;
        }
        p {
            // background-color: orange;
            margin-top: -20px;
            font-size: 26pt;
            letter-spacing: .9rem;
            // background-color: yellow;

        }
    }
    .navBar {
        background: url(${navbar});
        background-repeat: no-repeat;

        background-size: 100%;
        display: block;
        width: 100vw;
        // height: 100vh;
        position: absolute;
        bottom: 0px; 
    }

    .navHeaders {
        display: flex;
        justify-content: space-around;
        padding-top: 70px;
        letter-spacing: .1rem;
        color: #535353;
         padding-bottom: -15px;
    }
    .navTitle {
        // background-color: purple;
        font-size: 24pt;
        width: 150px;
        border-radius: 2px;
        color: #555658;

        font-family: ${props => props.theme.mainFont};
        padding: 10px 0px;
        
        //padding-top: 10px;
    }
    .aboutBtn {
        background-color: blue;
    }
    .projectsBtn {
        background-color: orange;
    }
    
    .navContent {
        //background-color: yellow;
        background: url(${bgContent});
        // background-size: 100%;
        display: block;
        width: 100vw;
        min-height: 75vh;
        position: absolute;

    }
    .section {
        margin-top: 0;
        padding-top: 0;
        padding: 40px;
    }
    p {
        margin: 0;
    }
`