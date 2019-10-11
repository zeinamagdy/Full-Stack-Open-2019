import React from 'react';

const Country = (props) => {
    return props.countries.map((country) =>
        <ListItem key={country.name} item={country} ShowCountry={props.onShow} />
    )
}
const ListItem = (props) => {
    console.log('item', props)
    const ShowCountry = () => {
        props.ShowCountry(props.item.name);
    }
    return (
        <li key={props.item.name}>
            {props.item.name}<button onClick={ShowCountry}>show</button>
        </li>


    )
}
export default Country