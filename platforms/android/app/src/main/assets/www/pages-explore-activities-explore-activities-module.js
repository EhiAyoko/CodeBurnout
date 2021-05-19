(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-explore-activities-explore-activities-module"],{

/***/ "M5FC":
/*!***********************************************************************!*\
  !*** ./src/app/pages/explore-activities/explore-activities.module.ts ***!
  \***********************************************************************/
/*! exports provided: ExploreActivitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreActivitiesPageModule", function() { return ExploreActivitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_activities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-activities-routing.module */ "lYIy");
/* harmony import */ var _explore_activities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-activities.page */ "R4Ox");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








let ExploreActivitiesPageModule = class ExploreActivitiesPageModule {
};
ExploreActivitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            _explore_activities_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExploreActivitiesPageRoutingModule"]
        ],
        declarations: [_explore_activities_page__WEBPACK_IMPORTED_MODULE_6__["ExploreActivitiesPage"]]
    })
], ExploreActivitiesPageModule);



/***/ }),

/***/ "R4Ox":
/*!*********************************************************************!*\
  !*** ./src/app/pages/explore-activities/explore-activities.page.ts ***!
  \*********************************************************************/
/*! exports provided: ExploreActivitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreActivitiesPage", function() { return ExploreActivitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_activities_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-activities.page.html */ "x1pM");
/* harmony import */ var _explore_activities_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-activities.page.scss */ "lRuS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");






let ExploreActivitiesPage = class ExploreActivitiesPage {
    constructor(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.activities = [];
        this.search = false;
        this.ngOnInit();
        this.ionViewWillEnter();
    }
    ngOnInit() {
        this.loadActivity();
    }
    ionViewWillEnter() {
        this.ngOnInit();
    }
    search1() {
        if (this.search == false) {
            this.search = true;
        }
        else {
            this.search = false;
        }
    }
    loadActivity() {
        this.http.getActivities().subscribe((res) => {
            // console.log(res);
            console.log(res);
            this.activities = res;
            this.postsPre = this.activities;
            this.postfil = this.postsPre.map(item => item.fields.TypeOfActivity)
                .filter((value, index, self) => self.indexOf(value) === index);
            console.log(this.activities);
            console.log('this map', this.postfil);
        }, error => {
            console.log(error);
        });
    }
    OnChange(searchbar) {
        console.log('mnmnnm', searchbar);
        // set q to the value of the searchbar
        var q = searchbar.detail.value;
        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
        }
        this.activities = this.postsPre.filter(item => item.fields.TypeOfActivity === q);
        console.log("This Items", this.activities);
    }
    exploredetails(item) {
        let navigationExtras = {
            state: {
                item
            },
        };
        this.navCtrl.navigateForward('explore-details', navigationExtras);
    }
};
ExploreActivitiesPage.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ExploreActivitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-activities',
        template: _raw_loader_explore_activities_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_activities_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreActivitiesPage);



/***/ }),

/***/ "lRuS":
/*!***********************************************************************!*\
  !*** ./src/app/pages/explore-activities/explore-activities.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".se {\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n\n.ava {\n  height: 65px;\n  width: 65px;\n}\n\n.p1 {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.h22 {\n  font-size: 18px;\n}\n\n.label1 {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.sear1 {\n  padding-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHBsb3JlLWFjdGl2aXRpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUFiOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUFsQjs7QUFHQTtFQUNFLGVBQWU7QUFBakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUVuQiIsImZpbGUiOiJleHBsb3JlLWFjdGl2aXRpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uYnJke1xyXG4gIGJvcmRlcjogc29saWQgI2VhZThlODtcclxuXHJcbn1cclxuXHJcbi5hdmEge1xyXG4gIGhlaWdodDogNjVweDtcclxuICB3aWR0aDogNjVweDtcclxufVxyXG5cclxuLnAxIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuLmgyMiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5sYWJlbDEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc2VhcjEge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "lYIy":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/explore-activities/explore-activities-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ExploreActivitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreActivitiesPageRoutingModule", function() { return ExploreActivitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _explore_activities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-activities.page */ "R4Ox");




const routes = [
    {
        path: '',
        component: _explore_activities_page__WEBPACK_IMPORTED_MODULE_3__["ExploreActivitiesPage"]
    }
];
let ExploreActivitiesPageRoutingModule = class ExploreActivitiesPageRoutingModule {
};
ExploreActivitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExploreActivitiesPageRoutingModule);



/***/ }),

/***/ "x1pM":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore-activities/explore-activities.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" mode=\"md\">\r\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Explore Activities</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"search\" class=\"se\" (click)=\"search1()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-searchbar [(ngModel)]=\"filterTerm\" class=\"sear1\" *ngIf=\"search == true\" type=\"text\" color=\"light\" placeholder=\"Search text\" clearInput>\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"ion-text-center ion-padding-top\">\r\n  <img src=\"assets/img/1.png\">\r\n</div>\r\n<ion-item class=\"brd ion-margin\" lines=\"none\">\r\n  <ion-label class=\"label1\">Filter</ion-label>\r\n    <ion-select [(ngModel)]=\"selectedvalue\" (ionChange)=\"OnChange($event)\">\r\n      <ion-select-option *ngFor=\"let post of postfil\">{{post}}</ion-select-option>\r\n    </ion-select>\r\n</ion-item>\r\n\r\n<ion-list class=\"ion-padding-top\">\r\n  <ion-item *ngFor=\"let item of activities | filter:filterTerm\" (click)=\"exploredetails(item)\">\r\n      <ion-avatar slot=\"start\" class=\"ava\" *ngIf=\"item.fields.Featuredphoto; else noPic\"  >\r\n          <img *ngFor=\"let itempic of item.fields.Featuredphoto\" [src]=\"itempic.url\">\r\n      </ion-avatar>\r\n    <ng-template #noPic>\r\n      <ion-avatar slot=\"start\" class=\"ava\">\r\n        <img src=\"assets/img/10.png\">\r\n      </ion-avatar>\r\n    </ng-template>\r\n    <ion-label>\r\n      <h2 class=\"h22\">{{item.fields.Name}}</h2>\r\n      <p class=\"p1\">{{item.fields.TypeOfActivity}}</p>\r\n    </ion-label>\r\n    <!-- <ion-toggle slot=\"end\" (ionChange)=\"crazyEvent($event,post)\"></ion-toggle> -->\r\n\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=pages-explore-activities-explore-activities-module.js.map