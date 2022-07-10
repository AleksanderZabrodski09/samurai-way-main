import React from 'react';
import s from './Post.module.css';
import {PostsType} from '../../../../redux/state';

// type PostType={
//   message: string
//   likeCount:number
// }
export const Post = (props:PostsType) => {
  return (
        <div className={s.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAlyXYTXH5ml78ntQfe1hphtYK0XWRmQcmw&usqp=CAU" alt=""/>
          {props.message}
          <div>
            <span>like {props.likeCount}</span></div>
        </div>
  )
}