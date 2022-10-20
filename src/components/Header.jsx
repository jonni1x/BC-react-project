import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem ,SubMenu, useProSidebar  } from 'react-pro-sidebar';
import { Icon } from '@iconify/react';

const Header = ({searchMovies}) => {
    const { collapseSidebar } = useProSidebar();
    const [showNav, setShowNav] = useState(false);
    const inputVal = useRef('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        searchMovies(inputVal.current.value);

        navigate('/searched-movies');

        inputVal.current.value = '';
    }
      
  return (
    <div className='header' style={{ display: 'flex', height: '50%', position: 'absolute' }}>
        <Sidebar>
            <Menu>
                <Link to='/'> Home </Link>
                <SubMenu className='movieLinks' label='Movies'> 
                    <Link to='/movies/popular'>
                        Popular
                    </Link>
                    <Link to='/movies/top-rated'>
                        Top Rated
                    </Link>
                </SubMenu>
                <Link to='/watch-later'> 
                    Watch Later
                </Link>
                <MenuItem>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Search Movies'
                        ref={inputVal}
                        /> 
                </form>
                </MenuItem>
                
            </Menu>
        </Sidebar>
        <main>
        <button className='header-icon' onClick={() => {
            collapseSidebar()
            setShowNav(!showNav)
            }}>
                {
                    showNav ? 
                    <Icon  icon='akar-icons:arrow-right' />
                    : <Icon icon='akar-icons:arrow-left' />
                }
        </button>
        </main>
    </div>
  )
}

export default Header