import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { getSalePrice, toPascalCase } from './gameDataHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dlcs: []
    }
  }

  componentDidMount() {
    var id = Math.floor(Math.random() * 100);
    $.get(`http://localhost:3003/games/${id}`, (data) => {
      this.setState({
        franchiseBool: data.franchise,
        gameName: toPascalCase(data.game_name),
        price: data.original_price,
        saleBool: data.sale_boolean, // Shows % off elements
        saleCountdownBool: data.sale_countdown_boolean, // If special sale
        salePercent: data.sale_percentage,
        salePrice: getSalePrice(data.original_price, data.sale_percentage),
        os: data.os,
        dlcCount: data.dlcs.length,
        dlcData: data.dlcs
      });
    });
  }

  // TODO on mouseHover for franchise banner
  // onMouseEnter={} onMouseLeave={}

  render() {
    let data = [];
    for (let key of Object.keys(this.state)) {
      data.push(<div>`{key}: {JSON.stringify(this.state[key])}`</div>);
    }
    const tempDataStyle = {
      display: 'flex',
      flexDirection: 'column'
    }

    const franchiseBannerStyle = {
      display: 'block',
      height: '54px',
      background: '#363a43',
      boxShadow: 'inset 0 0 10px rgba(255,255,255,1)',
      borderRadius: '6px'
    };

    const franchiseTextStyle = {
      height: '38px',
      paddingTop: '16px',
      paddingLeft: '16px',
      color: '#ffffff',
      fontSize: '16px',
      fontFamily: '"Motiva Sans", Sans-serif',
      fontWeight: '300',
      textShadow: '1px 1px rgba(0, 0, 0, 0.5)',
    };

    const gamePurchaseBannerStyle = {
      display: 'block',
      background: 'linear-gradient(135deg, rgba(97, 100, 101, 0.3) 0%, rgba(226, 244, 255, 0.3) 100%)',
      padding: '16px 16px 26px 16px',
      marginTop: '16px'
    };

    const gamePurchaseTextStyle = {
      color: '#ffffff',
      fontSize: '21px',
      fontFamily: '"Motiva Sans", Sans-serif',
      marginBlockStart: '0.67em',
      marginBlockEnd: '0.67em',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
      fontWeight: '100'
    };

    const gamePurchaseOSStyle = {};

    return (
      <div>
        {/* Franchise Banner - rendered if this.state bool is true*/}
        { this.state.franchiseBool &&
        <div style={franchiseBannerStyle}>
          <div style={franchiseTextStyle}>
            Check out the entire {this.state.gameName} Franchise on Steam
          </div>
        </div>
        }
        {/* Game Purchase Options */}
        <div style={gamePurchaseBannerStyle}>
          <h1 style={gamePurchaseTextStyle}>Buy {this.state.gameName}</h1>
        </div>
        {/* DLC Options */}
        <div style={tempDataStyle}>{data}</div>
      </div>
    )
  }
};

ReactDOM.render(< App />, document.getElementById('app') || document.createElement('div')); // createElement for testing purposes

export default App;