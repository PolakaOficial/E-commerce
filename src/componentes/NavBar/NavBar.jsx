import './NavBar.modules.css'
import logo from './logo.svg'
import bag from './icon-bag.svg'

export default function NavBar(){
    return(
        <div className='NavBar'>
            <img src={logo} alt="logo" className='logo' />
            <a href="#" className='barra'>HOMEM</a>
            <a href="#" className='barra'>MULHER</a>
            <a href="#" className='barra'>CRIANÇA</a>
            <a href="#" className='barra'>CUSTOMIZAR</a>
            <input type="text" className='pesquisar' placeholder='Pesquisar' />
            <img src={bag} alt="sacola" className='bag' />
        </div>
    )
}