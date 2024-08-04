import EventBox from './EventBox';
import SectionHeader from '../SectionHeader';

const getEvents = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return [];
  }
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
