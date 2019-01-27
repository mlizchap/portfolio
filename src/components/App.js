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
    toggleNavbar = () => {
        console.log("ccc")
        this.setState({ 
            isCollapsed: !this.state.isCollapsed,
            sectionDisplay: "about"
        })
    }
    render() {
        return (
            <StyledApp>
                <div className="title">
                    <div>MARY CHAPMAN</div>
                </div>
                <Navbar className="navBar" pose={this.state.isCollapsed ? "closed" : "open"}>
                    <p onClick={this.toggleNavbar}>about</p>
                    <div className="about" style={{ display: (this.state.sectionDisplay === "about") ? "inline-block" : "none" }}>
                        <p>fLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
        width: 100vw;
        height: 100vh;
        position: absolute;
        bottom: 0px; 
        
        p {
            font-size: 64pt;
            &:hover {
                color: pink;
            }
        }
    }
`