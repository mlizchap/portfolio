import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <StyledAbout>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Accumsan sit amet nulla facilisi morbi. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Augue eget arcu dictum varius duis at consectetur lorem donec. Erat nam at lectus urna. Mattis enim ut tellus elementum sagittis vitae et. Nisl purus in mollis nunc. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Pharetra sit amet aliquam id. Sed egestas egestas fringilla phasellus. Adipiscing elit pellentesque habitant morbi tristique senectus. Malesuada fames ac turpis egestas integer eget aliquet nibh. Amet luctus venenatis lectus magna fringilla urna. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Duis at tellus at urna condimentum mattis pellentesque id nibh. Gravida arcu ac tortor dignissim convallis.</p>
            </StyledAbout>
        );
    }
}

export default About;

const StyledAbout = styled.div`
    font-family: ${props => props.theme.mainFont};
    // padding: 0 30%;
    height: 100%;
    font-size: 14pt;
    padding: 0 25%;
    // background-color: #D7D7D7;
`