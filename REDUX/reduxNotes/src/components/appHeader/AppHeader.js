import React from './node_modules/react';
import s from './AppHeader.module.css';
import NoteFilter from '../NoteFilter/NoteFilter.js';

const AppHeader = () =>(
   <header className = {s.header}>
      <NoteFilter/>
   </header>
)