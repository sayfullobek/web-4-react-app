import { useState ,useEffect, useRef} from "react"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard';


//     const [name, setName] = useState('')
//     const [color, setColor] = useState('red')
//     const [about, setAbout] = useState('a')
//     const [copy, setCopy] = useState(null)
//     const down = ()=>{
//         setColor('blue')
//     }
//     const up = ()=>{
//         setColor('red')
//     }
    
//     const [copiedValue, setCopiedValue] = useState("");

//    const handleOnCopy = (e) => {
//       const selectedText = document.getSelection(); // <-- this is different
//       setCopiedValue(selectedText);
//    };
export const FunctionTask = () => {

    const [value, setValue] = useState('')
    const [copied, setCopied] = useState(false)

    const change = (e)=>{
        setValue(e.target.value)
        setCopied(false)
    }

   return (
    <div>
    <input value={value}
      onChange={(e) => change(e)} />

    <CopyToClipboard text={value}
      onCopy={() => setCopied(true)}>
      <span>Copy to clipboard with span</span>
    </CopyToClipboard>

    <CopyToClipboard text={value}
      onCopy={() => setCopied(true)}>
      <button>Copy to clipboard with button</button>
    </CopyToClipboard>

    {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
  </div>
   )

//     const [data, setData] = useState(null);

//     useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res) => res.json())
//         .then((data) => setData(data));
//    }, []);
  
//     return (
//       <>
//         {data &&
//           data.map((item) => {
//             return <p key={item.id}>{item.title}</p>;
//           })}
//       </>
//     );

    // const [count, setCount] = useState(0);
    // const [todos, setTodos] = useState([]);
  
    // const increment = () => {
    //   setCount((c) => c + 1);
    // };
    // const addTodo = () => {
    //   setTodos((t) => [...t, "New Todo"]);
    // };
  
    // return (
    //   <>
    //     <Todos todos={todos} addTodo={addTodo} />
    //     <hr />
    //     <div>
    //       Count: {count}
    //       <button onClick={increment}>+</button>
    //     </div>
    //   </>
    // );
    

    // const inputElement = useRef();

    // const focusInput = () => {
    //   inputElement.current.focus();
    // };
  
    // return (
    //   <>
    //     <input type="text" ref={inputElement} />
    //     <button onClick={focusInput}>Focus Input</button>
    //   </>
    // );

    // const navigate = useNavigate()
    // const location = useLocation()

    // const [name, setName] = useState('qozi')

    // const kirish = () => {
    //     navigate("/")
    // }

    // return(
    //     <div>
    //         <h1>{`salom ${name}`}</h1>
    //         <button onClick={kirish}>asosiy</button>  
    //     </div>
    // )
}