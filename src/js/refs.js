export default {
  searchForm: document.querySelector('#search-form'),
  eventList: document.querySelector('#event-list-js'),
  scrollToTop: document.querySelector('.btn__scrolltotop'),
  select: document.querySelector('.select'),
  selectItem: document.querySelectorAll('.select__item'),
  modalContainer: document.querySelector('.modal-container--js'),
  modalCard: document.querySelector('.modal-container'),
  cardList: document.querySelector('.event__list--js'),
  backdrop: document.querySelector('.backdrop'),
  selectCurrent: document.querySelector('.select__current'),
  moreFromAuthorBtn: document.querySelector('.modal__more-from-btn'),
  paginationBtn: document.querySelector('.pagination-pages'),
  paginationCont: document.querySelector('.pagination-container'),
  moreBtn: document.querySelector('.pagination__more-horiz'),
  lessBtn: document.querySelector('.pagination__less-horiz'),
  pageButtons: [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
  ],
  pagBtnList: document.getElementById('pagination'),
  allPagNumber: document.querySelector('pagination__page-all'),
  filterContainer: document.querySelector('.filter-container'),
};