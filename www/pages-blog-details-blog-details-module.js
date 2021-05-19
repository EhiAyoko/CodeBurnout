(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-blog-details-blog-details-module"],{

/***/ "2cfy":
/*!***********************************************************!*\
  !*** ./src/app/pages/blog-details/blog-details.module.ts ***!
  \***********************************************************/
/*! exports provided: BlogDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsPageModule", function() { return BlogDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _blog_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-details-routing.module */ "Axvw");
/* harmony import */ var _blog_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-details.page */ "O5vt");







let BlogDetailsPageModule = class BlogDetailsPageModule {
};
BlogDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _blog_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogDetailsPageRoutingModule"]
        ],
        declarations: [_blog_details_page__WEBPACK_IMPORTED_MODULE_6__["BlogDetailsPage"]]
    })
], BlogDetailsPageModule);



/***/ }),

/***/ "Axvw":
/*!*******************************************************************!*\
  !*** ./src/app/pages/blog-details/blog-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BlogDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsPageRoutingModule", function() { return BlogDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-details.page */ "O5vt");




const routes = [
    {
        path: '',
        component: _blog_details_page__WEBPACK_IMPORTED_MODULE_3__["BlogDetailsPage"]
    }
];
let BlogDetailsPageRoutingModule = class BlogDetailsPageRoutingModule {
};
BlogDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BlogDetailsPageRoutingModule);



/***/ }),

/***/ "Giga":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog-details/blog-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-back-button defaultHref=\"blog\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{blogdetails.fields.Title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ion-padding-top list1\" >\n    <div class=\"ava ion-padding\" *ngFor=\"let postimg of blogdetails.fields.FeaturedPhoto\">\n      <img  [src]=\"postimg.url\">\n    </div>\n    <ion-item (click)=\"blogdetails(item)\" lines=\"none\">\n      <ion-label>\n        <h2 class=\"h22\">{{blogdetails.fields.Title}}</h2>\n        <p class=\"p1\">{{blogdetails.fields.Author}}</p>\n        <p class=\"p2 ion-text-wrap\" >{{blogdetails.fields.BlogPost}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "O5vt":
/*!*********************************************************!*\
  !*** ./src/app/pages/blog-details/blog-details.page.ts ***!
  \*********************************************************/
/*! exports provided: BlogDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsPage", function() { return BlogDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog-details.page.html */ "Giga");
/* harmony import */ var _blog_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-details.page.scss */ "YM2G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let BlogDetailsPage = class BlogDetailsPage {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        if (state != undefined) {
            console.log(state.item);
            this.blogdetails = state.item;
        }
        console.log(this.blogdetails);
    }
    ngOnInit() {
    }
};
BlogDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
BlogDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog-details',
        template: _raw_loader_blog_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlogDetailsPage);



/***/ }),

/***/ "YM2G":
/*!***********************************************************!*\
  !*** ./src/app/pages/blog-details/blog-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".p1 {\n  font-size: 16px;\n  padding-top: 4px;\n  color: #727272;\n}\n\n.p2 {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.ava {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxibG9nLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2xCOztBQUNFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUVwQjs7QUFDRTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFFcEIiLCJmaWxlIjoiYmxvZy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wMSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgY29sb3I6ICM3MjcyNzI7XHJcbiAgfVxyXG4gIC5wMiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICBcclxuICB9XHJcbiAgLmF2YXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIH0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-blog-details-blog-details-module.js.map