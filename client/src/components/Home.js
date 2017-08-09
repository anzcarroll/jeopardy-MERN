import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

class Home extends Component {
    constructor(){
        super();
        this.state = {
            user:"",
            redirect: false,
            games:[]
        }
    }

    componentWillMount(){
       axios.get('/api/game')
       .then(res =>{
           console.log(res.data);
           this.setState({
               games: res.data
            });
       }) 
    }

  render() {
    return (
      <div>
        <div>
           <h1>JEOPARDY</h1>
           <form action="">
               <input type="text"/>
               <button>New Game</button>
           </form>
           </div>
           <ul>
              {this.state.games.map((game, i) => (
          <li key={i}>
            <Link to={`/game/${game._id}`}>
              {game.user}'s Game
            </Link>
          </li>
        ))}
        </ul>
      </div>

    );
  }
}

export default Home;