var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.init = function () {
        this.cacheDom();
        this.initEvents();
    };
    App.prototype.cacheDom = function () {
        this.button = document.querySelector('button');
        this.dropdown = document.querySelector('.dropdown');
        this.icon = document.querySelector('.dropdown-icon');
    };
    App.prototype.initEvents = function () {
        var _this = this;
        this.button.addEventListener('click', function () {
            _this.rotateIcon();
            _this.toggleDropdown();
        });
    };
    App.prototype.toggleDropdown = function () {
        this.dropdown.classList.toggle('is-active');
    };
    App.prototype.rotateIcon = function () {
        this.icon.classList.toggle('rotated');
    };
    return App;
}());
var app = new App();
app.init();
