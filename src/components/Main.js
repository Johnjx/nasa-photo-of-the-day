import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
    background-color: ${pr => pr.theme.secColor};
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        max-width: 70%;
        max-height: 80vh;
    }

    p {
        max-width: 60%;
    }

`

export default function Main(props) {
    const { data } = props;

    if (!data) return <h4>Loading...</h4>;

    return (
        <StyledMain className="Main">
            <img src={data.hdurl} alt="Nasa feature"/>
            <h3>Details about this Piece</h3>
            <p>{data.explanation}</p>
        </StyledMain>
    )
}