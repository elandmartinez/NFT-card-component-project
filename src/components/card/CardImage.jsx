import "../../styles/CardImage.css";
import React from "react";
import NFTImg from "../../assets/images/image-equilibrium.jpg";
import Icon from "../Icon/Icon"

const NFTCardImage = () => {
    return (
        <div className="card-image">
            <img src={NFTImg} alt="NFT" className="image" />
            <div className="image__overlay view-icon-container">
                <Icon name="view" className="view-icon" />
            </div>
        </div>
    )
}

export default NFTCardImage
