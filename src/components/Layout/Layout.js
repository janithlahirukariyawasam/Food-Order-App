import React from 'react'
import mealsImage from './../../assets/meals.jpg'
import classes from './header.module.css'
import HeadCartButton from './HeadCartButton'

function Header() {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeadCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='image of foods'/>
        </div>
    </React.Fragment>
  )
}

export default Header
