(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-activities-team-activities-module"],{

/***/ "OSlt":
/*!*****************************************************************!*\
  !*** ./src/app/pages/team-activities/team-activities.module.ts ***!
  \*****************************************************************/
/*! exports provided: TeamActivitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamActivitiesPageModule", function() { return TeamActivitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _team_activities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-activities-routing.module */ "q+B0");
/* harmony import */ var _team_activities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-activities.page */ "s++D");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








let TeamActivitiesPageModule = class TeamActivitiesPageModule {
};
TeamActivitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            _team_activities_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamActivitiesPageRoutingModule"]
        ],
        declarations: [_team_activities_page__WEBPACK_IMPORTED_MODULE_6__["TeamActivitiesPage"]]
    })
], TeamActivitiesPageModule);



/***/ }),

/***/ "fmxA":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team-activities/team-activities.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" mode=\"md\">\r\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title >Team Activities</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"search\" class=\"se\" (click)=\"search1()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-searchbar [(ngModel)]=\"filterTerm\" class=\"sear1\" *ngIf=\"search == true\" type=\"text\" color=\"light\" placeholder=\"Search text\" clearInput>\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"ion-text-center ion-padding-top\">\r\n  <img src=\"assets/img/2.png\">\r\n</div>\r\n<ion-item class=\"brd ion-margin\" lines=\"none\">\r\n  <ion-label class=\"label1\">Filter</ion-label>\r\n    <ion-select [(ngModel)]=\"selectedvalue\" (ionChange)=\"OnChange($event)\">\r\n      <ion-select-option *ngFor=\"let post of postfil\">{{post}}</ion-select-option>\r\n    </ion-select>\r\n</ion-item>\r\n\r\n<ion-list class=\"ion-padding-top\">\r\n  <ion-item *ngFor=\"let item of teams | filter:filterTerm\" (click)=\"teamdetails(item)\">\r\n    <ion-avatar slot=\"start\" class=\"ava\" *ngFor=\"let postimg of item.fields.FeaturedPhoto\">\r\n      <img [src]=\"postimg.url\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h2 class=\"h22\">{{item.fields.Name}}</h2>\r\n      <p class=\"p1\">{{item.fields.ActivityCategory}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "iHw/":
/*!*****************************************************************!*\
  !*** ./src/app/pages/team-activities/team-activities.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".se {\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n\n.ava {\n  height: 65px;\n  width: 65px;\n}\n\n.p1 {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.h22 {\n  font-size: 18px;\n}\n\n.label1 {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.sear1 {\n  padding-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZWFtLWFjdGl2aXRpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUFiOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUFsQjs7QUFHQTtFQUNFLGVBQWU7QUFBakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUVuQiIsImZpbGUiOiJ0ZWFtLWFjdGl2aXRpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uYnJke1xyXG4gIGJvcmRlcjogc29saWQgI2VhZThlODtcclxuXHJcbn1cclxuXHJcbi5hdmEge1xyXG4gIGhlaWdodDogNjVweDtcclxuICB3aWR0aDogNjVweDtcclxufVxyXG5cclxuLnAxIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuLmgyMiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5sYWJlbDEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc2VhcjEge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "q+B0":
/*!*************************************************************************!*\
  !*** ./src/app/pages/team-activities/team-activities-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: TeamActivitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamActivitiesPageRoutingModule", function() { return TeamActivitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _team_activities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-activities.page */ "s++D");




const routes = [
    {
        path: '',
        component: _team_activities_page__WEBPACK_IMPORTED_MODULE_3__["TeamActivitiesPage"]
    }
];
let TeamActivitiesPageRoutingModule = class TeamActivitiesPageRoutingModule {
};
TeamActivitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamActivitiesPageRoutingModule);



/***/ }),

/***/ "s++D":
/*!***************************************************************!*\
  !*** ./src/app/pages/team-activities/team-activities.page.ts ***!
  \***************************************************************/
/*! exports provided: TeamActivitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamActivitiesPage", function() { return TeamActivitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_team_activities_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./team-activities.page.html */ "fmxA");
/* harmony import */ var _team_activities_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-activities.page.scss */ "iHw/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");






let TeamActivitiesPage = class TeamActivitiesPage {
    constructor(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.postsexpolore = [];
        this.teams = [];
        this.search = false;
        this.postsactivity = [];
        this.ngOnInit();
        this.ionViewWillEnter();
    }
    ;
    ;
    ;
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
        this.http.getTeams().subscribe((res) => {
            // console.log(res);
            console.log(res);
            this.teams = res;
            this.postsPre = this.teams;
            this.postfil = this.postsPre.map(item => item.fields.ActivityCategory)
                .filter((value, index, self) => self.indexOf(value) === index);
            console.log(this.teams);
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
        this.teams = this.postsPre.filter(item => item.fields.ActivityCategory === q);
        console.log("This Items", this.teams);
    }
    teamdetails(item) {
        let navigationExtras = {
            state: {
                item
            },
        };
        this.navCtrl.navigateForward('team-details', navigationExtras);
    }
};
TeamActivitiesPage.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
TeamActivitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-team-activities',
        template: _raw_loader_team_activities_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_team_activities_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TeamActivitiesPage);



/***/ })

}]);
//# sourceMappingURL=pages-team-activities-team-activities-module.js.map