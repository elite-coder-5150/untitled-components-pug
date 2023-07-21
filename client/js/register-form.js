System.register("register-form", [], function (exports_1, context_1) {
    "use strict";
    var RegisterForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            RegisterForm = /** @class */ (function () {
                function RegisterForm(email, password, confirmPassword) {
                    this.email = email;
                    this.password = password;
                    this.confirmPassword = confirmPassword;
                    this.isValid = false;
                }
                RegisterForm.prototype.onSubmit = function () {
                    this.email = this.email.valueOf();
                    this.password = this.password.valueOf();
                    this.confirmPassword = this.confirmPassword.valueOf();
                    if (this.password === this.confirmPassword) {
                        this.isValid = true;
                    }
                };
                return RegisterForm;
            }());
            exports_1("RegisterForm", RegisterForm);
        }
    };
});
