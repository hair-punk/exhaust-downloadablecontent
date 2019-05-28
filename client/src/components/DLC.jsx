import React from 'react';
import { toPascalCase, getDLCCost } from '../gameDataHelpers';

class DLC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    }
  }

  startHover() {
    this.setState({
      isHover: true
    });
  };

  stopHover() {
    this.setState({
      isHover: false
    });
  };

  render () {

    const moduleStyle = {
      display: 'flex',
      position: 'relative'
    };

    const rowStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(135deg, rgba(97, 100, 101, 0.3) 0%, rgba(226, 244, 255, 0.3) 100%)',
      height: '26px',
      margin: '2px',
      minWidth: '100%'
    };

    const nameStyle = {
      color: '#c6d4df',
      fontSize: '12px',
      fontFamily: '"Motiva Sans", Sans-serif',
      fontWeight: '100',
      margin: '0 10px'
    };

    const priceStyle = {
      color: '#ffffff',
      fontSize: '13px',
      fontFamily: '"Motiva Sans", Sans-serif',
      fontWeight: '100',
      margin: '0 10px'
    };

    const tempStyle = {
      position: 'relative',
      // top: '-26px',
      zIndex: '100',
      height: '26px'
    };

    const biggerStyle = {
      height: '100px',
      width: '300px',
      border: '1px solid rgba(255,255,255,0.4)'
    };

    const dlcName = toPascalCase(this.props.content.dlc_name);
    const price = getDLCCost(this.props.content.price);

    return (
      <div style={moduleStyle}>
        <div style={rowStyle} onMouseEnter={this.startHover.bind(this)} onMouseLeave={this.stopHover.bind(this)}>
          <h3 style={nameStyle}>{dlcName}</h3>
          <h3 style={priceStyle}>{price}</h3>
        </div>
        <div style={tempStyle}>
          {this.state.isHover &&
            <div style={biggerStyle}>
              <h1>Show on hover</h1>
            </div>
          }
        </div>
      </div>
    );
  };
};

export default DLC;

// TODO row react on hover
// TODO module pop up module on hover