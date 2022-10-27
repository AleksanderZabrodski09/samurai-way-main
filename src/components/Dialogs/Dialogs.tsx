import React, {useRef} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Messages/Message';
import {DialogsDateType, MessagesDateType} from '../../redux/state';


type PropsType = {
  dialogs: DialogsDateType[]
  messages: MessagesDateType[]
}

export const Dialogs = (props: PropsType) => {


  // let newMessageElement =  React.createRef<HTMLTextAreaElement>()
  let newMessageElement =  useRef<HTMLTextAreaElement>(null)

const addMessage=()=>{
  let text= newMessageElement.current?.value
    alert(text)
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

