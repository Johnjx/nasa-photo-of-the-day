import React from "react";

export default function Header(props) {
    const { data } = props;

    if (!data) return <h3>Loading...</h3>;

    return (
        <div className="Head">
            <h1>{data.title}</h1>
            <h2>Nasa Feature for</h2>
            <h4>{data.date}</h4>
        </div>
    )
}