import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState(props){
    const [state,setState]= React.useState({
        value:'',
        error:false,
        loading:false,
        deleted:false,
        confirmed:false
    })
    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);
   
    console.log(state)
    React.useEffect(()=>{
        console.log('empezando el efecto');

        if(!!state.loading){
            setTimeout(()=>{
                console.log('haciendo la validacion')
                
                if(state.value == SECURITY_CODE){
                    setState({
                        ...state,
                        loading:false,
                        error:false,
                        confirmed:true,
                    })
                    //setLoading(false)
                    
                }else{
                    setState({
                        ...state,
                        error:true,
                        loading:false
                    })
                    // setError(true)
                    // setLoading(false)
                }

                
    
                console.log('Terminado la validacion')
            },2000);
        }

        //console.log('finalizando el efecto');
    }, [state.loading]);
    
   if(!state.deleted && !state.confirmed){
    return (
    <div>

        <h2>Eliminar {props.name}</h2>

        <p>
            Por favor, escribe el código de seguidad para comprobar
            que quieres eliminar.
        </p>
        {(state.error && !state.loading) && (
            <p>Error: el codigo es incorrecto</p>
        )}
        {state.loading && (
                <p>Cargando ...</p>
        )}


        <input 
        placeholder="Código de Seguidad" 
        value={state.value} 
        onChange={(evn)=>setState({...state,value:evn.target.value})} />
        <button 
        onClick={()=>{setState({ ...state,loading:true});}} 
        >Comprobar</button>

    </div>
    )
   }else if(!!state.confirmed && !state.deleted ){
    return(
        <React.Fragment>
            <div>
                <p>P¿estas seguro? </p>
                <button
                onClick={()=>{setState({...state,
                deleted:true})
            }}
                >Sí, eliminar</button>
                <button
                onClick={()=>{setState({
                    ...state,
                    confirmed:false,
                    value:''
                })}}
                >No, me arrepentí</button>
            </div>
        </React.Fragment>
        
    )
   }else{
    return(
        <React.Fragment>
            <div>
                <p>Elimiado con exito </p>
                <button
                onClick={()=>{setState({
                    ...state,
                    confirmed:false,
                    deleted:false,
                    value:''
                })}}
                >Resetear, Volver Atras</button>
            </div> 
        </React.Fragment>
        )
   }
    
}
// onClick={()=>setError(prevState => !prevState)}
export {UseState}