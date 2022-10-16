import React from "react";
import Card from 'react-bootstrap/Card';


function Home() {
    return (
        <div>
               <Card.Body>
                    <Card.Title><h1>Bienvenido a HAPPY CAKE</h1> </Card.Title>
                    <Card.Text className="m-2">
                    <h4 style={{ margin:'20px' }}>El lugar de los pasteles felices</h4>
                    </Card.Text>
                    <Card.Text>
                        <img src="https://m.media-amazon.com/images/I/717QvKboHwL.jpg" alt="sin foto" style={{ width: '150px',margin:'20px' }} />
                    </Card.Text>
                </Card.Body>
            
        </div>
    )
}

export default Home;
