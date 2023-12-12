import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avtomatizaciya-zakupok2-единицы-измер-l');
  this.route('i-i-s-avtomatizaciya-zakupok2-единицы-измер-e',
  { path: 'i-i-s-avtomatizaciya-zakupok2-единицы-измер-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok2-единицы-измер-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok2-единицы-измер-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok2-заказ-пост-l');
  this.route('i-i-s-avtomatizaciya-zakupok2-заказ-пост-e',
  { path: 'i-i-s-avtomatizaciya-zakupok2-заказ-пост-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok2-заказ-пост-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok2-заказ-пост-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok2-контрагенты-l');
  this.route('i-i-s-avtomatizaciya-zakupok2-контрагенты-e',
  { path: 'i-i-s-avtomatizaciya-zakupok2-контрагенты-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok2-контрагенты-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok2-контрагенты-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok2-номенклатура-l');
  this.route('i-i-s-avtomatizaciya-zakupok2-номенклатура-e',
  { path: 'i-i-s-avtomatizaciya-zakupok2-номенклатура-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok2-номенклатура-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok2-номенклатура-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok2-организации-l');
  this.route('i-i-s-avtomatizaciya-zakupok2-организации-e',
  { path: 'i-i-s-avtomatizaciya-zakupok2-организации-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok2-организации-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok2-организации-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-l');
  this.route('i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-e',
  { path: 'i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok2-план-закупок-l');
  this.route('i-i-s-avtomatizaciya-zakupok2-план-закупок-e',
  { path: 'i-i-s-avtomatizaciya-zakupok2-план-закупок-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok2-план-закупок-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok2-план-закупок-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok2-склады-l');
  this.route('i-i-s-avtomatizaciya-zakupok2-склады-e',
  { path: 'i-i-s-avtomatizaciya-zakupok2-склады-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok2-склады-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok2-склады-e/new' });
});

export default Router;
