import React from 'react'
import './App.css'
import {
    ClassCounter,
    ClassFieldCounter,
    FunctionalCounter,
    ShortFunctionalCounter
} from './examples/Counter'
import {
    DataFetchingClass,
    DataFetchingFunction1
} from './examples/DataFetching'
import { ClockClass, ClockFunction } from './examples/Clock'
import { DataFetchingCustomHook } from './examples/DataFetchingCustomHook'

function App() {
    return (
        <div className="App">
            {/*<ClassCounter />*/}
            {/*<ClassFieldCounter />*/}
            {/*<FunctionalCounter />*/}
            {/*<ShortFunctionalCounter />*/}

            {/*<DataFetchingClass />*/}
            {/*<DataFetchingFunction1 />*/}
            <DataFetchingCustomHook />

            {/*<ClockClass />*/}
            {/*<ClockFunction />*/}
        </div>
    )
}

export default App
