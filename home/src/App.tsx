import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "./index.scss";
import { Header } from "./Header";
import Footer from "./Footer";

import MainLayout from "./MainLayout";

ReactDOM.render(<MainLayout />, document.getElementById("app"));
