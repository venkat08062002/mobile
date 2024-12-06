import './Mobile.css'
function Mobile(props){
    return(
      <>
        <div className="container">
            
            <div id="phones">
                <img src={props.src}/>
            </div>
            <div id="details">
             <h3>{props.text}</h3>
             <ul>
                <li>128 GB ROM</li>
                <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A16 Bionic Chip, 6 Core Processor Processor</li>
             </ul>
            </div>
            
            <div id="price">
            <h1>&#8377;{props.p}</h1>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" id="i"/>
            </div>

        </div>
        </>
    )
}
export default Mobile