import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../constants";
import styled from "styled-components";

const StyledApod = styled.div`
    background-color: ${pr => pr.theme.primColor};

    .Apod {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: ${pr => pr.theme.terColor};
    }

    img {
        max-width: 70%;
        max-height: 80vh;
    }

    p {
        max-width: 60%;
    }

    .apodcp {
        color: ${pr => pr.theme.terColor};
    }

`

export default function Apod(props) {
    const { date } = props;
    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date[0]}-${date[1]}-${date[2]}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(err => console.log(err))
    },[date])

    return (
        <StyledApod className="container">
            <h2>New Nasa Feature</h2>
            { details &&
                <div className="Apod">
                    <h1>{details.title}</h1>
                    <h3>{details.date}</h3>
                    <img src={details.hdurl} alt="Nasa feature"/>
                    <h3>Details about this Piece</h3>
                    <p>{details.explanation}</p>
                    <p className="apodcp">{details.copyright}</p>
                </div>
            }    
        </StyledApod>
    )
}