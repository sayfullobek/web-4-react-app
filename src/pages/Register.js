import { useState } from 'react';
import './register.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Register(){
const navigate = useNavigate()

const countries = [
    {name:"O'zbekiston"},
    {name:"Rassiya"},
    {name:"Aqsh"},
]

const [name, setName] = useState('')
const [surname, setSurname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [prePassword, setPrePassword] = useState('')
const [choiceCountry, setChoiceCountry] = useState('0')

function registerHandler(){
    if (!email.endsWith("@gmail.com")){
        return toast.error("emailda xatolik")
    }
    if (password.trim().length<6){
        return toast.warning("parol 5ta belgidan ko'p bo'lishi shart")
    }
    if (password!=prePassword){
        return toast.error("parol va tasdqilash paroli teng bo'lishi shart")
    }
    if(name.trim().length===0){
        return toast.warning("ismingiz bo'sh bo'lmasin")
    }
    if(surname.trim().length===0){
        return toast.warning("familiyangiz bo'sh bo'lmasin")
    } 
    if (choiceCountry==='0'){
        return toast.error("davlat tanlash shart oka")
    }
    toast.success("malladess")
    navigate("/dashboard")
}

    return(
        <div style={{height:'100vh'}}>
            <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
      <h2>Responsive Registration Form</h2>
    </div>
    <div class="row clearfix">
      <div class="">
        <form>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
          </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} name="password" placeholder="Password" required />
          </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
            <input type="password" value={prePassword} onChange={e=>setPrePassword(e.target.value)} name="password" placeholder="Re-type Password" required />
          </div>
          <div class="row clearfix">
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} name="name" placeholder="First Name" />
              </div>
            </div>
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" value={surname} onChange={e=>setSurname(e.target.value)} name="name" placeholder="Last Name" required />
              </div>
            </div>
          </div>
              <div class="input_field select_option" value={choiceCountry} onChange={e=>setChoiceCountry(e.target.value)}>
                <select>
                  <option value={"0"}>Select a country</option>
                    {countries.map(item=>(
                        <option value={item.name}>{item.name}</option>
                    ))}
                </select>
                <div class="select_arrow"></div>
              </div>
            <div class="input_field checkbox_option">
            	<input type="checkbox" id="cb1" />
    			<label for="cb1">I agree with terms and conditions</label>
            </div>
            <div class="input_field checkbox_option">
            	<input type="checkbox" id="cb2" />
    			<label for="cb2">I want to receive the newsletter</label>
            </div>
          <input type="button" onClick={registerHandler} className='btn btn-warning' value="Register" />
        </form>
      </div>
    </div>
  </div>
</div>
<p class="credit">Developed by <a href="http://www.designtheway.com" target="_blank">Design the way</a></p>
        </div>
    )
}
export default Register;