import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISAvtomatizaciya_zakupok2ЕдиницыИзмерLForm from './forms/i-i-s-avtomatizaciya-zakupok2-единицы-измер-l';
import IISAvtomatizaciya_zakupok2ЗаказПостLForm from './forms/i-i-s-avtomatizaciya-zakupok2-заказ-пост-l';
import IISAvtomatizaciya_zakupok2КонтрагентыLForm from './forms/i-i-s-avtomatizaciya-zakupok2-контрагенты-l';
import IISAvtomatizaciya_zakupok2НоменклатураLForm from './forms/i-i-s-avtomatizaciya-zakupok2-номенклатура-l';
import IISAvtomatizaciya_zakupok2ОрганизацииLForm from './forms/i-i-s-avtomatizaciya-zakupok2-организации-l';
import IISAvtomatizaciya_zakupok2ОтчетОЗакупкахLForm from './forms/i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-l';
import IISAvtomatizaciya_zakupok2ПланЗакупокLForm from './forms/i-i-s-avtomatizaciya-zakupok2-план-закупок-l';
import IISAvtomatizaciya_zakupok2СкладыLForm from './forms/i-i-s-avtomatizaciya-zakupok2-склады-l';
import IISAvtomatizaciya_zakupok2ЕдиницыИзмерEForm from './forms/i-i-s-avtomatizaciya-zakupok2-единицы-измер-e';
import IISAvtomatizaciya_zakupok2ЗаказПостEForm from './forms/i-i-s-avtomatizaciya-zakupok2-заказ-пост-e';
import IISAvtomatizaciya_zakupok2КонтрагентыEForm from './forms/i-i-s-avtomatizaciya-zakupok2-контрагенты-e';
import IISAvtomatizaciya_zakupok2НоменклатураEForm from './forms/i-i-s-avtomatizaciya-zakupok2-номенклатура-e';
import IISAvtomatizaciya_zakupok2ОрганизацииEForm from './forms/i-i-s-avtomatizaciya-zakupok2-организации-e';
import IISAvtomatizaciya_zakupok2ОтчетОЗакупкахEForm from './forms/i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-e';
import IISAvtomatizaciya_zakupok2ПланЗакупокEForm from './forms/i-i-s-avtomatizaciya-zakupok2-план-закупок-e';
import IISAvtomatizaciya_zakupok2СкладыEForm from './forms/i-i-s-avtomatizaciya-zakupok2-склады-e';
import IISAvtomatizaciya_zakupok2ЕдиницыИзмерModel from './models/i-i-s-avtomatizaciya-zakupok2-единицы-измер';
import IISAvtomatizaciya_zakupok2ЗаказПостModel from './models/i-i-s-avtomatizaciya-zakupok2-заказ-пост';
import IISAvtomatizaciya_zakupok2КонтрагентыModel from './models/i-i-s-avtomatizaciya-zakupok2-контрагенты';
import IISAvtomatizaciya_zakupok2НоменклатураModel from './models/i-i-s-avtomatizaciya-zakupok2-номенклатура';
import IISAvtomatizaciya_zakupok2ОрганизацииModel from './models/i-i-s-avtomatizaciya-zakupok2-организации';
import IISAvtomatizaciya_zakupok2ОтчетОЗакупкахModel from './models/i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках';
import IISAvtomatizaciya_zakupok2ПланЗакупокModel from './models/i-i-s-avtomatizaciya-zakupok2-план-закупок';
import IISAvtomatizaciya_zakupok2ПланModel from './models/i-i-s-avtomatizaciya-zakupok2-план';
import IISAvtomatizaciya_zakupok2СкладыModel from './models/i-i-s-avtomatizaciya-zakupok2-склады';
import IISAvtomatizaciya_zakupok2ТЧЗаказModel from './models/i-i-s-avtomatizaciya-zakupok2-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-zakupok2-единицы-измер': IISAvtomatizaciya_zakupok2ЕдиницыИзмерModel,
    'i-i-s-avtomatizaciya-zakupok2-заказ-пост': IISAvtomatizaciya_zakupok2ЗаказПостModel,
    'i-i-s-avtomatizaciya-zakupok2-контрагенты': IISAvtomatizaciya_zakupok2КонтрагентыModel,
    'i-i-s-avtomatizaciya-zakupok2-номенклатура': IISAvtomatizaciya_zakupok2НоменклатураModel,
    'i-i-s-avtomatizaciya-zakupok2-организации': IISAvtomatizaciya_zakupok2ОрганизацииModel,
    'i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках': IISAvtomatizaciya_zakupok2ОтчетОЗакупкахModel,
    'i-i-s-avtomatizaciya-zakupok2-план-закупок': IISAvtomatizaciya_zakupok2ПланЗакупокModel,
    'i-i-s-avtomatizaciya-zakupok2-план': IISAvtomatizaciya_zakupok2ПланModel,
    'i-i-s-avtomatizaciya-zakupok2-склады': IISAvtomatizaciya_zakupok2СкладыModel,
    'i-i-s-avtomatizaciya-zakupok2-т-ч-заказ': IISAvtomatizaciya_zakupok2ТЧЗаказModel
  },

  'application-name': 'Avtomatizaciya_zakupki',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_zakupki',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_zakupki',
          title: 'Avtomatizaciya_zakupki'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'автоматизация-закупок': {
          caption: 'Автоматизация закупок',
          title: 'Автоматизация закупок',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-avtomatizaciya-zakupok2-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok2-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok2-номенклатура-l': {
              caption: 'Номенклатура',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok2-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok2-единицы-измер-l': {
              caption: 'Единицы измерения',
              title: ''
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-avtomatizaciya-zakupok2-план-закупок-l': {
              caption: 'План закупок',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok2-заказ-пост-l': {
              caption: 'Заказ поставщику',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-l': {
              caption: 'Отчет о закупках',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-avtomatizaciya-zakupok2-единицы-измер-l': IISAvtomatizaciya_zakupok2ЕдиницыИзмерLForm,
    'i-i-s-avtomatizaciya-zakupok2-заказ-пост-l': IISAvtomatizaciya_zakupok2ЗаказПостLForm,
    'i-i-s-avtomatizaciya-zakupok2-контрагенты-l': IISAvtomatizaciya_zakupok2КонтрагентыLForm,
    'i-i-s-avtomatizaciya-zakupok2-номенклатура-l': IISAvtomatizaciya_zakupok2НоменклатураLForm,
    'i-i-s-avtomatizaciya-zakupok2-организации-l': IISAvtomatizaciya_zakupok2ОрганизацииLForm,
    'i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-l': IISAvtomatizaciya_zakupok2ОтчетОЗакупкахLForm,
    'i-i-s-avtomatizaciya-zakupok2-план-закупок-l': IISAvtomatizaciya_zakupok2ПланЗакупокLForm,
    'i-i-s-avtomatizaciya-zakupok2-склады-l': IISAvtomatizaciya_zakupok2СкладыLForm,
    'i-i-s-avtomatizaciya-zakupok2-единицы-измер-e': IISAvtomatizaciya_zakupok2ЕдиницыИзмерEForm,
    'i-i-s-avtomatizaciya-zakupok2-заказ-пост-e': IISAvtomatizaciya_zakupok2ЗаказПостEForm,
    'i-i-s-avtomatizaciya-zakupok2-контрагенты-e': IISAvtomatizaciya_zakupok2КонтрагентыEForm,
    'i-i-s-avtomatizaciya-zakupok2-номенклатура-e': IISAvtomatizaciya_zakupok2НоменклатураEForm,
    'i-i-s-avtomatizaciya-zakupok2-организации-e': IISAvtomatizaciya_zakupok2ОрганизацииEForm,
    'i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках-e': IISAvtomatizaciya_zakupok2ОтчетОЗакупкахEForm,
    'i-i-s-avtomatizaciya-zakupok2-план-закупок-e': IISAvtomatizaciya_zakupok2ПланЗакупокEForm,
    'i-i-s-avtomatizaciya-zakupok2-склады-e': IISAvtomatizaciya_zakupok2СкладыEForm
  },

});

export default translations;
