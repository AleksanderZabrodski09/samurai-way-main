import React, {useRef} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Messages/Message';
import {DialogsDateType, MessagesDateType} from '../../redux/state';


type PropsType = {
  dialogs: DialogsDateType[]
  messages: MessagesDateType[]
  addMessage: (messagePost: string) => void
}

export const Dialogs = (props: PropsType) => {


  let newMessageElement =  React.createRef<HTMLTextAreaElement>()
  // let newMessageElement =  useRef<HTMLTextAreaElement>(null)

const addMessage=()=>{
  if (newMessageElement.current) {
    props.addMessage(newMessageElement.current.value);
    newMessageElement.current.value = '';
  }
}
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          props.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)
        }
      </div>
      <div className={s.messages}>
        {
          props.messages.map((m, i) => <div className={i % 2 === 0 ? s.right : s.left}>
            <Message key={m.id} id={m.id} message={m.message}/>
          </div>)
        }
      </div>
      <div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>

  );
};

