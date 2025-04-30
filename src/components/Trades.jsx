import React,{useState} from 'react'
//import { v4 as uuid} from 'uuid'

const Trades = ()=> {

    const [tradecount, setTradecount] = useState(85)
    const [rsecured, setRsecured] = useState(26.62)
    const [loss, setLoss] = useState(25)
    const [be, setBe] = useState(39)
    const [win, setWin] = useState(21)

    const [content, setContent] = useState([
      {
        //id: uuid(),
        img: "/img/01.jpg",
        asset: 'OIL',
        result: '-0.4'
      },
      {
        
        //id: uuid(),
        img: "/img/01.jpg",
        asset: 'USDJPY',
        result: '+3'
      },
      {
        //id: uuid(),
        img: "/img/01.jpg",
        asset: 'GER40',
        result: '-1'
      },
        {
          //id: uuid(),
          img: "/img/01.jpg",
          asset: 'GBPCAD',
          result: '-1'
        },
        {
          //id: uuid(),
          img: '/img/02.jpg',
          asset: 'COPPER',
          result: '-1'
        }
      ]) 


    return(
        <>
        <h2>Number of trades: {tradecount}</h2>
        <h3>R Secured: {rsecured}</h3>
        <h3>Win: {win} - Be: {be} - Loss: {loss}</h3>
        <h4>PnL: {rsecured * 0.5}%</h4>
        <p>Latest trades:</p>
        {/* mapping over our 'db' here */}
        {content.map(itm=> (
            <div>
               {itm.asset} {itm.result}
            </div>
          ))}
        </>
    )
}

export default Trades