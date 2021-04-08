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

    const cellStyle = {
      border: '1px solid #555',
      width: '100px',
      height: '100px',
      lineHeight: '50px',
      textAlign: 'center',
    };

    let cityNames = Object.keys(this.props.G.cities);

    let regions = {1: [], 2: [], 3: [], 4:[], 5: [], 6:[]};
    for (let i = 0; i < cityNames.length; i++) {
      let myName = cityNames[i];
      let myRegion = this.props.G.cities[myName].region;
      regions[myRegion].push(
        <td style={cellStyle} key={myName} onClick={() => this.onClick(myName)}>
          {this.props.G.cities[myName].name}
          <br/>
          Agents: {this.props.G.cities[myName].agents}
        </td>
      );
    }

    let tbody = [];

    for (let i = 1; i <= 6; i++) {
      tbody.push(<tr key={'region-' + i}>{regions[i]}</tr>);
    }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        {winner}
      </div>
    )
  }
}