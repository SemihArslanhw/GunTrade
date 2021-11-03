import React from 'react'
import "./App.css"
import Game from "./Game"


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
    
    }
   this.game=new Game()
  }
  componentDidMount(){
    setInterval(()=>{
      this.update();
      this.setState({});
     
    },40)
  }
  update=()=>{
    
    this.game.update()
  }
 
  
 
  
  
  render(){
   
 
    return (
    <div>
      <div className="GamePanel">
      <header className="App-header">Trade Your Gun</header>
      <h2>Paran = {this.game.currentValue}</h2>
      <div className="GameBody" >
       
     <div className="Top-side"> 
      <div className="Envanter">
           <header className="Envanter-header">Envanter</header>
        { <this.game.Inventory currentGun={this.game.currentAk47 } currentGunName="Ak47" currentGunValue={this.game.currentAk47Value}></this.game.Inventory> }
        { <this.game.Inventory currentGun={this.game.currentMp7 } currentGunName="Mp7" currentGunValue={this.game.currentMp7Value}></this.game.Inventory> }
        { <this.game.Inventory currentGun={this.game.currentUzi } currentGunName="Uzi" currentGunValue={this.game.currentUziValue}></this.game.Inventory> }
        { <this.game.Inventory currentGun={this.game.currentDeagle } currentGunName="Deagle" currentGunValue={this.game.currentDeagleValue}></this.game.Inventory> }
        { <this.game.Inventory currentGun={this.game.currentGlock18 } currentGunName="Glock18" currentGunValue={this.game.currentGlock18Value}></this.game.Inventory> }
           </div>
        <div className="Market">
          <header className="Market-header">Silahçı</header>
          <h3>Ak-47</h3> <button type="submit" onClick={this.game.buyAk47}>{this.game.currentAk47Value} </button>
          <h3>Mp-7</h3> <button type="submit" onClick={this.game.buyMp7}>{this.game.currentMp7Value}</button>
          <h3>Uzi</h3> <button type="submit" onClick={this.game.buyUzi}>{this.game.currentUziValue}</button>
          <h3>Deagle</h3> <button type="submit" onClick={this.game.buyDeagle}>{this.game.currentDeagleValue}</button>
          <h3>Glock-18</h3> <button type="submit" onClick={this.game.buyGlock18}>{this.game.currentGlock18Value}</button>
        </div>
        </div> 
     <div className="Buttom-side">   <div className="AccAdding">
          <header className= "AccAdding-header" >Aksesuar Ekle</header>
          {<this.game.Accessory  currentGunName={this.game.AccessoryControl} ></this.game.Accessory>}
         
        </div>
      <div className="Acsessory">
        <header className="Acsessory-header">Aksesuar</header>
        <h3>4x Dürbün</h3> <button type="submit">{this.game.current4xValue}tl</button>
        <h3>8x Dürbün</h3> <button type="submit">{this.game.current8xValue}tl</button>
        <h3>Tutamaç</h3> <button type="submit">{this.game.currentTutamaçValue}tl</button>
        <h3>Omuzluk</h3> <button type="submit">{this.game.currentOmuzlukValue}tl</button>
        <h3>Şarjör Arttırıcı</h3> <button type="submit">{this.game.currentŞarjörValue}tl</button>
        <h3>El Bombası</h3> <button type="submit">{this.game.currentElBombasıValue}tl</button>
        <h3>Sis Bombası</h3> <button type="submit">{this.game.currentSisBombasıValue}tl</button>
              </div>
              </div>
      </div>
    
    </div>
    </div>
  )
}
}

export default App

