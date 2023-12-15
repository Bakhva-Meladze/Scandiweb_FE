import React from "react";
import Book from "./types/Book.js";
import DVD from "./types/DVD.js";
import Furniture from "./types/Furniture";
import {withRouter} from "react-router-dom";

class ProductAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sku: "",
            name: "",
            price: "",
            type: "",
            types: [],
            weight: "",
            size: "",
            height: "",
            width: "",
            length: "",
            error: null
        }
    }

    componentDidMount() {
        this.uploadTypes();
    }

    uploadTypes() {
        const response = {
            method: 'GET',
            headers: {'Content-type': 'application/json'},
        }
        fetch("http://scandiwebapi.bakhva.online/create", response).then(response => response.json()).then(responseData => {
            this.setState({
                types: responseData,
                type: responseData[0]?.name
            })
        })
    }

    saveProducts(bodyElement) {
        fetch(`http://scandiwebapi.bakhva.online/store`, {
            method: 'POST',
            body: JSON.stringify(bodyElement),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => {
            if (response.ok) {
                return response.text();
            } else if (response.status === 404) {
                throw new Error('Resource not found');
            } else {
                throw new Error('Server error');
            }
        }).then(data => {
            this.setState({error: JSON.parse(data)}, () => {
                if (this.state.error?.success) {
                    this.props.history.push('/');
                }
            });
        }).catch(error => console.error('Error:', error));
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.saveProducts(this.state);
    }

    render() {
        return (
            <div className="main">
                <form name="product_form" id="product_form" onSubmit={this.handleSubmit}>
                    <div className="option">
                        <label>SKU</label>
                        <div className="input-div">
                            <input id="sku"
                                   className="main-input"
                                   type="text"
                                   placeholder="#sku"
                                   name="sku"
                                   value={this.state.sku}
                                   onChange={this.handleInputChange}
                            />
                            <span>{this.state.error?.errorMessages?.sku}</span>
                        </div>
                    </div>
                    <div className="option">
                        <label>Name</label>
                        <div className="input-div">
                            <input
                                id="name"
                                className="main-input"
                                type="text"
                                placeholder="#name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                            <span>{this.state.error?.errorMessages?.name}</span>
                        </div>
                    </div>
                    <div className="option">
                        <label>Price($)</label>
                        <div className="input-div">
                            <input
                                id="price"
                                className="main-input"
                                type="number"
                                placeholder="#price"
                                value={this.state.price}
                                name="price"
                                onChange={this.handleInputChange}
                            />
                            <span>{this.state.error?.errorMessages?.price}</span>
                        </div>
                    </div>
                    <div className="type-Switcher">
                        <label>Type Switcher</label>
                        <select
                            id="productType"
                            onChange={this.handleInputChange}
                            name="type">
                            {this.state.types.map((value, key) => (
                                <option value={value.name} key={key}>{value.name}</option>
                            ))}
                        </select>
                    </div>
                    {this.state.type === "Book" ?
                        <Book
                            weight={this.state.weight}
                            change={this.handleInputChange}
                            error={this.state.error?.errorMessages?.weight}
                        /> : null}
                    {this.state.type === "DVD" ?
                        <DVD
                            size={this.state.size}
                            change={this.handleInputChange}
                            error={this.state.error?.errorMessages?.size}

                        /> : null}
                    {this.state.type === "Furniture" ?
                        <Furniture
                            height={this.state.height}
                            weight={this.state.weight}
                            length={this.state.length}
                            change={this.handleInputChange}
                            error={this.state.error?.errorMessages}
                        /> : null}
                </form>
            </div>
        )
    }
}

export default withRouter(ProductAdd)