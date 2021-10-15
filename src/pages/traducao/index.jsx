// import logo from './logo.svg';
import './styles.css'
import { useCallback, useState } from "react";
import letters,{espaco} from '../../letras'

function TRaducaoPage() {
  const [message,setMessage] = useState()
  
  const handleChange = useCallback((e)=>{
    const splittedMessage = e.target.value.split('');
    setMessage(splittedMessage)
  },[])

  return (
    <div>
      <div className="container">
        <label htmlFor="text">Digite sua mensagem para ser traduzida para libras</label>
        <textarea onChange={handleChange} id="text"  placeholder="digite o texto..."></textarea>
        <span>*não use acentos</span>
      </div>
      
      <div className="container-img" > 
        {message && 
          message.map((item,index)=> letters[item] 
          ? <img src={letters[item]} alt={item} className="image" key={index}/>
          : <img src={espaco} alt={item} className="image" key={index}/>)
        }
      </div>
    </div>
  );
}

export default TRaducaoPage;
