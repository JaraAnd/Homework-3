(function(window) {
    "use strict";
    var FORM_SELECTOR = "[data-coffee-order='form']";
    var CHECKLIST_SELECTOR = "[data-coffee-order='checklist']";
    var Truck = App.Truck;
    var CheckList = App.CheckList;
    var myTruck = new Truck("ncc-1701", new DataStore());
    var DataStore = App.DataStore;
    var App = window.App;
    var FormHandler = App.FormHandler;
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);
  
    formHandler.addSubmitHandler(function(data) {
      myTruck.createOrder.call(myTruck, data);
      checkList.addRow.call(checkList, data);
    });
  

  
  })(window);