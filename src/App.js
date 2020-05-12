// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import {render} from 'react-dom '
// import About from './components/About'
// import Home from './components/Home'
// import Users from './components/Users'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';
//
// function App() {
//     return(
//         <Router>
//           <div>
//             <nav>
//               <li>
//                 <link to="/">Home</link>
//               </li>
//               <li>
//                 <link to="/about">About</link>
//               </li>
//               <li>
//                 <link to="/users">Users</link>
//               </li>
//             </nav>
//
//             <Switch>
//               <Route path="/about">
//                 <About />
//               </Route>
//               <Route path="/users">
//                 <Users />
//               </Route>
//               <Route path="/">
//                 <Home />
//               </Route>
//             </Switch>
//           </div>
//         </Router>
//     );
// }
//
// function Home() {
//     return <h2>Home</h2>
// }
//
// function About() {
//     return <h2>About</h2>
// }
//
// function Users() {
//     return <h2>Users</h2>
// }


import logo from './logo.svg';
import './App.css';
import React from 'react';
import {render} from 'react-dom '
import About from './components/About'
import Home from './components/Home'
import Users from './components/Users'
import {Route,Link} from 'react-router-dom'

function App() {
    return (
        <div className="App">
          <div>
            <Link to='/Home'>点去home页</Link>
            <Link to='/About'>点去about页</Link>
            <Link to='/Users'>点去users页</Link>
          </div>
          <Route path='/Home' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Users' component={Users}/>
        </div>
    );
}
export default App;
