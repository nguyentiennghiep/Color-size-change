import React, { Component } from 'react';

class SizeSetting extends Component {


    changeSize(value){
        this.props.onChangeSize(value);
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size Setting</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={() => this.changeSize(2)}>Up Size</button>
                    <button type="button" className="btn btn-success" onClick={() => this.changeSize(-2)}>Down Size</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
