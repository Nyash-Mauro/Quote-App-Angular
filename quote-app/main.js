(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Documents/quote-app/src/main.ts */"zUnb");


/***/ }),

/***/ "5+ED":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "zCPz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quote-form/quote-form.component */ "i76H");
/* harmony import */ var _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quote-detail/quote-detail.component */ "UUUp");






function QuoteComponent_div_7_app_quote_detail_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-quote-detail", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComx`plete", function QuoteComponent_div_7_app_quote_detail_5_Template_app_quote_detail_isComx_plete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteQuote($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quote_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("quote", quote_r1);
} }
function QuoteComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuoteComponent_div_7_app_quote_detail_5_Template, 1, 1, "app-quote-detail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteComponent_div_7_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r2 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleDetails(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quote_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", quote_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", quote_r1.showDescription);
} }
class QuoteComponent {
    constructor() {
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](1, 'Be persistent in life as it opens up opportunities', 'Patroni Andrea', new Date(2020, 4, 21)),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](2, 'Difficulties in your life do not come to destroy you but to help you realize your potential and future', 'Iroh Lady', new Date(2019, 5, 16)),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](3, 'Success is a battle located in the mind and only the fittest can survive', 'Louis Karoni', new Date(2020, 1, 21)),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](4, 'There is nothing that is good that comes easy', 'Calvo', new Date(2020, 12, 3)),
        ];
    }
    toggleDetails(index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    deleteQuote(isComplete, index) {
        if (isComplete) {
            let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    }
    addNewQuote(quote) {
        let quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);
    }
    addVote(quote, index) {
        if (quote) {
            this.quotes[index].upvote += 1;
        }
    }
    lessVote(quote, index) {
        if (quote) {
            this.quotes[index].downvote += 1;
        }
    }
    mostLiked() {
        this.initNum = 0;
        this.finNum = 0;
        for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
            this.finNum = this.quotes[this.counter].upvote;
            if (this.finNum > this.initNum) {
                this.initNum = this.finNum;
            }
        }
        return this.initNum;
    }
    ngOnInit() { }
}
QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(); };
QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], decls: 12, vars: 1, consts: [[1, "container-fluid"], [1, "landing"], [1, "row"], [1, "col", "md-6"], [4, "ngFor", "ngForOf"], [1, "col-md", "6"], [1, "card"], [3, "addQuote"], ["appHighlight", ""], [3, "quote", "isComx`plete", 4, "ngIf"], [1, "view", 3, "click"], [3, "quote", "isComx`plete"]], template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Crazy Quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuoteComponent_div_7_Template, 9, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-quote-form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addQuote", function QuoteComponent_Template_app_quote_form_addQuote_11_listener($event) { return ctx.addNewQuote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_3__["QuoteFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_4__["QuoteDetailComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: center;\n  background-color: #f88f8f;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  margin-bottom: 70px;\n  text-transform: uppercase;\n  font-size: 35px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: left;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.view[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  background-color: none;\n  border: 3px solid #3b86db;\n  color: black;\n  font-size: 20px;\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  border-radius: 15px;\n}\n\n.view[_ngcontent-%COMP%]:hover {\n  background-color: #82b5f0;\n  color: #f5f7f8;\n}\n\n.landing[_ngcontent-%COMP%] {\n  background-color: #f88f8f;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscURBQXFEO0FBQ3ZEOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS9xdW90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmODhmOGY7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG4udmlldyB7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzNiODZkYjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnZpZXc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJiNWYwO1xuICBjb2xvcjogI2Y1ZjdmODtcbn1cbi5sYW5kaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4OGY4ZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote',
                templateUrl: './quote.component.html',
                styleUrls: ['./quote.component.css'],
            }]
    }], function () { return []; }, null); })();


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
    production: false
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

