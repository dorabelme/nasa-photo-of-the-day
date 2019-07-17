import React from "react";


function DropdownItem(props) {
    // function onClick(event) {
    //     //Set the date to the item value
    //     props.setDate(props.item);
    const onClick = () => props.visitItem(props.item)

    return (
        <button className="button" onClick={onClick}>{props.item}</button>
    )
};


export default DropdownItem;