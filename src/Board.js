import React from 'react';
import { GiMeeple, GiOutbackHat, GiCaravan, GiTargeting, GiCancel, GiHouse } from "react-icons/gi";


export class PandemicBoard extends React.Component {

  action = 'add'

  setAction(action) {
    this.action = action;
  };

  onClick(city) {
    let move = this.action;
    if (move === 'add') {
      this.props.moves.addAgent(city);
    }
    if (move === 'remove') {
      this.props.moves.removeAgent(city);
    }
    if (move === 'blue') {
      this.props.moves.moveBluePawn(city);
    }
    if (move === 'pink') {
      this.props.moves.movePinkPawn(city);
    }
    if (move === 'black') {
      this.props.moves.moveBlackPawn(city);
    }
    if (move === 'white') {
      this.props.moves.moveWhitePawn(city);
    }
    if (move === 'safehouse') {
      this.props.moves.toggleSafehouse(city);
    }
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
          width: '100px',
          height: '100px',
          lineHeight: '14px',
          textAlign: 'center',
          background: 'rgba(256, 256, 256, 0.15)',
          position: 'absolute',
          top: myTop ?? '10px',
          left: myLeft ?? '10px',
        }} key={myName} onClick={() => this.onClick(myName)}>
          {(this.props.G.cities[myName].safehouse) ? (<GiHouse color='white' size='1.5em' style={{'border':'2px solid white', 'background': 'rgba(0, 0, 0, 0.45)'}}/>) : ''}
          {(this.props.G.pawns.bluePawn===myName) ? (<GiMeeple color='blue' size='1.5em' style={{'border':'2px solid blue', 'background': 'rgba(256, 256, 256, 0.45)'}}/>) : ''}
          {(this.props.G.pawns.pinkPawn===myName) ? (<GiMeeple color='pink' size='1.5em' style={{'border':'2px solid pink', 'background': 'rgba(0, 0, 0, 0.45)'}}/>) : ''}
          {(this.props.G.pawns.whitePawn===myName) ? (<GiMeeple color='white' size='1.5em' style={{'border':'2px solid white', 'background': 'rgba(0, 0, 0, 0.45)'}}/>) : ''}
          {(this.props.G.pawns.blackPawn===myName) ? (<GiMeeple color='black' size='1.5em' style={{'border':'2px solid black', 'background': 'rgba(256, 256, 256, 0.45)'}}/>) : ''}
          <br/>
          {Array(this.props.G.cities[myName].agents).fill(0).map((_, index) => <GiOutbackHat key={'hat-'+index} color='red' size='1.5em' />)}
          <br/>
          
          {/* <GiCaravan color='blue' size='2em'/>
          <GiTargeting color='red' size='2em'/>
          <GiCancel color='gray' size='2em'/> */}
        </div>
      );
    }

    let div = [];

    for (let i = 1; i <= 6; i++) {
      div.push(<div key={'region-' + i}>{regions[i]}</div>);
    }

    let actions = (<div style={{
      border: '1px solid #555',
      width: '180px',
      height: '210px',
      lineHeight: '28px',
      textAlign: 'center',
      background: 'rgba(256, 256, 256, 0.65)',
      position: 'absolute',
      top: '55px',
      left: '25px'
    }}>
      <span onClick={() => this.setAction('add')}>ADD AGENT</span><br/>
      <span onClick={() => this.setAction('remove')}>REMOVE AGENT</span><br/>
      <span onClick={() => this.setAction('blue')}>MOVE BLUE</span><br/>
      <span onClick={() => this.setAction('pink')}>MOVE PINK</span><br/>
      <span onClick={() => this.setAction('black')}>MOVE BLACK</span><br/>
      <span onClick={() => this.setAction('white')}>MOVE WHITE</span><br/>
      <span onClick={() => this.setAction('safehouse')}>TOGGLE SAFEHOUSE</span><br/>
    </div>);

    return (
      <div style={{'width':'2074px','height':'1306px','backgroundImage':'url('+process.env.PUBLIC_URL+'/pandemicmap.jpeg)'}}>
        {actions}
        {div}
        {winner}
      </div>
    )
  }
}