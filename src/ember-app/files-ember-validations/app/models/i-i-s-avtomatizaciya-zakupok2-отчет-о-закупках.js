import {
  defineNamespace,
  defineProjections,
  Model as ОтчетОЗакупкахMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчетОЗакупкахMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
