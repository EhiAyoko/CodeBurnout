(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-blog-blog-module"],{

/***/ "E2ON":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/blog.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" mode=\"md\">\r\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Code Burnout Blog</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"search\" class=\"se\" (click)=\"search1()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-searchbar [(ngModel)]=\"filterTerm\" class=\"sear1\" *ngIf=\"search == true\" type=\"text\" color=\"light\" placeholder=\"Search text\" clearInput>\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"ion-text-center ion-padding-top\">\r\n  <img src=\"assets/img/7.png\">\r\n</div>\r\n\r\n<ion-list class=\"ion-padding-top list1\" >\r\n  <ion-item *ngFor=\"let item of posts | filter:filterTerm\" (click)=\"blogdetails(item)\">\r\n    <ion-avatar slot=\"start\" class=\"ava\" *ngFor=\"let postimg of item.fields.FeaturedPhoto\">\r\n      <img  [src]=\"postimg.url\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h2 class=\"h22\">{{item.fields.Title}}</h2>\r\n      <p class=\"p1\">{{item.fields.Author}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "J/Re":
/*!*****************************************!*\
  !*** ./src/app/pages/blog/blog.page.ts ***!
  \*****************************************/
/*! exports provided: BlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage", function() { return BlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog.page.html */ "E2ON");
/* harmony import */ var _blog_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.page.scss */ "zAzv");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let BlogPage = class BlogPage {
    constructor(http, navCtrl, router) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.router = router;
        this.search = false;
        this.visible = false;
    }
    ngOnInit() {
        this.http.blogget().subscribe((post) => {
            this.posts = post;
            // console.log(this.posts)
        }, error => {
            console.log(error);
        });
    }
    search1() {
        if (this.search == false) {
            this.search = true;
        }
        else {
            this.search = false;
        }
    }
    blogdetails(item) {
        //  console.log(item)
        this.itemsdeatail = item;
        let navigationExtras = {
            state: {
                item
            },
        };
        this.navCtrl.navigateForward('blog-details', navigationExtras);
    }
};
BlogPage.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
BlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-blog',
        template: _raw_loader_blog_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlogPage);



/***/ }),

/***/ "qBoI":
/*!***************************************************!*\
  !*** ./src/app/pages/blog/blog-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BlogPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageRoutingModule", function() { return BlogPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.page */ "J/Re");




const routes = [
    {
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_3__["BlogPage"]
    }
];
let BlogPageRoutingModule = class BlogPageRoutingModule {
};
BlogPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BlogPageRoutingModule);



/***/ }),

/***/ "qmPg":
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.module.ts ***!
  \*******************************************/
/*! exports provided: BlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-routing.module */ "qBoI");
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog.page */ "J/Re");








let BlogPageModule = class BlogPageModule {
};
BlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_6__["BlogPageRoutingModule"]
        ],
        declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_7__["BlogPage"]]
    })
], BlogPageModule);



/***/ }),

/***/ "zAzv":
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".se {\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n\n.ava {\n  height: 65px;\n  width: 65px;\n}\n\n.p1 {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.h22 {\n  font-size: 18px;\n}\n\n.label1 {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.sear1 {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxibG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJibG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZSB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmJyZHtcclxuICBib3JkZXI6IHNvbGlkICNlYWU4ZTg7XHJcblxyXG59XHJcblxyXG4uYXZhIHtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbn1cclxuXHJcbi5wMSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5oMjIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubGFiZWwxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zZWFyMSB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-blog-blog-module.js.map