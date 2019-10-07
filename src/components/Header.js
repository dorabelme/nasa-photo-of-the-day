import React from "react";
import styled from 'styled-components';

const MainHeader = styled.h1`
    font-size: 2.5rem;
    font-family: 'Russo One', sans-serif;
`;


function Header(props) {
    return (
        <div>
            <MainHeader className="mainHeader">{props.mainHeader}</MainHeader>
        </div>
    );
};

export default Header;

