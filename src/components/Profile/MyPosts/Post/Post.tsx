import React from 'react';
import s from './Post.module.css';


export const Post = () => {
  return (
        <div className={s.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAlyXYTXH5ml78ntQfe1hphtYK0XWRmQcmw&usqp=CAU" alt=""/>
          post 1
          <div><span>like</span></div>
        </div>
  )
}