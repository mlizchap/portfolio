import React, {Component}  from 'react';
import styled from 'styled-components';
import posed from "react-pose";

const Background = require('../static/mainBackground.jpg');
const navbarCollapse = require('../static/navbarCollapse.png');
const navbar = require('../static/navbarExpand.png');

const Navbar = posed.div({
    closed: { height: '35%' },
    open: { height: '95%' }
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
            
        // else {
        //     this.setState({
        //         sectionDisplay: section,
        //     })
        // }
       

        
        // if (this.state.sectionDisplay === "none") {
        //     this.setState({ sectionDisplay})
        // }
        // this.setState({ 
        //     isCollapsed: (section === this.state.sectionDisplay) ? !this.state.isCollapsed : false,
        //     sectionDisplay: section 
        // }, () => console.log(this.state.sectionDisplay))
        
    }
    displayTitle = (title) => {
        // console.log(this.state.isCollapsed)
        if (!this.state.isCollapsed && this.state.sectionDisplay == title) {
            return <p>arrow</p>
        } else {
            return <p>{title}</p>
        }
    }
    render() {
        return (
            <StyledApp>
                <div className="title">
                    <div>MARY CHAPMAN</div>
                </div>
                <Navbar className="navBar" pose={this.state.isCollapsed ? "closed" : "open"}>
                    <div className="navHeaders">
                        <div className="navTitle" onClick={() => this.toggleNavbar("about")}>{this.displayTitle("about")}</div>
                        <div className="navTitle" onClick={() => this.toggleNavbar("projects")}>{this.displayTitle("projects")}</div>
                    </div>
                    
                    <div className="section" style={{ display: (this.state.sectionDisplay === "about") ? "inline-block" : "none" }}>
                        <p>ABOUT DETAIL</p>
                    </div>

                    <div className="section" style={{ display: (this.state.sectionDisplay === "projects") ? "inline-block" : "none" }}>
                        <p>PROJECT DETAIL</p>
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
    display: inline-block;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    .title {
        text-align: center;
        font-size: 60pt;
        margin-top: 10%;
    }
    .navBar {
        background: url(${navbar});
        background-size: cover;
        display: block;
        width: 100vw;
        height: 100vh;
        position: absolute;
        bottom: 0px; 
    }

    .navHeaders {
        font-size: 16pt;
        display: flex;
        justify-content: space-around;
        margin-top: 100px;
    }

    .section {
        margin-top: 0;
        padding-top: 0;
        padding: 40px;
    }
`