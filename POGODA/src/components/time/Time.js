import React, { Component } from 'react';
import s from './Main.module.css';
import earth from '../image/earth.png';
import pinned from '../image/pinned.png';
// import Map from './Map';
// import Describe from './Describe';


// import Describe from './Describe'


export default class Main extends Component {
   state={
       time: new Date(),

   }
   componentDidMount() {
       this.update = setInterval(() => {
           this.setState({time:new Date()});
           }, 1000
       )}
       componentWillUnmount () {
           clearInterval(this.update)
       }
   render() {
       const {time} = this.state;
       const {city, src, temp, today, updated, getInput, humidity, minT, maxT, sunrise, sunset, wind, db} = this.props;
     return (
       <>
       <main className={s.weather} >
       <section className={s.one}>
       <div className={s.wid}>
           <form onSubmit={getInput}>
               <input type="text" name='city' className={s.input} />
      <img src={earth} alt='location' />
      </form>
      <p className={s.intCenter}>

      <button className={s.button} type="button">One Day</button>

      <button className={s.button} type="button">More Day</button>

      <button className={s.button} type="button">Chart</button>
      </p>
      </div>
      <div className={s.wid}>
      <span className={s.rigthDiv}>
          <img src={pinned} alt='locPinned'/>
          <div className={s.neon}>
          <p>{city}</p>
         <h2> {time.toLocaleString()}</h2>
          </div>
          </span>
      </div>
      </section>
      <section>
          {/* <Describe db={db}/> */}
      </section>
      <section className={s.two}>
<div className={s.styleDiv}>
<div>
<h4>{today}</h4>
<img src={src} alt='sunIcon'/>
<h4>{temp}&#8451;</h4>
</div>
<div>
<p>Останнє оновлення: {updated}</p>
<p>Вологість: {humidity}</p>
<p>Min °C: {minT}</p>
<p>Max °C: {maxT}</p>
<p>Схід: {sunrise}</p>
<p>Захід: {sunset}</p>
<p>Швидкість вітру: {wind} м/с</p>
</div>
</div>
<div className={s.styleDiv}></div>
</section>
       </main>

       </>
       )
   }
}