(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Learning\learningAngular\angular-weather\src\main.ts */"zUnb");


/***/ }),

/***/ "4DaU":
/*!**************************************!*\
  !*** ./src/app/pipes/string.pipe.ts ***!
  \**************************************/
/*! exports provided: StringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringPipe", function() { return StringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StringPipe {
    transform(value) {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
}
StringPipe.ɵfac = function StringPipe_Factory(t) { return new (t || StringPipe)(); };
StringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "string", type: StringPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'string'
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiKey: 'cfc89786c6705ea8a7b2ba2590107043',
    apiUrl: `https://api.openweathermap.org`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GBPO":
/*!*******************************************************!*\
  !*** ./src/app/components/cities/cities.component.ts ***!
  \*******************************************************/
/*! exports provided: CitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent", function() { return CitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTimes */ "4+EV");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main.service */ "c/rV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






function CitiesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CitiesComponent_ng_template_1_div_0_div_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CitiesComponent_ng_template_1_div_0_div_2_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const city_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.getWeather(city_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CitiesComponent_ng_template_1_div_0_div_2_li_1_Template_fa_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const city_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.deleteCity($event, city_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r13.activeCity === city_r12.id ? "active-li" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r13.faTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://openweathermap.org/img/w/", city_r12.weather.weather.icon, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CitiesComponent_ng_template_1_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CitiesComponent_ng_template_1_div_0_div_2_li_1_Template, 4, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", city_r12.active);
} }
function CitiesComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CitiesComponent_ng_template_1_div_0_div_2_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.citiesFromLocal);
} }
function CitiesComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043E\u0431\u0430\u0432\u0442\u0435 \u0441\u044E\u0434\u0430 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0435 \u0432\u0430\u0441 \u0433\u043E\u0440\u043E\u0434\u0430...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CitiesComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CitiesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CitiesComponent_ng_template_1_div_0_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CitiesComponent_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CitiesComponent_ng_template_1_div_3_Template, 3, 0, "div", 18);
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.citiesFromLocal.length)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.buttonActive);
} }
function CitiesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E\u0442 \u0433\u043E\u0440\u043E\u0434 \u0443\u0436\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CitiesComponent_div_15_div_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CitiesComponent_div_15_div_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const city_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.addCity(city_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r21.name);
} }
function CitiesComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CitiesComponent_div_15_div_1_li_1_Template, 2, 1, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", city_r21.active);
} }
function CitiesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CitiesComponent_div_15_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.citiesFromJson);
} }
function CitiesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CitiesComponent {
    constructor(mainService) {
        this.mainService = mainService;
        // Иконка закрытия
        this.faTime = _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
        // Показывать ли кнопку
        this.buttonActive = false;
        // Ошибка в модальном окне
        this.modalError = false;
        this.mainService.citiesFromJson.subscribe((cities) => {
            this.citiesFromJson = cities;
            if (this.citiesFromJson.length === this.idsFromLocal.length) {
                this.buttonActive = false;
            }
        });
        this.mainService.citiesFromJsonLoading.subscribe((loading) => {
            this.citiesFromJsonLoading = loading;
        });
        this.mainService.citiesFromLocal.subscribe((cities) => {
            this.citiesFromLocal = cities;
        });
        this.mainService.citiesFromLocalLoading.subscribe((loading) => {
            this.citiesFromLocalLoading = loading;
        });
        this.mainService.idsFromLocal.subscribe((arr) => {
            this.idsFromLocal = arr;
        });
        this.mainService.activeCity.subscribe((city) => {
            this.activeCity = city;
        });
        this.mainService.buttonActive.subscribe((active) => {
            this.buttonActive = active;
        });
    }
    ngOnInit() {
        this.mainService.getCitiesFromJson();
        this.mainService.getCitiesFromLocal();
    }
    // Вывод погоды
    // tslint:disable-next-line:typedef
    getWeather(city) {
        this.mainService.getWeather(city);
    }
    // Удаление города из быстрой панели
    // tslint:disable-next-line:typedef
    deleteCity(event, city) {
        // Отменяем всплытие
        event.stopPropagation();
        this.mainService.deleteCityFromLocal(city);
    }
    // Добавление города в быструю панель
    // tslint:disable-next-line:typedef
    addCity(city) {
        if (this.idsFromLocal) {
            if (this.idsFromLocal.indexOf(city.id) === -1) {
                $(`#modal`).modal(`hide`);
                this.mainService.addCityToLocal(city);
            }
            else {
                this.modalError = true;
                setTimeout(() => this.modalError = false, 1500);
            }
        }
        else {
            $(`#modal`).modal(`hide`);
            this.mainService.addCityToLocal(city);
        }
    }
}
CitiesComponent.ɵfac = function CitiesComponent_Factory(t) { return new (t || CitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"])); };
CitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CitiesComponent, selectors: [["app-cities"]], decls: 18, vars: 5, consts: [[4, "ngIf", "ngIfElse"], ["titleCity", ""], ["id", "modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], ["class", "alert alert-danger", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "list-group"], ["loading", ""], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"], ["class", "pb-4", 4, "ngIf", "ngIfElse"], ["cityList", ""], [4, "ngIf"], [1, "pb-4"], [1, "list-group", "city-ul"], ["class", "rounded", 4, "ngFor", "ngForOf"], [1, "rounded"], ["type", "button", "class", "list-group-item city-li m-1", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "list-group-item", "city-li", "m-1", 3, "ngClass", "click"], [1, "close-icon", 3, "icon", "click"], [1, "weather-icon", 3, "src"], [1, "lead", "second-title", "py-4"], ["type", "button", "data-toggle", "modal", "data-target", "#modal", 1, "btn", "btn-outline-primary", "btn-block"], [1, "alert", "alert-danger"], ["type", "button", "class", "list-group-item list-group-item-action my-1 modal-li", 3, "click", 4, "ngIf"], ["type", "button", 1, "list-group-item", "list-group-item-action", "my-1", "modal-li", 3, "click"]], template: function CitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CitiesComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CitiesComponent_ng_template_1_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CitiesComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043F\u0438\u0441\u043E\u043A \u0433\u043E\u0440\u043E\u0434\u043E\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CitiesComponent_div_15_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CitiesComponent_ng_template_16_Template, 4, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.citiesFromLocalLoading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.citiesFromJsonLoading)("ngIfElse", _r5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["@font-face {\n  font-family: 'FontAwesome';\n  src: url('fontawesome-webfont.eot?v=4.7.0');\n  src: url('fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('fontawesome-webfont.woff?v=4.7.0') format('woff'), url('fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa[_ngcontent-%COMP%] {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fa-lg[_ngcontent-%COMP%] {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.fa-3x[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n.fa-4x[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\n.fa-5x[_ngcontent-%COMP%] {\n  font-size: 5em;\n}\n.fa-fw[_ngcontent-%COMP%] {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fa-li[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg[_ngcontent-%COMP%] {\n  left: -1.85714286em;\n}\n.fa-border[_ngcontent-%COMP%] {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.fa-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.fa.fa-pull-left[_ngcontent-%COMP%] {\n  margin-right: .3em;\n}\n.fa.fa-pull-right[_ngcontent-%COMP%] {\n  margin-left: .3em;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.fa.pull-left[_ngcontent-%COMP%] {\n  margin-right: .3em;\n}\n.fa.pull-right[_ngcontent-%COMP%] {\n  margin-left: .3em;\n}\n.fa-spin[_ngcontent-%COMP%] {\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse[_ngcontent-%COMP%] {\n  animation: fa-spin 1s infinite steps(8);\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg);\n}\n.fa-rotate-180[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg);\n}\n.fa-rotate-270[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1);\n}\n[_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%] {\n  filter: none;\n}\n.fa-stack[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x[_ngcontent-%COMP%] {\n  line-height: inherit;\n}\n.fa-stack-2x[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.fa-inverse[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.fa-glass[_ngcontent-%COMP%]:before {\n  content: \"\\f000\";\n}\n.fa-music[_ngcontent-%COMP%]:before {\n  content: \"\\f001\";\n}\n.fa-search[_ngcontent-%COMP%]:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o[_ngcontent-%COMP%]:before {\n  content: \"\\f003\";\n}\n.fa-heart[_ngcontent-%COMP%]:before {\n  content: \"\\f004\";\n}\n.fa-star[_ngcontent-%COMP%]:before {\n  content: \"\\f005\";\n}\n.fa-star-o[_ngcontent-%COMP%]:before {\n  content: \"\\f006\";\n}\n.fa-user[_ngcontent-%COMP%]:before {\n  content: \"\\f007\";\n}\n.fa-film[_ngcontent-%COMP%]:before {\n  content: \"\\f008\";\n}\n.fa-th-large[_ngcontent-%COMP%]:before {\n  content: \"\\f009\";\n}\n.fa-th[_ngcontent-%COMP%]:before {\n  content: \"\\f00a\";\n}\n.fa-th-list[_ngcontent-%COMP%]:before {\n  content: \"\\f00b\";\n}\n.fa-check[_ngcontent-%COMP%]:before {\n  content: \"\\f00c\";\n}\n.fa-remove[_ngcontent-%COMP%]:before, .fa-close[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus[_ngcontent-%COMP%]:before {\n  content: \"\\f010\";\n}\n.fa-power-off[_ngcontent-%COMP%]:before {\n  content: \"\\f011\";\n}\n.fa-signal[_ngcontent-%COMP%]:before {\n  content: \"\\f012\";\n}\n.fa-gear[_ngcontent-%COMP%]:before, .fa-cog[_ngcontent-%COMP%]:before {\n  content: \"\\f013\";\n}\n.fa-trash-o[_ngcontent-%COMP%]:before {\n  content: \"\\f014\";\n}\n.fa-home[_ngcontent-%COMP%]:before {\n  content: \"\\f015\";\n}\n.fa-file-o[_ngcontent-%COMP%]:before {\n  content: \"\\f016\";\n}\n.fa-clock-o[_ngcontent-%COMP%]:before {\n  content: \"\\f017\";\n}\n.fa-road[_ngcontent-%COMP%]:before {\n  content: \"\\f018\";\n}\n.fa-download[_ngcontent-%COMP%]:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before {\n  content: \"\\f01b\";\n}\n.fa-inbox[_ngcontent-%COMP%]:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right[_ngcontent-%COMP%]:before, .fa-repeat[_ngcontent-%COMP%]:before {\n  content: \"\\f01e\";\n}\n.fa-refresh[_ngcontent-%COMP%]:before {\n  content: \"\\f021\";\n}\n.fa-list-alt[_ngcontent-%COMP%]:before {\n  content: \"\\f022\";\n}\n.fa-lock[_ngcontent-%COMP%]:before {\n  content: \"\\f023\";\n}\n.fa-flag[_ngcontent-%COMP%]:before {\n  content: \"\\f024\";\n}\n.fa-headphones[_ngcontent-%COMP%]:before {\n  content: \"\\f025\";\n}\n.fa-volume-off[_ngcontent-%COMP%]:before {\n  content: \"\\f026\";\n}\n.fa-volume-down[_ngcontent-%COMP%]:before {\n  content: \"\\f027\";\n}\n.fa-volume-up[_ngcontent-%COMP%]:before {\n  content: \"\\f028\";\n}\n.fa-qrcode[_ngcontent-%COMP%]:before {\n  content: \"\\f029\";\n}\n.fa-barcode[_ngcontent-%COMP%]:before {\n  content: \"\\f02a\";\n}\n.fa-tag[_ngcontent-%COMP%]:before {\n  content: \"\\f02b\";\n}\n.fa-tags[_ngcontent-%COMP%]:before {\n  content: \"\\f02c\";\n}\n.fa-book[_ngcontent-%COMP%]:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark[_ngcontent-%COMP%]:before {\n  content: \"\\f02e\";\n}\n.fa-print[_ngcontent-%COMP%]:before {\n  content: \"\\f02f\";\n}\n.fa-camera[_ngcontent-%COMP%]:before {\n  content: \"\\f030\";\n}\n.fa-font[_ngcontent-%COMP%]:before {\n  content: \"\\f031\";\n}\n.fa-bold[_ngcontent-%COMP%]:before {\n  content: \"\\f032\";\n}\n.fa-italic[_ngcontent-%COMP%]:before {\n  content: \"\\f033\";\n}\n.fa-text-height[_ngcontent-%COMP%]:before {\n  content: \"\\f034\";\n}\n.fa-text-width[_ngcontent-%COMP%]:before {\n  content: \"\\f035\";\n}\n.fa-align-left[_ngcontent-%COMP%]:before {\n  content: \"\\f036\";\n}\n.fa-align-center[_ngcontent-%COMP%]:before {\n  content: \"\\f037\";\n}\n.fa-align-right[_ngcontent-%COMP%]:before {\n  content: \"\\f038\";\n}\n.fa-align-justify[_ngcontent-%COMP%]:before {\n  content: \"\\f039\";\n}\n.fa-list[_ngcontent-%COMP%]:before {\n  content: \"\\f03a\";\n}\n.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before {\n  content: \"\\f03b\";\n}\n.fa-indent[_ngcontent-%COMP%]:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera[_ngcontent-%COMP%]:before {\n  content: \"\\f03d\";\n}\n.fa-photo[_ngcontent-%COMP%]:before, .fa-image[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before {\n  content: \"\\f03e\";\n}\n.fa-pencil[_ngcontent-%COMP%]:before {\n  content: \"\\f040\";\n}\n.fa-map-marker[_ngcontent-%COMP%]:before {\n  content: \"\\f041\";\n}\n.fa-adjust[_ngcontent-%COMP%]:before {\n  content: \"\\f042\";\n}\n.fa-tint[_ngcontent-%COMP%]:before {\n  content: \"\\f043\";\n}\n.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o[_ngcontent-%COMP%]:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o[_ngcontent-%COMP%]:before {\n  content: \"\\f046\";\n}\n.fa-arrows[_ngcontent-%COMP%]:before {\n  content: \"\\f047\";\n}\n.fa-step-backward[_ngcontent-%COMP%]:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward[_ngcontent-%COMP%]:before {\n  content: \"\\f049\";\n}\n.fa-backward[_ngcontent-%COMP%]:before {\n  content: \"\\f04a\";\n}\n.fa-play[_ngcontent-%COMP%]:before {\n  content: \"\\f04b\";\n}\n.fa-pause[_ngcontent-%COMP%]:before {\n  content: \"\\f04c\";\n}\n.fa-stop[_ngcontent-%COMP%]:before {\n  content: \"\\f04d\";\n}\n.fa-forward[_ngcontent-%COMP%]:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward[_ngcontent-%COMP%]:before {\n  content: \"\\f050\";\n}\n.fa-step-forward[_ngcontent-%COMP%]:before {\n  content: \"\\f051\";\n}\n.fa-eject[_ngcontent-%COMP%]:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left[_ngcontent-%COMP%]:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right[_ngcontent-%COMP%]:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f056\";\n}\n.fa-times-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f057\";\n}\n.fa-check-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f058\";\n}\n.fa-question-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f059\";\n}\n.fa-info-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs[_ngcontent-%COMP%]:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\\f05d\";\n}\n.fa-ban[_ngcontent-%COMP%]:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left[_ngcontent-%COMP%]:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right[_ngcontent-%COMP%]:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up[_ngcontent-%COMP%]:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before {\n  content: \"\\f064\";\n}\n.fa-expand[_ngcontent-%COMP%]:before {\n  content: \"\\f065\";\n}\n.fa-compress[_ngcontent-%COMP%]:before {\n  content: \"\\f066\";\n}\n.fa-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f067\";\n}\n.fa-minus[_ngcontent-%COMP%]:before {\n  content: \"\\f068\";\n}\n.fa-asterisk[_ngcontent-%COMP%]:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f06a\";\n}\n.fa-gift[_ngcontent-%COMP%]:before {\n  content: \"\\f06b\";\n}\n.fa-leaf[_ngcontent-%COMP%]:before {\n  content: \"\\f06c\";\n}\n.fa-fire[_ngcontent-%COMP%]:before {\n  content: \"\\f06d\";\n}\n.fa-eye[_ngcontent-%COMP%]:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash[_ngcontent-%COMP%]:before {\n  content: \"\\f070\";\n}\n.fa-warning[_ngcontent-%COMP%]:before, .fa-exclamation-triangle[_ngcontent-%COMP%]:before {\n  content: \"\\f071\";\n}\n.fa-plane[_ngcontent-%COMP%]:before {\n  content: \"\\f072\";\n}\n.fa-calendar[_ngcontent-%COMP%]:before {\n  content: \"\\f073\";\n}\n.fa-random[_ngcontent-%COMP%]:before {\n  content: \"\\f074\";\n}\n.fa-comment[_ngcontent-%COMP%]:before {\n  content: \"\\f075\";\n}\n.fa-magnet[_ngcontent-%COMP%]:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up[_ngcontent-%COMP%]:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down[_ngcontent-%COMP%]:before {\n  content: \"\\f078\";\n}\n.fa-retweet[_ngcontent-%COMP%]:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart[_ngcontent-%COMP%]:before {\n  content: \"\\f07a\";\n}\n.fa-folder[_ngcontent-%COMP%]:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open[_ngcontent-%COMP%]:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v[_ngcontent-%COMP%]:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h[_ngcontent-%COMP%]:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square[_ngcontent-%COMP%]:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square[_ngcontent-%COMP%]:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro[_ngcontent-%COMP%]:before {\n  content: \"\\f083\";\n}\n.fa-key[_ngcontent-%COMP%]:before {\n  content: \"\\f084\";\n}\n.fa-gears[_ngcontent-%COMP%]:before, .fa-cogs[_ngcontent-%COMP%]:before {\n  content: \"\\f085\";\n}\n.fa-comments[_ngcontent-%COMP%]:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up[_ngcontent-%COMP%]:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down[_ngcontent-%COMP%]:before {\n  content: \"\\f088\";\n}\n.fa-star-half[_ngcontent-%COMP%]:before {\n  content: \"\\f089\";\n}\n.fa-heart-o[_ngcontent-%COMP%]:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out[_ngcontent-%COMP%]:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square[_ngcontent-%COMP%]:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack[_ngcontent-%COMP%]:before {\n  content: \"\\f08d\";\n}\n.fa-external-link[_ngcontent-%COMP%]:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in[_ngcontent-%COMP%]:before {\n  content: \"\\f090\";\n}\n.fa-trophy[_ngcontent-%COMP%]:before {\n  content: \"\\f091\";\n}\n.fa-github-square[_ngcontent-%COMP%]:before {\n  content: \"\\f092\";\n}\n.fa-upload[_ngcontent-%COMP%]:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o[_ngcontent-%COMP%]:before {\n  content: \"\\f094\";\n}\n.fa-phone[_ngcontent-%COMP%]:before {\n  content: \"\\f095\";\n}\n.fa-square-o[_ngcontent-%COMP%]:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o[_ngcontent-%COMP%]:before {\n  content: \"\\f097\";\n}\n.fa-phone-square[_ngcontent-%COMP%]:before {\n  content: \"\\f098\";\n}\n.fa-twitter[_ngcontent-%COMP%]:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before {\n  content: \"\\f09a\";\n}\n.fa-github[_ngcontent-%COMP%]:before {\n  content: \"\\f09b\";\n}\n.fa-unlock[_ngcontent-%COMP%]:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card[_ngcontent-%COMP%]:before {\n  content: \"\\f09d\";\n}\n.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn[_ngcontent-%COMP%]:before {\n  content: \"\\f0a1\";\n}\n.fa-bell[_ngcontent-%COMP%]:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate[_ngcontent-%COMP%]:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right[_ngcontent-%COMP%]:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left[_ngcontent-%COMP%]:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up[_ngcontent-%COMP%]:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down[_ngcontent-%COMP%]:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left[_ngcontent-%COMP%]:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right[_ngcontent-%COMP%]:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up[_ngcontent-%COMP%]:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down[_ngcontent-%COMP%]:before {\n  content: \"\\f0ab\";\n}\n.fa-globe[_ngcontent-%COMP%]:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench[_ngcontent-%COMP%]:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks[_ngcontent-%COMP%]:before {\n  content: \"\\f0ae\";\n}\n.fa-filter[_ngcontent-%COMP%]:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase[_ngcontent-%COMP%]:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt[_ngcontent-%COMP%]:before {\n  content: \"\\f0b2\";\n}\n.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before {\n  content: \"\\f0c0\";\n}\n.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud[_ngcontent-%COMP%]:before {\n  content: \"\\f0c2\";\n}\n.fa-flask[_ngcontent-%COMP%]:before {\n  content: \"\\f0c3\";\n}\n.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before {\n  content: \"\\f0c4\";\n}\n.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip[_ngcontent-%COMP%]:before {\n  content: \"\\f0c6\";\n}\n.fa-save[_ngcontent-%COMP%]:before, .fa-floppy-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0c7\";\n}\n.fa-square[_ngcontent-%COMP%]:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before, .fa-bars[_ngcontent-%COMP%]:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul[_ngcontent-%COMP%]:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol[_ngcontent-%COMP%]:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough[_ngcontent-%COMP%]:before {\n  content: \"\\f0cc\";\n}\n.fa-underline[_ngcontent-%COMP%]:before {\n  content: \"\\f0cd\";\n}\n.fa-table[_ngcontent-%COMP%]:before {\n  content: \"\\f0ce\";\n}\n.fa-magic[_ngcontent-%COMP%]:before {\n  content: \"\\f0d0\";\n}\n.fa-truck[_ngcontent-%COMP%]:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest[_ngcontent-%COMP%]:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square[_ngcontent-%COMP%]:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square[_ngcontent-%COMP%]:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f0d5\";\n}\n.fa-money[_ngcontent-%COMP%]:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down[_ngcontent-%COMP%]:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up[_ngcontent-%COMP%]:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left[_ngcontent-%COMP%]:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right[_ngcontent-%COMP%]:before {\n  content: \"\\f0da\";\n}\n.fa-columns[_ngcontent-%COMP%]:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted[_ngcontent-%COMP%]:before, .fa-sort[_ngcontent-%COMP%]:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down[_ngcontent-%COMP%]:before, .fa-sort-desc[_ngcontent-%COMP%]:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up[_ngcontent-%COMP%]:before, .fa-sort-asc[_ngcontent-%COMP%]:before {\n  content: \"\\f0de\";\n}\n.fa-envelope[_ngcontent-%COMP%]:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin[_ngcontent-%COMP%]:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before {\n  content: \"\\f0e2\";\n}\n.fa-legal[_ngcontent-%COMP%]:before, .fa-gavel[_ngcontent-%COMP%]:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0e6\";\n}\n.fa-flash[_ngcontent-%COMP%]:before, .fa-bolt[_ngcontent-%COMP%]:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap[_ngcontent-%COMP%]:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella[_ngcontent-%COMP%]:before {\n  content: \"\\f0e9\";\n}\n.fa-paste[_ngcontent-%COMP%]:before, .fa-clipboard[_ngcontent-%COMP%]:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange[_ngcontent-%COMP%]:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download[_ngcontent-%COMP%]:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload[_ngcontent-%COMP%]:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md[_ngcontent-%COMP%]:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope[_ngcontent-%COMP%]:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase[_ngcontent-%COMP%]:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee[_ngcontent-%COMP%]:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery[_ngcontent-%COMP%]:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o[_ngcontent-%COMP%]:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance[_ngcontent-%COMP%]:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit[_ngcontent-%COMP%]:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet[_ngcontent-%COMP%]:before {\n  content: \"\\f0fb\";\n}\n.fa-beer[_ngcontent-%COMP%]:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square[_ngcontent-%COMP%]:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square[_ngcontent-%COMP%]:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left[_ngcontent-%COMP%]:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right[_ngcontent-%COMP%]:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up[_ngcontent-%COMP%]:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down[_ngcontent-%COMP%]:before {\n  content: \"\\f103\";\n}\n.fa-angle-left[_ngcontent-%COMP%]:before {\n  content: \"\\f104\";\n}\n.fa-angle-right[_ngcontent-%COMP%]:before {\n  content: \"\\f105\";\n}\n.fa-angle-up[_ngcontent-%COMP%]:before {\n  content: \"\\f106\";\n}\n.fa-angle-down[_ngcontent-%COMP%]:before {\n  content: \"\\f107\";\n}\n.fa-desktop[_ngcontent-%COMP%]:before {\n  content: \"\\f108\";\n}\n.fa-laptop[_ngcontent-%COMP%]:before {\n  content: \"\\f109\";\n}\n.fa-tablet[_ngcontent-%COMP%]:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left[_ngcontent-%COMP%]:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right[_ngcontent-%COMP%]:before {\n  content: \"\\f10e\";\n}\n.fa-spinner[_ngcontent-%COMP%]:before {\n  content: \"\\f110\";\n}\n.fa-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before {\n  content: \"\\f112\";\n}\n.fa-github-alt[_ngcontent-%COMP%]:before {\n  content: \"\\f113\";\n}\n.fa-folder-o[_ngcontent-%COMP%]:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o[_ngcontent-%COMP%]:before {\n  content: \"\\f115\";\n}\n.fa-smile-o[_ngcontent-%COMP%]:before {\n  content: \"\\f118\";\n}\n.fa-frown-o[_ngcontent-%COMP%]:before {\n  content: \"\\f119\";\n}\n.fa-meh-o[_ngcontent-%COMP%]:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad[_ngcontent-%COMP%]:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o[_ngcontent-%COMP%]:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o[_ngcontent-%COMP%]:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered[_ngcontent-%COMP%]:before {\n  content: \"\\f11e\";\n}\n.fa-terminal[_ngcontent-%COMP%]:before {\n  content: \"\\f120\";\n}\n.fa-code[_ngcontent-%COMP%]:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow[_ngcontent-%COMP%]:before {\n  content: \"\\f124\";\n}\n.fa-crop[_ngcontent-%COMP%]:before {\n  content: \"\\f125\";\n}\n.fa-code-fork[_ngcontent-%COMP%]:before {\n  content: \"\\f126\";\n}\n.fa-unlink[_ngcontent-%COMP%]:before, .fa-chain-broken[_ngcontent-%COMP%]:before {\n  content: \"\\f127\";\n}\n.fa-question[_ngcontent-%COMP%]:before {\n  content: \"\\f128\";\n}\n.fa-info[_ngcontent-%COMP%]:before {\n  content: \"\\f129\";\n}\n.fa-exclamation[_ngcontent-%COMP%]:before {\n  content: \"\\f12a\";\n}\n.fa-superscript[_ngcontent-%COMP%]:before {\n  content: \"\\f12b\";\n}\n.fa-subscript[_ngcontent-%COMP%]:before {\n  content: \"\\f12c\";\n}\n.fa-eraser[_ngcontent-%COMP%]:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece[_ngcontent-%COMP%]:before {\n  content: \"\\f12e\";\n}\n.fa-microphone[_ngcontent-%COMP%]:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash[_ngcontent-%COMP%]:before {\n  content: \"\\f131\";\n}\n.fa-shield[_ngcontent-%COMP%]:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o[_ngcontent-%COMP%]:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher[_ngcontent-%COMP%]:before {\n  content: \"\\f134\";\n}\n.fa-rocket[_ngcontent-%COMP%]:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn[_ngcontent-%COMP%]:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left[_ngcontent-%COMP%]:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right[_ngcontent-%COMP%]:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up[_ngcontent-%COMP%]:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down[_ngcontent-%COMP%]:before {\n  content: \"\\f13a\";\n}\n.fa-html5[_ngcontent-%COMP%]:before {\n  content: \"\\f13b\";\n}\n.fa-css3[_ngcontent-%COMP%]:before {\n  content: \"\\f13c\";\n}\n.fa-anchor[_ngcontent-%COMP%]:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt[_ngcontent-%COMP%]:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye[_ngcontent-%COMP%]:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h[_ngcontent-%COMP%]:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v[_ngcontent-%COMP%]:before {\n  content: \"\\f142\";\n}\n.fa-rss-square[_ngcontent-%COMP%]:before {\n  content: \"\\f143\";\n}\n.fa-play-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f144\";\n}\n.fa-ticket[_ngcontent-%COMP%]:before {\n  content: \"\\f145\";\n}\n.fa-minus-square[_ngcontent-%COMP%]:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o[_ngcontent-%COMP%]:before {\n  content: \"\\f147\";\n}\n.fa-level-up[_ngcontent-%COMP%]:before {\n  content: \"\\f148\";\n}\n.fa-level-down[_ngcontent-%COMP%]:before {\n  content: \"\\f149\";\n}\n.fa-check-square[_ngcontent-%COMP%]:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square[_ngcontent-%COMP%]:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square[_ngcontent-%COMP%]:before {\n  content: \"\\f14c\";\n}\n.fa-share-square[_ngcontent-%COMP%]:before {\n  content: \"\\f14d\";\n}\n.fa-compass[_ngcontent-%COMP%]:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down[_ngcontent-%COMP%]:before, .fa-caret-square-o-down[_ngcontent-%COMP%]:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up[_ngcontent-%COMP%]:before, .fa-caret-square-o-up[_ngcontent-%COMP%]:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right[_ngcontent-%COMP%]:before, .fa-caret-square-o-right[_ngcontent-%COMP%]:before {\n  content: \"\\f152\";\n}\n.fa-euro[_ngcontent-%COMP%]:before, .fa-eur[_ngcontent-%COMP%]:before {\n  content: \"\\f153\";\n}\n.fa-gbp[_ngcontent-%COMP%]:before {\n  content: \"\\f154\";\n}\n.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before {\n  content: \"\\f155\";\n}\n.fa-rupee[_ngcontent-%COMP%]:before, .fa-inr[_ngcontent-%COMP%]:before {\n  content: \"\\f156\";\n}\n.fa-cny[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before {\n  content: \"\\f157\";\n}\n.fa-ruble[_ngcontent-%COMP%]:before, .fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before {\n  content: \"\\f158\";\n}\n.fa-won[_ngcontent-%COMP%]:before, .fa-krw[_ngcontent-%COMP%]:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before {\n  content: \"\\f15a\";\n}\n.fa-file[_ngcontent-%COMP%]:before {\n  content: \"\\f15b\";\n}\n.fa-file-text[_ngcontent-%COMP%]:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc[_ngcontent-%COMP%]:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc[_ngcontent-%COMP%]:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc[_ngcontent-%COMP%]:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc[_ngcontent-%COMP%]:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc[_ngcontent-%COMP%]:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc[_ngcontent-%COMP%]:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up[_ngcontent-%COMP%]:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down[_ngcontent-%COMP%]:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square[_ngcontent-%COMP%]:before {\n  content: \"\\f166\";\n}\n.fa-youtube[_ngcontent-%COMP%]:before {\n  content: \"\\f167\";\n}\n.fa-xing[_ngcontent-%COMP%]:before {\n  content: \"\\f168\";\n}\n.fa-xing-square[_ngcontent-%COMP%]:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play[_ngcontent-%COMP%]:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox[_ngcontent-%COMP%]:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow[_ngcontent-%COMP%]:before {\n  content: \"\\f16c\";\n}\n.fa-instagram[_ngcontent-%COMP%]:before {\n  content: \"\\f16d\";\n}\n.fa-flickr[_ngcontent-%COMP%]:before {\n  content: \"\\f16e\";\n}\n.fa-adn[_ngcontent-%COMP%]:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket[_ngcontent-%COMP%]:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square[_ngcontent-%COMP%]:before {\n  content: \"\\f172\";\n}\n.fa-tumblr[_ngcontent-%COMP%]:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square[_ngcontent-%COMP%]:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up[_ngcontent-%COMP%]:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left[_ngcontent-%COMP%]:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right[_ngcontent-%COMP%]:before {\n  content: \"\\f178\";\n}\n.fa-apple[_ngcontent-%COMP%]:before {\n  content: \"\\f179\";\n}\n.fa-windows[_ngcontent-%COMP%]:before {\n  content: \"\\f17a\";\n}\n.fa-android[_ngcontent-%COMP%]:before {\n  content: \"\\f17b\";\n}\n.fa-linux[_ngcontent-%COMP%]:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble[_ngcontent-%COMP%]:before {\n  content: \"\\f17d\";\n}\n.fa-skype[_ngcontent-%COMP%]:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare[_ngcontent-%COMP%]:before {\n  content: \"\\f180\";\n}\n.fa-trello[_ngcontent-%COMP%]:before {\n  content: \"\\f181\";\n}\n.fa-female[_ngcontent-%COMP%]:before {\n  content: \"\\f182\";\n}\n.fa-male[_ngcontent-%COMP%]:before {\n  content: \"\\f183\";\n}\n.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before {\n  content: \"\\f184\";\n}\n.fa-sun-o[_ngcontent-%COMP%]:before {\n  content: \"\\f185\";\n}\n.fa-moon-o[_ngcontent-%COMP%]:before {\n  content: \"\\f186\";\n}\n.fa-archive[_ngcontent-%COMP%]:before {\n  content: \"\\f187\";\n}\n.fa-bug[_ngcontent-%COMP%]:before {\n  content: \"\\f188\";\n}\n.fa-vk[_ngcontent-%COMP%]:before {\n  content: \"\\f189\";\n}\n.fa-weibo[_ngcontent-%COMP%]:before {\n  content: \"\\f18a\";\n}\n.fa-renren[_ngcontent-%COMP%]:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines[_ngcontent-%COMP%]:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange[_ngcontent-%COMP%]:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left[_ngcontent-%COMP%]:before, .fa-caret-square-o-left[_ngcontent-%COMP%]:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair[_ngcontent-%COMP%]:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square[_ngcontent-%COMP%]:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira[_ngcontent-%COMP%]:before, .fa-try[_ngcontent-%COMP%]:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o[_ngcontent-%COMP%]:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle[_ngcontent-%COMP%]:before {\n  content: \"\\f197\";\n}\n.fa-slack[_ngcontent-%COMP%]:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square[_ngcontent-%COMP%]:before {\n  content: \"\\f199\";\n}\n.fa-wordpress[_ngcontent-%COMP%]:before {\n  content: \"\\f19a\";\n}\n.fa-openid[_ngcontent-%COMP%]:before {\n  content: \"\\f19b\";\n}\n.fa-institution[_ngcontent-%COMP%]:before, .fa-bank[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board[_ngcontent-%COMP%]:before, .fa-graduation-cap[_ngcontent-%COMP%]:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo[_ngcontent-%COMP%]:before {\n  content: \"\\f19e\";\n}\n.fa-google[_ngcontent-%COMP%]:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit[_ngcontent-%COMP%]:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square[_ngcontent-%COMP%]:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon[_ngcontent-%COMP%]:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious[_ngcontent-%COMP%]:before {\n  content: \"\\f1a5\";\n}\n.fa-digg[_ngcontent-%COMP%]:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp[_ngcontent-%COMP%]:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt[_ngcontent-%COMP%]:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal[_ngcontent-%COMP%]:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla[_ngcontent-%COMP%]:before {\n  content: \"\\f1aa\";\n}\n.fa-language[_ngcontent-%COMP%]:before {\n  content: \"\\f1ab\";\n}\n.fa-fax[_ngcontent-%COMP%]:before {\n  content: \"\\f1ac\";\n}\n.fa-building[_ngcontent-%COMP%]:before {\n  content: \"\\f1ad\";\n}\n.fa-child[_ngcontent-%COMP%]:before {\n  content: \"\\f1ae\";\n}\n.fa-paw[_ngcontent-%COMP%]:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon[_ngcontent-%COMP%]:before {\n  content: \"\\f1b1\";\n}\n.fa-cube[_ngcontent-%COMP%]:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes[_ngcontent-%COMP%]:before {\n  content: \"\\f1b3\";\n}\n.fa-behance[_ngcontent-%COMP%]:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square[_ngcontent-%COMP%]:before {\n  content: \"\\f1b5\";\n}\n.fa-steam[_ngcontent-%COMP%]:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square[_ngcontent-%COMP%]:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle[_ngcontent-%COMP%]:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before {\n  content: \"\\f1b9\";\n}\n.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before {\n  content: \"\\f1ba\";\n}\n.fa-tree[_ngcontent-%COMP%]:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify[_ngcontent-%COMP%]:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart[_ngcontent-%COMP%]:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud[_ngcontent-%COMP%]:before {\n  content: \"\\f1be\";\n}\n.fa-database[_ngcontent-%COMP%]:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before, .fa-file-image-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o[_ngcontent-%COMP%]:before, .fa-file-archive-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o[_ngcontent-%COMP%]:before, .fa-file-audio-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1c9\";\n}\n.fa-vine[_ngcontent-%COMP%]:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen[_ngcontent-%COMP%]:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle[_ngcontent-%COMP%]:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch[_ngcontent-%COMP%]:before {\n  content: \"\\f1ce\";\n}\n.fa-ra[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before {\n  content: \"\\f1d0\";\n}\n.fa-ge[_ngcontent-%COMP%]:before, .fa-empire[_ngcontent-%COMP%]:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square[_ngcontent-%COMP%]:before {\n  content: \"\\f1d2\";\n}\n.fa-git[_ngcontent-%COMP%]:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before, .fa-hacker-news[_ngcontent-%COMP%]:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo[_ngcontent-%COMP%]:before {\n  content: \"\\f1d5\";\n}\n.fa-qq[_ngcontent-%COMP%]:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before {\n  content: \"\\f1d7\";\n}\n.fa-send[_ngcontent-%COMP%]:before, .fa-paper-plane[_ngcontent-%COMP%]:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o[_ngcontent-%COMP%]:before, .fa-paper-plane-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1d9\";\n}\n.fa-history[_ngcontent-%COMP%]:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin[_ngcontent-%COMP%]:before {\n  content: \"\\f1db\";\n}\n.fa-header[_ngcontent-%COMP%]:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph[_ngcontent-%COMP%]:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders[_ngcontent-%COMP%]:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt[_ngcontent-%COMP%]:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square[_ngcontent-%COMP%]:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb[_ngcontent-%COMP%]:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o[_ngcontent-%COMP%]:before, .fa-futbol-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1e3\";\n}\n.fa-tty[_ngcontent-%COMP%]:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars[_ngcontent-%COMP%]:before {\n  content: \"\\f1e5\";\n}\n.fa-plug[_ngcontent-%COMP%]:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare[_ngcontent-%COMP%]:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch[_ngcontent-%COMP%]:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp[_ngcontent-%COMP%]:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi[_ngcontent-%COMP%]:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator[_ngcontent-%COMP%]:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal[_ngcontent-%COMP%]:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet[_ngcontent-%COMP%]:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa[_ngcontent-%COMP%]:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard[_ngcontent-%COMP%]:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover[_ngcontent-%COMP%]:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex[_ngcontent-%COMP%]:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal[_ngcontent-%COMP%]:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe[_ngcontent-%COMP%]:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash[_ngcontent-%COMP%]:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o[_ngcontent-%COMP%]:before {\n  content: \"\\f1f7\";\n}\n.fa-trash[_ngcontent-%COMP%]:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright[_ngcontent-%COMP%]:before {\n  content: \"\\f1f9\";\n}\n.fa-at[_ngcontent-%COMP%]:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper[_ngcontent-%COMP%]:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush[_ngcontent-%COMP%]:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake[_ngcontent-%COMP%]:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart[_ngcontent-%COMP%]:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart[_ngcontent-%COMP%]:before {\n  content: \"\\f200\";\n}\n.fa-line-chart[_ngcontent-%COMP%]:before {\n  content: \"\\f201\";\n}\n.fa-lastfm[_ngcontent-%COMP%]:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square[_ngcontent-%COMP%]:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off[_ngcontent-%COMP%]:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on[_ngcontent-%COMP%]:before {\n  content: \"\\f205\";\n}\n.fa-bicycle[_ngcontent-%COMP%]:before {\n  content: \"\\f206\";\n}\n.fa-bus[_ngcontent-%COMP%]:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost[_ngcontent-%COMP%]:before {\n  content: \"\\f208\";\n}\n.fa-angellist[_ngcontent-%COMP%]:before {\n  content: \"\\f209\";\n}\n.fa-cc[_ngcontent-%COMP%]:before {\n  content: \"\\f20a\";\n}\n.fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before, .fa-ils[_ngcontent-%COMP%]:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath[_ngcontent-%COMP%]:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads[_ngcontent-%COMP%]:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop[_ngcontent-%COMP%]:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube[_ngcontent-%COMP%]:before {\n  content: \"\\f210\";\n}\n.fa-forumbee[_ngcontent-%COMP%]:before {\n  content: \"\\f211\";\n}\n.fa-leanpub[_ngcontent-%COMP%]:before {\n  content: \"\\f212\";\n}\n.fa-sellsy[_ngcontent-%COMP%]:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk[_ngcontent-%COMP%]:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt[_ngcontent-%COMP%]:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas[_ngcontent-%COMP%]:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\\f218\";\n}\n.fa-diamond[_ngcontent-%COMP%]:before {\n  content: \"\\f219\";\n}\n.fa-ship[_ngcontent-%COMP%]:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret[_ngcontent-%COMP%]:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle[_ngcontent-%COMP%]:before {\n  content: \"\\f21c\";\n}\n.fa-street-view[_ngcontent-%COMP%]:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat[_ngcontent-%COMP%]:before {\n  content: \"\\f21e\";\n}\n.fa-venus[_ngcontent-%COMP%]:before {\n  content: \"\\f221\";\n}\n.fa-mars[_ngcontent-%COMP%]:before {\n  content: \"\\f222\";\n}\n.fa-mercury[_ngcontent-%COMP%]:before {\n  content: \"\\f223\";\n}\n.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt[_ngcontent-%COMP%]:before {\n  content: \"\\f225\";\n}\n.fa-venus-double[_ngcontent-%COMP%]:before {\n  content: \"\\f226\";\n}\n.fa-mars-double[_ngcontent-%COMP%]:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars[_ngcontent-%COMP%]:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke[_ngcontent-%COMP%]:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v[_ngcontent-%COMP%]:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h[_ngcontent-%COMP%]:before {\n  content: \"\\f22b\";\n}\n.fa-neuter[_ngcontent-%COMP%]:before {\n  content: \"\\f22c\";\n}\n.fa-genderless[_ngcontent-%COMP%]:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official[_ngcontent-%COMP%]:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p[_ngcontent-%COMP%]:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp[_ngcontent-%COMP%]:before {\n  content: \"\\f232\";\n}\n.fa-server[_ngcontent-%COMP%]:before {\n  content: \"\\f233\";\n}\n.fa-user-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f234\";\n}\n.fa-user-times[_ngcontent-%COMP%]:before {\n  content: \"\\f235\";\n}\n.fa-hotel[_ngcontent-%COMP%]:before, .fa-bed[_ngcontent-%COMP%]:before {\n  content: \"\\f236\";\n}\n.fa-viacoin[_ngcontent-%COMP%]:before {\n  content: \"\\f237\";\n}\n.fa-train[_ngcontent-%COMP%]:before {\n  content: \"\\f238\";\n}\n.fa-subway[_ngcontent-%COMP%]:before {\n  content: \"\\f239\";\n}\n.fa-medium[_ngcontent-%COMP%]:before {\n  content: \"\\f23a\";\n}\n.fa-yc[_ngcontent-%COMP%]:before, .fa-y-combinator[_ngcontent-%COMP%]:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster[_ngcontent-%COMP%]:before {\n  content: \"\\f23c\";\n}\n.fa-opencart[_ngcontent-%COMP%]:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl[_ngcontent-%COMP%]:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before {\n  content: \"\\f240\";\n}\n.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before {\n  content: \"\\f241\";\n}\n.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before {\n  content: \"\\f242\";\n}\n.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before {\n  content: \"\\f243\";\n}\n.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer[_ngcontent-%COMP%]:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor[_ngcontent-%COMP%]:before {\n  content: \"\\f246\";\n}\n.fa-object-group[_ngcontent-%COMP%]:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup[_ngcontent-%COMP%]:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note[_ngcontent-%COMP%]:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o[_ngcontent-%COMP%]:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb[_ngcontent-%COMP%]:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club[_ngcontent-%COMP%]:before {\n  content: \"\\f24c\";\n}\n.fa-clone[_ngcontent-%COMP%]:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale[_ngcontent-%COMP%]:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o[_ngcontent-%COMP%]:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before {\n  content: \"\\f253\";\n}\n.fa-hourglass[_ngcontent-%COMP%]:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o[_ngcontent-%COMP%]:before, .fa-hand-paper-o[_ngcontent-%COMP%]:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o[_ngcontent-%COMP%]:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o[_ngcontent-%COMP%]:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o[_ngcontent-%COMP%]:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o[_ngcontent-%COMP%]:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o[_ngcontent-%COMP%]:before {\n  content: \"\\f25b\";\n}\n.fa-trademark[_ngcontent-%COMP%]:before {\n  content: \"\\f25c\";\n}\n.fa-registered[_ngcontent-%COMP%]:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons[_ngcontent-%COMP%]:before {\n  content: \"\\f25e\";\n}\n.fa-gg[_ngcontent-%COMP%]:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor[_ngcontent-%COMP%]:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki[_ngcontent-%COMP%]:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square[_ngcontent-%COMP%]:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket[_ngcontent-%COMP%]:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w[_ngcontent-%COMP%]:before {\n  content: \"\\f266\";\n}\n.fa-safari[_ngcontent-%COMP%]:before {\n  content: \"\\f267\";\n}\n.fa-chrome[_ngcontent-%COMP%]:before {\n  content: \"\\f268\";\n}\n.fa-firefox[_ngcontent-%COMP%]:before {\n  content: \"\\f269\";\n}\n.fa-opera[_ngcontent-%COMP%]:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer[_ngcontent-%COMP%]:before {\n  content: \"\\f26b\";\n}\n.fa-tv[_ngcontent-%COMP%]:before, .fa-television[_ngcontent-%COMP%]:before {\n  content: \"\\f26c\";\n}\n.fa-contao[_ngcontent-%COMP%]:before {\n  content: \"\\f26d\";\n}\n.fa-500px[_ngcontent-%COMP%]:before {\n  content: \"\\f26e\";\n}\n.fa-amazon[_ngcontent-%COMP%]:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o[_ngcontent-%COMP%]:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o[_ngcontent-%COMP%]:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o[_ngcontent-%COMP%]:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o[_ngcontent-%COMP%]:before {\n  content: \"\\f274\";\n}\n.fa-industry[_ngcontent-%COMP%]:before {\n  content: \"\\f275\";\n}\n.fa-map-pin[_ngcontent-%COMP%]:before {\n  content: \"\\f276\";\n}\n.fa-map-signs[_ngcontent-%COMP%]:before {\n  content: \"\\f277\";\n}\n.fa-map-o[_ngcontent-%COMP%]:before {\n  content: \"\\f278\";\n}\n.fa-map[_ngcontent-%COMP%]:before {\n  content: \"\\f279\";\n}\n.fa-commenting[_ngcontent-%COMP%]:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o[_ngcontent-%COMP%]:before {\n  content: \"\\f27b\";\n}\n.fa-houzz[_ngcontent-%COMP%]:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo[_ngcontent-%COMP%]:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie[_ngcontent-%COMP%]:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons[_ngcontent-%COMP%]:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien[_ngcontent-%COMP%]:before {\n  content: \"\\f281\";\n}\n.fa-edge[_ngcontent-%COMP%]:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt[_ngcontent-%COMP%]:before {\n  content: \"\\f283\";\n}\n.fa-codiepie[_ngcontent-%COMP%]:before {\n  content: \"\\f284\";\n}\n.fa-modx[_ngcontent-%COMP%]:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome[_ngcontent-%COMP%]:before {\n  content: \"\\f286\";\n}\n.fa-usb[_ngcontent-%COMP%]:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt[_ngcontent-%COMP%]:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud[_ngcontent-%COMP%]:before {\n  content: \"\\f289\";\n}\n.fa-scribd[_ngcontent-%COMP%]:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag[_ngcontent-%COMP%]:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket[_ngcontent-%COMP%]:before {\n  content: \"\\f291\";\n}\n.fa-hashtag[_ngcontent-%COMP%]:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth[_ngcontent-%COMP%]:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b[_ngcontent-%COMP%]:before {\n  content: \"\\f294\";\n}\n.fa-percent[_ngcontent-%COMP%]:before {\n  content: \"\\f295\";\n}\n.fa-gitlab[_ngcontent-%COMP%]:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner[_ngcontent-%COMP%]:before {\n  content: \"\\f297\";\n}\n.fa-wpforms[_ngcontent-%COMP%]:before {\n  content: \"\\f298\";\n}\n.fa-envira[_ngcontent-%COMP%]:before {\n  content: \"\\f299\";\n}\n.fa-universal-access[_ngcontent-%COMP%]:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt[_ngcontent-%COMP%]:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\\f29c\";\n}\n.fa-blind[_ngcontent-%COMP%]:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description[_ngcontent-%COMP%]:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone[_ngcontent-%COMP%]:before {\n  content: \"\\f2a0\";\n}\n.fa-braille[_ngcontent-%COMP%]:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems[_ngcontent-%COMP%]:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting[_ngcontent-%COMP%]:before, .fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before, .fa-deaf[_ngcontent-%COMP%]:before {\n  content: \"\\f2a4\";\n}\n.fa-glide[_ngcontent-%COMP%]:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g[_ngcontent-%COMP%]:before {\n  content: \"\\f2a6\";\n}\n.fa-signing[_ngcontent-%COMP%]:before, .fa-sign-language[_ngcontent-%COMP%]:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision[_ngcontent-%COMP%]:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo[_ngcontent-%COMP%]:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square[_ngcontent-%COMP%]:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat[_ngcontent-%COMP%]:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost[_ngcontent-%COMP%]:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square[_ngcontent-%COMP%]:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper[_ngcontent-%COMP%]:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order[_ngcontent-%COMP%]:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast[_ngcontent-%COMP%]:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle[_ngcontent-%COMP%]:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before {\n  content: \"\\f2b3\";\n}\n.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before {\n  content: \"\\f2b4\";\n}\n.fa-handshake-o[_ngcontent-%COMP%]:before {\n  content: \"\\f2b5\";\n}\n.fa-envelope-open[_ngcontent-%COMP%]:before {\n  content: \"\\f2b6\";\n}\n.fa-envelope-open-o[_ngcontent-%COMP%]:before {\n  content: \"\\f2b7\";\n}\n.fa-linode[_ngcontent-%COMP%]:before {\n  content: \"\\f2b8\";\n}\n.fa-address-book[_ngcontent-%COMP%]:before {\n  content: \"\\f2b9\";\n}\n.fa-address-book-o[_ngcontent-%COMP%]:before {\n  content: \"\\f2ba\";\n}\n.fa-vcard[_ngcontent-%COMP%]:before, .fa-address-card[_ngcontent-%COMP%]:before {\n  content: \"\\f2bb\";\n}\n.fa-vcard-o[_ngcontent-%COMP%]:before, .fa-address-card-o[_ngcontent-%COMP%]:before {\n  content: \"\\f2bc\";\n}\n.fa-user-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f2bd\";\n}\n.fa-user-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\\f2be\";\n}\n.fa-user-o[_ngcontent-%COMP%]:before {\n  content: \"\\f2c0\";\n}\n.fa-id-badge[_ngcontent-%COMP%]:before {\n  content: \"\\f2c1\";\n}\n.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before {\n  content: \"\\f2c2\";\n}\n.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before {\n  content: \"\\f2c3\";\n}\n.fa-quora[_ngcontent-%COMP%]:before {\n  content: \"\\f2c4\";\n}\n.fa-free-code-camp[_ngcontent-%COMP%]:before {\n  content: \"\\f2c5\";\n}\n.fa-telegram[_ngcontent-%COMP%]:before {\n  content: \"\\f2c6\";\n}\n.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before {\n  content: \"\\f2c7\";\n}\n.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before {\n  content: \"\\f2c8\";\n}\n.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before {\n  content: \"\\f2c9\";\n}\n.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before {\n  content: \"\\f2ca\";\n}\n.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before {\n  content: \"\\f2cb\";\n}\n.fa-shower[_ngcontent-%COMP%]:before {\n  content: \"\\f2cc\";\n}\n.fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before, .fa-bath[_ngcontent-%COMP%]:before {\n  content: \"\\f2cd\";\n}\n.fa-podcast[_ngcontent-%COMP%]:before {\n  content: \"\\f2ce\";\n}\n.fa-window-maximize[_ngcontent-%COMP%]:before {\n  content: \"\\f2d0\";\n}\n.fa-window-minimize[_ngcontent-%COMP%]:before {\n  content: \"\\f2d1\";\n}\n.fa-window-restore[_ngcontent-%COMP%]:before {\n  content: \"\\f2d2\";\n}\n.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before {\n  content: \"\\f2d3\";\n}\n.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before {\n  content: \"\\f2d4\";\n}\n.fa-bandcamp[_ngcontent-%COMP%]:before {\n  content: \"\\f2d5\";\n}\n.fa-grav[_ngcontent-%COMP%]:before {\n  content: \"\\f2d6\";\n}\n.fa-etsy[_ngcontent-%COMP%]:before {\n  content: \"\\f2d7\";\n}\n.fa-imdb[_ngcontent-%COMP%]:before {\n  content: \"\\f2d8\";\n}\n.fa-ravelry[_ngcontent-%COMP%]:before {\n  content: \"\\f2d9\";\n}\n.fa-eercast[_ngcontent-%COMP%]:before {\n  content: \"\\f2da\";\n}\n.fa-microchip[_ngcontent-%COMP%]:before {\n  content: \"\\f2db\";\n}\n.fa-snowflake-o[_ngcontent-%COMP%]:before {\n  content: \"\\f2dc\";\n}\n.fa-superpowers[_ngcontent-%COMP%]:before {\n  content: \"\\f2dd\";\n}\n.fa-wpexplorer[_ngcontent-%COMP%]:before {\n  content: \"\\f2de\";\n}\n.fa-meetup[_ngcontent-%COMP%]:before {\n  content: \"\\f2e0\";\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n.alert[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 9999;\r\n}\n.active-li[_ngcontent-%COMP%] {\r\n  border: 1px solid #007bff !important;\r\n}\n.close-icon[_ngcontent-%COMP%] {\r\n  display: none;\r\n  float: right;\r\n  height: 30px;\r\n  width: 30px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\n.modal-li[_ngcontent-%COMP%]:hover {\r\n  border: 1px solid #007bff;\r\n}\n.city-li[_ngcontent-%COMP%] {\r\n  border: 1px solid #fff;\r\n  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);\r\n}\n.city-li[_ngcontent-%COMP%]:hover {\r\n  border: 1px solid #007bff;\r\n}\n.city-li[_ngcontent-%COMP%]:hover   .close-icon[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\n.city-li[_ngcontent-%COMP%]:hover   .weather-icon[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n.title[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\n.second-title[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\n.weather-icon[_ngcontent-%COMP%] {\r\n  float: right;\r\n  height: 30px;\r\n  width: 30px;\r\n}\n@media (max-width: 767px) {\r\n  .close-icon[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    float: left;\r\n  }\r\n  .city-li[_ngcontent-%COMP%]:hover   .close-icon[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  .city-li[_ngcontent-%COMP%]:hover   .weather-icon[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  .city-li[_ngcontent-%COMP%] {\r\n    box-shadow: none;\r\n    border: 1px solid grey;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2l0aWVzL2NpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRTtBQUNGOytCQUMrQjtBQUMvQjtFQUNFLDBCQUEwQjtFQUMxQiwyQ0FBb0Q7RUFDcEQsb1VBQWlYO0VBQ2pYLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0FBQ0EsNkRBQTZEO0FBQzdEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLDJCQUEyQjtBQUMzQjtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBRUUscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFFRSx1Q0FBdUM7QUFDekM7QUFXQTtFQUNFO0lBRUUsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFFRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBQ0Usc0VBQXNFO0VBR3RFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usc0VBQXNFO0VBR3RFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0VBQXNFO0VBR3RFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0ZBQWdGO0VBR2hGLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0ZBQWdGO0VBR2hGLHVCQUF1QjtBQUN6QjtBQUNBOzs7OztFQUtFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO21FQUNtRTtBQUNuRTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7OztFQUlFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7OztFQUtFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQzl4RUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2l0aWVzL2NpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAgRm9udCBBd2Vzb21lIDQuNy4wIGJ5IEBkYXZlZ2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8gLSBAZm9udGF3ZXNvbWVcbiAqICBMaWNlbnNlIC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2xpY2Vuc2UgKEZvbnQ6IFNJTCBPRkwgMS4xLCBDU1M6IE1JVCBMaWNlbnNlKVxuICovXG4vKiBGT05UIFBBVEhcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gIHNyYzogdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD92PTQuNy4wJyk7XG4gIHNyYzogdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD8jaWVmaXgmdj00LjcuMCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9NC43LjAnKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmP3Y9NC43LjAnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LnR0Zj92PTQuNy4wJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9NC43LjAjZm9udGF3ZXNvbWVyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmZhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuLyogbWFrZXMgdGhlIGZvbnQgMzMlIGxhcmdlciByZWxhdGl2ZSB0byB0aGUgaWNvbiBjb250YWluZXIgKi9cbi5mYS1sZyB7XG4gIGZvbnQtc2l6ZTogMS4zMzMzMzMzM2VtO1xuICBsaW5lLWhlaWdodDogMC43NWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTE1JTtcbn1cbi5mYS0yeCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLmZhLTN4IHtcbiAgZm9udC1zaXplOiAzZW07XG59XG4uZmEtNHgge1xuICBmb250LXNpemU6IDRlbTtcbn1cbi5mYS01eCB7XG4gIGZvbnQtc2l6ZTogNWVtO1xufVxuLmZhLWZ3IHtcbiAgd2lkdGg6IDEuMjg1NzE0MjllbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhLXVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogMi4xNDI4NTcxNGVtO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uZmEtdWwgPiBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mYS1saSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIuMTQyODU3MTRlbTtcbiAgd2lkdGg6IDIuMTQyODU3MTRlbTtcbiAgdG9wOiAwLjE0Mjg1NzE0ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mYS1saS5mYS1sZyB7XG4gIGxlZnQ6IC0xLjg1NzE0Mjg2ZW07XG59XG4uZmEtYm9yZGVyIHtcbiAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbTtcbiAgYm9yZGVyOiBzb2xpZCAwLjA4ZW0gI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogLjFlbTtcbn1cbi5mYS1wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cbi5mYS1wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmZhLmZhLXB1bGwtbGVmdCB7XG4gIG1hcmdpbi1yaWdodDogLjNlbTtcbn1cbi5mYS5mYS1wdWxsLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IC4zZW07XG59XG4vKiBEZXByZWNhdGVkIGFzIG9mIDQuNC4wICovXG4ucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cbi5mYS5wdWxsLWxlZnQge1xuICBtYXJnaW4tcmlnaHQ6IC4zZW07XG59XG4uZmEucHVsbC1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiAuM2VtO1xufVxuLmZhLXNwaW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG59XG4uZmEtcHVsc2Uge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYS1zcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cbi5mYS1yb3RhdGUtOTAge1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXCI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uZmEtcm90YXRlLTE4MCB7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcIjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5mYS1yb3RhdGUtMjcwIHtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKVwiO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuLmZhLWZsaXAtaG9yaXpvbnRhbCB7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXCI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG59XG4uZmEtZmxpcC12ZXJ0aWNhbCB7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXCI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG59XG46cm9vdCAuZmEtcm90YXRlLTkwLFxuOnJvb3QgLmZhLXJvdGF0ZS0xODAsXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcbjpyb290IC5mYS1mbGlwLWhvcml6b250YWwsXG46cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCB7XG4gIGZpbHRlcjogbm9uZTtcbn1cbi5mYS1zdGFjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5mYS1zdGFjay0xeCxcbi5mYS1zdGFjay0yeCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mYS1zdGFjay0xeCB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuLmZhLXN0YWNrLTJ4IHtcbiAgZm9udC1zaXplOiAyZW07XG59XG4uZmEtaW52ZXJzZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLyogRm9udCBBd2Vzb21lIHVzZXMgdGhlIFVuaWNvZGUgUHJpdmF0ZSBVc2UgQXJlYSAoUFVBKSB0byBlbnN1cmUgc2NyZWVuXG4gICByZWFkZXJzIGRvIG5vdCByZWFkIG9mZiByYW5kb20gY2hhcmFjdGVycyB0aGF0IHJlcHJlc2VudCBpY29ucyAqL1xuLmZhLWdsYXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDAwXCI7XG59XG4uZmEtbXVzaWM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMDFcIjtcbn1cbi5mYS1zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMDJcIjtcbn1cbi5mYS1lbnZlbG9wZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDAzXCI7XG59XG4uZmEtaGVhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMDRcIjtcbn1cbi5mYS1zdGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XG59XG4uZmEtc3Rhci1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDA2XCI7XG59XG4uZmEtdXNlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwN1wiO1xufVxuLmZhLWZpbG06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMDhcIjtcbn1cbi5mYS10aC1sYXJnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwOVwiO1xufVxuLmZhLXRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDBhXCI7XG59XG4uZmEtdGgtbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwYlwiO1xufVxuLmZhLWNoZWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XG59XG4uZmEtcmVtb3ZlOmJlZm9yZSxcbi5mYS1jbG9zZTpiZWZvcmUsXG4uZmEtdGltZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMGRcIjtcbn1cbi5mYS1zZWFyY2gtcGx1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwZVwiO1xufVxuLmZhLXNlYXJjaC1taW51czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxMFwiO1xufVxuLmZhLXBvd2VyLW9mZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxMVwiO1xufVxuLmZhLXNpZ25hbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxMlwiO1xufVxuLmZhLWdlYXI6YmVmb3JlLFxuLmZhLWNvZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxM1wiO1xufVxuLmZhLXRyYXNoLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMTRcIjtcbn1cbi5mYS1ob21lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDE1XCI7XG59XG4uZmEtZmlsZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDE2XCI7XG59XG4uZmEtY2xvY2stbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxN1wiO1xufVxuLmZhLXJvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMThcIjtcbn1cbi5mYS1kb3dubG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxOVwiO1xufVxuLmZhLWFycm93LWNpcmNsZS1vLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMWFcIjtcbn1cbi5mYS1hcnJvdy1jaXJjbGUtby11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxYlwiO1xufVxuLmZhLWluYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDFjXCI7XG59XG4uZmEtcGxheS1jaXJjbGUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxZFwiO1xufVxuLmZhLXJvdGF0ZS1yaWdodDpiZWZvcmUsXG4uZmEtcmVwZWF0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDFlXCI7XG59XG4uZmEtcmVmcmVzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAyMVwiO1xufVxuLmZhLWxpc3QtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDIyXCI7XG59XG4uZmEtbG9jazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAyM1wiO1xufVxuLmZhLWZsYWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMjRcIjtcbn1cbi5mYS1oZWFkcGhvbmVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDI1XCI7XG59XG4uZmEtdm9sdW1lLW9mZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAyNlwiO1xufVxuLmZhLXZvbHVtZS1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDI3XCI7XG59XG4uZmEtdm9sdW1lLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDI4XCI7XG59XG4uZmEtcXJjb2RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDI5XCI7XG59XG4uZmEtYmFyY29kZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAyYVwiO1xufVxuLmZhLXRhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAyYlwiO1xufVxuLmZhLXRhZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMmNcIjtcbn1cbi5mYS1ib29rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDJkXCI7XG59XG4uZmEtYm9va21hcms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMmVcIjtcbn1cbi5mYS1wcmludDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAyZlwiO1xufVxuLmZhLWNhbWVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzMFwiO1xufVxuLmZhLWZvbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMzFcIjtcbn1cbi5mYS1ib2xkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDMyXCI7XG59XG4uZmEtaXRhbGljOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDMzXCI7XG59XG4uZmEtdGV4dC1oZWlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMzRcIjtcbn1cbi5mYS10ZXh0LXdpZHRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDM1XCI7XG59XG4uZmEtYWxpZ24tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzNlwiO1xufVxuLmZhLWFsaWduLWNlbnRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzN1wiO1xufVxuLmZhLWFsaWduLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDM4XCI7XG59XG4uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzOVwiO1xufVxuLmZhLWxpc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwM2FcIjtcbn1cbi5mYS1kZWRlbnQ6YmVmb3JlLFxuLmZhLW91dGRlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwM2JcIjtcbn1cbi5mYS1pbmRlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwM2NcIjtcbn1cbi5mYS12aWRlby1jYW1lcmE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwM2RcIjtcbn1cbi5mYS1waG90bzpiZWZvcmUsXG4uZmEtaW1hZ2U6YmVmb3JlLFxuLmZhLXBpY3R1cmUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzZVwiO1xufVxuLmZhLXBlbmNpbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0MFwiO1xufVxuLmZhLW1hcC1tYXJrZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNDFcIjtcbn1cbi5mYS1hZGp1c3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNDJcIjtcbn1cbi5mYS10aW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDQzXCI7XG59XG4uZmEtZWRpdDpiZWZvcmUsXG4uZmEtcGVuY2lsLXNxdWFyZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDQ0XCI7XG59XG4uZmEtc2hhcmUtc3F1YXJlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNDVcIjtcbn1cbi5mYS1jaGVjay1zcXVhcmUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0NlwiO1xufVxuLmZhLWFycm93czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0N1wiO1xufVxuLmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNDhcIjtcbn1cbi5mYS1mYXN0LWJhY2t3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDQ5XCI7XG59XG4uZmEtYmFja3dhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNGFcIjtcbn1cbi5mYS1wbGF5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDRiXCI7XG59XG4uZmEtcGF1c2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNGNcIjtcbn1cbi5mYS1zdG9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDRkXCI7XG59XG4uZmEtZm9yd2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0ZVwiO1xufVxuLmZhLWZhc3QtZm9yd2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA1MFwiO1xufVxuLmZhLXN0ZXAtZm9yd2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA1MVwiO1xufVxuLmZhLWVqZWN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDUyXCI7XG59XG4uZmEtY2hldnJvbi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDUzXCI7XG59XG4uZmEtY2hldnJvbi1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA1NFwiO1xufVxuLmZhLXBsdXMtY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDU1XCI7XG59XG4uZmEtbWludXMtY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDU2XCI7XG59XG4uZmEtdGltZXMtY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDU3XCI7XG59XG4uZmEtY2hlY2stY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDU4XCI7XG59XG4uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDU5XCI7XG59XG4uZmEtaW5mby1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNWFcIjtcbn1cbi5mYS1jcm9zc2hhaXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDViXCI7XG59XG4uZmEtdGltZXMtY2lyY2xlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNWNcIjtcbn1cbi5mYS1jaGVjay1jaXJjbGUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA1ZFwiO1xufVxuLmZhLWJhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA1ZVwiO1xufVxuLmZhLWFycm93LWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNjBcIjtcbn1cbi5mYS1hcnJvdy1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2MVwiO1xufVxuLmZhLWFycm93LXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDYyXCI7XG59XG4uZmEtYXJyb3ctZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2M1wiO1xufVxuLmZhLW1haWwtZm9yd2FyZDpiZWZvcmUsXG4uZmEtc2hhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNjRcIjtcbn1cbi5mYS1leHBhbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNjVcIjtcbn1cbi5mYS1jb21wcmVzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2NlwiO1xufVxuLmZhLXBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNjdcIjtcbn1cbi5mYS1taW51czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2OFwiO1xufVxuLmZhLWFzdGVyaXNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDY5XCI7XG59XG4uZmEtZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDZhXCI7XG59XG4uZmEtZ2lmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2YlwiO1xufVxuLmZhLWxlYWY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNmNcIjtcbn1cbi5mYS1maXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDZkXCI7XG59XG4uZmEtZXllOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDZlXCI7XG59XG4uZmEtZXllLXNsYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDcwXCI7XG59XG4uZmEtd2FybmluZzpiZWZvcmUsXG4uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNzFcIjtcbn1cbi5mYS1wbGFuZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3MlwiO1xufVxuLmZhLWNhbGVuZGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDczXCI7XG59XG4uZmEtcmFuZG9tOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDc0XCI7XG59XG4uZmEtY29tbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3NVwiO1xufVxuLmZhLW1hZ25ldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3NlwiO1xufVxuLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNzdcIjtcbn1cbi5mYS1jaGV2cm9uLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNzhcIjtcbn1cbi5mYS1yZXR3ZWV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDc5XCI7XG59XG4uZmEtc2hvcHBpbmctY2FydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3YVwiO1xufVxuLmZhLWZvbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3YlwiO1xufVxuLmZhLWZvbGRlci1vcGVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDdjXCI7XG59XG4uZmEtYXJyb3dzLXY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwN2RcIjtcbn1cbi5mYS1hcnJvd3MtaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3ZVwiO1xufVxuLmZhLWJhci1jaGFydC1vOmJlZm9yZSxcbi5mYS1iYXItY2hhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwODBcIjtcbn1cbi5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4MVwiO1xufVxuLmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4MlwiO1xufVxuLmZhLWNhbWVyYS1yZXRybzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4M1wiO1xufVxuLmZhLWtleTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4NFwiO1xufVxuLmZhLWdlYXJzOmJlZm9yZSxcbi5mYS1jb2dzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDg1XCI7XG59XG4uZmEtY29tbWVudHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwODZcIjtcbn1cbi5mYS10aHVtYnMtby11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4N1wiO1xufVxuLmZhLXRodW1icy1vLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwODhcIjtcbn1cbi5mYS1zdGFyLWhhbGY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwODlcIjtcbn1cbi5mYS1oZWFydC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDhhXCI7XG59XG4uZmEtc2lnbi1vdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOGJcIjtcbn1cbi5mYS1saW5rZWRpbi1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOGNcIjtcbn1cbi5mYS10aHVtYi10YWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDhkXCI7XG59XG4uZmEtZXh0ZXJuYWwtbGluazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4ZVwiO1xufVxuLmZhLXNpZ24taW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOTBcIjtcbn1cbi5mYS10cm9waHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOTFcIjtcbn1cbi5mYS1naXRodWItc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDkyXCI7XG59XG4uZmEtdXBsb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDkzXCI7XG59XG4uZmEtbGVtb24tbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA5NFwiO1xufVxuLmZhLXBob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDk1XCI7XG59XG4uZmEtc3F1YXJlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOTZcIjtcbn1cbi5mYS1ib29rbWFyay1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDk3XCI7XG59XG4uZmEtcGhvbmUtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDk4XCI7XG59XG4uZmEtdHdpdHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA5OVwiO1xufVxuLmZhLWZhY2Vib29rLWY6YmVmb3JlLFxuLmZhLWZhY2Vib29rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDlhXCI7XG59XG4uZmEtZ2l0aHViOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDliXCI7XG59XG4uZmEtdW5sb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDljXCI7XG59XG4uZmEtY3JlZGl0LWNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOWRcIjtcbn1cbi5mYS1mZWVkOmJlZm9yZSxcbi5mYS1yc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOWVcIjtcbn1cbi5mYS1oZGQtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBhMFwiO1xufVxuLmZhLWJ1bGxob3JuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGExXCI7XG59XG4uZmEtYmVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmM1wiO1xufVxuLmZhLWNlcnRpZmljYXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGEzXCI7XG59XG4uZmEtaGFuZC1vLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGE0XCI7XG59XG4uZmEtaGFuZC1vLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYTVcIjtcbn1cbi5mYS1oYW5kLW8tdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYTZcIjtcbn1cbi5mYS1oYW5kLW8tZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBhN1wiO1xufVxuLmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGE4XCI7XG59XG4uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGE5XCI7XG59XG4uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGFhXCI7XG59XG4uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYWJcIjtcbn1cbi5mYS1nbG9iZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBhY1wiO1xufVxuLmZhLXdyZW5jaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBhZFwiO1xufVxuLmZhLXRhc2tzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGFlXCI7XG59XG4uZmEtZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGIwXCI7XG59XG4uZmEtYnJpZWZjYXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGIxXCI7XG59XG4uZmEtYXJyb3dzLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBiMlwiO1xufVxuLmZhLWdyb3VwOmJlZm9yZSxcbi5mYS11c2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBjMFwiO1xufVxuLmZhLWNoYWluOmJlZm9yZSxcbi5mYS1saW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGMxXCI7XG59XG4uZmEtY2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYzJcIjtcbn1cbi5mYS1mbGFzazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBjM1wiO1xufVxuLmZhLWN1dDpiZWZvcmUsXG4uZmEtc2Npc3NvcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYzRcIjtcbn1cbi5mYS1jb3B5OmJlZm9yZSxcbi5mYS1maWxlcy1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGM1XCI7XG59XG4uZmEtcGFwZXJjbGlwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGM2XCI7XG59XG4uZmEtc2F2ZTpiZWZvcmUsXG4uZmEtZmxvcHB5LW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYzdcIjtcbn1cbi5mYS1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYzhcIjtcbn1cbi5mYS1uYXZpY29uOmJlZm9yZSxcbi5mYS1yZW9yZGVyOmJlZm9yZSxcbi5mYS1iYXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGM5XCI7XG59XG4uZmEtbGlzdC11bDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBjYVwiO1xufVxuLmZhLWxpc3Qtb2w6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwY2JcIjtcbn1cbi5mYS1zdHJpa2V0aHJvdWdoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGNjXCI7XG59XG4uZmEtdW5kZXJsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGNkXCI7XG59XG4uZmEtdGFibGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwY2VcIjtcbn1cbi5mYS1tYWdpYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBkMFwiO1xufVxuLmZhLXRydWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGQxXCI7XG59XG4uZmEtcGludGVyZXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGQyXCI7XG59XG4uZmEtcGludGVyZXN0LXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBkM1wiO1xufVxuLmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBkNFwiO1xufVxuLmZhLWdvb2dsZS1wbHVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGQ1XCI7XG59XG4uZmEtbW9uZXk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZDZcIjtcbn1cbi5mYS1jYXJldC1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGQ3XCI7XG59XG4uZmEtY2FyZXQtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZDhcIjtcbn1cbi5mYS1jYXJldC1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGQ5XCI7XG59XG4uZmEtY2FyZXQtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZGFcIjtcbn1cbi5mYS1jb2x1bW5zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGRiXCI7XG59XG4uZmEtdW5zb3J0ZWQ6YmVmb3JlLFxuLmZhLXNvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZGNcIjtcbn1cbi5mYS1zb3J0LWRvd246YmVmb3JlLFxuLmZhLXNvcnQtZGVzYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBkZFwiO1xufVxuLmZhLXNvcnQtdXA6YmVmb3JlLFxuLmZhLXNvcnQtYXNjOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGRlXCI7XG59XG4uZmEtZW52ZWxvcGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZTBcIjtcbn1cbi5mYS1saW5rZWRpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBlMVwiO1xufVxuLmZhLXJvdGF0ZS1sZWZ0OmJlZm9yZSxcbi5mYS11bmRvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGUyXCI7XG59XG4uZmEtbGVnYWw6YmVmb3JlLFxuLmZhLWdhdmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGUzXCI7XG59XG4uZmEtZGFzaGJvYXJkOmJlZm9yZSxcbi5mYS10YWNob21ldGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGU0XCI7XG59XG4uZmEtY29tbWVudC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGU1XCI7XG59XG4uZmEtY29tbWVudHMtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBlNlwiO1xufVxuLmZhLWZsYXNoOmJlZm9yZSxcbi5mYS1ib2x0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGU3XCI7XG59XG4uZmEtc2l0ZW1hcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBlOFwiO1xufVxuLmZhLXVtYnJlbGxhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGU5XCI7XG59XG4uZmEtcGFzdGU6YmVmb3JlLFxuLmZhLWNsaXBib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBlYVwiO1xufVxuLmZhLWxpZ2h0YnVsYi1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGViXCI7XG59XG4uZmEtZXhjaGFuZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZWNcIjtcbn1cbi5mYS1jbG91ZC1kb3dubG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBlZFwiO1xufVxuLmZhLWNsb3VkLXVwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBlZVwiO1xufVxuLmZhLXVzZXItbWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZjBcIjtcbn1cbi5mYS1zdGV0aG9zY29wZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmMVwiO1xufVxuLmZhLXN1aXRjYXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGYyXCI7XG59XG4uZmEtYmVsbC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGEyXCI7XG59XG4uZmEtY29mZmVlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGY0XCI7XG59XG4uZmEtY3V0bGVyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmNVwiO1xufVxuLmZhLWZpbGUtdGV4dC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGY2XCI7XG59XG4uZmEtYnVpbGRpbmctbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmN1wiO1xufVxuLmZhLWhvc3BpdGFsLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZjhcIjtcbn1cbi5mYS1hbWJ1bGFuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZjlcIjtcbn1cbi5mYS1tZWRraXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZmFcIjtcbn1cbi5mYS1maWdodGVyLWpldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmYlwiO1xufVxuLmZhLWJlZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZmNcIjtcbn1cbi5mYS1oLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmZFwiO1xufVxuLmZhLXBsdXMtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGZlXCI7XG59XG4uZmEtYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDBcIjtcbn1cbi5mYS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDFcIjtcbn1cbi5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDJcIjtcbn1cbi5mYS1hbmdsZS1kb3VibGUtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwM1wiO1xufVxuLmZhLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDRcIjtcbn1cbi5mYS1hbmdsZS1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwNVwiO1xufVxuLmZhLWFuZ2xlLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA2XCI7XG59XG4uZmEtYW5nbGUtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwN1wiO1xufVxuLmZhLWRlc2t0b3A6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDhcIjtcbn1cbi5mYS1sYXB0b3A6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDlcIjtcbn1cbi5mYS10YWJsZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMGFcIjtcbn1cbi5mYS1tb2JpbGUtcGhvbmU6YmVmb3JlLFxuLmZhLW1vYmlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwYlwiO1xufVxuLmZhLWNpcmNsZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTBjXCI7XG59XG4uZmEtcXVvdGUtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwZFwiO1xufVxuLmZhLXF1b3RlLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTBlXCI7XG59XG4uZmEtc3Bpbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExMFwiO1xufVxuLmZhLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExMVwiO1xufVxuLmZhLW1haWwtcmVwbHk6YmVmb3JlLFxuLmZhLXJlcGx5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTEyXCI7XG59XG4uZmEtZ2l0aHViLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExM1wiO1xufVxuLmZhLWZvbGRlci1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTE0XCI7XG59XG4uZmEtZm9sZGVyLW9wZW4tbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExNVwiO1xufVxuLmZhLXNtaWxlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMThcIjtcbn1cbi5mYS1mcm93bi1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTE5XCI7XG59XG4uZmEtbWVoLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMWFcIjtcbn1cbi5mYS1nYW1lcGFkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTFiXCI7XG59XG4uZmEta2V5Ym9hcmQtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExY1wiO1xufVxuLmZhLWZsYWctbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExZFwiO1xufVxuLmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTFlXCI7XG59XG4uZmEtdGVybWluYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjBcIjtcbn1cbi5mYS1jb2RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTIxXCI7XG59XG4uZmEtbWFpbC1yZXBseS1hbGw6YmVmb3JlLFxuLmZhLXJlcGx5LWFsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyMlwiO1xufVxuLmZhLXN0YXItaGFsZi1lbXB0eTpiZWZvcmUsXG4uZmEtc3Rhci1oYWxmLWZ1bGw6YmVmb3JlLFxuLmZhLXN0YXItaGFsZi1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTIzXCI7XG59XG4uZmEtbG9jYXRpb24tYXJyb3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjRcIjtcbn1cbi5mYS1jcm9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTI1XCI7XG59XG4uZmEtY29kZS1mb3JrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTI2XCI7XG59XG4uZmEtdW5saW5rOmJlZm9yZSxcbi5mYS1jaGFpbi1icm9rZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjdcIjtcbn1cbi5mYS1xdWVzdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyOFwiO1xufVxuLmZhLWluZm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjlcIjtcbn1cbi5mYS1leGNsYW1hdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyYVwiO1xufVxuLmZhLXN1cGVyc2NyaXB0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTJiXCI7XG59XG4uZmEtc3Vic2NyaXB0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTJjXCI7XG59XG4uZmEtZXJhc2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTJkXCI7XG59XG4uZmEtcHV6emxlLXBpZWNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTJlXCI7XG59XG4uZmEtbWljcm9waG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzMFwiO1xufVxuLmZhLW1pY3JvcGhvbmUtc2xhc2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMzFcIjtcbn1cbi5mYS1zaGllbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMzJcIjtcbn1cbi5mYS1jYWxlbmRhci1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTMzXCI7XG59XG4uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMzRcIjtcbn1cbi5mYS1yb2NrZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMzVcIjtcbn1cbi5mYS1tYXhjZG46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMzZcIjtcbn1cbi5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTM3XCI7XG59XG4uZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMzhcIjtcbn1cbi5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzOVwiO1xufVxuLmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxM2FcIjtcbn1cbi5mYS1odG1sNTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzYlwiO1xufVxuLmZhLWNzczM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxM2NcIjtcbn1cbi5mYS1hbmNob3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxM2RcIjtcbn1cbi5mYS11bmxvY2stYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTNlXCI7XG59XG4uZmEtYnVsbHNleWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNDBcIjtcbn1cbi5mYS1lbGxpcHNpcy1oOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTQxXCI7XG59XG4uZmEtZWxsaXBzaXMtdjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE0MlwiO1xufVxuLmZhLXJzcy1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNDNcIjtcbn1cbi5mYS1wbGF5LWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE0NFwiO1xufVxuLmZhLXRpY2tldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE0NVwiO1xufVxuLmZhLW1pbnVzLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE0NlwiO1xufVxuLmZhLW1pbnVzLXNxdWFyZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTQ3XCI7XG59XG4uZmEtbGV2ZWwtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNDhcIjtcbn1cbi5mYS1sZXZlbC1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTQ5XCI7XG59XG4uZmEtY2hlY2stc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTRhXCI7XG59XG4uZmEtcGVuY2lsLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE0YlwiO1xufVxuLmZhLWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTRjXCI7XG59XG4uZmEtc2hhcmUtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTRkXCI7XG59XG4uZmEtY29tcGFzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE0ZVwiO1xufVxuLmZhLXRvZ2dsZS1kb3duOmJlZm9yZSxcbi5mYS1jYXJldC1zcXVhcmUtby1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTUwXCI7XG59XG4uZmEtdG9nZ2xlLXVwOmJlZm9yZSxcbi5mYS1jYXJldC1zcXVhcmUtby11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1MVwiO1xufVxuLmZhLXRvZ2dsZS1yaWdodDpiZWZvcmUsXG4uZmEtY2FyZXQtc3F1YXJlLW8tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNTJcIjtcbn1cbi5mYS1ldXJvOmJlZm9yZSxcbi5mYS1ldXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNTNcIjtcbn1cbi5mYS1nYnA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNTRcIjtcbn1cbi5mYS1kb2xsYXI6YmVmb3JlLFxuLmZhLXVzZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1NVwiO1xufVxuLmZhLXJ1cGVlOmJlZm9yZSxcbi5mYS1pbnI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNTZcIjtcbn1cbi5mYS1jbnk6YmVmb3JlLFxuLmZhLXJtYjpiZWZvcmUsXG4uZmEteWVuOmJlZm9yZSxcbi5mYS1qcHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNTdcIjtcbn1cbi5mYS1ydWJsZTpiZWZvcmUsXG4uZmEtcm91YmxlOmJlZm9yZSxcbi5mYS1ydWI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNThcIjtcbn1cbi5mYS13b246YmVmb3JlLFxuLmZhLWtydzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1OVwiO1xufVxuLmZhLWJpdGNvaW46YmVmb3JlLFxuLmZhLWJ0YzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1YVwiO1xufVxuLmZhLWZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNWJcIjtcbn1cbi5mYS1maWxlLXRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNWNcIjtcbn1cbi5mYS1zb3J0LWFscGhhLWFzYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1ZFwiO1xufVxuLmZhLXNvcnQtYWxwaGEtZGVzYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1ZVwiO1xufVxuLmZhLXNvcnQtYW1vdW50LWFzYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2MFwiO1xufVxuLmZhLXNvcnQtYW1vdW50LWRlc2M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNjFcIjtcbn1cbi5mYS1zb3J0LW51bWVyaWMtYXNjOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTYyXCI7XG59XG4uZmEtc29ydC1udW1lcmljLWRlc2M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNjNcIjtcbn1cbi5mYS10aHVtYnMtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNjRcIjtcbn1cbi5mYS10aHVtYnMtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2NVwiO1xufVxuLmZhLXlvdXR1YmUtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTY2XCI7XG59XG4uZmEteW91dHViZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2N1wiO1xufVxuLmZhLXhpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNjhcIjtcbn1cbi5mYS14aW5nLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2OVwiO1xufVxuLmZhLXlvdXR1YmUtcGxheTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2YVwiO1xufVxuLmZhLWRyb3Bib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNmJcIjtcbn1cbi5mYS1zdGFjay1vdmVyZmxvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2Y1wiO1xufVxuLmZhLWluc3RhZ3JhbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2ZFwiO1xufVxuLmZhLWZsaWNrcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2ZVwiO1xufVxuLmZhLWFkbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3MFwiO1xufVxuLmZhLWJpdGJ1Y2tldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3MVwiO1xufVxuLmZhLWJpdGJ1Y2tldC1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNzJcIjtcbn1cbi5mYS10dW1ibHI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNzNcIjtcbn1cbi5mYS10dW1ibHItc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTc0XCI7XG59XG4uZmEtbG9uZy1hcnJvdy1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTc1XCI7XG59XG4uZmEtbG9uZy1hcnJvdy11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3NlwiO1xufVxuLmZhLWxvbmctYXJyb3ctbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3N1wiO1xufVxuLmZhLWxvbmctYXJyb3ctcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNzhcIjtcbn1cbi5mYS1hcHBsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3OVwiO1xufVxuLmZhLXdpbmRvd3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxN2FcIjtcbn1cbi5mYS1hbmRyb2lkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTdiXCI7XG59XG4uZmEtbGludXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxN2NcIjtcbn1cbi5mYS1kcmliYmJsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3ZFwiO1xufVxuLmZhLXNreXBlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTdlXCI7XG59XG4uZmEtZm91cnNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4MFwiO1xufVxuLmZhLXRyZWxsbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4MVwiO1xufVxuLmZhLWZlbWFsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4MlwiO1xufVxuLmZhLW1hbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxODNcIjtcbn1cbi5mYS1naXR0aXA6YmVmb3JlLFxuLmZhLWdyYXRpcGF5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTg0XCI7XG59XG4uZmEtc3VuLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxODVcIjtcbn1cbi5mYS1tb29uLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxODZcIjtcbn1cbi5mYS1hcmNoaXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTg3XCI7XG59XG4uZmEtYnVnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTg4XCI7XG59XG4uZmEtdms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxODlcIjtcbn1cbi5mYS13ZWlibzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4YVwiO1xufVxuLmZhLXJlbnJlbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4YlwiO1xufVxuLmZhLXBhZ2VsaW5lczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4Y1wiO1xufVxuLmZhLXN0YWNrLWV4Y2hhbmdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMThkXCI7XG59XG4uZmEtYXJyb3ctY2lyY2xlLW8tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOGVcIjtcbn1cbi5mYS1hcnJvdy1jaXJjbGUtby1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTkwXCI7XG59XG4uZmEtdG9nZ2xlLWxlZnQ6YmVmb3JlLFxuLmZhLWNhcmV0LXNxdWFyZS1vLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOTFcIjtcbn1cbi5mYS1kb3QtY2lyY2xlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOTJcIjtcbn1cbi5mYS13aGVlbGNoYWlyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTkzXCI7XG59XG4uZmEtdmltZW8tc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTk0XCI7XG59XG4uZmEtdHVya2lzaC1saXJhOmJlZm9yZSxcbi5mYS10cnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOTVcIjtcbn1cbi5mYS1wbHVzLXNxdWFyZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTk2XCI7XG59XG4uZmEtc3BhY2Utc2h1dHRsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE5N1wiO1xufVxuLmZhLXNsYWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTk4XCI7XG59XG4uZmEtZW52ZWxvcGUtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTk5XCI7XG59XG4uZmEtd29yZHByZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTlhXCI7XG59XG4uZmEtb3BlbmlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTliXCI7XG59XG4uZmEtaW5zdGl0dXRpb246YmVmb3JlLFxuLmZhLWJhbms6YmVmb3JlLFxuLmZhLXVuaXZlcnNpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOWNcIjtcbn1cbi5mYS1tb3J0YXItYm9hcmQ6YmVmb3JlLFxuLmZhLWdyYWR1YXRpb24tY2FwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTlkXCI7XG59XG4uZmEteWFob286YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOWVcIjtcbn1cbi5mYS1nb29nbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYTBcIjtcbn1cbi5mYS1yZWRkaXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYTFcIjtcbn1cbi5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWEyXCI7XG59XG4uZmEtc3R1bWJsZXVwb24tY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWEzXCI7XG59XG4uZmEtc3R1bWJsZXVwb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYTRcIjtcbn1cbi5mYS1kZWxpY2lvdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYTVcIjtcbn1cbi5mYS1kaWdnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWE2XCI7XG59XG4uZmEtcGllZC1waXBlci1wcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFhN1wiO1xufVxuLmZhLXBpZWQtcGlwZXItYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWE4XCI7XG59XG4uZmEtZHJ1cGFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWE5XCI7XG59XG4uZmEtam9vbWxhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWFhXCI7XG59XG4uZmEtbGFuZ3VhZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYWJcIjtcbn1cbi5mYS1mYXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYWNcIjtcbn1cbi5mYS1idWlsZGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFhZFwiO1xufVxuLmZhLWNoaWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWFlXCI7XG59XG4uZmEtcGF3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWIwXCI7XG59XG4uZmEtc3Bvb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYjFcIjtcbn1cbi5mYS1jdWJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWIyXCI7XG59XG4uZmEtY3ViZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYjNcIjtcbn1cbi5mYS1iZWhhbmNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWI0XCI7XG59XG4uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYjVcIjtcbn1cbi5mYS1zdGVhbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiNlwiO1xufVxuLmZhLXN0ZWFtLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiN1wiO1xufVxuLmZhLXJlY3ljbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYjhcIjtcbn1cbi5mYS1hdXRvbW9iaWxlOmJlZm9yZSxcbi5mYS1jYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYjlcIjtcbn1cbi5mYS1jYWI6YmVmb3JlLFxuLmZhLXRheGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYmFcIjtcbn1cbi5mYS10cmVlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWJiXCI7XG59XG4uZmEtc3BvdGlmeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiY1wiO1xufVxuLmZhLWRldmlhbnRhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYmRcIjtcbn1cbi5mYS1zb3VuZGNsb3VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWJlXCI7XG59XG4uZmEtZGF0YWJhc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYzBcIjtcbn1cbi5mYS1maWxlLXBkZi1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWMxXCI7XG59XG4uZmEtZmlsZS13b3JkLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYzJcIjtcbn1cbi5mYS1maWxlLWV4Y2VsLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYzNcIjtcbn1cbi5mYS1maWxlLXBvd2VycG9pbnQtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjNFwiO1xufVxuLmZhLWZpbGUtcGhvdG8tbzpiZWZvcmUsXG4uZmEtZmlsZS1waWN0dXJlLW86YmVmb3JlLFxuLmZhLWZpbGUtaW1hZ2UtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjNVwiO1xufVxuLmZhLWZpbGUtemlwLW86YmVmb3JlLFxuLmZhLWZpbGUtYXJjaGl2ZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWM2XCI7XG59XG4uZmEtZmlsZS1zb3VuZC1vOmJlZm9yZSxcbi5mYS1maWxlLWF1ZGlvLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYzdcIjtcbn1cbi5mYS1maWxlLW1vdmllLW86YmVmb3JlLFxuLmZhLWZpbGUtdmlkZW8tbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjOFwiO1xufVxuLmZhLWZpbGUtY29kZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWM5XCI7XG59XG4uZmEtdmluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjYVwiO1xufVxuLmZhLWNvZGVwZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxY2JcIjtcbn1cbi5mYS1qc2ZpZGRsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjY1wiO1xufVxuLmZhLWxpZmUtYm91eTpiZWZvcmUsXG4uZmEtbGlmZS1idW95OmJlZm9yZSxcbi5mYS1saWZlLXNhdmVyOmJlZm9yZSxcbi5mYS1zdXBwb3J0OmJlZm9yZSxcbi5mYS1saWZlLXJpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxY2RcIjtcbn1cbi5mYS1jaXJjbGUtby1ub3RjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjZVwiO1xufVxuLmZhLXJhOmJlZm9yZSxcbi5mYS1yZXNpc3RhbmNlOmJlZm9yZSxcbi5mYS1yZWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkMFwiO1xufVxuLmZhLWdlOmJlZm9yZSxcbi5mYS1lbXBpcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZDFcIjtcbn1cbi5mYS1naXQtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWQyXCI7XG59XG4uZmEtZ2l0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWQzXCI7XG59XG4uZmEteS1jb21iaW5hdG9yLXNxdWFyZTpiZWZvcmUsXG4uZmEteWMtc3F1YXJlOmJlZm9yZSxcbi5mYS1oYWNrZXItbmV3czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkNFwiO1xufVxuLmZhLXRlbmNlbnQtd2VpYm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZDVcIjtcbn1cbi5mYS1xcTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkNlwiO1xufVxuLmZhLXdlY2hhdDpiZWZvcmUsXG4uZmEtd2VpeGluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWQ3XCI7XG59XG4uZmEtc2VuZDpiZWZvcmUsXG4uZmEtcGFwZXItcGxhbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZDhcIjtcbn1cbi5mYS1zZW5kLW86YmVmb3JlLFxuLmZhLXBhcGVyLXBsYW5lLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZDlcIjtcbn1cbi5mYS1oaXN0b3J5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWRhXCI7XG59XG4uZmEtY2lyY2xlLXRoaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZGJcIjtcbn1cbi5mYS1oZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZGNcIjtcbn1cbi5mYS1wYXJhZ3JhcGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZGRcIjtcbn1cbi5mYS1zbGlkZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWRlXCI7XG59XG4uZmEtc2hhcmUtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWUwXCI7XG59XG4uZmEtc2hhcmUtYWx0LXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlMVwiO1xufVxuLmZhLWJvbWI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZTJcIjtcbn1cbi5mYS1zb2NjZXItYmFsbC1vOmJlZm9yZSxcbi5mYS1mdXRib2wtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlM1wiO1xufVxuLmZhLXR0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlNFwiO1xufVxuLmZhLWJpbm9jdWxhcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZTVcIjtcbn1cbi5mYS1wbHVnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWU2XCI7XG59XG4uZmEtc2xpZGVzaGFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlN1wiO1xufVxuLmZhLXR3aXRjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlOFwiO1xufVxuLmZhLXllbHA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZTlcIjtcbn1cbi5mYS1uZXdzcGFwZXItbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlYVwiO1xufVxuLmZhLXdpZmk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZWJcIjtcbn1cbi5mYS1jYWxjdWxhdG9yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWVjXCI7XG59XG4uZmEtcGF5cGFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWVkXCI7XG59XG4uZmEtZ29vZ2xlLXdhbGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlZVwiO1xufVxuLmZhLWNjLXZpc2E6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZjBcIjtcbn1cbi5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWYxXCI7XG59XG4uZmEtY2MtZGlzY292ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZjJcIjtcbn1cbi5mYS1jYy1hbWV4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWYzXCI7XG59XG4uZmEtY2MtcGF5cGFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWY0XCI7XG59XG4uZmEtY2Mtc3RyaXBlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWY1XCI7XG59XG4uZmEtYmVsbC1zbGFzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFmNlwiO1xufVxuLmZhLWJlbGwtc2xhc2gtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFmN1wiO1xufVxuLmZhLXRyYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWY4XCI7XG59XG4uZmEtY29weXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWY5XCI7XG59XG4uZmEtYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZmFcIjtcbn1cbi5mYS1leWVkcm9wcGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWZiXCI7XG59XG4uZmEtcGFpbnQtYnJ1c2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZmNcIjtcbn1cbi5mYS1iaXJ0aGRheS1jYWtlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWZkXCI7XG59XG4uZmEtYXJlYS1jaGFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFmZVwiO1xufVxuLmZhLXBpZS1jaGFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwMFwiO1xufVxuLmZhLWxpbmUtY2hhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDFcIjtcbn1cbi5mYS1sYXN0Zm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDJcIjtcbn1cbi5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjAzXCI7XG59XG4uZmEtdG9nZ2xlLW9mZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwNFwiO1xufVxuLmZhLXRvZ2dsZS1vbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwNVwiO1xufVxuLmZhLWJpY3ljbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDZcIjtcbn1cbi5mYS1idXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDdcIjtcbn1cbi5mYS1pb3hob3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjA4XCI7XG59XG4uZmEtYW5nZWxsaXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjA5XCI7XG59XG4uZmEtY2M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMGFcIjtcbn1cbi5mYS1zaGVrZWw6YmVmb3JlLFxuLmZhLXNoZXFlbDpiZWZvcmUsXG4uZmEtaWxzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjBiXCI7XG59XG4uZmEtbWVhbnBhdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMGNcIjtcbn1cbi5mYS1idXlzZWxsYWRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjBkXCI7XG59XG4uZmEtY29ubmVjdGRldmVsb3A6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMGVcIjtcbn1cbi5mYS1kYXNoY3ViZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIxMFwiO1xufVxuLmZhLWZvcnVtYmVlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjExXCI7XG59XG4uZmEtbGVhbnB1YjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIxMlwiO1xufVxuLmZhLXNlbGxzeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIxM1wiO1xufVxuLmZhLXNoaXJ0c2luYnVsazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIxNFwiO1xufVxuLmZhLXNpbXBseWJ1aWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjE1XCI7XG59XG4uZmEtc2t5YXRsYXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMTZcIjtcbn1cbi5mYS1jYXJ0LXBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMTdcIjtcbn1cbi5mYS1jYXJ0LWFycm93LWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMThcIjtcbn1cbi5mYS1kaWFtb25kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjE5XCI7XG59XG4uZmEtc2hpcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIxYVwiO1xufVxuLmZhLXVzZXItc2VjcmV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjFiXCI7XG59XG4uZmEtbW90b3JjeWNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIxY1wiO1xufVxuLmZhLXN0cmVldC12aWV3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjFkXCI7XG59XG4uZmEtaGVhcnRiZWF0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjFlXCI7XG59XG4uZmEtdmVudXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMjFcIjtcbn1cbi5mYS1tYXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjIyXCI7XG59XG4uZmEtbWVyY3VyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIyM1wiO1xufVxuLmZhLWludGVyc2V4OmJlZm9yZSxcbi5mYS10cmFuc2dlbmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIyNFwiO1xufVxuLmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIyNVwiO1xufVxuLmZhLXZlbnVzLWRvdWJsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIyNlwiO1xufVxuLmZhLW1hcnMtZG91YmxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjI3XCI7XG59XG4uZmEtdmVudXMtbWFyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIyOFwiO1xufVxuLmZhLW1hcnMtc3Ryb2tlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjI5XCI7XG59XG4uZmEtbWFycy1zdHJva2UtdjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIyYVwiO1xufVxuLmZhLW1hcnMtc3Ryb2tlLWg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMmJcIjtcbn1cbi5mYS1uZXV0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMmNcIjtcbn1cbi5mYS1nZW5kZXJsZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjJkXCI7XG59XG4uZmEtZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMzBcIjtcbn1cbi5mYS1waW50ZXJlc3QtcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzMVwiO1xufVxuLmZhLXdoYXRzYXBwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjMyXCI7XG59XG4uZmEtc2VydmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjMzXCI7XG59XG4uZmEtdXNlci1wbHVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjM0XCI7XG59XG4uZmEtdXNlci10aW1lczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzNVwiO1xufVxuLmZhLWhvdGVsOmJlZm9yZSxcbi5mYS1iZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMzZcIjtcbn1cbi5mYS12aWFjb2luOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjM3XCI7XG59XG4uZmEtdHJhaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMzhcIjtcbn1cbi5mYS1zdWJ3YXk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMzlcIjtcbn1cbi5mYS1tZWRpdW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyM2FcIjtcbn1cbi5mYS15YzpiZWZvcmUsXG4uZmEteS1jb21iaW5hdG9yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjNiXCI7XG59XG4uZmEtb3B0aW4tbW9uc3RlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzY1wiO1xufVxuLmZhLW9wZW5jYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjNkXCI7XG59XG4uZmEtZXhwZWRpdGVkc3NsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjNlXCI7XG59XG4uZmEtYmF0dGVyeS00OmJlZm9yZSxcbi5mYS1iYXR0ZXJ5OmJlZm9yZSxcbi5mYS1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNDBcIjtcbn1cbi5mYS1iYXR0ZXJ5LTM6YmVmb3JlLFxuLmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNDFcIjtcbn1cbi5mYS1iYXR0ZXJ5LTI6YmVmb3JlLFxuLmZhLWJhdHRlcnktaGFsZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0MlwiO1xufVxuLmZhLWJhdHRlcnktMTpiZWZvcmUsXG4uZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjQzXCI7XG59XG4uZmEtYmF0dGVyeS0wOmJlZm9yZSxcbi5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjQ0XCI7XG59XG4uZmEtbW91c2UtcG9pbnRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0NVwiO1xufVxuLmZhLWktY3Vyc29yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjQ2XCI7XG59XG4uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjQ3XCI7XG59XG4uZmEtb2JqZWN0LXVuZ3JvdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNDhcIjtcbn1cbi5mYS1zdGlja3ktbm90ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0OVwiO1xufVxuLmZhLXN0aWNreS1ub3RlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNGFcIjtcbn1cbi5mYS1jYy1qY2I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNGJcIjtcbn1cbi5mYS1jYy1kaW5lcnMtY2x1YjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0Y1wiO1xufVxuLmZhLWNsb25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjRkXCI7XG59XG4uZmEtYmFsYW5jZS1zY2FsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0ZVwiO1xufVxuLmZhLWhvdXJnbGFzcy1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjUwXCI7XG59XG4uZmEtaG91cmdsYXNzLTE6YmVmb3JlLFxuLmZhLWhvdXJnbGFzcy1zdGFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1MVwiO1xufVxuLmZhLWhvdXJnbGFzcy0yOmJlZm9yZSxcbi5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1MlwiO1xufVxuLmZhLWhvdXJnbGFzcy0zOmJlZm9yZSxcbi5mYS1ob3VyZ2xhc3MtZW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjUzXCI7XG59XG4uZmEtaG91cmdsYXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjU0XCI7XG59XG4uZmEtaGFuZC1ncmFiLW86YmVmb3JlLFxuLmZhLWhhbmQtcm9jay1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjU1XCI7XG59XG4uZmEtaGFuZC1zdG9wLW86YmVmb3JlLFxuLmZhLWhhbmQtcGFwZXItbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1NlwiO1xufVxuLmZhLWhhbmQtc2Npc3NvcnMtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1N1wiO1xufVxuLmZhLWhhbmQtbGl6YXJkLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNThcIjtcbn1cbi5mYS1oYW5kLXNwb2NrLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNTlcIjtcbn1cbi5mYS1oYW5kLXBvaW50ZXItbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1YVwiO1xufVxuLmZhLWhhbmQtcGVhY2UtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1YlwiO1xufVxuLmZhLXRyYWRlbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1Y1wiO1xufVxuLmZhLXJlZ2lzdGVyZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNWRcIjtcbn1cbi5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjVlXCI7XG59XG4uZmEtZ2c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNjBcIjtcbn1cbi5mYS1nZy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNjFcIjtcbn1cbi5mYS10cmlwYWR2aXNvcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2MlwiO1xufVxuLmZhLW9kbm9rbGFzc25pa2k6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNjNcIjtcbn1cbi5mYS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2NFwiO1xufVxuLmZhLWdldC1wb2NrZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNjVcIjtcbn1cbi5mYS13aWtpcGVkaWEtdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2NlwiO1xufVxuLmZhLXNhZmFyaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2N1wiO1xufVxuLmZhLWNocm9tZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2OFwiO1xufVxuLmZhLWZpcmVmb3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNjlcIjtcbn1cbi5mYS1vcGVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2YVwiO1xufVxuLmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjZiXCI7XG59XG4uZmEtdHY6YmVmb3JlLFxuLmZhLXRlbGV2aXNpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNmNcIjtcbn1cbi5mYS1jb250YW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNmRcIjtcbn1cbi5mYS01MDBweDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2ZVwiO1xufVxuLmZhLWFtYXpvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3MFwiO1xufVxuLmZhLWNhbGVuZGFyLXBsdXMtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3MVwiO1xufVxuLmZhLWNhbGVuZGFyLW1pbnVzLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNzJcIjtcbn1cbi5mYS1jYWxlbmRhci10aW1lcy1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjczXCI7XG59XG4uZmEtY2FsZW5kYXItY2hlY2stbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3NFwiO1xufVxuLmZhLWluZHVzdHJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjc1XCI7XG59XG4uZmEtbWFwLXBpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3NlwiO1xufVxuLmZhLW1hcC1zaWduczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3N1wiO1xufVxuLmZhLW1hcC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjc4XCI7XG59XG4uZmEtbWFwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjc5XCI7XG59XG4uZmEtY29tbWVudGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3YVwiO1xufVxuLmZhLWNvbW1lbnRpbmctbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3YlwiO1xufVxuLmZhLWhvdXp6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjdjXCI7XG59XG4uZmEtdmltZW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyN2RcIjtcbn1cbi5mYS1ibGFjay10aWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyN2VcIjtcbn1cbi5mYS1mb250aWNvbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODBcIjtcbn1cbi5mYS1yZWRkaXQtYWxpZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODFcIjtcbn1cbi5mYS1lZGdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjgyXCI7XG59XG4uZmEtY3JlZGl0LWNhcmQtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjgzXCI7XG59XG4uZmEtY29kaWVwaWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODRcIjtcbn1cbi5mYS1tb2R4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjg1XCI7XG59XG4uZmEtZm9ydC1hd2Vzb21lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjg2XCI7XG59XG4uZmEtdXNiOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjg3XCI7XG59XG4uZmEtcHJvZHVjdC1odW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjg4XCI7XG59XG4uZmEtbWl4Y2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODlcIjtcbn1cbi5mYS1zY3JpYmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOGFcIjtcbn1cbi5mYS1wYXVzZS1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOGJcIjtcbn1cbi5mYS1wYXVzZS1jaXJjbGUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI4Y1wiO1xufVxuLmZhLXN0b3AtY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjhkXCI7XG59XG4uZmEtc3RvcC1jaXJjbGUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI4ZVwiO1xufVxuLmZhLXNob3BwaW5nLWJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5MFwiO1xufVxuLmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5MVwiO1xufVxuLmZhLWhhc2h0YWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOTJcIjtcbn1cbi5mYS1ibHVldG9vdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOTNcIjtcbn1cbi5mYS1ibHVldG9vdGgtYjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5NFwiO1xufVxuLmZhLXBlcmNlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOTVcIjtcbn1cbi5mYS1naXRsYWI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOTZcIjtcbn1cbi5mYS13cGJlZ2lubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjk3XCI7XG59XG4uZmEtd3Bmb3JtczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5OFwiO1xufVxuLmZhLWVudmlyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5OVwiO1xufVxuLmZhLXVuaXZlcnNhbC1hY2Nlc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOWFcIjtcbn1cbi5mYS13aGVlbGNoYWlyLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5YlwiO1xufVxuLmZhLXF1ZXN0aW9uLWNpcmNsZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjljXCI7XG59XG4uZmEtYmxpbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOWRcIjtcbn1cbi5mYS1hdWRpby1kZXNjcmlwdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5ZVwiO1xufVxuLmZhLXZvbHVtZS1jb250cm9sLXBob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmEwXCI7XG59XG4uZmEtYnJhaWxsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJhMVwiO1xufVxuLmZhLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJhMlwiO1xufVxuLmZhLWFzbC1pbnRlcnByZXRpbmc6YmVmb3JlLFxuLmZhLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmEzXCI7XG59XG4uZmEtZGVhZm5lc3M6YmVmb3JlLFxuLmZhLWhhcmQtb2YtaGVhcmluZzpiZWZvcmUsXG4uZmEtZGVhZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJhNFwiO1xufVxuLmZhLWdsaWRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmE1XCI7XG59XG4uZmEtZ2xpZGUtZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJhNlwiO1xufVxuLmZhLXNpZ25pbmc6YmVmb3JlLFxuLmZhLXNpZ24tbGFuZ3VhZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYTdcIjtcbn1cbi5mYS1sb3ctdmlzaW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmE4XCI7XG59XG4uZmEtdmlhZGVvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmE5XCI7XG59XG4uZmEtdmlhZGVvLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJhYVwiO1xufVxuLmZhLXNuYXBjaGF0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmFiXCI7XG59XG4uZmEtc25hcGNoYXQtZ2hvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYWNcIjtcbn1cbi5mYS1zbmFwY2hhdC1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYWRcIjtcbn1cbi5mYS1waWVkLXBpcGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmFlXCI7XG59XG4uZmEtZmlyc3Qtb3JkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYjBcIjtcbn1cbi5mYS15b2FzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJiMVwiO1xufVxuLmZhLXRoZW1laXNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJiMlwiO1xufVxuLmZhLWdvb2dsZS1wbHVzLWNpcmNsZTpiZWZvcmUsXG4uZmEtZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYjNcIjtcbn1cbi5mYS1mYTpiZWZvcmUsXG4uZmEtZm9udC1hd2Vzb21lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmI0XCI7XG59XG4uZmEtaGFuZHNoYWtlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYjVcIjtcbn1cbi5mYS1lbnZlbG9wZS1vcGVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmI2XCI7XG59XG4uZmEtZW52ZWxvcGUtb3Blbi1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmI3XCI7XG59XG4uZmEtbGlub2RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmI4XCI7XG59XG4uZmEtYWRkcmVzcy1ib29rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmI5XCI7XG59XG4uZmEtYWRkcmVzcy1ib29rLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYmFcIjtcbn1cbi5mYS12Y2FyZDpiZWZvcmUsXG4uZmEtYWRkcmVzcy1jYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmJiXCI7XG59XG4uZmEtdmNhcmQtbzpiZWZvcmUsXG4uZmEtYWRkcmVzcy1jYXJkLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYmNcIjtcbn1cbi5mYS11c2VyLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJiZFwiO1xufVxuLmZhLXVzZXItY2lyY2xlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYmVcIjtcbn1cbi5mYS11c2VyLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYzBcIjtcbn1cbi5mYS1pZC1iYWRnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjMVwiO1xufVxuLmZhLWRyaXZlcnMtbGljZW5zZTpiZWZvcmUsXG4uZmEtaWQtY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjMlwiO1xufVxuLmZhLWRyaXZlcnMtbGljZW5zZS1vOmJlZm9yZSxcbi5mYS1pZC1jYXJkLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYzNcIjtcbn1cbi5mYS1xdW9yYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjNFwiO1xufVxuLmZhLWZyZWUtY29kZS1jYW1wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmM1XCI7XG59XG4uZmEtdGVsZWdyYW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYzZcIjtcbn1cbi5mYS10aGVybW9tZXRlci00OmJlZm9yZSxcbi5mYS10aGVybW9tZXRlcjpiZWZvcmUsXG4uZmEtdGhlcm1vbWV0ZXItZnVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjN1wiO1xufVxuLmZhLXRoZXJtb21ldGVyLTM6YmVmb3JlLFxuLmZhLXRoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmM4XCI7XG59XG4uZmEtdGhlcm1vbWV0ZXItMjpiZWZvcmUsXG4uZmEtdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjOVwiO1xufVxuLmZhLXRoZXJtb21ldGVyLTE6YmVmb3JlLFxuLmZhLXRoZXJtb21ldGVyLXF1YXJ0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyY2FcIjtcbn1cbi5mYS10aGVybW9tZXRlci0wOmJlZm9yZSxcbi5mYS10aGVybW9tZXRlci1lbXB0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjYlwiO1xufVxuLmZhLXNob3dlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjY1wiO1xufVxuLmZhLWJhdGh0dWI6YmVmb3JlLFxuLmZhLXMxNTpiZWZvcmUsXG4uZmEtYmF0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjZFwiO1xufVxuLmZhLXBvZGNhc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyY2VcIjtcbn1cbi5mYS13aW5kb3ctbWF4aW1pemU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZDBcIjtcbn1cbi5mYS13aW5kb3ctbWluaW1pemU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZDFcIjtcbn1cbi5mYS13aW5kb3ctcmVzdG9yZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJkMlwiO1xufVxuLmZhLXRpbWVzLXJlY3RhbmdsZTpiZWZvcmUsXG4uZmEtd2luZG93LWNsb3NlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmQzXCI7XG59XG4uZmEtdGltZXMtcmVjdGFuZ2xlLW86YmVmb3JlLFxuLmZhLXdpbmRvdy1jbG9zZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmQ0XCI7XG59XG4uZmEtYmFuZGNhbXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZDVcIjtcbn1cbi5mYS1ncmF2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmQ2XCI7XG59XG4uZmEtZXRzeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJkN1wiO1xufVxuLmZhLWltZGI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZDhcIjtcbn1cbi5mYS1yYXZlbHJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmQ5XCI7XG59XG4uZmEtZWVyY2FzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJkYVwiO1xufVxuLmZhLW1pY3JvY2hpcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJkYlwiO1xufVxuLmZhLXNub3dmbGFrZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmRjXCI7XG59XG4uZmEtc3VwZXJwb3dlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZGRcIjtcbn1cbi5mYS13cGV4cGxvcmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmRlXCI7XG59XG4uZmEtbWVldHVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmUwXCI7XG59XG4uc3Itb25seSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyOiAwO1xufVxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSxcbi5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGNsaXA6IGF1dG87XG59XG4iLCJAaW1wb3J0ICd+Zm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUuY3NzJztcclxuXHJcbi5hbGVydCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5hY3RpdmUtbGkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tb2RhbC1saTpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcclxufVxyXG4uY2l0eS1saSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLDAsMCwuMTUpO1xyXG59XHJcbi5jaXR5LWxpOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xyXG59XHJcbi5jaXR5LWxpOmhvdmVyIC5jbG9zZS1pY29uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jaXR5LWxpOmhvdmVyIC53ZWF0aGVyLWljb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zZWNvbmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLndlYXRoZXItaWNvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNsb3NlLWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAuY2l0eS1saTpob3ZlciAuY2xvc2UtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuY2l0eS1saTpob3ZlciAud2VhdGhlci1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5jaXR5LWxpIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cities',
                templateUrl: './cities.component.html',
                styleUrls: ['./cities.component.css']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }]; }, null); })();


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cities_cities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cities/cities.component */ "GBPO");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather/weather.component */ "tj7W");




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 7, vars: 0, consts: [[1, "jumbotron", "bg-white", "text-center"], [1, "container"], [1, "row"], [1, "col-md-4", "cities"], [1, "col-md-8", "weather"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-weather");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cities_cities_component__WEBPACK_IMPORTED_MODULE_1__["CitiesComponent"], _weather_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"]], styles: ["@media (max-width: 767px) {\r\n  .weather[_ngcontent-%COMP%] {\r\n    padding-top: 2rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLndlYXRoZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/weather/weather.component */ "tj7W");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_cities_cities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cities/cities.component */ "GBPO");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/string.pipe */ "4DaU");
/* harmony import */ var _pipes_degrees_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/degrees.pipe */ "fUio");
/* harmony import */ var _pipes_pressure_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/pressure.pipe */ "zEwx");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/main.service */ "c/rV");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_12__["MainService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
        _components_cities_cities_component__WEBPACK_IMPORTED_MODULE_7__["CitiesComponent"],
        _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_9__["StringPipe"],
        _pipes_degrees_pipe__WEBPACK_IMPORTED_MODULE_10__["DegreesPipe"],
        _pipes_pressure_pipe__WEBPACK_IMPORTED_MODULE_11__["PressurePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                    _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
                    _components_cities_cities_component__WEBPACK_IMPORTED_MODULE_7__["CitiesComponent"],
                    _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_9__["StringPipe"],
                    _pipes_degrees_pipe__WEBPACK_IMPORTED_MODULE_10__["DegreesPipe"],
                    _pipes_pressure_pipe__WEBPACK_IMPORTED_MODULE_11__["PressurePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                ],
                providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_12__["MainService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "c/rV":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MainService {
    constructor(http) {
        this.http = http;
        // Параметр для получения значения из объекта
        this.param = `1h`;
        // Активный город
        this.activeCity = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Города из json-файла
        // Локальные переменные
        this.idsFromJsonArr = new Array();
        this.citiesFromJsonArr = new Array();
        // Связь с компонентом
        this.citiesFromJsonLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.citiesFromJson = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.citiesFromJsonError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Города из localStorage
        // Локальные переменные
        this.idsFromLocalArr = new Array();
        this.citiesFromLocalArr = new Array();
        this.citiesFromLocalError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Связь с компонентом
        this.citiesFromLocalLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.citiesFromLocal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.idsFromLocal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Погода
        this.weatherInThisCiti = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Получение значения из json файла
    // tslint:disable-next-line:typedef
    getCitiesFromJson() {
        // Запрос к файлу
        this.http.get(`assets/city.list.json`).toPromise()
            .then((response) => {
            response.forEach((city) => {
                // Добавляем id каждого города в массив
                this.idsFromJsonArr.push(Number(city.id));
            });
            // Для каждого id создаем переменную типа cityInterface и записываем ее в массив
            this.idsFromJsonArr.forEach((id) => {
                this.getCityInfo(id, this.citiesFromJsonArr, this.citiesFromJson, this.citiesFromJsonLoading, () => {
                    // После загрузки хотя бы одного города - показываем кнопку
                    this.buttonActive.emit(true);
                });
            });
            // Если ошибка - скрываем кнопку
        }).catch(() => this.buttonActive.emit(false));
    }
    // Получение значения из localStorage
    // tslint:disable-next-line:typedef
    getCitiesFromLocal() {
        // Выводим загрузку
        this.citiesFromLocalLoading.emit(true);
        // Обнуляем массив
        this.citiesFromLocalArr = new Array();
        // Записываем содержимое localStorage в переменную
        this.idsFromLocalArr = JSON.parse(localStorage.getItem('angular-weather-cities'));
        // Если там есть данные
        if (!this.idsFromLocalArr) {
            this.idsFromLocalArr = new Array();
        }
        if (this.idsFromLocalArr.length) {
            // Получаем id последнего активного города
            this.getActiveCity();
            // Для каждого id создаем переменную типа cityInterface и записываем ее в массив
            this.idsFromLocalArr.forEach((id) => {
                this.getCityInfo(id, this.citiesFromLocalArr, this.citiesFromLocal, this.citiesFromLocalLoading, (city) => {
                    if (this.activeCityFromLocal === city.id) {
                        this.getWeather(city);
                    }
                });
            });
        }
        else {
            this.citiesFromLocal.emit(this.citiesFromLocalArr);
            this.citiesFromLocalLoading.emit(false);
        }
        // Отправляем ее для сравнения
        this.idsFromLocal.emit(this.idsFromLocalArr);
    }
    // Добавление города в быстрый доступ
    // tslint:disable-next-line:typedef
    addCityToLocal(city) {
        // Добавляем id выбранного города в массив
        this.idsFromLocalArr.push(city.id);
        // Смотрим - нужно ли убрать кнопку
        if (this.idsFromLocalArr.length === this.citiesFromJsonArr.length) {
            this.buttonActive.emit(false);
        }
        // Делаем города активным
        this.setActiveCity(city.id);
        // Записываем в localStorage
        localStorage.setItem('angular-weather-cities', JSON.stringify(this.idsFromLocalArr));
        // Заного выводим горорда в быстром доступе, так же обновляя данные о погоде в них
        this.getCitiesFromLocal();
        // Выводим погоду для данного города
        this.getWeather(city);
    }
    // Удаление из быстрого доступа
    // tslint:disable-next-line:typedef
    deleteCityFromLocal(city) {
        // Удаляем id выбранного города из массива
        this.idsFromLocalArr.splice(this.idsFromLocalArr.indexOf(city.id), 1);
        // Проверяем - был ли это последний город
        if (!this.idsFromLocalArr.length) {
            // Если да - обнуляем все данные
            this.weatherInThisCiti.emit(null);
            localStorage.setItem('angular-weather-cities', JSON.stringify(this.idsFromLocalArr));
            this.setActiveCity(0);
        }
        else {
            // Показываем кнопку
            this.buttonActive.emit(true);
            // Если удаленный город был активным
            if (city.id === this.activeCityFromLocal) {
                // Выбираем новый активный город
                this.setActiveCity(this.idsFromLocalArr[0]);
            }
            // Записывавем в localStorage отредактированный массив
            localStorage.setItem('angular-weather-cities', JSON.stringify(this.idsFromLocalArr));
        }
        // Заного выводим города в быстром доступе, так же обновляя данные о погоде в них
        this.getCitiesFromLocal();
    }
    // Получение погоды
    // tslint:disable-next-line:typedef
    getWeather(city) {
        // Передаем значение в компонент погоды
        this.weatherInThisCiti.emit(city);
        // Делаем данный город активным
        this.setActiveCity(city.id);
    }
    // tslint:disable-next-line:typedef
    getCityInfo(id, arr, emit, loading, func) {
        loading.emit(true);
        // tslint:disable-next-line:new-parens
        const city = new class {
            constructor() {
                // tslint:disable-next-line:new-parens
                this.weather = new class {
                    constructor() {
                        // @ts-ignore
                        this.clouds = {};
                        // @ts-ignore
                        this.main = {};
                        // @ts-ignore
                        this.rain = {};
                        // @ts-ignore
                        this.snow = {};
                        // @ts-ignore
                        this.weather = {};
                        // @ts-ignore
                        this.wind = {};
                    }
                };
            }
        };
        // tslint:disable-next-line:max-line-length
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/data/2.5/weather?id=${id}&lang=ru&units=metric&APPID=${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiKey}`).toPromise()
            .then((response) => {
            city.id = response.id;
            city.name = response.name;
            city.active = true;
            city.weather.weather.id = response.weather[0].id;
            city.weather.weather.main = response.weather[0].main;
            city.weather.weather.description = response.weather[0].description;
            city.weather.weather.icon = response.weather[0].icon;
            city.weather.main.temp = response.main.temp;
            city.weather.main.feels = response.main.feels_like;
            city.weather.main.pressure = response.main.pressure;
            city.weather.main.humidity = response.main.humidity;
            if (response.wind) {
                city.weather.wind.speed = response.wind.speed;
            }
            if (response.clouds) {
                city.weather.clouds.all = response.clouds.all;
            }
            if (response.rain) {
                city.weather.rain.rain1h = response.rain[this.param];
            }
            if (response.snow) {
                city.weather.snow.snow1h = response.snow[this.param];
            }
            func(city);
        })
            .catch(() => {
            city.active = false;
        })
            .finally(() => {
            // Добавляем в массив созданный объект
            arr.push(city);
            // Передаем это массив в модуль
            emit.emit(arr);
            // Передаем в модуль, что загрузка завершенна
            loading.emit(false);
        });
    }
    // Записываем активный город
    // tslint:disable-next-line:typedef
    setActiveCity(id) {
        this.activeCityFromLocal = id;
        this.activeCity.emit(this.activeCityFromLocal);
        localStorage.setItem('angular-weather-active', String(this.activeCityFromLocal));
    }
    // Получаем последний активный город
    // tslint:disable-next-line:typedef
    getActiveCity() {
        this.activeCityFromLocal = Number(localStorage.getItem('angular-weather-active'));
        this.activeCity.emit(this.activeCityFromLocal);
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fUio":
/*!***************************************!*\
  !*** ./src/app/pipes/degrees.pipe.ts ***!
  \***************************************/
/*! exports provided: DegreesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreesPipe", function() { return DegreesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DegreesPipe {
    transform(value) {
        return Math.round(+value);
    }
}
DegreesPipe.ɵfac = function DegreesPipe_Factory(t) { return new (t || DegreesPipe)(); };
DegreesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "degrees", type: DegreesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DegreesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'degrees'
            }]
    }], null, null); })();


/***/ }),

/***/ "tj7W":
/*!*********************************************************!*\
  !*** ./src/app/components/weather/weather.component.ts ***!
  \*********************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/main.service */ "c/rV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/string.pipe */ "4DaU");
/* harmony import */ var _pipes_degrees_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/degrees.pipe */ "fUio");
/* harmony import */ var _pipes_pressure_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/pressure.pipe */ "zEwx");







function WeatherComponent_div_0_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0441\u0430\u0434\u043A\u043E\u0432: ", ctx_r1.weather.weather.rain.rain1h, " \u043C\u043C");
} }
function WeatherComponent_div_0_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0441\u0430\u0434\u043A\u043E\u0432: ", ctx_r2.weather.weather.snow.snow1h, " \u043C\u043C");
} }
function WeatherComponent_div_0_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041E\u0431\u043B\u0430\u0447\u043D\u043E\u0441\u0442\u044C: ", ctx_r3.weather.weather.clouds["all"], " %");
} }
function WeatherComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "degrees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "degrees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "pressure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WeatherComponent_div_0_li_23_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WeatherComponent_div_0_li_24_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WeatherComponent_div_0_li_25_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.weather.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://openweathermap.org/img/w/", ctx_r0.weather.weather.weather.icon, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, ctx_r0.weather.weather.weather.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, ctx_r0.weather.weather.main.temp), "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 15, ctx_r0.weather.weather.main.feels), "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0410\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 17, ctx_r0.weather.weather.main.pressure), " \u043C\u043C.\u0440\u0442.\u0441\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C: ", ctx_r0.weather.weather.main.humidity, " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u0442\u0440\u0430: ", ctx_r0.weather.weather.wind.speed, " \u043C/\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.weather.weather.rain.rain1h);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.weather.weather.snow.snow1h);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.weather.weather.clouds);
} }
class WeatherComponent {
    constructor(mainService) {
        this.mainService = mainService;
        // Начало загрузки
        this.mainService.weatherInThisCiti.subscribe((weather) => {
            this.weather = weather;
        });
    }
    ngOnInit() {
    }
}
WeatherComponent.ɵfac = function WeatherComponent_Factory(t) { return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
WeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherComponent, selectors: [["app-weather"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "row", "justify-content-center", "pb-4", "m-0"], [1, "lead", "title"], [1, "weather-icon", 3, "src"], [1, "row", "justify-content-center"], [1, "lead", "second"], [1, "list-group", "list-group-flush", "weather-list"], [1, "list-group-item"], ["class", "list-group-item", 4, "ngIf"]], template: function WeatherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeatherComponent_div_0_Template, 26, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weather);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_pipes_string_pipe__WEBPACK_IMPORTED_MODULE_3__["StringPipe"], _pipes_degrees_pipe__WEBPACK_IMPORTED_MODULE_4__["DegreesPipe"], _pipes_pressure_pipe__WEBPACK_IMPORTED_MODULE_5__["PressurePipe"]], styles: [".title[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n}\r\n.second[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n}\r\n.weather-list[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n  margin: auto;\r\n}\r\n@media (max-width: 767px) {\r\n  .weather-list[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLnNlY29uZCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi53ZWF0aGVyLWxpc3Qge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC53ZWF0aGVyLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather',
                templateUrl: './weather.component.html',
                styleUrls: ['./weather.component.css']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");





const routes = [
    {
        path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zEwx":
/*!****************************************!*\
  !*** ./src/app/pipes/pressure.pipe.ts ***!
  \****************************************/
/*! exports provided: PressurePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressurePipe", function() { return PressurePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PressurePipe {
    transform(value) {
        return Math.round(+value * 0.750062);
    }
}
PressurePipe.ɵfac = function PressurePipe_Factory(t) { return new (t || PressurePipe)(); };
PressurePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pressure", type: PressurePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PressurePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'pressure'
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map