import { Component } from 'react';
import Productos from './components/Productos.js'
import Layout from './components/Layout'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 2, img:'/productos/tomate.jpg'},
      { name: 'Arbejas', price: 6, img:'/productos/arbejas.jpg'},
      { name: 'Lechuga', price: 2, img:'/productos/lechuga.jpg'}
    ]
  }
  render() {
    return (
      <div>
        <Layout>
          <Productos
          agregarAlCarro={() => console.log("Por favor, espere...")}
          productos={this.state.productos}
        />
        
        </Layout>
      </div>
    )
  }
}
  
  
  
  
export default App;
