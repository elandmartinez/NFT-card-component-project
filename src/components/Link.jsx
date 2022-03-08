import "../styles/Link.css"

const Link = (props) => {
    return (
        <div className="link">
            <a href={props.href}>
                {props.children}
            </a>
        </div>
    )
}

export default Link;
