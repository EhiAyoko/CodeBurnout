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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-back-button defaultHref=\"blog\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{blogdetails.fields.Title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ion-padding-top list1\" >\n    <div class=\"ava ion-padding\" *ngFor=\"let postimg of blogdetails.fields.FeaturedPhoto\">\n      <img  [src]=\"postimg.url\">\n    </div>\n    <ion-item (click)=\"blogdetails(item)\" lines=\"none\">\n      <ion-label>\n        <h2 class=\"h22\">{{blogdetails.fields.Title}}</h2>\n        <p class=\"p1\">{{blogdetails.fields.Author}}</p>\n        <p class=\"p2 ion-text-wrap\" >{{blogdetails.fields.BlogPost}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item class=\"brd\" lines=\"none\" (click)=\"sSShare(blogdetails)\">\n      <ion-label>Share</ion-label>\n      <ion-icon name=\"share-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

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
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");






let BlogDetailsPage = class BlogDetailsPage {
    constructor(router, socialSharing, activatedRoute) {
        this.router = router;
        this.socialSharing = socialSharing;
        this.activatedRoute = activatedRoute;
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        if (state != undefined) {
            // console.log(state.item);
            this.blogdetails = state.item;
        }
        // console.log(this.blogdetails);
    }
    ngOnInit() {
    }
    sSShare(blogdetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var options = {
                message: 'Activiy Name: ' + blogdetails.fields.Title,
                url: 'code burnout app: ' + 'https://apps.apple.com/us/app/code-burnout/id1561832368',
                chooserTitle: 'code burnout',
            };
            yield this.socialSharing.shareWithOptions(options);
            // await  this.socialSharing.share('this is msg', 'subject', 'url').then().catch();
        });
    }
};
BlogDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] },
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
/* harmony default export */ __webpack_exports__["default"] = (".p1 {\n  font-size: 16px;\n  padding-top: 4px;\n  color: #727272;\n}\n\n.p2 {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.ava {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxibG9nLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxxQkFBQTtBQUdKIiwiZmlsZSI6ImJsb2ctZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucDEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIGNvbG9yOiAjNzI3MjcyO1xyXG4gIH1cclxuICAucDIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgXHJcbiAgfVxyXG4gIC5hdmF7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICB9XHJcbiAgLmJyZHtcclxuICAgIGJvcmRlcjogc29saWQgI2VhZThlODtcclxuICAgIFxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=pages-blog-details-blog-details-module.js.map