import React from 'react'
import "./Game.css"
import Akimage from "./images/ak47.png"
import Glock18image from "./images/glock18.png"
import Deagleimage from "./images/deagle.png"
import Mp7image from "./images/mp7.png"
import Uziimage from "./images/uzi.png"


class Game {
     accessoryController=0;
     accessoryAk47=0;
     accessoryMp7=0;
     accessoryUzi=0;
     accessoryDeagle=0;
     accessoryGlock18=0;
     accessory4x = 0;
     accessory8x = 0;
     accessoryTutamaç = 0;
     accessoryOmuzluk = 0;
     accessorySarjorArttırıcı = 0;
     currentElBombası = 0;
     currentSisBombası = 0;
     currentAk47=0;
     currentMp7=0;
     currentUzi=0;
     currentDeagle=0;
     currentGlock18=0;
     currentValue=100000;
     currentAk47Value=5000;
     currentMp7Value=4000;
     currentUziValue=3000;
     currentDeagleValue=2000;
     currentGlock18Value=1000;
     current4xValue=300;
     current8xValue=500;
     currentTutamaçValue=200;
     currentOmuzlukValue=200;
     currentŞarjörValue=300;
     currentElBombasıValue=100;
     currentSisBombasıValue=100;
     current4x = 0;
     current8x = 0;
     currentTutamaç = 0;
     currentOmuzluk = 0;
     currentSarjorArttırıcı = 0;
     currentElBombası = 0;
     currentSisBombası = 0;
    
     
     Accessory = (props)=>{
       if(this.accessoryController===1){
        
       if(this.accessoryAk47===1){
        return( 
          
           <div className="AccessoryAdding">
              <button type="submit" onClick={()=>{this.accessoryController=0; this.currentAk47+=1; this.accessoryAk47=0 }}>Envantere Dön</button>
          <button type="submit" onClick={()=>{if(this.currentTutamaç === 0){this.currentTutamaç+= 1 }else{this.currentTutamaç-=1}}}>{"Omuzluk = " + this.currentTutamaç} </button>
          <div className="DürbünAk"></div>   
          <img alt={"ak47"} src={Akimage}></img>
           </div>
         )
       }
       if(this.accessoryMp7===1){
        return(
           <div className="AccessoryAdding">
              <button type="submit" onClick={()=>{this.accessoryController=0; this.currentMp7+=1; this.accessoryMp7=0}}>Envantere Dön</button>
             
          <img alt={"mp7"} src={Mp7image}></img>
           </div>
         )
       }
       if(this.accessoryUzi===1){
        return(
           <div className="AccessoryAdding">
              <button type="submit" onClick={()=>{this.accessoryController=0; this.currentUzi+=1; this.accessoryUzi=0}}>Envantere Dön</button>
             
          <img alt={"uzi"} src={Uziimage}></img>
           </div>
         )
       }
       if(this.accessoryDeagle===1){
        return(
           <div className="AccessoryAdding">
              <button type="submit" onClick={()=>{this.accessoryController=0; this.currentDeagle+=1; this.accessoryDeagle=0}}>Envantere Dön</button>
             
          <img alt={"deagle"} src={Deagleimage}></img>
           </div>
         )
       }
       if(this.accessoryGlock18===1){
        return(
           <div className="AccessoryAdding">
              <button type="submit" onClick={()=>{this.accessoryController=0; this.currentGlock18+=1; this.accessoryGlock18=0}}>Envantere Dön</button>
             
          <img alt={"glock18"} src={Glock18image}></img>
           </div>
         )
       }
      
       
      } 
      return null;
     }
    

     Inventory =(props)=>{
       if(props.currentGun>0){
        
         return( 
         <div id="silah" className={props.currentGunName}>
           <h3>{props.currentGun} Adet </h3>
           <h3> { props.currentGunName } </h3>
            <div className="Buttons"> <button type="submit" onClick={()=>{
            if(this.accessoryController===0){  
              
              if(props.currentGunName==="Ak47"){
                this.accessoryAk47+=1;
                this.currentAk47-=1
                this.accessoryAk47=1;
              }
              if(props.currentGunName==="Mp7"){
                this.accessoryMp7+=1;
                this.currentMp7-=1
                this.accessoryMp7=1;
              }
              if(props.currentGunName==="Uzi"){
                this.accessoryUzi+=1;
                this.currentUzi-=1
                this.accessoryUzi=1;
              }
              if(props.currentGunName==="Deagle"){
                this.accessoryDeagle+=1;
                this.currentDeagle-=1
                this.accessoryDeagle=1;
              }
              if(props.currentGunName==="Glock18"){
                this.accessoryGlock18+=1;
                this.currentGlock18-=1
                this.accessoryGlock18=1;
                }
              this.accessoryController=1;
             } 
            }}>
              Aksesuar Ekle</button>
           
            <button type="submit" onClick={()=>{
              this.currentValue+=props.currentGunValue-(props.currentGunValue*20/100)
           
              if(props.currentGunName==="Ak47"){
                this.currentAk47-=1
              }
              if(props.currentGunName==="Mp7"){
                this.currentMp7-=1
              }
              if(props.currentGunName==="Uzi"){
                this.currentUzi-=1
              }
              if(props.currentGunName==="Deagle"){
                this.currentDeagle-=1
              }
              if(props.currentGunName==="Glock18"){
                this.currentGlock18-=1
              }
              
            }}>Normal sat({props.currentGunValue-(props.currentGunValue*20/100)})</button>
             </div>
             </div>)
        
       }
       return null;
     }
     buyAk47 =()=>{
        if(this.currentValue>=this.currentAk47Value){
          this.currentValue-=this.currentAk47Value;
          this.currentAk47++;
        }
     }
     buyMp7 =()=>{
      if(this.currentValue>=this.currentMp7Value){
        this.currentValue-=this.currentMp7Value;
        this.currentMp7++;
      }
   }
   buyUzi =()=>{
    if(this.currentValue>=this.currentUziValue){
      this.currentValue-=this.currentUziValue;
      this.currentUzi++;
    }
 }
 buyDeagle =()=>{
  if(this.currentValue>=this.currentDeagleValue){
    this.currentValue-=this.currentDeagleValue;
    this.currentDeagle++;
  }
}
buyGlock18 =()=>{
  if(this.currentValue>=this.currentGlock18Value){
    this.currentValue-=this.currentGlock18Value;
    this.currentGlock18++;
  }
}
AccessoryControl = ()=>{
    if(this.accessoryAk47===1){
      return "Ak47"
    }
    if(this.accessoryMp7===1){
      return "Mp7"
    }
    if(this.accessoryUzi===1){
      return "Uzi"
    }
    if(this.accessoryDeagle===1){
      return "Deagle"
    }
    if(this.accessoryGlock18===1){
      return "Glock18"
    }
}
   update =()=>{
    
   }

}

export default Game
