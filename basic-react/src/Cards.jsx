import React from 'react';
import Heading from './Heading';
import Image from './Image';
function Cards(props){
	return(
 	  <React.Fragment>
            <div className="card">
                <Image imgSrc={props.imgSrc} />
                <div className="card__info">
                  <span className="card__category">{props.category}</span>
                  <Heading name={props.title} />
                  <a className="card__button" href={props.link} target="__blank">
                      <button>Watch Now</button>
                  </a>
                </div>
            </div>
      </React.Fragment>
	);
}


export default Cards;