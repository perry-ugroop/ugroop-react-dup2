import React from 'react';
import { Carousel } from 'react-bootstrap';

import imgWorld from './assets/ugroop-around-the-world.png';
import imgFamily from './assets/ugroop-family-school.png';
// import imgGroup from './assets/ugroop-group-icon.png';
import imgStudents from './assets/ugroop-group-student-sufing-ugroop-site.png';

function Slider() {
  return (
    <div className={'da-slider'}>
      <Carousel>
        <Carousel.Item>
          <img src={imgStudents} alt="" />
          <Carousel.Caption>
            <h2
              style={{ textTransform: 'uppercase' }}
            > MANAGE ALL YOUR SCHOOL STUDY TOURS</h2>
            <p
              style={{ top: '150px' }}
            > ügroop – a
                one-stop-shop solution for group tours organisers, teachers, students, parents
                and relatives to quickly and efficiently plan, prepare and promote upcoming
                tours, easily communicate during the tour and finally evaluate the tour
                outcomes, issues and experiences.
            </p>
            <a href="" className="da-link">Read more</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgFamily} alt="" />
          <Carousel.Caption>
            <h2
              style={{ textTransform: 'uppercase' }}
            >WORRY-FREE FAMILY</h2>
            <p
              style={{ top: '150px' }}
            >
                ügroop –
                Understandably parents would be concerned about sending their child overseas;
                safety and security is foremost in everyone’s thoughts. The ability to keep
                track of where they are, what is happening, how things are going and just to
                stay in touch, from any device, is key to peace of mind.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={imgWorld} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
