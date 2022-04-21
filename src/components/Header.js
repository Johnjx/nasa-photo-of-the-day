import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: ${pr => pr.theme.primColor};

    h1 {
        margin-top: 0;
    }

    button {
        margin-bottom: 1%;
    }
`

export default function Header(props) {
    const { data, toggleMenu } = props;

    if (!data) return <h3>Loading...</h3>;

    return (
        <StyledHeader className="Head">
            <h1>{data.title}</h1>
            <h2>Nasa Feature for</h2>
            <h4>{data.date}</h4>
            <button onClick={toggleMenu} className="dropbtn">Select a new date</button>
        </StyledHeader>
    )
}