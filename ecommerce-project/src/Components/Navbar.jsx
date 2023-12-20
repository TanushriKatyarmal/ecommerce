import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = ({setSearch,size,data,setData}) =>{

    const filterResult = (catItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        console.log(result);
        setData(result)
    }

    function filterResult2 (catItem) {
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }

    function filterResult3 (catItem) {
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }

    function filterResult4 (catItem) {
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }

    return(
        <div>
            <nav className="navbar">
            <article className="navart">
                <div className="logo"><Link style={{color:'coral',fontSize:'30px',textDecoration:'none'}} to='/'><img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="" /></Link></div>
                <div className="input"><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search your Products" /></div>
                <div className="cart"><Link style={{color:'white',textDecoration:'none'}} to='/cart'><img src="https://www.shutterstock.com/shutterstock/videos/19584025/thumb/1.jpg?ip=x480" alt="" /><sup>{size}</sup></Link></div>
            </article>
            <article className="artbtn">
                <button onClick={()=>filterResult(`men's clothing`)}>Men</button>
                <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
                <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
                <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
                {/* <button onClick={handleSort}>Sort By Price</button> */}
            </article>
            </nav>
        </div>
    )
}
export default Navbar