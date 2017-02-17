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
         console.log("Submitted!");
    };
}

angular
    .module('app')
    .controller('OrderController', OrderController);