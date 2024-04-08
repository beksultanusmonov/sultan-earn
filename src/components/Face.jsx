import React, { useEffect, useState } from 'react'
import './Face.scss'
import { NavLink } from 'react-router-dom'

function Face() {

    const [nav, setNav] = useState();
    const [mode, setMode] = useState('light')
    const [menus, setMenus] = useState('home');
    const check = localStorage.getItem('mode');
    const checkMode = (item) => {
        localStorage.setItem('mode', item);

        const check = localStorage.getItem('mode');

        if(check == 'dark') {
            document.querySelector('body').classList.add('dark-mode');
            setMode('dark')
        } else {
            document.querySelector('body').classList.remove('dark-mode');
            setMode('light')
        }
    }

    useEffect(() => {
        checkMode(check);
    }, [])

  return (
    <>
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h2>Sultan Money</h2>
                </div>
                <div className="bar" onClick={() => setNav(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={nav ? 'menu active' : 'menu'}>
                    <div className="back" onClick={() => setNav(false)}>
                        <i>+</i>
                    </div>
                    <a onClick={() => setMenus('home')} className={menus == 'home' ? 'active' : ''} >
                        <li>Asosiy</li>
                    </a>
                    <a onClick={() => setMenus('register')} className={menus == 'register' ? 'active' : ''} >
                        <li>Tizimga kirish</li>
                    </a>
                    <div className="mode">
                        <button className={mode == 'light' ? 'active' : ''} onClick={() => checkMode('light')}>
                            <i class="fa-solid fa-sun"></i>
                        </button>
                        <button className={mode == 'dark' ? 'active' : ''} onClick={() => checkMode('dark')}>
                            <i class="fa-solid fa-moon"></i>
                        </button>
                    </div>
                </ul>
            </div>
        </header>
        <main className="main">
            <div className="container">
                <div className="left">
                    <h3>Hush kelibsiz</h3>
                    <h1>Sultan Money </h1>
                    <h2>Yuksalish vaqti keldi !</h2>
                    <p>Har bir bosishingizga pul oling</p>

                    <button className="btn">Tizimga kirish <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="right">
                    <img src="logo.png" alt="" />
                </div>
            </div>
        </main>
        <div className="statistics">
            <div className="container">
                <div className="card">
                    <div className="logo">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div className="desc">
                        <h1>Ishlovchilar:</h1>
                        <p>1005345</p>
                    </div>
                </div>
                <div className="card">
                    <div className="logo">
                        <i class="fa-solid fa-wallet"></i>
                    </div>
                    <div className="desc">
                        <h1>To'langan:</h1>
                        <p>1005345 ₽</p>
                    </div>
                </div>
                <div className="card">
                    <div className="logo">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div className="desc">
                        <h1>Ishlovchilar:</h1>
                        <p>10000000</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Face