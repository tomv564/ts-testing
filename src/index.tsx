import * as React from "react";
import * as ReactDOM from "react-dom";
import {greet} from "./hello";

interface HelloProps { compiler: string; framework: string; }

class Hello extends React.Component<HelloProps, {}> {
	componentDidMount () {
		greet("harlo");
	}
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
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
