import React, { useState, useEffect } from "react";
import Pusher from 'pusher-js';


const Home = () => {

    const [buttonstatus, Setbuttonstatus] = useState({status : {}});
    // const [count, SetCount] = useState(0)

    useEffect(() => {
        fetch('https://login-page-data.herokuapp.com/fetch')
      .then(response => response.json())
      .then(response => {Setbuttonstatus(response); })
      
      const pusher = new Pusher('9d16191c9e964e53eaa9', {
        cluster: 'ap2',
        encrypted: true
      });
      const channel = pusher.subscribe('my-channel');
      channel.bind('my-event', data => {
        let data1 = data.status;
        Setbuttonstatus({ status: data1 });
      });
   
    }, []);


    const handleButton1 = () => {
        console.log(buttonstatus.status.id)
        fetch(`https://login-page-data.herokuapp.com/update/${buttonstatus.status.id}`, {
        method: 'PUT',
        body: JSON.stringify({status : { "id": 1, "button1": true , "button2": false}}),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(data => {
            return data.json()
          }).then(value => {console.log(value); Setbuttonstatus({status : { "id": 1, "button1": true , "button2": false}});  })
          .catch((error) => {
            console.error('Error:', error);
          }); 

    }

    const handleButton2 = () => {
        console.log(buttonstatus.status.id)
        fetch(`https://login-page-data.herokuapp.com/update/${buttonstatus.status.id}`, {
        method: 'PUT',
        body: JSON.stringify({status : { "id": 1, "button1": false , "button2": true}}),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(data => {
            return data.json()
          }).then(value => {console.log(value); Setbuttonstatus({status : { "id": 1, "button1": false , "button2": true}});  })
          .catch((error) => {
            console.error('Error:', error);
          }); 
    }


    return (
        <div>
            <button className="button" disabled={buttonstatus.status.button1} onClick={handleButton1} >Button1</button>
            <button className="button" disabled={buttonstatus.status.button2} onClick={handleButton2} >Button2</button>
        </div>
    )
}

export default Home;