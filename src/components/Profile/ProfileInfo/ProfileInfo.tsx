import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPihIju0BBCwq0HWOFF-aZo8vlz2FCOl7fg&usqp=CAU"
             alt="image"/>
      </div>
      <div className={s.description}>ava+desc.</div>
    </div>
  );
};

