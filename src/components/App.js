import React, {Component}  from 'react';
import styled from 'styled-components';
import posed from "react-pose";
import About from './About';
import Projects from './Projects';

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
            isCollapsed: false,
            sectionDisplay: "projects"
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
                    {/* <p>WEB DEVELOPER</p> */}
                </div>
                <Navbar className="navBar" pose={this.state.isCollapsed ? "closed" : "open"}>
                        <div className="navHeaders">
                            <div className="navBtn">V</div>
                            <button className="navBtn aboutBtn" onClick={() => this.toggleNavbar("about")}>
                                {/* {this.displayTitle("about")} */}
                                about
                            </button>
                            <button className="navBtn projectsBtn" onClick={() => this.toggleNavbar("projects")}>
                                {/* {this.displayTitle("projects")} */}
                                projects
                            </button>
                            <div className="navBtn">X</div>
                        </div>


                        <div className="navContent"  style={{ display: (this.state.sectionDisplay === "none" ? "none" : "block")}}>
                            <div className="section" style={{ display: (this.state.sectionDisplay === "about") ? "block" : "none" }}>
                                {/* <p>ABOUT DETAIL</p> */}
                                <About />
                            </div>

                            <div className="section" style={{ display: (this.state.sectionDisplay === "projects") ? "block" : "none" }}>
                                <Projects />
                            </div>
                        </div>



            </Navbar>

                
            </StyledApp>
        );
    }
}

export default App;

const StyledApp = styled.div`
    background: url(${bgMain});
    width: 100%;
    height: 100%
    background-size: cover;
    position: absolute;
    .title {
        text-align: center;
        // text-shadow: 1px 1px #414141;
        color: rgba(252, 252, 252, .8);
        padding-top: 8%;
        letter-spacing: .7rem;
        h2 {
            font-size: 10vw;
            margin: 0;
        }
    }
    .navHeaders {
        // background-color: orange;
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 8%;
        // align-content: flex-end;
    }
    .navBtn {
        background: none;
        border: none;
        display: inline-block;
        font-size: 42pt;
        height: 20px;
        border-radius: 3px;
        color: #444647;
    }

    .navBar {
        background: url(${navbar});
        background-repeat: no-repeat;
        background-size: 100%;
        display: block;
        width: 100vw;
        position: absolute;
        bottom: 0px; 

        // display: flex;
        justify-content: space-around;
    }
    .navContent {
        background: url(${bgContent});
        background-repeat: repeat;
        background-size: 100%;
        display: block;
        min-height: 100vh;
        // min-width: 100vw;
        //
        //display: flex;
        //align-items: flex-end;
        // margin-top: 150px;
    }
    .section {
        margin-top: 50px;
        padding-top: 0;
        padding: 40px;
    }
    // p {
    //     margin: 0;
    // }
`