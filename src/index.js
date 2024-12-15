import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import Card from './Cards.js'
import Gallery from './data.js'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
<div className='card_root'>
{
Gallery.map((x)=>{
  console.log(x);
  return <Card Gallery={x}></Card>
}) 
}
</div>
)