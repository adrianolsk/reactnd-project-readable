import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <ul>
            <li>All</li>
            <li>React</li>
            <li>Redux</li>
            <li>Udacity</li>
          </ul>
        </header>
        <div className="content">
          <div className="content-header">
            <h2>Redux</h2>
            <div className="content-actions">
              <button>Sort by Date</button>
              <button>Sort By Score</button>
              <button>New Post</button>
            </div>
          </div>
          <div className="content-list">
          
            <div className="content-card">
             <div className="card-score">2</div>
              
              <div className="card-detail">
                <h3>Redux for noobs</h3>
                <div className="card-author"> <i>by  Adriano Skroch</i>   </div>
                <div className="card-date">September 7, 2017</div>
                <div className="card-category">Redux</div>
              </div>
             
            </div>
            <div className="content-card">
             <div className="card-score">2</div>
              
              <div className="card-detail">
                <h3>Redux for noobs</h3>
                <div className="card-author"> <i>by  Adriano Skroch</i>   </div>
                <div className="card-date">September 7, 2017</div>
                <div className="card-category">Redux</div>
              </div>
             
            </div>
            <div className="content-card">
             <div className="card-score">2</div>
              
              <div className="card-detail">
                <h3>Redux for noobs</h3>
                <div className="card-author"> <i>by  Adriano Skroch</i>   </div>
                <div className="card-date">September 7, 2017</div>
                <div className="card-category">Redux</div>
              </div>
             
            </div>


          </div>
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
