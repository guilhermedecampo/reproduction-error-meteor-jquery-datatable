/*****************************************************************************/
/* TableOrder: Event Handlers and Helpers */
/*****************************************************************************/
Template.TableOrder.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.TableOrder.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* TableOrder: Lifecycle Hooks */
/*****************************************************************************/
Template.TableOrder.created = function () {
};

Template.TableOrder.rendered = function () {
};

Template.TableOrder.destroyed = function () {
};


Template.TableOrder.order = function() {
  return {
    id: "OrderTable",
    columns: [
      // {
      //   title: "Changes & Groom",
      //   data: null,
      //   mRender: function(data, type, row) {
      //     return '<a href="#" id="'+ row._id + '" class="changeOrder" data-toggle="modal" data-target="#modalChangeOrder">Access <span class="glyphicon glyphicon-fire"></span></a>';
      //   }
      // },
      {
        title: "title",
        data: "title"
      },
      {
        title: "local",
        data: "local"
      },
      // {
      //   title: "subscribed",
      //   data: "subscribed",
      //   mRender: function(data, type, row) {
      //     if (row.subscribed === undefined) {
      //       row.subscribed = "";
      //     }
      //     if (row.subscribed) {
      //       return subscribed.length;
      //     } else {
      //       return row.subscribed;
      //     }
      //   }
      // },
      {
        title: "Order Date",
        data: "createDate",
        mRender: function(data, type, row) {
          if (row.createDate === undefined) {
            row.createDate = "";
          }
          if (row.createDate) {
            return moment(row.createDate).format('DD/MM/YYYY');
          } else {
            return row.createDate;
          }
        }
      },
      {
        title: "Delete",
        data: null,
        mRender: function(data, type, row) {
          return '<span id="'+ row._id + '" class="glyphicon glyphicon-remove-circle removeOrder"></span>';
        }
      },
    ],
    subscription: "order_table"
  };
};