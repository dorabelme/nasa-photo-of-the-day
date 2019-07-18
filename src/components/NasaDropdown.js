import React from "react";
// import DropdownItem from "./DropdownItem";
import { Dropdown } from 'semantic-ui-react';

const NasaDropdown = (props) => {

    const onChange = (event, value) => {
        const date = event.target.textContent;
        props.visitItem(date);
    }

    const items = props.items.map(item => {
        var d = {};
        d.key = item;
        d.text = item;
        d.value = item;
        return d
    });
    
    return (
        <Dropdown placeholder='Date' selection options={items} onChange={onChange} />
    );
};


export default NasaDropdown;