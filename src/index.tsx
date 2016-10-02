import * as React from "react";
import * as ReactDOM from "react-dom";

import {observable} from "mobx";
import {observer} from "mobx-react";

class HelloState {
    @observable greeting: string = "Mobx says hi!";
}

const helloState = new HelloState();

import {greet} from "./hello";

interface HelloProps { compiler: string; framework: string; }

@observer
class Hello extends React.Component<HelloProps, {}> {
    componentDidMount () {
        greet("harlo");
    }
    render() {
        return (<div>
                    <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                    <p>{helloState.greeting}</p>
                 </div>);
    }
}

const rootElement = document.getElementById("example");
if (rootElement) {
    ReactDOM.render(
        <Hello compiler="TypeScript" framework="React" />,
        rootElement
    );
} else {
    console.error("Element 'example' not found");
}
