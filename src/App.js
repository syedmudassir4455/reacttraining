// import logo from './logo.svg';

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

// import MountingPhase from "./Components/MountingPhase";
//import ExerciseDecrementButtonParent from "./Components/ExerciseDecrementButtonParent";
// import Like from "./Components/SolutionLikeComponent/like";
// import PassingDatatoComponentsParent from "./Components/PassingDatatoComponentsParent";
// import RaisingandHandlingEventsParent from "./Components/RaisingandHandlingEventsParent";
// import UpdatingStateParent from "./Components/UpdatingtheStateParent";
// import NewCounters from "./Components/NewCounter";
// import PassingDatatoComponents from "./Components/PassingDatatoComponentsChild";
// import Hello from "./Components/Hello";
// import Book from "./Components/Book";
// import Library from "./Components/library";
// import Person from "./Components/Person";
// import SecondPerson from "./Components/SecondPerson";
// import ThirdPerson from "./Components/ThirdPerson";
// import ChildrenProps from "./Components/ChildrenProps";
// import { checkPropTypes } from "prop-types";
// import Task from './Components/task';
// import WhatHappensWhenStateChanges from "./Components/WhatHappensWhenStateChanges";
// import PassingEventArguments from "./Components/PassingEventArguments";

// import SingleSourceofTruthParent from "./Components/SingleSourceofTruthParent";
//import RemovingtheLocalStateParent from "./Components/RemovingtheLocalStateParent";
// import LiftingtheStateUpParent from "./Components/LiftingtheStateUpParent";
// import StatelessFunctionalComponents from  "./StatelessFunctionalComponents"
import { Route, Switch, Router, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import Customers from "./Components/Customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/notFound";
import MovieForm from "./Components/movieForm";
import LoginForm from "./Components/loginform";
import "./App.css";

class App extends Component {
  // state = {
  //   Persons: [
  //     { name: "Maxie", age: 29 },
  //     { name: "Jackie", age: 45 },
  //     { name: "Ajay", age: 30 },
  //   ],
  // };

  // newState = {
  //   Counters: [
  //     { id: 1, value: 0 },
  //     { id: 2, value: 3 },
  //     { id: 2, value: 4 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 34 },
      { id: 3, value: 34 },
      { id: 4, value: 90 },
    ],
    countValue: 0,
  };

  add = () => {
    let countValue = this.state.counters.reduce(function (a, b) {
      return a.value + b.value;
    });
    this.setState({ countValue });
  };

  handleDelete = (counterid) => {
    // console.log(counterid)

    // console.log("Event Handler called",this.props.Counterid);

    const counters = this.state.counters.filter(
      (count) => count.id !== counterid
    );
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    // console.log("increment " + counter); //{ id: 2, value: 34 }
    // console.log(this.state.countValue);

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    counters[index].value++;
    this.setState({ counters });

    // console.lo g(this.state.Counter[0]);

    let countValue = this.state.countValue;
    countValue++;
    console.log(countValue);
    this.setState({ countValue });

    // this.add()
    // console.log(counter.value)
    // console.log(this.state.counters.value)
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });

    let countValue = this.state.countValue;
    countValue--;
    console.log(countValue);
    this.setState({ countValue });
    // this.add()
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      // console.log("Reset" + c);
      // console.log(c.value);
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      //       // React.createElement('div',null,'h1','Hi I\'m React App!') // --> h1 will render() h1 as text not html element
      //       //React.createElement('div',null,React.createElement('h1',null,'Does this work')) --> see changes in inspect you can see inside h1 tag its content(Does this work)
      //       //  React.createElement('div',{className:"App"},React.createElement('h1',null,'Does this Work')) we are adding App component's css

      <div className="App">
        {/* <Book /> */}
        <React.Fragment>
          <NavBar countValue={this.state.countValue} />
          {/* <StatelessFunctionalComponents /> */}

          {/* <MountingPhase /> */}
          <main className="container">
            {/* <LiftingtheStateUpParent
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              counters={this.state.counters}
            /> */}
            {/* <ExerciseDecrementButtonParent
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              counters={this.state.counters}
              onDecrement={this.handleDecrement}
            /> */}

            {/* <h1>Hello Wrold</h1> */}
            {/* <Person />

          
//         <SecondPerson />
//         <ThirdPerson name="Syed" age="28"></ThirdPerson>
//         <ThirdPerson name="Rana" age="28"></ThirdPerson>

         <ChildrenProps name="Sahil" age="30">
           My Hobbies is racing{" "}
        </ChildrenProps>
       <ChildrenProps name="rahul" age="32"></ChildrenProps>}}

//         <ChildrenProps
//           name={this.state.Persons[0].name}
//           age={this.state.Persons[0].age}
//         ></ChildrenProps>
//         <ChildrenProps
//           name={this.state.Persons[1].name}
//           age={this.state.Persons[1].age}
//         ></ChildrenProps>
//         <ChildrenProps
//           name={this.state.Persons[2].name}
//           age={this.state.Persons[2].age}
//         ></ChildrenProps>
//         <Task />

//         <h1>ABC</h1>
//         <Hello /> 
//         <Library />
//         <Book />
//         <Book />  */}
            {/* <WhatHappensWhenStateChanges /> */}
            {/* <Movies /> */}
            {/* <NewCounters /> */}
            {/* <PassingDatatoComponentsParent /> */}
            {/* <RaisingandHandlingEventsParent /> */}
            {/* <UpdatingStateParent /> */}
            {/* <SingleSourceofTruthParent /> */}
            {/* <RemovingtheLocalStateParent /> */}
            {/* Adding react Router*/}
            <Switch>
              {/* <Router> */}

              <Route path="/login" component={LoginForm}></Route>

              <Route path="/movies/:id" component={MovieForm} />
              <Route path="/movies" component={Movies}></Route>
              <Route path="/customers" component={Customers}></Route>
              <Route path="/rentals" component={Rentals}></Route>
              <Route path="/not-found" component={NotFound}></Route>

              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
            {/* </Router> */}
          </main>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
