import React from "react";

export default function Footer(props) {
    const { data } = props;

    if (!data) return <h5>Loading...</h5>;

    return (
        <div className="Foot">
            <p>{data.copyright}</p>
        </div>
    )
}