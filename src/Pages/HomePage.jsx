import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Counter from "../Components/Counter";

export default function HomePage(){
    const name ="Kaivalya Shah"
    const age = 18
    const address="Earth"
    console.log(name) 
    return(
        <div>
            <Navbar/>
            <Counter/>
            <h1>My name is {name}</h1>
            <h1>My age is {age}</h1>
            <h1>I live on {address} </h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni quidem delectus! Omnis perspiciatis odit voluptatibus nostrum dolorem quaerat laudantium placeat dolorum velit explicabo sapiente, animi commodi temporibus voluptas unde ratione blanditiis distinctio voluptate dignissimos officiis enim cumque modi voluptatem! At cumque nulla, saepe voluptate voluptas reprehenderit illum vitae velit?</p>
            <Footer/>
        </div>
    )
}