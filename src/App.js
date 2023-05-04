import logo from './logo.svg';
import React, { useReducer, useState, createContext, useContext, useEffect } from 'react';
import { Link, Route, Routes, Router, BrowserRouter } from "react-router-dom"
import styled from 'styled-components'
import './App.css';
import './style.css'

function App() {
  //
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  
  const funStyle = 'color: blue';
  let funId = 0;
  function FuncComp(props) {
    const numberState = useState(props.initNumber);
    const dateState = useState((new Date()).toString());
    const number = numberState[0];
    const date = dateState[0];
    const setNumber = numberState[1];
    const setDate = dateState[1];
    useEffect(function () {
      console.log("%cfunc => effect " + (++funId), funStyle)

    },[])
    console.log("%cfunc => render " + (++funId), funStyle)
    return (
      <div className='container'>
        <h2>function style component </h2>
        <p>Number : {number}</p>
        <p>Date : {date}</p>
        <input type="button" value="random" onClick={function () {
          setNumber(Math.random())

        }
        }></input>
        <input type="button" value="date" onClick={
           () =>{
            setDate((new Date()).toString());
          }
        }></input>
      </div>
    )
  }
  const classStyle = 'color :red ';
  class ClassComp extends React.Component {

    state = {
      number: this.props.initNumber,
      date: new Date().toString()
    }


    render() {
      console.log('%class => render Mount', classStyle)

      return (
        <div className='container'>

          <h2>class style component</h2>

          <p> Number : {this.state.number}</p>
          <p> Date : {this.state.date}</p>
          <input type="button" value="random" onClick={function () {
            this.setState({ number: Math.random() })
          }.bind(this)}></input>
          <input type="button" value="date" onClick={
            function () {
              this.setState({ date: new Date().toString() })
            }.bind(this)
          }></input>
        </div>

      )
    }
  }
  return (
    <div className='container' >
      <h1>Hello World</h1>
      {funcShow ? <FuncComp initNumber={2}>  </FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null }
    </div>
  )
}

export default App 