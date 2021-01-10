import "./TinderCards.css";
import React , {useState , useEffect} from 'react'
import TinderCard from "react-tinder-card";
import axios from '../Network/axios'

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const result = await axios.get('/tinder/card')
            

            setPeople(result.data)
        }
        fetchData()
    },[])

    function swiped(dir,name){
        console.log(`swipped ${name} ${dir}`)
    }
    function outOfFrame(name) {
        console.log(`${name} is now out of screen`);
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__container">
                {people.map(person => 
                    <TinderCard 
                    className="tinderCards__card"
                    key={person.name}
                    preventSwipe={['up','down']}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >

                <div className="tinderCards__cardContent"
                    style={{'backgroundImage':`url(${person.imgUrl})`}}>
                    <h3>{person.name}</h3>
                </div>
                </TinderCard>
                )}
            </div>
        </div>
    )
}

export default TinderCards