/***/ "Nn8z":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DateCountPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29)
                // less than 30 seconds ago will show as 'minute ago'
                return ' minute ago';
            const intervals = {
                year: 31536000,
                month: 2592000,
                week: 604800,
                day: 86400,
                hour: 3600,
                minute: 60,
                second: 1,
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}
DateCountPipe.ɵfac = function DateCountPipe_Factory(t) { return new (t || DateCountPipe)(); };
DateCountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateCount", type: DateCountPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateCountPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateCount',
                pure: true,
            }]
    }], null, null); })();


/***/ }),

/***/ "R4NC":
/*!******************************************************!*\
  !*** ./src/app/count-input/count-input.component.ts ***!
  \******************************************************/
/*! exports provided: CountInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountInputComponent", function() { return CountInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CountInputComponent {
    constructor() {
        this.counterValue = 0;
        this.counteValue = 0;
    }
    increment() {
        this.counterValue++;
    }
    decrement() {
        this.counteValue++;
    }
    ngOnInit() { }
}
CountInputComponent.ɵfac = function CountInputComponent_Factory(t) { return new (t || CountInputComponent)(); };
CountInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountInputComponent, selectors: [["app-count-input"]], inputs: { counterValue: "counterValue" }, decls: 5, vars: 2, consts: [[1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function CountInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountInputComponent_Template_button_click_1_listener() { return ctx.increment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountInputComponent_Template_button_click_3_listener() { return ctx.decrement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.counterValue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.counteValue, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50LWlucHV0L2NvdW50LWlucHV0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-count-input',
                templateUrl: './count-input.component.html',
                styleUrls: ['./count-input.component.css'],
            }]
    }], function () { return []; }, { counterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote */ "zCPz");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote/quote.component */ "5+ED");




class AppComponent {
    constructor() {
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](1, 'Dont look at the clock, do what it does keep moving', 'Crazy One', new Date(2023, 4, 12)),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](2, 'Difficulties in your life do not come to destroy you but to help you realize your potential and future', 'Rihannah', new Date(1991, 5, 16)),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](3, 'Success is a battle located in the brain only the fittest can survive', 'iron lady', new Date(1550, 1, 21)),
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-quote");
    } }, directives: [_quote_quote_component__WEBPACK_IMPORTED_MODULE_2__["QuoteComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  background-image: url(/src/assets/bw-wedding-1.jpg);\n  background-color: #f7560b;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBbUQ7RUFDbkQseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvYnctd2VkZGluZy0xLmpwZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzU2MGI7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "UUUp":
/*!********************************************************!*\
  !*** ./src/app/quote-detail/quote-detail.component.ts ***!
  \********************************************************/
/*! exports provided: QuoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailComponent", function() { return QuoteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _count_input_count_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../count-input/count-input.component */ "R4NC");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date-count.pipe */ "Nn8z");




class QuoteDetailComponent {
    constructor() {
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.voteIncrease = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.voteDecrease = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    quoteDelete(complete) {
        this.isComplete.emit(complete);
    }
    ifIncrease(one) {
        this.voteIncrease.emit(one);
    }
    ifDecrease(two) {
        this.voteDecrease.emit(two);
    }
    quoteDan(purge) {
        this.isComplete.emit(purge);
    }
    ngOnInit() { }
}
QuoteDetailComponent.ɵfac = function QuoteDetailComponent_Factory(t) { return new (t || QuoteDetailComponent)(); };
QuoteDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteDetailComponent, selectors: [["app-quote-detail"]], inputs: { quote: "quote" }, outputs: { isComplete: "isComplete", voteIncrease: "voteIncrease", voteDecrease: "voteDecrease" }, decls: 18, vars: 5, consts: [[1, "row"], [1, "col-md-3"], [1, "card"], [1, "col-md-4"], [1, "red", 3, "click"]], template: function QuoteDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "dateCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-count-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteDetailComponent_Template_button_click_16_listener() { return ctx.quoteDelete(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" posted by ", ctx.quote.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" submitted by ", ctx.quote.author, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This quote was posted ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 3, ctx.quote.postDate), " .");
    } }, directives: [_count_input_count_input_component__WEBPACK_IMPORTED_MODULE_1__["CountInputComponent"]], pipes: [_date_count_pipe__WEBPACK_IMPORTED_MODULE_2__["DateCountPipe"]], styles: [".red[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  background-color: white;\n  border-radius: 25px;\n  width: 80px;\n}\n.red[_ngcontent-%COMP%]:hover {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZGV0YWlsL3F1b3RlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1kZXRhaWwvcXVvdGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogODBweDtcbn1cbi5yZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-detail',
                templateUrl: './quote-detail.component.html',
                styleUrls: ['./quote-detail.component.css'],
            }]
    }], function () { return []; }, { quote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], voteIncrease: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], voteDecrease: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote/quote.component */ "5+ED");
