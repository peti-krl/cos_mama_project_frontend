import {NavLink as Link} from 'react-router-dom'
import {FaSearch, FaGrin} from 'react-icons/fa'

export const Nav =styled.nav`
    background:#4354;
    height:80px;
    display:flex;
    justify-content:space-between;
    padding:0.5rem;
    z-index:10;
`

export const NavLink = styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    padding:0 1 rem;
    height:100%;

    &.active{
        color:#15cdf;
    }
`

export const ProfileIcon = styled(FaGrin)`
    color:pink;


    @media screen and (max-width:780px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        cursor:pointer;
    }
` 

export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-20px;

    @media screen and (max-width:780px){
        display:none;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items-center;
    margin-right:20px;

    @media screen and (max-width:770px){
        display:none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius:4px;
    background:#3333;
    padding:10px 20px;
    color:#fff;
    cursor:pointer;

    &:hover{
        transition: all 0.4s ease-in-out;
        background:#fff;
        color:pink;
    }
`