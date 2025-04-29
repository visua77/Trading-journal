import React,{useState} from 'react'
//import { v4 as uuid} from 'uuid'

const Trades = ()=> {
    const [tradecount, setTradecount] = useState(0)
    const [rsecured, setRsecured] = useState(0)
    const [loss, setLoss] = useState(0)
    const [be, setBe] = useState(0)
    const [win, setWin] = useState(0)

    const [content, setContent] = useState([
        {
          //id: uuid(),
          img: "/img/01.jpg",
          descr: 'Some txt goes her'
        },
        {
          //id: uuid(),
          img: '/img/02.jpg',
          descr: 'Some more txt goes her'
        }
      ]) 


    return(
        <>
        <h2>Number of trades: {tradecount}</h2>
        <h3>R Secured: {rsecured}</h3>
        <h3>Win: {win} - Be: {be} - Loss: {loss}</h3>
        </>
    )
}

export default Trades