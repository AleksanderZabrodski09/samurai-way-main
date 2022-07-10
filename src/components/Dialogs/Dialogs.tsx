import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Messages} from './Messages/Messages';
import {DialogsItemType, MessagesItemType} from '../../redux/state';



type DialogsType = {
  dialogs: DialogsItemType[]
  messages: MessagesItemType[]
}



export const Dialogs = (props: DialogsType) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {props.dialogs.map(d => <DialogsItem
            key={d.id}
            id={d.id}
            name={d.name}/>)}
        </div>
        <div className={s.messages}>
          {props.messages.map((m, i) => <div className={i % 2 === 0 ? s.left : s.right}><Messages key={m.id} id={m.id} message={m.message}/></div>)}
        </div>
      </div>

    </div>
  );
};

