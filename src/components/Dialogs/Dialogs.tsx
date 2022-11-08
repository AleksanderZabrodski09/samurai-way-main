import React, {ChangeEvent, useRef} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Messages/Message';
import {DialogsDateType, DialogsPageType, MessagesDateType} from '../../redux/state';


type PropsType = {
  dialogs: DialogsDateType[]
  messages: MessagesDateType[]
  addMessage: () => void
  updateNewTextMessage: (text: string) => void
  newTextMessage: string
}

export const Dialogs = (props: PropsType) => {


  let newMessageElement =  React.createRef<HTMLTextAreaElement>()
  // let newMessageElement =  useRef<HTMLTextAreaElement>(null)

const addMessage=()=>{
  props.addMessage()

  // if (newMessageElement.current) {
  //   props.addMessage(newMessageElement.current.value);
  //   newMessageElement.current.value = '';
  // }
}

// const onChangeMessage =(e:ChangeEvent<HTMLTextAreaElement>)=>{
//     props.updateNewTextMessage(e.currentTarget.value)
// }
const onChangeMessage =()=>{
    let newText =  newMessageElement.current as HTMLTextAreaElement
    props.updateNewTextMessage(newText.value)
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
          <textarea ref={newMessageElement}
                    value={props.newTextMessage}
                    onChange={onChangeMessage}
          />
        </div>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>

  );
};

