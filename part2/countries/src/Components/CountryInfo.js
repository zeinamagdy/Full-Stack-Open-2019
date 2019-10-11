import React from 'react';

const CountryInfo = (props) => {
    console.log('weather', props);
    return (
        <div>
            <h1>{props.info.name}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>capital {props.info.capital}</td>
                    </tr>
                    <tr>
                        <td>population {props.info.population}</td>
                    </tr>
                </tbody>
            </table>
            <h3>Languages</h3>
            <ul>
                {props.info.languages.map((lang) => <li key={lang.name}>
                    {lang.name}
                </li>)}
            </ul>
            <div>
                <img src={props.info.flag} alt="flag" className='flag' />
            </div>
            {props.weather.location ?
                <div>
                    <h3>weather in {props.weather.location.name}</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    tempreture {props.weather.current.temperature} Celsuis
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={props.weather.current.weather_icons} alt="weatherIcon" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    wind {props.weather.current.wind_speed} Kph direction {props.weather.current.wind_dir}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                : <div />}
        </div>
    )

}
export default CountryInfo