import React,{ useEffect, useState } from "react"

import '../components/GetAllRecords.css'



const GetAllRecords = () => {
    
        const [records, setRecords] = useState([])
    
        const url = 'http://localhost:3000/getAllRecords';
    
        useEffect(() => {
            getAllRecords();
        }, [])
    
        const getAllRecords = async () => {
            let result = await fetch(`${url}`)
            result = await result.json()
            setRecords(result.data)
        }
        console.warn("records", records)
    
    return (
        <>  
        <div className='record-container'>
        <div className=''>

        <div className="column">
        <p> ID </p> 
        <p> INR </p>
        <p> SENDER NAME </p>
        <p> RECEIVER NAME </p>
        <p> PURPOSE</p>
        </div>
        
            {
                records.map((item, index) =>

                       <div className='items'>  
                       <div id='index'>{index} </div>
                       <div id='INR-id'>{item.INR} </div> 
                        <div id='senderName-id'>{item.senderName} </div>
                        <div id='receiverName-id'>{item.receiverName} </div>
                        <div id='purpose-id'>{item.purpose} </div>
                      

                    </div>
                )
            }
        </div>
    </div>

        </>
    )
 

}

export default GetAllRecords