import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardItems from './components/card-items'

function App() {
  const [count, setCount] = useState(0)

  let images = {
    image1 : 'https://images.unsplash.com/photo-1491466424936-e304919aada7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
    image2 : 'https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg',
    image3 : 'https://img.freepik.com/free-photo/futuristic-moon-background_23-2150930692.jpg?semt=ais_hybrid',
    image4 : 'https://i.pinimg.com/originals/31/6a/59/316a591a12cbf5f04c153438eba20735.jpg',
    image5 : 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg',
  }

  return (
    <>
      <h1 className='text-white bg-purple-700 font-bold p-2 rounded-xl mb-2'>Mini Project 1: Reusable Card</h1>
      <div className='grid grid-rows-2 grid-flow-col grid-cols-2 gap-3'>
      <CardItems aboutName="Polar" aboutData="Arora in the night time of the cold polar ends of this beautiful earth." btnText="Read more" image={images.image1}/>
      <CardItems aboutName="Mountain Image" aboutData="Beautiful mountains with a lake beside it. Just awesome." btnText="Read more" image={images.image2}/>
      <CardItems aboutName="Sunset" aboutData="Beautiful mountains with a lake beside it. Just awesome." btnText="Read more" image={images.image3}/>
      </div>
      
    </>
  )
}

export default App
