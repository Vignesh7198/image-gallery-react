import './css/style.css'
function Card(card){
    console.log(card.Gallery.image)
    return(
        <div className='card_container'>
           <img src={card.Gallery.image} className="card_image"></img>
        </div>
    )
}

export default Card