import React from 'react';
import { GiMeeple, GiOutbackHat, GiCaravan, GiTargeting, GiCancel, GiHouse, GiEyeTarget } from "react-icons/gi";


export class PandemicBoard extends React.Component {

  action = 'add'
  team = null

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
    if (move === 'target') {
      this.props.moves.toggleTarget(city);
    }
    if (move === 'addIncident') {
      this.props.moves.addIncident(city);
    }
    if (move === 'removeIncident') {
      this.props.moves.removeIncident(city);
    }
    if (move === 'createAllied') {
      this.team = 'alliedTeam1';
      this.props.moves.moveTeam(city, this.team);
    }
    if (move === 'createNeutral') {
      this.team = 'neutralTeam1';
      this.props.moves.moveTeam(city, this.team);
    }
    if (move === 'createSoviet') {
      this.team = 'sovietTeam1';
      this.props.moves.moveTeam(city, this.team);
    }
    if (move === 'createAllied2') {
      this.team = 'alliedTeam2';
      this.props.moves.moveTeam(city, this.team);
    }
    if (move === 'createNeutral2') {
      this.team = 'neutralTeam2';
      this.props.moves.moveTeam(city, this.team);
    }
    if (move === 'createSoviet2') {
      this.team = 'sovietTeam2';
      this.props.moves.moveTeam(city, this.team);
    }
    if (move === 'createAllied3') {
      this.team = 'alliedTeam3';
      this.props.moves.moveTeam(city, this.team);
    }
    if (move === 'createNeutral3') {
      this.team = 'neutralTeam3';
      this.props.moves.moveTeam(city, this.team);
    }
    if (move === 'createSoviet3') {
      this.team = 'sovietTeam3';
      this.props.moves.moveTeam(city, this.team);
    }
    if (move === 'removeTeam') {
      // search teams and set first matching city to null
      let found = Object.keys(this.props.G.teams).find((team) => {if (this.props.G.teams[team] === city) {return team} return null})
      if (found) {
        this.props.moves.moveTeam(null, found);
      }
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
          background: this.props.G.cities[myName].surveillance > 0 ? 'rgba(256, 0, 0, 0.'+(15*this.props.G.cities[myName].surveillance)+')' : 'rgba(256, 256, 256, 0.15)',
          position: 'absolute',
          top: myTop ?? '10px',
          left: myLeft ?? '10px',
        }} key={myName} onClick={() => this.onClick(myName)}>
          <div style={{'display':'flex'}}>
          {(this.props.G.cities[myName].surveillance > 0) ? (<GiEyeTarget color='white' size='1.5em' style={{'display':'flex','border':'2px solid red', 'borderRadius':'24px', 'background': 'rgba(256, 0, 0, 0.75)'}}/>) : ''}
          {(this.props.G.cities[myName].surveillance > 1) ? (<GiEyeTarget color='white' size='1.5em' style={{'display':'flex','border':'2px solid red', 'borderRadius':'24px', 'background': 'rgba(256, 0, 0, 0.75)'}}/>) : ''}
          {(this.props.G.cities[myName].surveillance > 2) ? (<GiEyeTarget color='white' size='1.5em' style={{'display':'flex','border':'2px solid red', 'borderRadius':'24px', 'background': 'rgba(256, 0, 0, 0.75)'}}/>) : ''}
          </div>
          {(this.props.G.cities[myName].safehouse) ? (<GiHouse color='white' size='1.5em' style={{'border':'2px solid white', 'background': 'rgba(0, 0, 0, 0.45)'}}/>) : ''}
          {(this.props.G.pawns.bluePawn===myName) ? (<GiMeeple color='blue' size='1.5em' style={{'border':'2px solid blue', 'background': 'rgba(256, 256, 256, 0.45)'}}/>) : ''}
          {(this.props.G.pawns.pinkPawn===myName) ? (<GiMeeple color='pink' size='1.5em' style={{'border':'2px solid pink', 'background': 'rgba(0, 0, 0, 0.45)'}}/>) : ''}
          {(this.props.G.pawns.whitePawn===myName) ? (<GiMeeple color='white' size='1.5em' style={{'border':'2px solid white', 'background': 'rgba(0, 0, 0, 0.45)'}}/>) : ''}
          {(this.props.G.pawns.blackPawn===myName) ? (<GiMeeple color='black' size='1.5em' style={{'border':'2px solid black', 'background': 'rgba(256, 256, 256, 0.45)'}}/>) : ''}
          {(this.props.G.teams.alliedTeam1===myName) ? (<GiCaravan color='lightBlue' size='1.5em' style={{'border':'2px solid lightBlue', 'borderRadius':'24px', 'background': 'rgba(0, 0, 0, 0.65)'}}/>) : ''}
          {(this.props.G.teams.alliedTeam2===myName) ? (<GiCaravan color='lightBlue' size='1.5em' style={{'border':'2px solid lightBlue', 'borderRadius':'24px', 'background': 'rgba(0, 0, 0, 0.65)'}}/>) : ''}
          {(this.props.G.teams.alliedTeam3===myName) ? (<GiCaravan color='lightBlue' size='1.5em' style={{'border':'2px solid lightBlue', 'borderRadius':'24px', 'background': 'rgba(0, 0, 0, 0.65)'}}/>) : ''}
          {(this.props.G.teams.neutralTeam1===myName) ? (<GiCaravan color='gray' size='1.5em' style={{'border':'2px solid gray', 'borderRadius':'24px', 'background': 'rgba(0, 0, 0, 0.65)'}}/>) : ''}
          {(this.props.G.teams.neutralTeam2===myName) ? (<GiCaravan color='gray' size='1.5em' style={{'border':'2px solid gray', 'borderRadius':'24px', 'background': 'rgba(0, 0, 0, 0.65)'}}/>) : ''}
          {(this.props.G.teams.neutralTeam3===myName) ? (<GiCaravan color='gray' size='1.5em' style={{'border':'2px solid gray', 'borderRadius':'24px', 'background': 'rgba(0, 0, 0, 0.65)'}}/>) : ''}
          {(this.props.G.teams.sovietTeam1===myName) ? (<GiCaravan color='red' size='1.5em' style={{'border':'2px solid red', 'borderRadius':'24px', 'background': 'rgba(0, 0, 0, 0.65)'}}/>) : ''}
          {(this.props.G.teams.sovietTeam2===myName) ? (<GiCaravan color='red' size='1.5em' style={{'border':'2px solid red', 'borderRadius':'24px', 'background': 'rgba(0, 0, 0, 0.65)'}}/>) : ''}
          {(this.props.G.teams.sovietTeam3===myName) ? (<GiCaravan color='red' size='1.5em' style={{'border':'2px solid red', 'borderRadius':'24px', 'background': 'rgba(0, 0, 0, 0.65)'}}/>) : ''}
          <br/>
          {Array(this.props.G.cities[myName].incidents).fill(0).map((_, index) => <span key={'incident-'+index} style={{fontSize: '40px', color: 'red'}}><b>!</b></span>)}
          {Array(this.props.G.cities[myName].agents).fill(0).map((_, index) => <GiOutbackHat key={'hat-'+index} color='red' size='1.5em' />)}
          <br/>
          {(this.props.G.cities[myName].target === 1) ? (<GiTargeting color='red' size='2.5em' style={{'border':'2px solid white', 'background': 'rgba(256, 256, 256, 0.45)'}}/>) : ''}
          {(this.props.G.cities[myName].target === 2) ? (<GiCancel color='gray' size='2.5em' style={{'border':'2px solid white', 'background': 'rgba(256, 256, 256, 0.45)'}}/>) : ''}
        </div>
      );
    }


    let summer = (acc, cur) => acc + cur;
    let totalIncidents = Object.keys(this.props.G.cities).map((city) => this.props.G.cities[city].incidents).reduce(summer);
    let totalAgents = Object.keys(this.props.G.cities).map((city) => this.props.G.cities[city].agents).reduce(summer);


    let div = [];

    for (let i = 1; i <= 6; i++) {
      div.push(<div key={'region-' + i}>{regions[i]}</div>);
    }

    let actions = (<div style={{
      border: '1px solid #555',
      width: '1350px',
      height: '180px',
      lineHeight: '28px',
      textAlign: 'center',
      background: 'rgba(256, 256, 256, 0.65)',
      position: 'absolute',
      top: '25px',
      left: '25px'
    }}>
      <table >
        <tbody >
          <tr>
            <td><span class="tooltip"><GiMeeple color='blue' size='1.5em' style={{'border':'2px solid blue', 'background': 'rgba(256, 256, 256, 0.45)'}}/><span class="tooltiptext"><img width="1000" alt='' src={process.env.PUBLIC_URL+'/blue.jpg'}/></span></span></td>
            <td >      <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('blue')}>MOVE BLUE</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('add')}>ADD AGENT</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('addIncident')}>ADD INCIDENT</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('createAllied')}>MOVE ALLIED</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('createAllied2')}>MOVE ALLIED 2</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('createAllied3')}>MOVE ALLIED 3</button><br/>

            </td>
          </tr>
          <tr>
          <td><span class="tooltip"><GiMeeple color='pink' size='1.5em' style={{'border':'2px solid pink', 'background': 'rgba(0, 0, 0, 0.45)'}}/><span class="tooltiptext"><img width="1000" alt='' src={process.env.PUBLIC_URL+'/pink.jpg'}/></span></span></td>

            <td>
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('pink')}>MOVE PINK</button><br/>
            </td>
            <td>
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('remove')}>REMOVE AGENT</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('removeIncident')}>UNDO INCIDENT</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('createNeutral')}>MOVE NEUTRAL</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('createNeutral2')}>MOVE NEUTRAL 2</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('createNeutral3')}>MOVE NEUTRAL 3</button><br/>

            </td>
          </tr>
          <tr>
          <td><span class="tooltip"><GiMeeple color='black' size='1.5em' style={{'border':'2px solid black', 'background': 'rgba(256, 256, 256, 0.45)'}}/><span class="tooltiptext"><img width="1000" alt='' src={process.env.PUBLIC_URL+'/black.jpg'}/></span></span></td>

            <td>
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('black')}>MOVE BLACK</button><br/>
            </td>
            <td>
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('safehouse')}>TOGGLE SAFEHOUSE</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.props.moves.increaseThreat()}>ADD THREAT</button><br/>

            </td><td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('createSoviet')}>MOVE SOVIET</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('createSoviet2')}>MOVE SOVIET 2</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('createSoviet3')}>MOVE SOVIET 3</button><br/>

            </td>
          </tr>
          <tr>
          <td><span class="tooltip"><GiMeeple color='white' size='1.5em' style={{'border':'2px solid white', 'background': 'rgba(0, 0, 0, 0.45)'}}/><span class="tooltiptext"><img width="1000" alt='' src={process.env.PUBLIC_URL+'/white.jpg'}/></span></span></td>
            <td>
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('white')}>MOVE WHITE</button><br/>
            </td>
            <td>
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('target')}>TOGGLE TARGET</button><br/>
            </td>
            <td>     

            </td><td>     
            <button style={{fontSize: '20px', width: '100%'}} onClick={() => this.setAction('removeTeam')}>REMOVE TEAM</button><br/>

            </td>
          </tr>
        </tbody>
      </table>
      <div>
          TOTAL INCIDENTS: {totalIncidents} / 7
          TOTAL AGENTS: {totalAgents} / 36
        </div>
    </div>);
    
    return (
      <div style={{'width':'2074px','height':'1306px','backgroundImage':'url('+process.env.PUBLIC_URL+'/pandemicmap.jpeg)'}}>
        {actions}
        <div style={{'position':'absolute','width':'38px','height':'38px','top':'231px','left': (1592+(this.props.G.threat*70))+ 'px', 'border': '5px solid red', 'border-radius': '38px'}}></div>
        {div}
        <div style={{'position': 'absolute','top':'1200px','left':'1700px'}}><span class="tooltip" style={{fontSize: '40px', color: 'gray'}}><b>?</b><span class="tooltiptext" style={{'top':'-600px'}}><img width='500px' alt='' src={process.env.PUBLIC_URL + '/actions1.jpg'}/></span></span></div>
        <div style={{'position': 'absolute','top':'1200px','left':'1750px'}}><span class="tooltip" style={{fontSize: '40px', color: 'gray'}}><b>?</b><span class="tooltiptext" style={{'top':'-600px'}}><img width='500px' alt='' src={process.env.PUBLIC_URL + '/actions2.jpg'}/></span></span></div>
        {winner}
      </div>
    )
  }
}