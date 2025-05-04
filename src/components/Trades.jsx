import React,{useState} from 'react'
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

    const [content, setContent] = useState(data) 


    return(
        <>
        <h2>Number of trades: {tradecount}</h2>
        <h3>R Secured: {rsecured} R</h3>
        <h3>Win: {win} - Be: {be} - Loss: {loss}</h3>
        <h4>PnL: {rsecured * 0.5}%
          <p>{pnl * (percent / 100) +pnl} $</p>
       </h4>
        


        
        <p>Latest trades:</p>
        {/* mapping over our 'db' here */}
        {content.slice(-5).reverse().map(itm=> (
            <div key={uuidv4()}>
               <p>{itm.asset} {itm.result}</p>
               <p className='card'><img src={itm.img}/></p>
            </div>
          ))}
        </>
    )
}

export default Trades