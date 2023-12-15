import React from "react";
import ProductCard from "./ProductCard";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedProducts: []
        }
    }

    componentDidMount() {
        this.uploadProducts();
    }

    uploadProducts() {
        const response = {
            method: 'GET',
            headers: {'Content-type': 'application/json', "mode": "no-cors"},
        }
        fetch("http://scandiwebapi.bakhva.online/all", response).then(response => response.json()).then(responseData => {
            this.setState({
                products: responseData,
                loading: false
            })
        })
    }

    handleChange = (e) => {
        const newCheckboxes = [...this.state.selectedProducts, e.target.name];
        this.setState({
            selectedProducts: newCheckboxes
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://scandiwebapi.bakhva.online/delete`, {
            method: 'POST',
            body: JSON.stringify(this.state.selectedProducts),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => {
            if (response.ok) {
                this.uploadProducts();

                return response.text();
            } else if (response.status === 404) {
                throw new Error('Resource not found');
            } else {
                throw new Error('Server error');
            }
        })
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div className="main">
                <form className="product-card" id="delete_form" onSubmit={this.handleSubmit}>
                    {this.state.products.map((value, key) => (
                        <ProductCard
                            key={value.SKU}
                            id={value.id}
                            sku={value.SKU}
                            name={value.name}
                            price={value.price}
                            extension={value.extension}
                            change={this.handleChange}
                        />
                    ))}
                </form>
            </div>)
    }
}

export default ProductList