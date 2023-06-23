import { useState } from "react"
import { toast } from "react-toastify"

export const ArrayTask = ()=>{
    const [inputHidden, setInputHidden] = useState(true)
    const [name, setName] = useState('')
    const [deleteAll, setDeleteAll] = useState(false)

    const [countries, setCountries] = useState([
        {id:1, name:"Uzb", color:'red', forDelete:false}
    ])

    const saveCountry = () => {
        if (name.trim().length===0){
            return toast.error("name not empty")
        }
        let tr = 0
        countries.map(ite=>{
            if (ite.name.toLocaleLowerCase()===name.toLocaleLowerCase()){
                tr++
            }
        })
        if (tr!==0){
            return toast.error("this is country already exist")
        }
        const a = []
        let boshi = name.substring(0, 1).toUpperCase()
        let oxiri = name.substring(1).toLocaleLowerCase()
        let ism = boshi+oxiri
        const obj = {id:countries.length+1, name:ism, color:'red', forDelete:false}
        countries.map(item=>{
            a.push(item)
        })
        a.push(obj)
        setCountries(a)
        setInputHidden(true)
        setName('')
    }
    const changeColor = (item)=>{
        const a = []
        countries.map(i=>{
            if (i.id===item.id){
                if (i.color==="red"){
                    i.color="green"
                }else{
                    i.color="red"
                }
            }
            a.push(i)
        })
        setCountries(a)
    }

    const close = ()=>{
        setInputHidden(true)
    }

    const deleteCountry = (id)=>{
        const a = []
        countries.map(item=>{
            if (item.id!==id){
                a.push(item)
            }
        })
        setCountries(a)
    }

    const deleteAllCountry = ()=>{
        const a = []
        countries.map(item=>{
            if (item.forDelete!==true){
                a.push(item)
            }
        })
        setCountries(a)
        setDeleteAll(false)
    }

    const changeDelete = (item)=>{
        const a = []
        countries.map(i=>{
            if (i.id===item.id){
                if (i.forDelete){
                    i.forDelete = false
                }else{
                    i.forDelete = true
                }
            }
            a.push(i)
        })
        setCountries(a)
        let tr = 0
        countries.map(ite=>{
            if (ite.forDelete===true){
                tr++;
            }
        })
        if (tr>0){
            setDeleteAll(true)
        }else{
            setDeleteAll(false)
        }
    }

    return(
        <div className="container">
            <h1 className="text-center">todo list</h1>
            <div className="d-flex">
                <button className="btn btn-success m-2" onClick={()=>setInputHidden(false)}>+add</button>
                <button className="btn btn-danger m-2" style={deleteAll?{display:'block'}:{display:'none'}} onClick={()=>deleteAllCountry(false)}>delete</button>
                {countries.length!==0?(
                    <button className="btn btn-danger m-2" style={deleteAll?{display:'none'}:{display:'block'}} onClick={()=>setCountries([])}>delete all</button>
                ):(
                    <></>
                )}
            </div>
            <input value={name} onChange={e=>setName(e.target.value)} style={inputHidden?{display:'none'}:{display:'block'}} className="form-control m-2" type="text" placeholder="enter country name"/>
            <div className="d-flex">
                <button onClick={()=>saveCountry()} style={inputHidden?{display:'none'}:{display:'block'}} className="btn btn-success m-2">save</button>
                <button onClick={()=>close()} style={inputHidden?{display:'none'}:{display:'block'}} className="btn btn-danger m-2">close</button>
            </div>

            {countries.length===0?(
                <h3 className="text-center text-danger">Countries not avalable...</h3>
            ):(
                <div className="row w-100">
                {countries.map(item=>(
                    <div style={{backgroundColor:item.color, position:'relative'}} className="text-light p-5 text-center col-3 m-5 mt-3 mb-3 border shadow">
                        <input onClick={()=>changeDelete(item)} type="checkbox" className="form-check-input" style={{
                            position:'absolute', top:'10px', left:'10px'
                        }}/>
                        <p onClick={()=>changeColor(item)} style={{display:'inline', cursor:'pointer'}}>{item.name}</p>
                        <div>
                            <button onClick={()=>deleteCountry(item.id)} className={item.color==="red"?"btn btn-success mt-3":"btn btn-danger mt-3"}>delete</button>
                        </div>
                    </div>
                ))}
                </div>
            )}
        </div>
    )
}