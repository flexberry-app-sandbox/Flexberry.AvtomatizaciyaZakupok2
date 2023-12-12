import { Serializer as ЗаказПостSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-zakupok2-заказ-пост';
import ОтчетОЗакупкахSerializer from './i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках';

export default ОтчетОЗакупкахSerializer.extend(ЗаказПостSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
