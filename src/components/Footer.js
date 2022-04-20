import React from "react";

export default function Footer(props) {
    const { data } = props;
    return (
        <div className="Foot">
            <p>{data.copyright}</p>
        </div>
    )
}