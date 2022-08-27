import React, {useRef} from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Messages} from './Messages/Messages';
import {DialogsArraysType} from '../../redux/state';


// type DialogsType = {
//   dialogs: DialogsItemType[]
//   messages: MessagesItemType[]
// }


export const Dialogs = (props: DialogsArraysType) => {


  let newMessageEl = useRef<HTMLTextAreaElement>(null)

  const addMessage = () => {
    let text = newMessageEl.current?.value;
    if (newMessageEl.current !== null) {
      alert(text)
      // alert(newMessageEl.current.value)
    }
  }
  return (

    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {props.dialogsDate.map(d => <DialogsItem
            key={d.id}
            id={d.id}
            name={d.name}
          />)}
        </div>
        <div className={s.messages}>
          {props.messagesDate.map((m, i) => <div className={i % 2 === 0 ? s.left : s.right}>
            <Messages key={m.id}
                      id={m.id}
                      message={m.message}
            />
          </div>)}
        </div>
        <div>
          <div>
            <textarea ref={newMessageEl}></textarea>
          </div>
          <button onClick={addMessage} autoFocus>send</button>
        </div>

      </div>

    </div>
  );
};

