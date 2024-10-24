import {render, RenderPosition} from '../src/framework/render.js';
// import {render, RenderPosition} from './render.js';
import TripMainInfoView from './view/info-view.js';
import TripFiltersView from './view/filters-view.js';
import Board from './presenter/board.js';
import PointsModel from './model/points-model.js';
import { generateFilter } from './mock/filter.js';


const siteMainSortElement = document.querySelector('.trip-events');
const siteMainFiltersElement = document.querySelector('.trip-controls__filters');
const siteMainInfoElement = document.querySelector('.trip-main');
const pointsModel = new PointsModel();

const filters = generateFilter(pointsModel.point);

render(new TripMainInfoView(), siteMainInfoElement , RenderPosition.AFTERBEGIN);
render(new TripFiltersView({filters}), siteMainFiltersElement , RenderPosition.AFTERBEGIN);

const BoardPresenter = new Board({boardContainer: siteMainSortElement, pointsModel});

BoardPresenter.init();
