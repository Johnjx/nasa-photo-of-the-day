import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: ${pr => pr.theme.quadColor};

    p {
        color: white;
    }
`

export default function Footer(props) {
    const { data } = props;

    if (!data) return <h5>Loading...</h5>;

    return (
        <div className="Foot">
            <p>{data.copyright}</p>
        </div>
    )
}