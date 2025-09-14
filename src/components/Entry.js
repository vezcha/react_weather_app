import React, { Component, Fragment } from 'react'

export class Entry extends Component {
    render() {
        return (
            <Fragment>
                <h1>Please Enter a valid API key for openweathermap.org</h1>
                <p>One can be generated from: https://openweathermap.org/api</p>
                <div>
                    API Key: <input type='text' name='apiKey'></input>
                    <input type='submit'>Submit</input>
                </div>
            </Fragment>
        )
    }
}

export default Entry