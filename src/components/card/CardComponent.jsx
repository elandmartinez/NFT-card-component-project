import "../../styles/CardComponent.css";
import React from "react";

import NFTCardProfile  from "./CardProfile";
import NFTCardImage from "./CardImage";
import Icon from "../Icon/Icon";
import Link from "../Link.jsx";

const NFTCardComponent = () => {
    return (
        <div className="card">
            <NFTCardImage />
            <Link>
                <h2 className="card__title">
                    Equilibrium # 3429
                </h2>
            </Link>
            <p className="card__description">
                Our Equilibrium collection promotes balance and calm
            </p>
            <div className="card-info">
                <div className="card-info__coin">
                    <Icon name="ethereum" />
                    <p>0.041ETH</p>
                </div>
                <div className="card-info__date">
                    <Icon name="clock" />
                    <p>3 days left</p>
                </div>
            </div>
            <NFTCardProfile />
        </div>
    )
}

export default NFTCardComponent;
