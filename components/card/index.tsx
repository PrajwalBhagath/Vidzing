import { ReactNode } from "react";
import style from "./../common.module.css";
import { useState } from "react";
import React from "react";
import { User } from "../../apis/get-all-users";

// reusable card component that can take in a user object and render it
export default function Card({ user }: { user: User }): JSX.Element {
    return (
    <div className={style.cardGrid}>
       <div className={style.card}>  
       <div className={style.card__inner}>
           <h2>Username:</h2>
            <h2>@{user.username}</h2>
         </div> 
          <h2>{user.name}</h2>
          <div className={style.cardInfo}>
            <div className={style.cardInfoItem}>
            <h3>Company Name:</h3>
            <p>{user.company.name}</p>
            </div>
            <div className={style.cardInfoItem}>
            <h3>Company Catch Phrase</h3>
            <p>{user.company.catchPhrase}</p>
            </div>
            <div className={style.cardInfoItem}>
            <h3>Company BS</h3>
            <p>{user.company.bs}</p>
            </div>
            </div>
            <div className={style.cardFooter}>
            <h3>Phone: </h3><p>{user.phone}</p>
            </div>
            <div className={style.cardFooter}>
            <h3>Email:</h3>
            <p>{user.email}</p>
            </div>
            <div className={style.cardFooter}>
            <h3>Website:</h3>
            <p>{user.website}</p>
            </div>
        </div>
    </div>
    )
}
