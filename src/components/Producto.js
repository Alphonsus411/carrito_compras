import { Component } from "react";

const styles = {
   poducto: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',

   } 
}

class Producto extends Component {
    render() {
        const { producto } = this.props
        return (
            <div styles={styles.producto}>
                <img alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        )
    }
}

export default Producto