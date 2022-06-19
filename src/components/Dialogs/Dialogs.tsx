import React from 'react';
import s from './Dialogs.module.css';


export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Robert
        </div>
        <div className={s.dialog}>
         Andrzej
        </div>
        <div className={s.dialog}>
          Pawel
        </div>
        <div className={s.dialog}>
          Marek
        </div>
        <div className={s.dialog}>
          Bob
        </div>
        <div className={s.dialog}>
         Jack
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

