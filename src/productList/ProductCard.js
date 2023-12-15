import React from "react";

class ProductCard extends React.Component {
    render() {
        return (
            <div className="product">
                <input className="delete-checkbox"
                       type="checkbox"
                       name={this.props.id}
                       onChange={this.props.change}
                />
                <p>{this.props.sku}</p>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
                <p>{this.props.extension}</p>
            </div>
        )
    }
}

export default ProductCard