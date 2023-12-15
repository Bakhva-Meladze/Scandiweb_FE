import './Styles/Index.scss';
import React from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import ProductAdd from "./productAdd/ProductAdd";
import Header from "./header/Header";
import ProductList from "./productList/ProductList";

class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/add-product">
                            <ProductAdd/>
                        </Route>
                        <Route path="/">
                            <ProductList/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
