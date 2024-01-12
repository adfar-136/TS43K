import Contact from "./Contact";

function About(props){
    console.log(props)
    return (
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur aliquid praesentium modi provident quisquam, cum omnis excepturi, amet voluptas possimus quasi cumque architecto reiciendis in?</p>
            <Contact namee={props.name} age={props.age} gender={props.gender}/>
            
        </div>
    )
}
export default About;