/* harmony import */ var _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-detail/quote-detail.component */ "UUUp");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "i76H");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-count.pipe */ "Nn8z");
/* harmony import */ var _count_input_count_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./count-input/count-input.component */ "R4NC");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"],
        _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailComponent"],
        _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_7__["QuoteFormComponent"],
        _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__["DateCountPipe"],
        _count_input_count_input_component__WEBPACK_IMPORTED_MODULE_9__["CountInputComponent"],
        _count_input_count_input_component__WEBPACK_IMPORTED_MODULE_9__["CountInputComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"],
                    _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailComponent"],
                    _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_7__["QuoteFormComponent"],
                    _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__["DateCountPipe"],
                    _count_input_count_input_component__WEBPACK_IMPORTED_MODULE_9__["CountInputComponent"],
                    _count_input_count_input_component__WEBPACK_IMPORTED_MODULE_9__["CountInputComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "i76H":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "zCPz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class QuoteFormComponent {
    constructor() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](0, '', '', new Date());
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    submitQuote() {
        this.addQuote.emit(this.newQuote);
    }
    ngOnInit() { }
}
QuoteFormComponent.ɵfac = function QuoteFormComponent_Factory(t) { return new (t || QuoteFormComponent)(); };
QuoteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteFormComponent, selectors: [["app-quote-form"]], outputs: { addQuote: "addQuote" }, decls: 35, vars: 6, consts: [[1, "container-fluid"], [1, "text-center"], ["name", "", 3, "ngSubmit"], ["quoteForm", "ngForm"], [1, "form-group"], ["for", "quote", 1, "text-center"], ["id", "quote", "name", "quote", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["quote", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "author"], ["id", "author", "name", "author", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["author", "ngModel"], ["for", "description"], ["id", "description", "name", "description", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], ["for", "calender"], ["type", "date", "id", "complete", "required", ""], ["type", "submit", 1, "quote"]], template: function QuoteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create a new Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function QuoteFormComponent_Template_form_ngSubmit_4_listener() { return ctx.submitQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteFormComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.newQuote.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quote is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteFormComponent_Template_textarea_ngModelChange_16_listener($event) { return ctx.newQuote.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Author is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "textarea", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteFormComponent_Template_textarea_ngModelChange_24_listener($event) { return ctx.newQuote.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Submitter is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Calender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuote.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.invalid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuote.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.invalid || _r2.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuote.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.invalid || _r3.pristine);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".quote[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  background-color: none;\n  border: 3px solid #f88f8f;\n  color: black;\n  font-size: 20px;\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  border-radius: 15px;\n}\n.quote[_ngcontent-%COMP%]:hover {\n  background-color: #f88f8f;\n}\n#complete[_ngcontent-%COMP%], input[date][_ngcontent-%COMP%] {\n  color: black;\n  padding-left: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZm9ybS9xdW90ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWZvcm0vcXVvdGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1b3RlIHtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjg4ZjhmO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4ucXVvdGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg4ZjhmO1xufVxuI2NvbXBsZXRlLFxuaW5wdXRbZGF0ZV0ge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-form',
                templateUrl: './quote-form.component.html',
                styleUrls: ['./quote-form.component.css'],
            }]
    }], function () { return []; }, { addQuote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zCPz":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
class Quote {
    constructor(id, name, description, postDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.postDate = postDate;
        this.showDescription = false;
    }
}


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