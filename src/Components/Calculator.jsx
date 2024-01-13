import React, { useState } from 'react';


export default function Calculator() {
    
    let [input1,setInput1] = useState(null)
    let [input2,setInput2] = useState(null)
    let [ans,setAns] = useState(null)
    let [success,setSucess] = useState(null)
    let [emptyInput,setEmptyInput] = useState(null)


    function handleEmptyMessage (){
        if(input1==="" || input1===null){
           
            setEmptyInput("Num1 Cannot Be Empty")
        }else{
            setEmptyInput("Num2 Cannot Be Empty")
        }
    }

    let Addition = ()=>{

        if(input1==="" || input2==="" || input1===null || input2===null){
            setSucess(false)
            handleEmptyMessage()
            return
        }
        setSucess(true)
        let newans = Number(input1) + Number(input2)
        console.log(newans);
        setAns(newans)
    }
    let Substraction= ()=>{
          
        if(input1==="" || input2==="" || input1===null || input2===null){
            setSucess(false)
            handleEmptyMessage()
            return
        }
        setSucess(true)
        let newans = Number(input1) - Number(input2)
        setAns(newans)
    }
    let Multiply = ()=>{
          
        if(input1==="" || input2==="" || input1===null || input2===null){
            setSucess(false)
            handleEmptyMessage()
            return
        }
        setSucess(true)
        let newans = Number(input1) * Number(input2)
        setAns(newans)
    }
    let Divide = ()=>{
          
        if(input1==="" || input2==="" || input1===null || input2===null){
            setSucess(false)
            handleEmptyMessage()
            return
        }
        setSucess(true)
        let newans = Number(input1) / Number(input2)
        setAns(newans)
    }

    return (
        <>
        <div className='container flex flex-col justify-between items-center p-8 w-96 h-max m-auto mt-16 rounded-3xl '>
        <h3 className='title mb-5'>React Calculator</h3>
        <div className='inputs  flex flex-col justify-between gap-5'>
        <input type="text" className="placeholder:font-bold placeholder:text-black placeholder:p-2 p-1" placeholder='Num 1' onChange={(e)=>{setInput1(e.target.value)}} />
        <input type="text" className="placeholder:font-bold placeholder:text-black placeholder:p-2 p-1" placeholder='Num 2' onChange={(e)=>{setInput2(e.target.value)}} />
        <div className='flex justify-between'>
        <div className='operations  px-1' onClick={Addition}>+</div>
        <div className='operations  px-1' onClick={Substraction}>-</div>
        <div className='operations  px-1' onClick={Multiply}>*</div>
        <div className='operations  px-1' onClick={Divide}>/</div></div>
        </div>


        { success !==null ?  <div className='answer '> {success===true?<div className='pt-5'> <p className='success'>Success!</p> <p>{ans}</p></div> 
                                                                      :<div className='pt-5'> <p className='text-red-600 font-bold'>Error!</p> <p>{emptyInput}</p></div>
                                                       }
                            </div>
                          :  <p></p>}


       
        </div>
        </>
    )
};

/*

<div> <p>Error!</p> <p>{emptyInput}</p></div>
*/