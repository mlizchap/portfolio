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
                <p>Quis risus sed vulputate odio ut enim. Eget nullam non nisi est sit amet facilisis magna etiam. Proin libero nunc consequat interdum varius sit amet mattis. Blandit cursus risus at ultrices mi tempus. Viverra orci sagittis eu volutpat odio facilisis mauris. Consequat ac felis donec et. Habitant morbi tristique senectus et netus et malesuada. Vitae tempus quam pellentesque nec nam aliquam. Egestas congue quisque egestas diam in arcu cursus euismod. Lacus vel facilisis volutpat est velit egestas. Magna etiam tempor orci eu lobortis elementum nibh. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Sem et tortor consequat id porta nibh venenatis cras. Sem viverra aliquet eget sit amet tellus cras. Enim sit amet venenatis urna cursus eget nunc scelerisque.</p>
            </StyledAbout>
        );
    }
}

export default About;

const StyledAbout = styled.div`
    font-family: ${props => props.theme.mainFont};
    padding: 0 30%;
    height: 100%;
`