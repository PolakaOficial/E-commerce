import './Main.modules.css'
import ampliado from './tenis-1-ampliado.png'
import tenis1 from './tenis-1-galeria.png'
import tenis2 from './tenis-2-galeria.png'
import tenis3 from './tenis-3-galeria.png'

export default function Main(){
    return(
        <div className='fundo'>
            <img src={ampliado} alt="" className='ampliado' />
            <div className='conjuntoImagem'>
                <img src={tenis1} alt="" className='tenis1' />
                <img src={tenis2} alt="" />
                <img src={tenis3} alt="" />
            </div>
                


        </div>
    )
}