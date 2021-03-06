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
import Home from './components/Home';
import {observable,isArrayLike,computed} from 'mobx';

//
// const arr = observable(['a','b','c']);
// console.log(arr,Array.isArray(arr),isArrayLike(arr));
// console.log(arr[0],arr[1]);
//
// const obj = observable({a: 1,b:1});
// console.log(obj);
// console.log(obj.a,obj.b);
//
// const map = observable(new Map());
// map.set('a',1);
// console.log(map.has('a'));
// map.delete('a');
// console.log(map.has('a'));

// var num = observable.box(20);
// var str = observable.box('hello');
// var bool = observable.box(true);
// num.set(50);
// str.set('world');
// bool.set(false);
// console.log(num.get(),str.get(),bool.get());

class Store{
    @observable array = [];
    @observable obj = {};
    @observable map = new Map();

    @observable string = 'hello';
    @observable number = 20;
    @observable bool = 'false';
}

let store = new Store();
let foo = computed((function () {
    return store.string + '/'+store.number;
}));
console.log(foo.get())
;

function App(props) {

    return(
        <div className="App">
            hello
            <Home/>
        </div>
    );
}
export default App;