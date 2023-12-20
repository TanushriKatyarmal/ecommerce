import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import Data from './Data'
import Card from './Card'
const Home = ({search,handleClick,data}) =>{
    console.log(search);
    return(

        <div className="main">
            <div className="land-page">
                <h1>Deal is Here</h1>
            </div>
            <Carousel className="carousel">
                {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                    return(
                        <header key={item.id} style={{height:'600px',width:'80%',margin:'auto'}}>
                            <div>
                                <img src={item.image} />
                                <p className="legend">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p style={{fontSize:'18px'}}>${item.price}</p>
                                    <p>{item.rating.rate}⭐</p>
                                    <button onClick={()=>handleClick(item)}>Add Cart</button>
                                </p>
                            </div>
                        </header>
                    )
                })}
            </Carousel>
        
            <section className="sec">
                {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                    return(
                        <Card key={item.id} item={item} handleClick={handleClick}/>
                )
                })}
            </section>

            <aside className="aside">
            <img src="https://www.bustedtees.com/cdn/shop/files/11_3_1512x.jpg?v=1614699072" alt="" />
                <img src="https://www.bustedtees.com/cdn/shop/files/5_10_1512x.jpg?v=1614698543" alt="" />
                <img src="https://www.bustedtees.com/cdn/shop/files/Sci-Fi_1512x.jpg?v=1625586190" alt="" />
                <img src="https://www.bustedtees.com/cdn/shop/files/BTHats_540x.jpg?v=1616758164" alt="" />
                <img src="https://www.bustedtees.com/collections/ladies-tees" alt="" />
            </aside>

            <div className="foot">
                <section className="footer">
                    <div className="footdiv" id="box1">
                        <a href="tel:9345678932"><i class="fa-solid fa-phone">Call</i></a>
                        <a href="mailto:new@gmail.com"><i class="fa-solid fa-mail-bulk">Mail</i></a>
                        <a href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp">WhatsApp</i></a>
                    </div>
                    <div className="footdiv" id="box2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis velit natus ad, aperiam dicta nemo illum veniam tempore a rem nulla earum libero, odio quod, totam blanditiis placeat magnam dolorum? Adipisci quam voluptate neque itaque explicabo quaerat, doloremque quibusdam pariatur, placeat fuga cupiditate facilis saepe corrupti atque sapiente nostrum nemo eos aliquid a libero mollitia repellendus reiciendis! Ratione exercitationem libero corporis, nobis beatae eligendi sed velit a ea asperiores reiciendis.</p>
                    </div>
                    <div className="footdiv" id="box3">
                        <a href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://twitter.com/"> <i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </section>
            </div>

        </div>
    )
}
export default Home