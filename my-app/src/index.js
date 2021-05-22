import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
      'Go to move #' + move:
      'Go to game start';
      return(
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

*/

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Nahuel" />
//       <Welcome name="Neko" />
//       <Welcome name="Nekito" />
//     </div>
//   );
// }

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// const naranja = {
//   date: new Date(),
//   text: "I am a orange",
//   author: {
//     name: "Orange",
//     avatarUrl:
//       "https://www.alsfamilyfarms.com/images/slider/450/valencia-450.jpg",
//   },
// };

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }

// Imprimer lo de arriba con :

// ReactDOM.render(
//   <Comment date={naranja.date} text={naranja.text} author={naranja.author} />,
//   document.getElementById("root")
// );

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(), 
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
//       </div>
//     );
//   }
// }

// function AppReloj() {
//   return (
//     <div>
//       OFF
//       <Clock />
//     </div>
//   );
// }

//ReactDOM.render(<AppReloj />, document.getElementById("root"));

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     // Este enlace es necesario para hacer que `this` funcione en el callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((state) => ({
//       isToggleOn: !state.isToggleOn,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : <AppReloj/>}
//       </button>
//     );
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting/>;
//   }
//   return <GuestGreeting/>;
// }

// function LoginButton(props) {
//   return(
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return(
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick}/>;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick}/>;
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn}/>
//         {button}
//       </div>
//     );
//   }
// }

//Puedes incluir expresiones en JSX envolviéndolas en llaves. 
//Esto incluye el operador lógico && de JavaScript. 
//Puede ser útil para incluir condicionalmente un elemento
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//       <h2>You have {unreadMessages.length} unread messages.</h2>
//       }
//     </div>
//   );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }
//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }
//   handleToggleClick() {
//     this.setState( state => ({
//       showWarning: !state.showWarning
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning}/>
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Page/>,
//   document.getElementById('root')
// );

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );

// class FormularioSabor extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {value: 'coco'};

//     this.manejarCambio = this.manejarCambio.bind(this);
//     this.manejarSubmit = this.manejarSubmit.bind(this);
//   }

//   manejarCambio(e) {
//     this.setState({value: e.target.value})
//   }

//   manejarSubmit(e) {
//     alert('Tu sabor favorito es : '+ this.state.value);
//     e.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.manejarSubmit}>
//         <label>
//           Selecciona tu sabor favorito 
//           <select value={this.state.value} onChange={this.manejarCambio}>
//             <option value='grapefruit'>Grapefruit</option>
//             <option value='lima'>Lima</option>
//             <option value='coco'>Coco</option>
//             <option value='mango'>Mango</option>
//           </select>
//         </label>
//         <input type='submit' value='Submit' />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FormularioSabor/>,
//   document.getElementById('root')
// );

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation/>,
  document.getElementById('root')
)

