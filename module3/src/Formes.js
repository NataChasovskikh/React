import React, { Component } from "react";
import style from "./Formes.module.css";

const INITIALSTATE = {
  login: "",
  password: "",
  email: "",
  size: "",
  color: "",
  quantity: ""
};

export default class Form extends Component {
  state = { ...INITIALSTATE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
   //  this.handleChange();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIALSTATE });
  };

  render() {
    const { login, password, email, color, quantity, size } = this.state; //const login = this.state.login
    return (
      <form className={style.formes} onSubmit={this.handleSubmit}>
        <input
          className={style.input}
          type="text"
          name="login"
          value={login}
          onChange={this.handleChange}
          placeholder="login"
        />
        <input
          className={style.input}
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="email"
        />
        <input
          className={style.input}
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="password"
        />
        <label className={style.input}>
          Color
          <select className={style.color} name="color" value={color} onChange={this.handleChange}>
            <option value="" disabled>...</option>
            <option value="green">green</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
          </select>
        </label>
        <label className={style.input}>
          Quantity
          <select className={style.quantity} name="quantity" value={quantity} onChange={this.handleChange}>
            <option value="" disabled>...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label className={style.input}>
          Size
          <select className={style.size} name="size" value={size} onChange={this.handleChange}>
            <option value="" disabled>...</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </label>
        <button onClick={this.handleSubmit}>submit</button>
      </form>
    );
  }
}
