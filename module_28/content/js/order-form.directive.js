function orderForm() {
    return {
        scope: {},
        bindToController: {
            data: '=',
            submit: '&',
        },
        restrict: 'E',
        controller: 'OrderFormController as form',
        template: `
            <pre>{{ form.data | json }}</pre>
            <pre>{{ orderForm | json }}</pre>
            <form name="orderForm" novalidate ng-submit="form.onSubmit();">
                <input name="name" required="" type="text" ng-model="form.data.name" placeholder="Your name">
                <input name="email" required="" type="email" ng-model="form.data.email" placeholder="Your email">
                <input name="location" required="" type="text" ng-model="form.data.location" placeholder="Your location">
                <select>
                    <option value="">Select...</option>
                </select>
                <textarea placeholder="Any messages (optional)" required="" ng-model="form.data.comments"></textarea>
                <button type="submit">Order</button>
            </form>
        `,
    };
}

angular
    .module('app')
    .directive('orderForm', orderForm);