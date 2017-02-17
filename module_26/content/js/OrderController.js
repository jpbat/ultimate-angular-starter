function OrderController() {
    this.orderQuantity = 5;
    this.orderName = "Pepsi";
}

angular
    .module('app')
    .controller('OrderController', OrderController);