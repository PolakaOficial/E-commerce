import './Footer.modules.css'
import exemplo from './exemplo.png'

export default function Footer(){
    return(
        <div className='conjunto'>
            <img src={exemplo} className='exemplo' alt="" />
            <a href="#" className='texto'>FACEBOOK</a>
            <a href="#" className='texto' >INSTAGRAM</a>
            <a href="#" className='texto' >YOUTUBE</a>
            <a href="#" className='texto' >TWITTER</a>
            <button className='explore' >EXPLORE MAIS</button>
        </div>
    )
}