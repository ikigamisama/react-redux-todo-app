import React from 'react';
import styled from 'styled-components'

import FloatingButtonImgSrc from '../assets/framework.png';

import AntLogo from '../assets/antd.png';
import BootstrapLogo from '../assets/reactstrap.png';
import MaterialUILogo from '../assets/material-ui.png';
import SemanticReactLogo from '../assets/semantic-react.png';

const FloatingButtonContainer = styled.div`
    position:fixed;
    z-index:1000;
    bottom:45px;
    right:28px;
`;
const FloatingButtonComponent = styled.a`
    width:60px;
    height:60px;
    background-color:#42a5f5;
    cursor:pointer;
    border-radius:50%;
    display:inline-block;
    overflow:hidden;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    padding:17px;
    transition: 0.25s all;
    &:hover{
        -webkit-box-shadow: 0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2);
        box-shadow: 0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2);
    }
`

const FloatingButtonImage = styled.img`
    width:25px;
    height:25px;
`;

const FloatingWrapper = styled.div`
    position:fixed;
    bottom:125px;
    right:28px;
    background-color:white;
    width:250px;
    transition: 0.25s all;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    display: ${props => props.show === true ? 'block': 'none'};
`
const FrameworkChoicesComponent = styled.div`
    width:100%;
    height:80px;
    border-bottom: 1px solid #bdbdbd ;
    transition: 0.25s all;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
       background-color: #eeeeee;
    }
`;
const FrameworkImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right:20px;
`;

const FrameworkLabel = styled.p`
    font-size:1.5rem;
`


const FloatingButtonChoice = ({show, onClick, currentFrameworkNum, onChooseFramework}) => {

    const isAppearChoices = () => {
        show === false ? onClick(true) : onClick(false);
    }

    const ChooseFramework = (number) => {
        onChooseFramework(number)
    }

    return (
       <React.Fragment>
            <FloatingWrapper show={show}>
                <FrameworkChoicesComponent onClick={() => {ChooseFramework(1)}}>
                    <FrameworkImg src={AntLogo} alt="ant-design-logo"/>
                    <FrameworkLabel>Ant Design</FrameworkLabel>
                </FrameworkChoicesComponent>
                <FrameworkChoicesComponent onClick={() => {ChooseFramework(2)}}>
                    <FrameworkImg src={BootstrapLogo} alt="material-ui-logo"/>
                    <FrameworkLabel>Reactstrap</FrameworkLabel>
                </FrameworkChoicesComponent>
                <FrameworkChoicesComponent onClick={() => {ChooseFramework(3)}}>
                    <FrameworkImg src={MaterialUILogo} alt="material-logo"/>
                    <FrameworkLabel>MaterialUI</FrameworkLabel>
                </FrameworkChoicesComponent>
                <FrameworkChoicesComponent onClick={() => {ChooseFramework(4)}}> 
                    <FrameworkImg src={SemanticReactLogo} alt="semantic-logo"/>
                    <FrameworkLabel>Semantic</FrameworkLabel>
                </FrameworkChoicesComponent>
            </FloatingWrapper>
            <FloatingButtonContainer>
                <FloatingButtonComponent onClick={isAppearChoices}>
                    <FloatingButtonImage src={FloatingButtonImgSrc} alt="floating-button-img"/>
                </FloatingButtonComponent>
            </FloatingButtonContainer>
       </React.Fragment>
    )
}


export default FloatingButtonChoice;