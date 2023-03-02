import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'jose';
class ClassState extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        value:'',
        error:false,
        loading:false
    };
   }
   
//     UNSAFE_componentWillMount(){
//         console.log('componentWillMount')
//    }

//    componentDidMount(){
//         console.log('componentDidMount')
//    }
    componentDidUpdate(){
        
        if(!!this.state.loading){
            setTimeout(()=>{
                console.log('haciendo la validacion')
                if(SECURITY_CODE === this.state.value){
                    this.setState({loading:false, error:false})
                }else{
                    this.setState({error:true, loading:false})
                }

                
    
                console.log('Terminado la validacion')
            },2000);
        }

    }
  



    render(){
        
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>
                    Por favor, escribe el código de seguidad para comprobar
                    que quieres eliminar.
                </p>

                {(this.state.error && !this.state.loading) && (
                <p>Error: el codigo es incorrecto</p>
                )}
                {this.state.loading && (
                <Loading/>
                )}

                <input 
                placeholder="Código de Seguidad" 
                value={this.state.value} 
                onChange={(env)=>{this.setState({value:env.target.value})} }/>
                <button onClick={()=> this.setState({loading:true})} >Comprobar</button>


            </div>
        )
    }
}
export { ClassState};