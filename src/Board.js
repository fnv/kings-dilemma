import G from 'glob';
import React from 'react';
import { GiMeeple, GiOutbackHat, GiCaravan, GiTargeting, GiCancel, GiHouse } from "react-icons/gi";
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

export class DilemmaBoard extends React.Component {

  action = null

  setAction(action) {
    this.action = action;
  };

  onClick(house) {
    let move = this.action;
    if (move === 'assignLeader') {
      this.props.moves.assignLeader(house);
    }
    if (move === 'assignModerator') {
      this.props.moves.assignModerator(house);
    }
    if (move === 'addPower') {
      this.props.moves.addPower(house);
    }
    if (move === 'removePower') {
      this.props.moves.removePower(house);
    }
    if (move === 'addCoin') {
      this.props.moves.addCoin(house);
    }
    if (move === 'removeCoin') {
      this.props.moves.removeCoin(house);
    }
    if (move === 'voteAye') {
      let el = document.getElementById(house+'-bid');
      let bid = parseInt(el?.value);
      this.props.moves.voteAye(house, bid);
    }
    if (move === 'voteNay') {
      let el = document.getElementById(house+'-bid');
      let bid = parseInt(el?.value);
      this.props.moves.voteNay(house, bid);
    }
    if (move === 'passPower') {
      this.props.moves.passPower(house);
    }
    if (move === 'passModerator') {
      this.props.moves.passModerator(house);
    }
    this.action = null;
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

    let div = [];
    let houseNames = Object.keys(this.props.G.houses);

    for (let i = 0; i < houseNames.length; i++) {
      let myName = houseNames[i];
      let voteDivs = [
        // aye
        <div>AYE: {this.props.G.houses[myName].current_bid}<br/>
          <span>Bid: <input style={{width:'15px'}} id={myName + '-bid'}></input></span>
        </div>,
        // nay
        <div>NAY: {this.props.G.houses[myName].current_bid}<br/>
          <span>Bid: <input style={{width:'15px'}} id={myName + '-bid'}></input></span>
        </div>,
        // pass (power)
        <div>PASS (POWER) </div>,
        // pass (moderator)
        <div>PASS (MODERATOR) </div>,
      ];
      div.push(
        <div style={{
          lineHeight: '14px',
          textAlign: 'center',
        }} key={myName} onClick={() => this.onClick(myName)}>
          <table>
            <tbody>
              <tr style={{height:'120px'}}>
              <td style={{width:'100px', border: '1px solid #555',}}>
          Name: {myName} <br/>
          Power: {this.props.G.houses[myName].power} <br/>
          Coins: {this.props.G.houses[myName].coins} <br/>
          {(this.props.G.leader === this.props.G.houses[myName].id) ? ('LEADER') : ('')} <br/>
          {(this.props.G.moderator === this.props.G.houses[myName].id) ? 'MODERATOR' : ''} <br/>
          {(this.props.G.currentPlayer === this.props.G.houses[myName].id) ? 'CURRENT PLAYER' : ''} <br/>
          </td>
          <td  style={{width:'150px'}}>
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('voteAye')}>AYE</button><br/>
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('voteNay')}>NAY</button><br/>
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('passPower')}>PASS (POWER)</button><br/>
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('passModerator')}>PASS (MODERATOR)</button><br/>
          </td>
          <td  style={{width:'100px', height:'50px', border: '1px solid #555',}}>
            {this.props.G.houses[myName].current_vote_type ? voteDivs[this.props.G.houses[myName].current_vote_type - 1] : <span>Bid: <input style={{width:'15px'}} id={myName + '-bid'}></input></span>}
          </td>
              </tr>
            </tbody>
          </table>
          
        </div>
      );
    }

    let actions = (<div style={{
      border: '1px solid #555',
      height: '50px',
      lineHeight: '10px',
      textAlign: 'center',
      background: 'rgba(256, 256, 256, 0.65)',
    }}>
      <table >
        <tbody >
          <tr>
            <td >      <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('assignLeader')}>ASSIGN LEADER</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('addPower')}>ADD POWER</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('addCoin')}>ADD COIN</button><br/>

            </td>
            <td>
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.props.moves.newVote()}>NEW VOTE</button><br/>
            </td>
            <td>
            {(this.props.G.currentPhase === 2) ? <div>
                <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.props.moves.resolveAye()}>AYES HAVE IT</button><br/>
              </div>
              : ''
              }
            </td>
            <td>
            <Widget
          sources={['camera']}
          resourceType={'image'}
          cloudName={'dgqjwmtyf'}
          uploadPreset={'lowmd5va-dilemma'} // check that an upload preset exists and check mode is signed or unisgned
          buttonText={'Upload'}
          style={{
                color: 'white',
                border: 'none',
                width: '120px',
                backgroundColor: 'green',
                borderRadius: '4px',
                height: '20px'
              }} // inline styling only or style id='cloudinary_upload_button'
          onSuccess={(result) => {console.log("success", result); this.props.moves.changeURL(result.info.secure_url);}} // add success callback -> returns result
          onFailure={(error, result) => {console.log("failure", error, result)}} // add failure callback -> returns 'response.error' + 'response.result'
          logging={false} // logs will be provided for success and failure messages, 
          // set to false for production -> default = true
          use_filename={false}
        /><br/>

            
            </td>
          </tr>
          <tr>
            <td>
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('assignModerator')}>ASSIGN MODERATOR</button><br/>
            </td>
            <td>
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('removePower')}>REMOVE POWER</button><br/>

            </td>
            <td>     
            <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.setAction('removeCoin')}>REMOVE COIN</button><br/>

            </td>
            <td>
              {this.props.G.currentPhase === 1 ? 'Voting' : 'Vote Closed'}
              
            </td>
            <td>
            {(this.props.G.currentPhase === 2) ? <div>
                <button style={{fontSize: '12px', width: '100%'}} onClick={() => this.props.moves.resolveNay()}>NAYS HAVE IT</button><br/>
              </div>
              : ''
              }
            </td>
          </tr>
          
        </tbody>
      </table>
      
    </div>);
    //      <div style={{'width':'2074px','height':'1306px','backgroundImage':'url('+process.env.PUBLIC_URL+'/Dilemmamap.jpeg)'}}>

    let card = <div style={{position:'absolute', top:'80px', left: '400px'}}><div>Current Power Pool: {this.props.G.powerPool}</div><img alt='' style={{width:'400px'}} src={this.props.G.currentDilemma}></img></div>

    return (
      <div>
        <WidgetLoader />
        
        {actions}
        {div} 
        {card}       
        {winner}
      </div>
    )
  }
}