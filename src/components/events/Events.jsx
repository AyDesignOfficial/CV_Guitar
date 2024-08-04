import EventBox from './EventBox';
import SectionHeader from '../SectionHeader';

const getEvents = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`);
  return res.json();
};


const Events = async () => {
  const events = await getEvents();

  return (
    <section className='section' id='tours'>
      <div className='container mx-auto'>
        <SectionHeader pretitle='World Tour' title='Upcoming Events' />
        {/* event box */}
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;
