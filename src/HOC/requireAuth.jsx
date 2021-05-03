import React, { Component } from 'react'

const requireAuth=(ChildComponent)=>{
    class ComposedComponent extends Component{
        componentDidMount(){
            this.navToLogin();
        }
        componentDidUpdate(){
            this.navToLogin();
        }
        navToLogin=()=>{
            
            if(!localStorage.getItem("isAuth")){
                this.props.history.push("/hoc")
            }
        }
        render(){
            return <ChildComponent {...this.props}/>
        }
    }

    return ComposedComponent;
}
export default requireAuth;