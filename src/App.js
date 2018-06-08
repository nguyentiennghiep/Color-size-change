import React, { Component } from 'react';
import './App.css';
import ColorPicker from './componets/ColorPicker';
import SizeSetting from './componets/SizeSetting';
import Result from './componets/Result';
import Reset from './componets/Reset';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 18
    };
    this.onChangeSize = this.onChangeSize.bind(this);
  }

  onChangeSize(value) {
   if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36)
   {
     this.setState({fontSize : this.state.fontSize + value});
   }
   console.log(this.state.fontSize)
  }

  onSetColor = (params) => {
    this.setState({ color: params });
  }

  onSettingDefault = (value) =>
  {
    if(value)
    {
      this.setState({color : 'red',
    fontSize: 18});

    }
  }
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onReviceColor={this.onSetColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} />
            <Reset onSettingDefault = {this.onSettingDefault} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
