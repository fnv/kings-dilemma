import React from 'react';

export class PandemicBoard extends React.Component {
  onClick(id) {
    this.props.moves.addAgent(id);
  }

  render() {
    let winner = '';
    if (this.props.ctx.gameover) {
      winner = 
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    let cityNames = Object.keys(this.props.G.cities);

    let regions = {1: [], 2: [], 3: [], 4:[], 5: [], 6:[]};
    for (let i = 0; i < cityNames.length; i++) {
      let myName = cityNames[i];
      let myRegion = this.props.G.cities[myName].region;
      let myTop = this.props.G.cities[myName].top;
      let myLeft = this.props.G.cities[myName].left;
      regions[myRegion].push(
        <div style={{
          border: '1px solid #555',
          width: '120px',
          height: '50px',
          lineHeight: '14px',
          textAlign: 'center',
          backgroundColor: '#fff',
          opacity: '45%',
          position: 'absolute',
          top: myTop ?? '10px',
          left: myLeft ?? '10px',
        }} key={myName} onClick={() => this.onClick(myName)}>
          {this.props.G.cities[myName].name}
          <br/>
          Agents: {this.props.G.cities[myName].agents}
        </div>
      );
    }

    let div = [];

    for (let i = 1; i <= 6; i++) {
      div.push(<div key={'region-' + i}>{regions[i]}</div>);
    }

    return (
      <div style={{'width':'2074px','height':'1306px','backgroundImage':'url(https://lh3.googleusercontent.com/ggFmwOgjqmmtEM_OsEhCUDBAVOVOoYJWyQXRImYhSQ_64cZMaLvV9iMATWtUIbsj81t4P9XqMqY7T_qbdI2HcBp1Oxvz5dNLNIiuVgMAp6BG-zIsUSRU3rqJGhMyFHwOvy2Y6UFcS2oNyg0G0VGvVZqxUddJAV2wgouk6gSrPO9cSxt1Jr7Oi1Vj3pqEeooXTkuWka9eoM2hNDp27J38hKHf-PMLyAHZdYL-oQ7Kjv3B1QIPqqV1cMjqAO5b-4VOgNcI6lPl8EPDf2Cu6taPrrnfb4wDl-TQteZqNp_kbGDYXuol2cOPIfLixC5rGa7_blHZ2KrwMbQiqf3qE10HYShhRS-d-0xo_YvEbMyD1eBDOzt3LCCii2lcNgaFxap5KWKQt5bzoOPZQ1VLz89wnU3a4iKRawtt25cB62pAmoiiW9f1NKIpe6Cct8aWTSp2ebMqF0hBV5JkqWK47y6lzTYNWbSNQ67IRc6ucgWOdQULvsfIIePlxIo3MXT_MI5GAJcGdxSX9mQ2jw7fPu5p0N0YRXy-V0ifwjVwfvoT077mG3oBrgDKf0SSIvwPvc4TeZGA3sz-lEAtPrrPWzCgqqXNv6Kv4N5fZ3DE-bKtyJunTIZQq91rCmXXEhPbFBajXx6n543TaPqmF9lX2vx3DDM8CZiZI7exL3xhY8bcvT_1kn1ScsQ-s0V74yu5JOnbnx_LG-JmopST2PaHPgSS2H9Efg=w2074-h1306-no?authuser=0)'}}>
        {div}
        {winner}
      </div>
    )
  }
}