import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () =>{
    return (
        //React.createElement('div',{className:'react_div'},'This is a test ')
        <div className='rmdb-header'>
                <div className='rmdb-header-content'>
                    <Link  to='/'>
                    <img className='rmdb-logo' src='./images/reactMovie_logo.png'/>
                    </Link>
                    <img className='rmdb-tmdb-logo' src='./images/tmdb_logo.png'/>
                </div>
        </div>
        )
}

export default Header;
