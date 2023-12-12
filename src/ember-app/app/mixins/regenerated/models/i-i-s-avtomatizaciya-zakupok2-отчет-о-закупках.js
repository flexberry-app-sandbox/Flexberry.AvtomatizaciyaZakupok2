import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  контрагент: DS.attr('string'),
  номер: DS.attr('number'),
  организация: DS.attr('string'),
  склад: DS.attr('string'),
  состОтгрузки: DS.attr('i-i-s-avtomatizaciya-zakupok2-сост-поставок'),
  состояниеОплаты: DS.attr('i-i-s-avtomatizaciya-zakupok2-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number')
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОЗакупкахE', 'i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках', {
    номер: attr('', { index: 0 }),
    датаНачала: attr('', { index: 1 }),
    датаОкончания: attr('', { index: 2 }),
    организация: attr('', { index: 3 }),
    склад: attr('', { index: 4 }),
    контрагент: attr('', { index: 5 }),
    состОтгрузки: attr('', { index: 6 }),
    состояниеОплаты: attr('', { index: 7 }),
    суммаВклНДС: attr('', { index: 8 }),
    суммаДокумента: attr('', { index: 9 })
  });

  modelClass.defineProjection('ОтчетОЗакупкахL', 'i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках', {
    номер: attr('', { index: 0 }),
    датаНачала: attr('', { index: 1 }),
    датаОкончания: attr('', { index: 2 }),
    организация: attr('', { index: 3 }),
    склад: attr('', { index: 4 }),
    контрагент: attr('', { index: 5 }),
    состОтгрузки: attr('', { index: 6 }),
    состояниеОплаты: attr('', { index: 7 }),
    суммаВклНДС: attr('', { index: 8 }),
    суммаДокумента: attr('', { index: 9 })
  });
};
