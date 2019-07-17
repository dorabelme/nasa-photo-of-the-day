import React from "react";
import DropdownItem from "./DropdownItem";


function Dropdown(props) {

    const items = props.items;
    return (
        items.map(item => <DropdownItem item={item} visitItem={props.visitItem} />)
    );
};


export default Dropdown;