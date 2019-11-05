import React from 'react'
import './App.css'
import {
    ClockClass,
    ClockFunctional,
    ClockFunctionalCustomHook
} from './examples/clock'
import {
    CounterClass,
    CounterClassFieldClass,
    CounterFunctional,
    CounterFunctionalShort
} from './examples/counter'
import {
    DataFetchingClass,
    DataFetchingFunctional,
    DataFetchingFunctionalCustomHook
} from './examples/dataFetching'

function App() {
    return (
        <div className="App">
            <CounterClass />
            {/*<CounterClassFieldClass />*/}
            {/*<CounterFunctional />*/}
            {/*<CounterFunctionalShort />*/}

            {/*<DataFetchingClass />*/}
            {/*<DataFetchingFunctional />*/}

            {/*<ClockClass />*/}
            {/*<ClockFunctional />*/}
            {/*<ClockFunctionalCustomHook />*/}

            {/*<DataFetchingFunctionalCustomHook />*/}
        </div>
    )
}

export default App
