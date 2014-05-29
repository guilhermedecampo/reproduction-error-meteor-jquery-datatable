/*****************************************************************************/
/* Order Publish Functions
/*****************************************************************************/

OrderTable = new DataTableComponent({
  id: "OrderTable",
  subscription: "order_table",
  collection: Order
});

OrderTable.publish();