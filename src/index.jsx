import React from 'react'
import {render} from 'react-dom'
import { Post } from './Post'
import './babel'

console.log(JSON.stringify(Post))

const App = () => {
    return (
        <div>
            <h1>Hello from React</h1>
            <p>;)</p>
        </div>
        )
}

render(<App />, document.getElementById('app'))