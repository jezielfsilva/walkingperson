import React from 'react';
import styled from 'styled-components';
import './App.css';

import Person from './assets/sprite.png';

const Npc = styled.div`
  position: absolute;
  top: ${props => props.position[1]}px;
  left: ${props => props.position[0]}px;
  width: 35px;
  height: 35px;
  background: url(${Person});
  background-position: ${props => props.side};
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    // cada posição do personagem tem 35px de tamanho
    // para mover o boneco para baixo: background-position: 0 0
    // para mover o boneco para cima: background-position: 0 70px
    // para mover o boneco para a esquerda: background-position: 0 35px
    // para mover o boneco para a direita: background-position: 0 105px


    this.state = {
      position: [0, 0],
      side: '0 105px'
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleMove)
  }

  handleMove = (e) => {
    console.log( "posição do person", this.state.position )

    // Down //
    if (e.keyCode === 40 && this.state.position[1] <= 455 ) {
      this.setState({position: [this.state.position[0], 
        this.state.position[1] + 35], side: '0 0px'});
    }

    // Up //
    if (e.keyCode === 38 && this.state.position[1] >= 35 ) {
      this.setState({position: [this.state.position[0], 
        this.state.position[1] - 35], side: '0 70px'});
    }

    // Right //
    if (e.keyCode === 39 && this.state.position[0] <= 840 ) {
      this.setState({position: [this.state.position[0] + 35, 
        this.state.position[1]], side: '0 105px'});
    }

    // Left //
    if (e.keyCode === 37 && this.state.position[0] >= 35 ) {
      this.setState({position: [this.state.position[0] - 35, 
        this.state.position[1]], side: '0 35px'});
    }
  }

  render() {
    const { position, side } = this.state;
    return (
      <div className="App">
        <div className="Map-Game">
          <Npc position={position}
                side={side}
          ></Npc>
        </div>
      </div>
    );
  }
}

export default App;
