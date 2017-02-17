function OrderFormController() {
    this.products = [{
        label: "Product 1",
        id: 1,
    },{
        label: "Product 2",
        id: 2,
    },{
        label: "Product 3",
        id: 3,
    }];
    this.onSubmit = function() {
        this.submit();
    }
}

angular
    .module('app')
    .controller('OrderFormController', OrderFormController);