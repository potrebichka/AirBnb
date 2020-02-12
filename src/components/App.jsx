import React from 'react';
import Header from './Header';
import Title from './Title';
import Explore from './Explore';
import Multiday from './Multiday';

function App(){
  return (
    <div >
        <style jsx> {`
            .body {
                margin: 30px 50px;
                font-family: BlinkMacSystemFont;
            }
            .block {
                margin-bottom: 90px;
            }
            .subtitle {
                margin-top: -15px;
                margin-bottom: 30px;
                font-weight: 200;
            }
            .selection-img {
                min-width: 100%;
                max-height: 320px; 
                object-fit: cover;
            }
            .selection {
                overflow: hidden;
            }
            .display_line {
                display:flex;
                margin-left: -20px;
            }

            .block a {
                color: black;
                font-weight: 500;
            }
        `}
        </style>
        <Header/>
        <div className="body">
            <div className="block">
                <Title name="Explore Airbnb"/>
                <div>
                    <Explore img="https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large" name="Stays"/>
                    <Explore img="https://a0.muscache.com/im/pictures/a77ee672-e790-4362-8cc5-52bec1371ece.jpg?aki_policy=large" name="Experiences"/>
                    <Explore img="https://a0.muscache.com/im/pictures/38f2bfd6-1f4d-46d7-babf-61657deef302.jpg?aki_policy=large" name="Adventures"/>
                </div>
            </div>
        </div>

        <div className="body">
            <div className="block selection">
                <Title name="Airbnb Plus places to stay"/>
                <p className="subtitle">A selection of places to stay verified for quality and design.</p>
                <img className="selection-img"src="https://a0.muscache.com/4ea/air/v2/pictures/f4d72213-3cc2-403c-8482-0e2b7bb17b67.jpg?t=c:w2400-h960,r:w2400-h960-sfit,e:fjpg-c75" />
            </div>
        </div>

        <div className="body">
            <div className="block">
                <Title name="Introducing Airbnb Adventures"/>
                <p className="subtitle">Multi-day trips led by local experts—activities, meals, and stays included.</p>
                <div className="display_line">
                    <Multiday img="https://a0.muscache.com/im/pictures/64c23cf2-4833-4506-ab06-c943c7489709.jpg?aki_policy=poster" country="NORWAY" name="2 Nights PACKAGE All Inclusive" cost="From $630/person" length="3 days" rating="5.0(10)"/>
                    <Multiday img="https://a0.muscache.com/im/pictures/85d29c8e-e0b7-4519-9eb9-d20fbf33fdc7.jpg?aki_policy=poster" country="MOROCCO" name="Active Adventure & Stay with Locals" cost="From $314/person" length="4 days"/>
                    <Multiday img="https://a0.muscache.com/im/pictures/ad6a1147-639b-4a8c-8736-ecb6f592967f.jpg?aki_policy=poster" country="CROATIA" name="Art & Architecture in Croatia" cost="From $4,835/person" length="10 days"/>
                    <Multiday img="https://a0.muscache.com/im/pictures/87a38441-c96f-4d66-979b-a0cf04e31a6a.jpg?aki_policy=poster" country="BAHAMAS" name="Sail the Bahamas to Project Shorebirds" cost="From $1,850/person" length="8 days" />
                    <Multiday img="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1203484-media_library/original/be5b3cf2-6d1d-42a3-95b5-8306df9d7a7e.jpeg?aki_policy=poster" country="ROMANIA" name="3Day Carpathian Photo/Culture workshop" cost="From $590/person" length="3 days" />
                </div>
                <a href="/">Show all adventures ></a>

            </div>
        </div>
        
    </div>
  );
}

export default App;