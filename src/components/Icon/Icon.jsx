import React from "react";
import PropTypes from "prop-types";
import Clock from "../iconComponents/clockIcon";
import View from "../iconComponents/viewIcon";
import Ethereum from "../iconComponents/ethereumIcon";

View.propTypes = {
    className: PropTypes.string.isRequired
}


const icons = {
    clock: Clock,
    ethereum: Ethereum,
    view: View
}

const Icon = ({name, className}) => {
    let IconComponent = icons[name];


    if (!IconComponent) {
        const iconNames = Object.keys(icons);
        throw new Error(`icon ${name} is not supported. Please use one of next ones${iconNames}`);
    }

    return (
        <div className="icon ">
            <IconComponent className={className} />
        </div>
    )
}


Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Icon