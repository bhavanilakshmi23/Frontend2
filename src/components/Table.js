import React, { useEffect } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {v4 as uuidv4} from "uuid"

const Table = ({description,setAmount,amount,setDescription,price,setPrice,quantity,setQuantity,list,setList,total,setTotal}) => {


    const handleSubmit=(e)=>{
        e.preventDefault()
        const newItem={
            id: uuidv4(),
           description,
            quantity,
         price,
           amount  
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
       setList([...list,newItem])
     
      
    }



  useEffect(()=>{
    const calculateAmount=(amount)=>{
       setAmount(quantity*price)
      }
      calculateAmount(amount)
  },[quantity,price,amount,setAmount])

  let rows=document.querySelectorAll('.amount')
  let sum=0

  for(let i=0;i<rows.length;i++){
    if(rows[i].className==="amount"){
        sum+= isNaN(rows[i].innerHTML)? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
    }
  }

 

const  deleteRow=(id)=> setList(list.filter((row)=>row.id!==id))

 
    return (
   <>
   <form onSubmit={handleSubmit}>
    <label>Description:  
        <input
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> </label>
     
   <label>Quantity:
   
        <input
          type="text" 
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        /> </label>
      <label>Price: 
        <input
          type="text" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /></label>
     
      <label>Amount: 
       <p>{amount}</p>
   </label>
<button  type='submit' >
    
  Add Table Item </button>

   </form>
   
   <table className="table">
    <thead className="table-light">
     <tr>
        <td>Description</td>
        <td>Quantity</td>
        <td>Price</td>
        <td >Amount</td>
     </tr>
    </thead>
    {list.map(({id,description,quantity,price,amount})=>{return(
           
  <tbody>
      <tr key={id}>
        <td>{description}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td className='amount'>{amount}</td>
        <td><button onClick={()=>deleteRow(id)}><AiOutlineDelete
        className='delete'/></button></td>
       
      </tr>
    </tbody>
      
    )})}
    </table>
 
      <div className='total'>
        <h2>Rs.{total.toLocaleString()}</h2>
      </div>
   </>
  )
}

export default Table





