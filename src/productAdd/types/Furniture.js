import React from "react";

class Furniture extends React.Component {
    render() {
        return (

            <div id="Furniture" className="extension">
                <div className="description">
                    <span>Please provide dimensions in format HxWxL</span>
                </div>
                <div className="furniture">
                    <div className="option">
                        <label className="label">Height (CM)</label>
                        <div className="input-div">
                            <input
                                id="height"
                                type="number"
                                className="main-input"
                                value={this.props.height}
                                name={"height"}
                                placeholder={"#height"}
                                onChange={this.props.change}/>
                            <span>{this.props.error?.height}</span>
                        </div>
                    </div>
                    <div className="option">
                        <label className="label">Width (CM)</label>
                        <div className="input-div">
                            <input
                                id="width"
                                type="number"
                                className="main-input"
                                value={this.props.width}
                                name={"width"}
                                placeholder={"#width"}
                                onChange={this.props.change}/>
                            <span>{this.props.error?.width}</span>
                        </div>
                    </div>
                    <div className="option">
                        <label className="label">Length (CM)</label>
                        <div className="input-div">
                            <input
                                id="length"
                                type="number"
                                className="main-input"
                                value={this.props.length}
                                name={"length"}
                                placeholder={"#length"}
                                onChange={this.props.change}/>
                            <span>{this.props.error?.length}</span>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default Furniture