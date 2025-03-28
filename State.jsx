import {useState, useEffect} from 'react';
const State = () => {
    let[Contador,setContador] = useState(0);
    const [texto, setTexto] = useState('');
    const [color, setColor] = useState('#ffffff'); 
    
  
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    const incrementar = () =>{
        setContador = (Contador + 1);
    }
    const decrementar = () =>{
        setContador(Contador - 1);
    }
    
    return(
        <div>
            <h2>useState</h2>
            <hr/>
           
            <p>Contador: {Contador}</p>
            <button className="btn btn-primary mx-2" onClick={()=>setContador = (Contador + 1)}>+</button>
            <button className="btn btn-danger mx-2" onClick={()=>setContador = (Contador - 1)}>-</button>
            
            
            <div style={{marginTop: '20px'}}>
                <textarea 
                    value={texto} 
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Escribe aquí..."
                />
                <p>Texto en tiempo real: {texto}</p>
            </div>
            
           
            <div style={{marginTop: '20px'}}>
                <label>Color de fondo (hex): </label>
                <input 
                    type="text" 
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Ej: #ff0000"
                    style={{marginLeft: '10px'}}
                />
                <div style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: color,
                    marginLeft: '10px',
                    border: '1px solid #000'
                }}></div>
            </div>
        </div>
    )
}