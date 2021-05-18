import EventsApiService from '../scripts/api-service.js';
import { loader } from '../scripts/loader.js';
import { eventsMarkUp } from '../scripts/mark-up.js';
import { scrollToTop } from '../page-segments/back-to-top-btn.js';
import refs from '../refs.js';

const eventsApiService = new EventsApiService();

const createEvents = (array) => {
  const events = array.filter(obj => obj.type === "event");

  return events;
}

const createAttr = (array) => {
  const attractions = array.filter(obj => obj.type === "attraction");

  return attractions;
}

const createVenues = (array) => {
  const venues = array.filter(obj => obj.type === "venue");

  return venues;
}

const filterArray = (array, type) => {

  if (type === "attractions") {
    
    return createAttr(array);
  }

  if (type === "venues") {
    return createVenues(array);
  }

  if (type === "events") {
    return createEvents(array);
  }

  return createEvents(array);
}


const searchEvents = async () => {
  const response = await eventsApiService.mainFetch();
  localStorage.setItem('array', JSON.stringify(response));
  // JSON.parse(localStorage.getItem('array'));
  // const array = filterArray(response);

  eventsMarkUp(response);
};

const onSearch = e => {
  refs.paginationCont.classList.remove('visually-hidden');
  let page;
  e.preventDefault();
  loader.show();
  localStorage.setItem('query', e.currentTarget.elements.query.value.trim());
  eventsApiService.query = localStorage.getItem('query');
  eventsApiService.page = page;
    e.currentTarget.elements.query.value = '';
  searchEvents();
};

const pagination = e => {
  const page = Number(e.target.textContent);
  
  loader.show();
  eventsApiService.query = localStorage.getItem('query');
  eventsApiService.page = page;

  searchEvents();
  setActiveBtn(e);
  scrollToTop();
};

const setActiveBtn = (e) => {
  const ul = e.currentTarget.children[0].children;
  
  ul.forEach(li => {
    if (li.children[0].classList.contains('is-active')) {
      li.children[0].classList.remove('is-active')
    }
  });
  e.target.classList.add('is-active');
}

export { searchEvents, onSearch, pagination, filterArray };
