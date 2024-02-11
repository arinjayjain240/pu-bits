import PropTypes from "prop-types"

function Tag({text}) {
    return (
        <span className="badge badge-outline-primary mt-1 ml-1">{text}</span>
        
    )
}
Tag.PropTypes = {
    text : PropTypes.string,
};
export default Tag;