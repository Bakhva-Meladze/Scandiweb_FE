import React from "react";

class Book extends React.Component {
    render() {
        return (
            <div id="Book" className="extension">
                <div className="description">
                    <span>Please provide weight in Kgs</span>
                </div>
                <div className="option">
                    <label className="label">Weight (KG)</label>
                    <div className="input-div">
                        <input
                            id="weight"
                            type="number"
                            className="main-input"
                            value={this.props.weight}
                            name={"weight"}
                            placeholder={"#weight"}
                            onChange={this.props.change}/>
                        <span>{this.props.error}</span>
                    </div>
                </div>
            </div>)
    }
}

export default Book