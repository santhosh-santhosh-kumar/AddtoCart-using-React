import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Shoes",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CxkD8Rw5C_Z3EbgXUBu7eaVPUl0IiNmVFw&usqp=CAU",
                "price": 10,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Fashion",
                "src": "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/d/x/d/15-16-years-new-jf-4311-supersquad-original-imaghrcqa9xwecfc.jpeg?q=70",
                "price": 20,
                "count": 1
            },
            {
                "_id": "3",
                "title": "Mobiles",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEVxI5ZIqj55pKrswyAMKbbx5H3xVkQwLtA&usqp=CAU",
                "price": 50,
                "count": 1
            },
            {
                "_id": "4",
                "title": "Tablets",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0IK7VUD_1vOSSgWbP12obeqpfTN6Ve0y4w&usqp=CAU",
                "price": 15,
                "count": 1
            },
            {
                "_id": "5",
                "title": "Watches",
                "src": "https://rukminim2.flixcart.com/image/612/612/kv450280/watch/i/d/n/1-whiteled01-ph-watches-men-women-original-imag82zzghqwykzg.jpeg?q=70",
                "price": 10,
                "count": 1
            },
            {
                "_id": "6",
                "title": "Kettle",
                "src": "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-kettle/k/h/q/electric-kettle-1-5-ltr-combo-with-chopper-250-watt-kettle-1-5-original-imagvg9jtqdjhfuz.jpeg?q=70",
                "price": 17,
                "count": 1
            },
            {
                "_id": "7",
                "title": "Dress",
                "src": "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/o/l/6/1-2-years-kids-wear-002-ortugal-original-imagjwngv3mcp8gv.jpeg?q=70",
                "price": 17,
                "count": 1
            },

            {
                "_id": "8",
                "title": "TV Unit",
                "src": "https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/c/i/j/-original-imagrxnkj9hk3peq.jpeg?q=70",
                "price": 17,
                "count": 1
            },

            {
                "_id": "9",
                "title": "Bags",
                "src": "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/b/t/a/-original-imagtehgyznps3yx.jpeg?q=70",
                "price": 17,
                "count": 1
            },

            {
                "_id": "10",
                "title": "Pets Items",
                "src": "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-collar-charm/6/p/t/reflective-cat-collar-buraq-original-imagkspfhy9tzcny.jpeg?q=70",
                "price": 17,
                "count": 1
            },

            {
                "_id": "11",
                "title": "Towels",
                "src": "https://rukminim2.flixcart.com/image/612/612/xif0q/bath-towel/9/i/f/comfort-living-pack-of-2-hand-towels-cotton-rich-40-cms-x-60-cms-original-imagqp446gtraqd7.jpeg?q=70",
                "price": 40,
                "count": 1
            },
            {
                "_id": "12",
                "title": "Kids Toys",
                "src": "https://rukminim2.flixcart.com/image/612/612/kkk1vgw0/stuffed-toy/g/w/p/mickey-mouse-shape-baby-sitter-45-ziraat-original-imafzvfqz8a4gf7j.jpeg?q=70",
                "price": 17,
                "count": 1
            }


        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}