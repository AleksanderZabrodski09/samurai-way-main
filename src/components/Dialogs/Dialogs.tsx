import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to={'/dialogs/1'} activeClassName={s.active}>Robert</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/1'} activeClassName={s.active}>Andrzej</NavLink>

        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/2'} activeClassName={s.active}>Pawel</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/3'} activeClassName={s.active}>Marek</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/4'} activeClassName={s.active}>Barbara</NavLink>

        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/5'} activeClassName={s.active}>Jack</NavLink>

        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you going?</div>
        <div className={s.message}>i am fine</div>

      </div>
    </div>

  );
};

