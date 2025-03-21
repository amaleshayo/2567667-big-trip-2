import AbstractView from '../framework/view/abstract-view.js';
import { SortType } from '../const.js';

function createSortTemplate() {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.DAY}" data-sort-type="${SortType.DAY}" checked>
        <label class="trip-sort__btn" for="sort-day">Day</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.TIME}" data-sort-type="${SortType.TIME}">
        <label class="trip-sort__btn" for="sort-time">Time</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.PRICE}" data-sort-type="${SortType.PRICE}">
        <label class="trip-sort__btn" for="sort-price">Price</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    </form>
  `;
}

export default class SortView extends AbstractView {
  #onSortChange = null;

  constructor({ onSortChange }) {
    super();
    this.#onSortChange = onSortChange;

    this.element.addEventListener('change', this.#handleSortChange);
  }

  get template() {
    return createSortTemplate();
  }

  #handleSortChange = (evt) => {
    if (evt.target.tagName === 'INPUT') {
      const sortType = evt.target.dataset.sortType;
      this.#onSortChange(sortType);
    }
  };
}
