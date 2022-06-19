import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemType={
  name: string
  id:number
}

const DialogItem =(props: DialogItemType)=>{
  let path = '/dialogs/' + props.id;
  return (
      <div className={s.dialog}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </div>
    )
}

type MessageType = {
  message: string
}
const Message =(props:MessageType)=>{
  return(
    <div className={s.message}>{props.message}</div>
  )
}

type DialogsType = {

}

export const Dialogs = (props:DialogsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id={1} name={'Robert'}/>
        <DialogItem id={2} name={'Andrzej'}/>
        <DialogItem id={3} name={'Pawel'}/>
        <DialogItem id={4} name={'Marek'}/>
        <DialogItem id={5} name={'Barbara'}/>
        <DialogItem id={6} name={'Jack'}/>
      </div>
      <div className={s.messages}>
        <Message message={'Hi'}/>
        <Message message={'How are you going?'}/>
        <Message message={'I am fine'}/>
        <Message message={'I am Ok'}/>
        <Message message={'I am great!'}/>

      </div>
    </div>

  );
};

