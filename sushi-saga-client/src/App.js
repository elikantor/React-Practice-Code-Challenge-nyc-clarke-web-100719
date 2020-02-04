import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    sushiX: 0,
    sushiY: 4,
    money: 500
  }

  componentDidMount(){
    fetch(`${API}`)
    .then(r=>r.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }

  showMore = () => {
    let newsushiX = this.state.sushiX + 4
    let newsushiY = this.state.sushiY + 4
    this.setState({
      sushiX: newsushiX,
      sushiY: newsushiY
    })
  }

  eatSushi = (sushi) => {
    if(this.state.money >= sushi.price){
      let newMoney = this.state.money - sushi.price
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} eatSushi={this.eatSushi} sushis={this.state.sushis} showMore={this.showMore} sushiX={this.state.sushiX} sushiY={this.state.sushiY}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;