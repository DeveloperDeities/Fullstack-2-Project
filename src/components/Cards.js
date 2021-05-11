import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Instructors</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.yogabaron.com/wp-content/uploads/2018/12/Yoga-teacher-at-front-of-yoga-class-dec9.jpg'
              
              text='Connecting to a 5,000-year-old tradition of saints and sages lends a unique quality to meditation practice. I’ve had moments of feeling as if I’m in the presence of those who have done these techniques over centuries'
              label='Elena Brower'
              path=''
            />
            <CardItem
              src='https://www.verywellfit.com/thmb/aZlzFpDfWUHV2mjqsI0fRDGcDAg=/4356x2904/filters:no_upscale():max_bytes(150000):strip_icc()/RinaJakubowicz-1737e6ef97c64e358307b5fa16e67137.jpeg'
              text='The 27-year-old seems both exuberant and wise. She says she believes that within each student lies a vast wellspring of love and potential—and it’s her job as a teacher to draw that out. Her classes blend rigorous poses and soothing adjustments with bursts of yoga philosophy.'
              label='Heidi Kristoffer'
              path=''
            />
            <CardItem
              src='https://themazemethod.com/wp-content/uploads/2018/06/NOAH_MAZE_2018_BY_ANDREA_KILLAM_SQUARE_2.jpg'
              text='Noah grew up around the practice and philosophy of yoga, and is today considered one of the USA’s most knowledgeable yoga teachers, particularly when it comes to teacher training. His unique style is a blend of the traditions he has studied and practiced including Hatha, Iyengar, Ashtanga Vinyasa and Anusara through which he was first trained as a teacher.'
              label='Noah Maze.'
              path=''
            />
          </ul>
          <h1>Reviews</h1>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI='
              text='I finally have found a studio that is so welcoming and makes me feel happy and excited to work out. Everyone is so wonderful and supportive. I’m getting fit and just gaining so much more confidence'
              label='Review 1'
              path=''
             />
            <CardItem
              src='https://thumbs.dreamstime.com/b/fat-happy-man-pleased-himself-proper-nutrition-weight-loss-131695038.jpg'
              text='NomadicMonk is a place where you can be yourself and work on improving without feeling judged. The staff are extremely friendly and helpful! Such a great selection of classes!'
              label='Review 2'
              path=''
            />
            <CardItem
              src='https://thumbs.dreamstime.com/b/grateful-happy-african-man-holding-hands-chest-feeling-appreciation-pleased-to-heart-love-gratitude-honesty-thankful-sincere-138433528.jpg'
              text='The instructor was delightful and the class was so much fun! I have sung your praises to many of my friends this week and look forward to seeing you all next week. Not only was the class a welcoming place to be, but the environment at your studio as a whole was so pleasant – it made me feel right at home.'
              label='Review 3'
              path=''
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
