import React from "react";

export default function Main(props) {
    const { data } = props;

    if (!data) return <h4>Loading...</h4>;

    return (
        <div className="Main">
            <img src={data.hdurl} alt="Nasa feature"/>
            <h3>Details about this Piece</h3>
            <p>{data.explanation}</p>
        </div>
    )
}