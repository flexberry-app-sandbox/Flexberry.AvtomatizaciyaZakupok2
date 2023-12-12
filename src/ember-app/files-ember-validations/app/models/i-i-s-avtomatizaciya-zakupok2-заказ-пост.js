import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказПостMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok2-заказ-пост';

import ОтчетОЗакупкахModel from './i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках';

let Model = ОтчетОЗакупкахModel.extend(ЗаказПостMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
