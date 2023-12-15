import React from "react";
import {Link, withRouter} from "react-router-dom";

class Header extends React.Component {
    render() {
        const {location} = this.props;

        return (
            <div>
                {location?.pathname === "/add-product" ? (
                    <div className="header">
                        <div className="title">
                            <h1>Product Add</h1>
                        </div>
                        <div className="action-button">
                            <button className="button color"
                                    form="product_form"
                                    type="submit">
                                Save
                            </button>
                            <Link className="button" to="/">
                                <button className="button">Cancel</button>
                            </Link>
                        </div>
                    </div>
                ) : null}
                {location?.pathname === "/" ? (
                    <div className="header">
                        <div className="title">
                            <h1>Product list</h1>
                        </div>
                        <div className="action-button">
                            <Link to="/add-product">
                                <button className="button color">ADD</button>
                            </Link>
                            <button id="delete-product-btn"
                                    className="button"
                                    form="delete_form"
                                    type="submit">MASS DELETE
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}

export default withRouter(Header)