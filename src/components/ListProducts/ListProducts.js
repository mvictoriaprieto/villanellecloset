import Card from '../Card/Card'

const ListProducts = ({children}) => {
    let dataProduct ={
        title: 'remera',
        talle: 'XL',
        price: '1500',
        stock: 5
    }

    return(
        <div className="container-cards">
            <h2> {children} </h2>

            <Card data = {dataProduct}/>
          
        </div>
    ) 
}

export default ListProducts;