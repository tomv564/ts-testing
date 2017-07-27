"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var HelloState = (function () {
    function HelloState() {
        this.greeting = "Mobx says hi!";
    }
    return HelloState;
}());
__decorate([
    mobx_1.observable
], HelloState.prototype, "greeting", void 0);
var helloState = new HelloState();
var hello_1 = require("./hello");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.componentDidMount = function () {
        hello_1.greet("harlo");
    };
    Hello.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "Hello from ",
                this.props.compiler,
                " and ",
                this.props.framework,
                "!"),
            React.createElement("p", null, helloState.greeting)));
    };
    return Hello;
}(React.Component));
Hello = __decorate([
    mobx_react_1.observer
], Hello);
var rootElement = document.getElementById("example");
if (rootElement) {
    ReactDOM.render(React.createElement(Hello, { compiler: "TypeScript", framework: "React" }), rootElement);
}
else {
    console.error("Element 'example' not found");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBQy9CLG9DQUFzQztBQUV0Qyw2QkFBZ0M7QUFDaEMseUNBQW9DO0FBRXBDO0lBQUE7UUFDZ0IsYUFBUSxHQUFXLGVBQWUsQ0FBQztJQUNuRCxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQURlO0lBQVgsaUJBQVU7NENBQW9DO0FBR25ELElBQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFFcEMsaUNBQThCO0FBSzlCLElBQU0sS0FBSztJQUFTLHlCQUErQjtJQUFuRDs7SUFVQSxDQUFDO0lBVEcsaUNBQWlCLEdBQWpCO1FBQ0ksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLENBQUM7WUFDSTs7Z0JBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTs7Z0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO29CQUFPO1lBQ3JFLCtCQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUssQ0FDekIsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQVZELENBQW9CLEtBQUssQ0FBQyxTQUFTLEdBVWxDO0FBVkssS0FBSztJQURWLHFCQUFRO0dBQ0gsS0FBSyxDQVVWO0FBRUQsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2RCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2QsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxLQUFLLElBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsT0FBTyxHQUFHLEVBQ2pELFdBQVcsQ0FDZCxDQUFDO0FBQ04sQ0FBQztBQUFDLElBQUksQ0FBQyxDQUFDO0lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHtvYnNlcnZhYmxlfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHtvYnNlcnZlcn0gZnJvbSBcIm1vYngtcmVhY3RcIjtcblxuY2xhc3MgSGVsbG9TdGF0ZSB7XG4gICAgQG9ic2VydmFibGUgZ3JlZXRpbmc6IHN0cmluZyA9IFwiTW9ieCBzYXlzIGhpIVwiO1xufVxuXG5jb25zdCBoZWxsb1N0YXRlID0gbmV3IEhlbGxvU3RhdGUoKTtcblxuaW1wb3J0IHtncmVldH0gZnJvbSBcIi4vaGVsbG9cIjtcblxuaW50ZXJmYWNlIEhlbGxvUHJvcHMgeyBjb21waWxlcjogc3RyaW5nOyBmcmFtZXdvcms6IHN0cmluZzsgfVxuXG5Ab2JzZXJ2ZXJcbmNsYXNzIEhlbGxvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEhlbGxvUHJvcHMsIHt9PiB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBncmVldChcImhhcmxvXCIpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkhlbGxvIGZyb20ge3RoaXMucHJvcHMuY29tcGlsZXJ9IGFuZCB7dGhpcy5wcm9wcy5mcmFtZXdvcmt9ITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwPntoZWxsb1N0YXRlLmdyZWV0aW5nfTwvcD5cbiAgICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpO1xuaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8SGVsbG8gY29tcGlsZXI9XCJUeXBlU2NyaXB0XCIgZnJhbWV3b3JrPVwiUmVhY3RcIiAvPixcbiAgICAgICAgcm9vdEVsZW1lbnRcbiAgICApO1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRWxlbWVudCAnZXhhbXBsZScgbm90IGZvdW5kXCIpO1xufVxuIl19