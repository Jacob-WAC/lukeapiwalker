import React from "react";
import SearchForm from "./components/searchform";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Display from "./components/display";
import axios from "axios";

function App() {
    return (
        <BrowserRouter>
            <div className="App container d-flex align-items-center flex-column">
                <h1>hewwo</h1>

                <SearchForm />
                <Switch>
                    <div>
                        <Route exact path="/:category/:id">
                            <Display />
                        </Route>
                    </div>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
