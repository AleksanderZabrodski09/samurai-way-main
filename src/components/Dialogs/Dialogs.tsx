import React, {ChangeEvent, useRef} from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Messages} from './Messages/Messages';
import {DialogsArraysType} from '../../redux/state';


type PropsType = {
  dialogsPage: DialogsArraysType
  addMessage:()=>void
  upDateNewMessageText:(newMessage:string)=>void
  newMessageText:string

}


export const Dialogs = (props: PropsType) => {



  // let newMessageEl = useRef<HTMLTextAreaElement>(null)
  const addMessageHandler = () => {
    // let text = newMessageEl.current?.value;
    // if (newMessageEl.current) {
      props.addMessage()
      // }
  }
  const onMessageChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    props.upDateNewMessageText(e.currentTarget.value)
  }

  return (

    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {props.dialogsPage.dialogsDate.map(d => <DialogsItem
            key={d.id}
            id={d.id}
            name={d.name}
          />)}
        </div>
        <div className={s.messages}>
          {props.dialogsPage.messagesDate.map((m, i) => <div className={i % 2 === 0 ? s.left : s.right}>
            <Messages key={m.id}
                      id={m.id}
                      message={m.message}
            />
          </div>)}
        </div>
        <div>
          <div>
            <textarea
              value={props.dialogsPage.newMessageText}
              // ref={newMessageEl}
              onChange={onMessageChangeHandler}
              placeholder={'new message'}
              autoFocus
            ></textarea>
          </div>
          <button onClick={addMessageHandler} autoFocus>send</button>
        </div>

      </div>

    </div>
  );
};

