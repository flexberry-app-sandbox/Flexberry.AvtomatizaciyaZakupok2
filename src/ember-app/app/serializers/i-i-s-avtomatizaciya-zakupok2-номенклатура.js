import { Serializer as НоменклатураSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-zakupok2-номенклатура';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НоменклатураSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
