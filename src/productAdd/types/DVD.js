import React from "react";


class DVD extends React.Component {
    render() {
        return (
            <div id="DVD" className="option">
                <label className="label">Size (MB)</label>
                <div className="input-div">
                    <input
                        id="size"
                        type="number"
                        className="main-input"
                        value={this.props.size}
                        name={"size"}
                        placeholder={"#size"}
                        onChange={this.props.change}
                    />
                    <span>{this.props.error}</span>
                </div>
            </div>
        )
    }
}

export default DVD