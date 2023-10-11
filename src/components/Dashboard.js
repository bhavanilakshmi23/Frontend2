
import React, {useState} from 'react'
import Table from './Table'
import { Link } from 'react-router-dom'

const Dashboard = () => {
const[showInvoice,setShowInvoice]=useState(false)
const[name,setName]=useState('')
const[address,setAddress]=useState('')
const[invoiceNo,setInvoiceNo]=useState('')
const[invoiceDate,setInvoiceDate]=useState('')
const[storeName,setStoreName]=useState('')
const[storeAddress,setStoreAddress]=useState('')
const[email,setEmail]=useState('')
const[phoneNo,setPhoneNo]=useState('')
const[notes,setNotes]=useState('')
const[description,setDescription]=useState('')
const[quantity,setQuantity]=useState('')
const[price,setPrice]=useState('')
const[amount,setAmount]=useState('')
const[list,setList]=useState([])
const[total,setTotal]=useState(0)


const handleprint=()=>{
  window.print()
}

  return (
    <> 
      <div>
  {showInvoice ? (<div className='container'>
    <header>
      <div>
     <h1>Invoice</h1></div>
      <div className='part1'>
      <div className='part3'>
      <h5>Billed To</h5>
      <span>{name}</span><br/>
      <span>{address}</span>
      </div>
     <div className='part2'>
      <h6>Invoice __No:<span>{invoiceNo}</span></h6>
     <h6>Invoice Date:<span>{invoiceDate}</span></h6>
      </div>
      </div>
    </header>
    <main>
      <div>
      <table className="table">
    <thead className="table-light">
     <tr>
        <td>Description</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Amount</td>
     </tr>
    </thead>
    {list.map(({id,description,quantity,price,amount})=>{return(
           
  <tbody>
      <tr key={id}>
        <td>{description}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{amount}</td>
      </tr>
    </tbody>
      
    )})}
    </table>
    <div className='total'>
        <h2>Rs.{total.toLocaleString()}</h2>
      </div>
      </div>
      
   <div className='notes'>
    <p>{notes}</p>
   </div>
    </main>
    <footer>
      <div className='footer'>
        <h2 >{storeName}</h2>
        <span>{storeAddress}</span><br/>
        <span>{email}</span><br/>
        <span>{phoneNo}</span>
      </div>
      <input type='submit' value='print' onClick={handleprint}/>
     <input type="submit" value='Create Invoice'  onClick={()=>setShowInvoice(false)}/>
    </footer>
  
   </div>  
    ):(
    <>
   <div className='form'>
  <label>Customer Name:  
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /> </label>
     
   <label>Customer Address:
   
        <input
          type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        /> </label>
      <label>Invoice No: 
        <input
          type="text" 
          value={invoiceNo}
          onChange={(e) => setInvoiceNo(e.target.value)}
          required
        /></label>
     
      <label>Invoice Date: 
        <input
          type="date" 
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
          required
        />
   </label>
   <Table
   description={description}
   setDescription={setDescription}
   quantity={quantity}
   setQuantity={setQuantity}
   price={price}
   setPrice={setPrice}
   amount={amount}
   setAmount={setAmount}
   list={list}
   setList={setList}
   total={total}
   setTotal={setTotal}
   />

      <label>Store Name:
        <input
          type="text" 
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        /></label>
      
      <label>Store Email: 
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> </label>
    
      <label>Store PhoneNo:
        <input
          type="text" 
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
        /></label>
      
      <label>Store Addreess:
        <input
          type="text" 
          value={storeAddress}
          onChange={(e) => setStoreAddress(e.target.value)}
          required
        />
       </label>
      
      <label>Additional Notes: 
        <input
          type="text" 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
        />
     </label>

      {/* <button onClick={()=>setShowInvoice(true)}>showInvoice</button>  */}
      <input type="submit" value="ShowInvoice"
      onClick={()=>setShowInvoice(true)} className='showinvoice'
      />
      
    
   </div>
  
  </>)
}
</div>

    <div className='link'>
     <button className='btn btn-info'><Link to='/sign-in'>logout</Link></button> 
              </div>
 </>
      
  )
}

export default Dashboard
