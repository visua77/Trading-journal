/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react'


import { v4 as uuidv4 } from 'uuid'

const Trades = ()=> {

    const [tradecount, setTradecount] = useState(85)
    const [rsecured, setRsecured] = useState(26.62)
    const [loss, setLoss] = useState(25)
    const [be, setBe] = useState(39)
    const [win, setWin] = useState(21)

    const [percent, setPerecent] = useState(rsecured * 0.5)
    const [pnl, setPnl] = useState(100000)

    const [imagePreview, setImagePreview] = useState(null)

    const [form, setForm] = useState({
      img: '',
      asset: '',
      result: ''
    })

    
    const [error, setError] = useState('')

    const [tradesToShow, setTradesToShow] = useState(5)
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTrade, setSelectedTrade] = useState(null);

    useEffect(() => {
      console.log(selectedImage)
    }, [selectedImage])

    const [content, setContent] = useState(() => {
      const saved = localStorage.getItem('myContent')
      return saved ? JSON.parse(saved) : []
    })

    // ⏺ Spara till localStorage varje gång content uppdateras
    useEffect(() => {
      localStorage.setItem('myContent', JSON.stringify(content))
    }, [content])

     // 🔁 Hantera input
    const handleChange = (e) => {
      const { name, value} = e.target
      setForm(prev => ({
        ...prev, 
        [name]: name === 'asset' ? value.toUpperCase() : value
      }))
    }

    // 📷 Hantera bild
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result) // sparar base64
      }
      reader.readAsDataURL(file)
    }
  }

    // ✅ Hantera submit
    const handleSubmit = (e) => {
      e.preventDefault()
      
      if (!imagePreview || !form.asset || !form.result) {
        setError('You need to fill in all the fields🙃')
        return
      }

        const newItem = {
          id: uuidv4(),
          img: imagePreview,
          asset: form.asset,
          result: form.result
        }
        
        setContent(prev => [...prev, newItem])
        setForm({ asset: '', result: '' }) // reset form
        setImagePreview(null)
        setError('') // rensa ev. gamla fel
      
    }


    return(
        <>
        <div>
        <div className="bg-gray-100 p-2" flex>
        <h2>Number of trades: {tradecount}</h2>
        <h3>R Secured: {rsecured} R</h3>
        <h3>Win: {win} - Be: {be} - Loss: {loss}</h3>
        <h4 className="font-semibold">PnL: {rsecured * 0.5}%
          <p className="font-semibold">{pnl * (percent / 100) +pnl} $</p>
       </h4>
       </div>

       <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          name="asset"
          placeholder="Asset"
          value={form.asset}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="result"
          placeholder="Result"
          value={form.result}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
         <input type="file" 
          accept="image/*" 
          onChange={handleImageUpload}
          className="w-full"
          />
         {imagePreview && <img src={imagePreview} alt="preview" className="w-32" />}

        <button type="submit" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition">Add trade</button>
      </form>

        {error && <p className="text-red-600 font-medium mt-2">{error}</p>}
        

        <p className="text-2xl p-2">Show trades:</p>

        {/* dropdown */}
        <label className='p-2'>
          Show:
          <select
            value={tradesToShow}
            onChange={(e) => setTradesToShow(Number(e.target.value))}
            className="ml-2 border rounded px-2 py-1"
          >
            <option value={5}>Latest 5</option>
            <option value={10}>Latest 10</option>
            <option value={15}>Latest 15</option>
            <option value={content.length}>Alla</option>
          </select>
        </label>


        {/* mapping over our 'db' here */}
        {content.slice(-tradesToShow).reverse().map(itm=> (
            <div key={itm.id} className="border p-5 rounded-lg shadow-md mt-4 bg-white">
              <div className="bg-gray-200 flex justify-between p-2 content-center rounded-lg">
              <div className="font-semibold p-2">{itm.asset}</div>
              <div className="font-semibold bg-gray-300 p-2">{itm.result}</div>
              </div>
               
               <img src={itm.img} onMouseOver={()=> console.log(itm.id)} 
               className="w-100 mt-2 rounded object-coverccursor-pointer"
               onClick={() => setSelectedImage(itm.img)}
               />
            </div>
          ))}
          </div>

          {/* modal div */}
          {selectedImage && (
          <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative">
              <img src={selectedImage} alt="Full size" className="max-w-[90vw] max-h-[80vh] rounded shadow-lg" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              >
                ✕
              </button>
            </div>
          </div>
)}
        </>
    )
}

export default Trades