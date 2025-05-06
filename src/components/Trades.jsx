import React,{useState, useEffect} from 'react'
import data from '../data/data.json' // justera sökvägen efter var filen ligger

import { v4 as uuidv4 } from 'uuid'

const Trades = ()=> {

    const [tradecount, setTradecount] = useState(85)
    const [rsecured, setRsecured] = useState(26.62)
    const [loss, setLoss] = useState(25)
    const [be, setBe] = useState(39)
    const [win, setWin] = useState(21)

    const [percent, setPerecent] = useState(rsecured * 0.5)
    const [pnl, setPnl] = useState(100000)

    const [form, setForm] = useState({
      img: '',
      asset: '',
      result: ''
    })

    
    const [error, setError] = useState('')

    useEffect(() => {
      console.log('Formen har uppdaterats:', form)
    }, [form])



    //const [content, setContent] = useState( []) 

    const [content, setContent] = useState(() => {
      const saved = localStorage.getItem('myContent')
      return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
      localStorage.setItem('myContent', JSON.stringify(content))
    }, [content])

    
    const handleChange = (e) => {
      const { name, value} = e.target
      setForm(prev => ({
        ...prev, 
        [name]: name === 'asset' ? value.toUpperCase() : value
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      
      if (!form.img || !form.asset || !form.result) {
        setError('Hallå! Du måste fylla i alla fält 🙃')
        return
      }

      if (form.img && form.asset && form.result) {
        const newItem = {
          id: uuidv4(),
          img: form.img,
          asset: form.asset,
          result: form.result
        }
        setContent(prev => [...prev, newItem])
        setForm({ img: '', asset: '', result: '' }) // reset form
        setError('') // rensa ev. gamla fel
      }
    }


    return(
        <>
        <h2>Number of trades: {tradecount}</h2>
        <h3>R Secured: {rsecured} R</h3>
        <h3>Win: {win} - Be: {be} - Loss: {loss}</h3>
        <h4>PnL: {rsecured * 0.5}%
          <p>{pnl * (percent / 100) +pnl} $</p>
       </h4>

       <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="asset"
          placeholder="Asset"
          value={form.asset}
          onChange={handleChange}
        />
        <input
          type="text"
          name="result"
          placeholder="Result"
          value={form.result}
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="Bild-URL /img/91.png"
          value={form.img}
          onChange={handleChange}
        />
        <button type="submit">Lägg till</button>
      </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        

        <p>Latest trades:</p>
        {/* mapping over our 'db' here */}
        {content.slice(-5).reverse().map(itm=> (
            <div key={itm.id}>
               <p>{itm.asset} {itm.result}</p>
               <p className='card'><img src={itm.img} onMouseOver={()=> console.log(itm.id)}/></p>
            </div>
          ))}
        </>
    )
}

export default Trades