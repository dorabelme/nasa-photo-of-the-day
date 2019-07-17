import React from "react";
import DropdownItem from "./DropdownItem";


function Dropdown(props) {
    const items = props.items;
    return (
        items.map(item => <DropdownItem item={item} setDate={props.setDate} />)
    );
};


export default Dropdown;