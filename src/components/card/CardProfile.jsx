import "../../styles/CardProfile.css";
import React from "react";
import Link from "../Link.jsx";
import profileImage from "../../assets/images/image-avatar.png";

const NFTCardProfile = () => {
    return (
        <div className="card-profile">
            <img src={profileImage} alt="avatar" />
            <p>Creation of</p>
            <Link>
                <p className="card-profile__name">Jules Wyrven</p>
            </Link>
        </div>
    )
}

export default NFTCardProfile