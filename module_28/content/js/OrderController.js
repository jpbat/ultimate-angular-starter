function OrderController() {
    this.costumerOrder = {
        name: "",
        email: "",
        location: "",
        product: {
            label: "",
            id: "",
        },
        comments: "",
    };
    this.submitOrder = function() {

    };
}

angular
    .module('app')
    .controller('OrderController', OrderController);