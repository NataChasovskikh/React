import React, { Component, createRef } from 'react';
import Button from './Button';
import s from './Player.module.css';

class Player extends Component {
   playerRef = createRef();

   playVideo = () => this.playerRef.current.play();

   pauseVideo = () => this.playerRef.current.pause();
   

   render() {

      const {source} = this.props;

     return (
       <div className = {s.container}>
         <video
            className = {s.player}
            src = {source}
            ref = {this.playerRef}
         />

         <div className = {s.controls}>
            <Button label = 'play' onClick = {this.playVideo}/>
            <Button label = 'pause' onClick = {this.pauseVideo}/>
         </div>

       </div>
     )
   }
}







export default Player;