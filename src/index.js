import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  return goods.filter((item) => brand === item.brand);
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  return goods.filter((item) => color === item.color);
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  return goods.filter((item) => model === item.model);
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter((item) => memory === item.memory);
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter((item) => price === item.price);
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter((item) => country === item.country);
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  return goods.filter((item) => os === item.os);
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) =>
  goods.filter((item) => {
    return from <= item.price && item.price <= to;
  });

const minPriceReducer = () => {
  return goods.reduce((acc, item) => {
    return acc < item.price ? acc : item.price;
  }, Infinity);
};

const maxPriceReducer = () => {
  return goods.reduce((acc, item) => {
    return acc > item.price ? acc : item.price;
  }, -Infinity);
};

const toMaxSorter = () => {
  return goods.sort((a, b) => b.price - a.price);
};
const toMinSorter = () => {
  return goods.sort((a, b) => a.price - b.price);
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
