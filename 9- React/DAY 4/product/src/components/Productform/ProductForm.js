import React from 'react'
import styles from './ProductForm.module.css'

class Productform extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            proName:'',
            proImage:'',
            proPrice:'',
            desc:''
        }
    }
    //This method used when we change the
    // value(e.target.value) of anyInput (e.target.name)
    changed = (e) =>{
        console.log(e.target.name)
        this.setState({
           [e.target.name] : e.target.value
        })
    }
    
    //to clear the Inputvalue
    clearState = () =>{
        this.setState({
            proName:'',
            proImage:'',
            proPrice:'',
            desc:'' 
        })
    }
    render(){
        return(
        <div className={styles.container}>
             <div className={styles.formGroup}>
                <p>Product Name</p>
                <input type="text" name="proName"
                className={styles.formControl}
                value={this.state.proName}
                onChange={(e) => this.changed(e) } />
                </div>

                <div className={styles.formGroup}>
                <p>Image</p>
                
                <input type="text"  name="proImage"
                value={this.state.proImage}
                 className={styles.formControl}
                 onChange={(e) => this.changed(e) } />
                </div>

                <div className={styles.formGroup}>
                <p>Price</p>
                <input type="nmber" name="proPrice"
                className={styles.formControl}
                value={this.state.proPrice}
                onChange={(e) => this.changed(e) } />
                </div>
               
                <div className={[styles.formGroup,styles.w100].join(' ')}>
                <p>Description</p>
                <textarea rows="5"  name="desc"
                className={styles.formControl}
                value={this.state.desc}
                onChange={(e) => this.changed(e) }> </textarea>
                </div>
               
                <button className={styles.btnPrimary} 
                onClick={ () => {this.props.addToList(this.state); this.clearState()}}>Add to List</button>
        </div>
        )
    }
}

export default Productform;