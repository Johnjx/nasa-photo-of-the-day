import React from "react";

export default function Header(props) {
    const { data } = props;
    return (
        <div className="Head">
            <h1>{data.title}</h1>
            <h2>Nasa Feature for</h2>
            <h4>{data.date}</h4>
        </div>
    )
}