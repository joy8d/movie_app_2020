/* 📁 Document Property */
// React Practice Mar 2020
// NomadCoder Youtube 강의 (니꼴라스 Tr) 

/* 🗂 Imported Libraries */
import React from 'react';
import PropTypes from "prop-types";

/* 🗄 Data  */

/*  🙆‍♀️ Proper Type Check 🙆‍♀️ */
// Check info ➡️ https://reactjs.org/docs/typechecking-with-proptypes.html

/* 🏃‍♂️ Run!  */
// function component는 return을 가지고 있고 이를 통해 screen에 뭔가를 표시
// function component와 달리, class component는 react component로부터 확장되고, render method(자동으로 실행됨)를 통해서 screen에 표시
// class component는 state object(component에 동적데이터를 넣을 공간)를 가짐
class App extends React.Component {
  state = {
    count: 0
  };

  /* custom fuctnions */
  add = () => {
    this.setState(current => ({ count: current.count +1 }))
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1 }))
  }

  // setState를 호출할 때마다 state를 업데이트하고 render func이 호출됨
  // React Component Life Cycle
  // 주로(98%) 쓰이는 react component functions! -> https://reactjs.org/docs/react-component.html
  // 1. mounting(태어나는 것): constructor(), render(), componentDidMount()
  // 2. updating: update의 원인은 사용자로인해 state가 변경되는 것을 의미, render(), componentDidUpdate()
  // 3. unmounting(component die): 페이지를 바꿀 때, componentWillUnmount()
  render() {     /* react function */
    return (
      <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    );
   }
}

export default App;
