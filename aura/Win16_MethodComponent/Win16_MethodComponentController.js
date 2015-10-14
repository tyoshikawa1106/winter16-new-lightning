({
  handleClick : function(cmp, event) {
    console.log("in handleClick");
    cmp.sampleMethod("1");
  },

  doAction : function(cmp, event) {
    var params = event.getParam('arguments');
    if (params) {
      console.log("Boolean: " + params.showDetail);
      console.log("Date: " + params.startDate);
      console.log("DateTime: " + params.lastModifiedDate);
      console.log("Decimal: " + params.totalPrice);
      console.log("Double: " + params.widthInchesFractional);
      console.log("Integer: " + params.numRecords);
      console.log("Long: " + params.numSwissBankAccount);
      console.log("String: " + params.message);
      console.log("String[]: " + params.strings); // no support
    }
  },
})