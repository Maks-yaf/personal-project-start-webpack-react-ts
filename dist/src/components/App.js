import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './App.scss';
export var App = function () {
    var _a = React.useState(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(function (prev) { return prev + 1; }); };
    return (_jsxs("div", { children: [_jsx("h1", { children: count }), _jsx("button", { onClick: increment, children: "25" })] }));
};
