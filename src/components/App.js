import React, {Component}  from 'react';
import styled from 'styled-components';
import posed from "react-pose";

const Background = require('../static/mainBackground.jpg');
const navbarCollapse = require('../static/navbarCollapse.png');
const navbar = require('../static/navbarExpand.png');

const Navbar = posed.div({
    closed: { height: 0 },
    open: { height: "auto" }
  });

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isCollapsed: true
         };
    }
    toggleNavbar = () => {
        console.log("ccc")
        this.setState({ isCollapsed: !this.state.isCollapsed})
    }
    render() {
        return (
            <StyledApp>
                {/* <Navbar className="navBar" pose={this.state.isCollapsed ? "open" : "closed"}> */}
                <div className="navBar">
                    <p onClick={this.toggleNavbar}>about</p>
                </div>
                {/* </Navbar> */}
                
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
    .navBar {
        background: url(${navbar});
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
        width: 100vw;
        
        height: 30vh;
        position: absolute;
        bottom: 0px;    
    }
`