import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках', 'Unit | Serializer | i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-avtomatizaciya-zakupok2-сост-оплаты',
    'transform:i-i-s-avtomatizaciya-zakupok2-сост-поставок',

    'model:i-i-s-avtomatizaciya-zakupok2-единицы-измер',
    'model:i-i-s-avtomatizaciya-zakupok2-заказ-пост',
    'model:i-i-s-avtomatizaciya-zakupok2-контрагенты',
    'model:i-i-s-avtomatizaciya-zakupok2-номенклатура',
    'model:i-i-s-avtomatizaciya-zakupok2-организации',
    'model:i-i-s-avtomatizaciya-zakupok2-отчет-о-закупках',
    'model:i-i-s-avtomatizaciya-zakupok2-план-закупок',
    'model:i-i-s-avtomatizaciya-zakupok2-план',
    'model:i-i-s-avtomatizaciya-zakupok2-склады',
    'model:i-i-s-avtomatizaciya-zakupok2-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
