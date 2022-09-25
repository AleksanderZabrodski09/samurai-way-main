import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Messages/Message';
import {DialogsDateType, MessagesDateType} from '../../redux/state';



type PropsType = {
  dialogs:DialogsDateType[]
  messages:MessagesDateType[]
}

export const Dialogs = (props: PropsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          props.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)
        }
      </div>
      <div className={s.messages}>
        {
          props.messages.map((m) => <Message key={m.id} id={m.id} message={m.message}/>)
        }

      </div>
    </div>

  );
};

