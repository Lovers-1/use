import React,{useState} from "react";


const Landing = () =>{

    const [Count, setCount] = useState(60);
    const ChangeValue = () => {
        setCount(60);
    } 

   React.useEffect(()=>{
        Count > 0 && setTimeout(()=> setCount(Count - 1),1000);
   },[Count]);

   //arrays 

   const[items, setItems] = useState([]);
   const setItemVaules = () =>{
       setItems([...items,{
        name:'mpho',
        surname:'maake',
        location:'2g',
        age:35 + items.length},
        
        ])
   }
  /* const setValules =() =>{
    setItems([...items,{
        name:'mpho',
        surname:'maake',
        location:'2g',
        age:35},
        
        ])
   }*/

    return(    
        <>
        <div className="box-area">
            <div className="banner-area">
                <h2>Lover's Resume</h2>
            </div>
            <div className="content-area">
                <div className="wrapper">
                    <h2>Welcome Page</h2>

                    <p>{Count}</p>
                    <div className = "btn">
                    <button onClick = {ChangeValue}>Restart Time </button>
            
                    </div>
                    
                    <div className = "myList">
                    
                <dev className="inner-box">
                    <h3>Names</h3>
                    <ul>
                        {items.map(element => <li key = {element.name}>{ element.name}</li>)};
                       
                    </ul>
                </dev>
               
                <dev className="inner-box">
                    <h3>age</h3>
                    <ul>
                    {items.map(element => <li key = {element.name}>{ element.age}</li>)};
                    </ul>
                    </dev>
                    
                    <div className = "btn">
                    <button onClick = {setItemVaules}>Update Years</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
   )
}

export default Landing;