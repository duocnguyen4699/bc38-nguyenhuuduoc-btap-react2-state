import React, { Component } from 'react';
import dataGlass from "../data/dataGlass.json";

export default class Home extends Component {

  state = {
    glassesCur: {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./glassesImage/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
  }

  renderGlass = () => {
    return dataGlass.map((glassesItem, index) => {
      return <img onClick={()=>{this.changeGlasses(glassesItem)}} className=' p-1 border border-width-1' style={{ width: '110px', cursor: 'pointer' }} key={index} src={glassesItem.url} alt="" />
    })
  }
  changeGlasses = (newGlasses)=>{
    this.setState({
      glassesCur:newGlasses
    })
  }
  render() {
    return (
      <div style={{ backgroundImage: 'url(./glassesImage/outtop.jpg)', backgroundSize: '1800px' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '1800px' }}>
          <h3 style={{ backgroundColor: 'rgba(113,0,417,.3)' }} className=' text-light p-5'>TRY GLASS APP ONLINE</h3>
          <div className='container'>
            <div class="row mt-5">
              <div className='col-6 text-center'>
                <div className='position-relative'>
                  <img className='position-absolute' style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="" />
                  <img style={{ width: '131px', top: '75px', right: '127px', opacity: '0.7' }} className='position-absolute' src={this.state.glassesCur.url} alt="" />
                  <div style={{ width: '250px', left: '318px', top: '210px', backgroundColor: 'rgba(255,0,111,.5)', textAlign: 'left', height: '95px', paddingLeft: '15px' }} className='position-relative'>
                    <p className='text-light'>{this.state.glassesCur.name}</p>
                    <p className='text-light'>{this.state.glassesCur.desc}</p>
                  </div>
                </div>

              </div>
              <div className='col-6 text-center'>
                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="" />

              </div>
            </div>
          </div>
          <div className='bg-light container text-center mt-5 d-flex justify-content-center p-5'>
            {this.renderGlass()}
          </div>
        </div>

      </div>
    )
  }
}
