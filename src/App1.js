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
// import {render} from 'react-dom'
// import About from './components/About'
// import Home from './components/Home'
// import Users from './components/Users'
// import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom'
//
// function App(props) {
//     props.history.listen((link)=>{
//
//     });
//     return (
//         <div className="App">
//           <div>
//             <NavLink to='/Home'>点去home页</NavLink>
//             <NavLink to='/About/我是参数'>点去about页</NavLink>
//             <NavLink to={{pathname:"/Users",query:{name:"小明"}}}>点去users页</NavLink>
//               <button onClick={()=>{props.history.push('/Home')}}>点去home页</button>
//               <button onClick={()=>{props.history.push('/About')}}>点去about页</button>
//               <button onClick={()=>{props.history.push('/Uusers')}}>点去users页</button>
//           </div>
//             <Switch>
//           {/*<Route path='/' exact component={Home}/>*/}
//           <Route path='/Home' component={Home}/>
//           <Route path='/About/:id' component={About}/>
//           <Route path='/Users' component={Users}/>
//           <Redirect from='/' to='/home/homea' exact/>
//           </Switch>
//
//         </div>
//
//     );
// }
// export default withRouter(App);

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             text:'我是状态数据'
//         }
//     }
//     render(){
//         return(
//             <div>
//                 hello----{this.state.text}
//             </div>
//         )
//     }
// }
// export default App;

// / import React,{useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App(props) {
//     let [val,setVal] = useState(0);
//     return(
//         <div className="App">
//             使用数据: {val}
//             <button onClick={()=>{setVal(val+1)}}>
//                 点我进行数据的修改
//             </button>
//         </div>
//     );
// }
// export default App;


import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
    // let [val,setVal] = useState({
    //     vala:0,
    //     valb:1,
    //     valc:2
    // });
    let[vala,setVala] = useState(0);
    let[valb,setValb] = useState(1);
    let[valc,setValc] = useState(2);
    return(
        <div className="App">
            使用数据: {vala}----{valb}---{valc}
            {/*<button onClick={()=>{setVal(val.vala+1)}}>*/}
                {/*点我进行数据的修改*/}
            {/*</button>*/}
        </div>
    );
}
export default App;