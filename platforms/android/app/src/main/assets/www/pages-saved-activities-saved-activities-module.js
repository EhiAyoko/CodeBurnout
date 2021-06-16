(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-saved-activities-saved-activities-module"],{

/***/ "JhL7":
/*!*******************************************************************!*\
  !*** ./src/app/pages/saved-activities/saved-activities.module.ts ***!
  \*******************************************************************/
/*! exports provided: SavedActivitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedActivitiesPageModule", function() { return SavedActivitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _saved_activities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saved-activities-routing.module */ "j+Rg");
/* harmony import */ var _saved_activities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saved-activities.page */ "WsjL");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








let SavedActivitiesPageModule = class SavedActivitiesPageModule {
};
SavedActivitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            _saved_activities_routing_module__WEBPACK_IMPORTED_MODULE_5__["SavedActivitiesPageRoutingModule"]
        ],
        declarations: [_saved_activities_page__WEBPACK_IMPORTED_MODULE_6__["SavedActivitiesPage"]]
    })
], SavedActivitiesPageModule);



/***/ }),

/***/ "WsjL":
/*!*****************************************************************!*\
  !*** ./src/app/pages/saved-activities/saved-activities.page.ts ***!
  \*****************************************************************/
/*! exports provided: SavedActivitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedActivitiesPage", function() { return SavedActivitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_saved_activities_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./saved-activities.page.html */ "YaJL");
/* harmony import */ var _saved_activities_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saved-activities.page.scss */ "q6Rk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");








let SavedActivitiesPage = class SavedActivitiesPage {
    constructor(postsService, navctrl, afStore, http, navCtrl) {
        this.postsService = postsService;
        this.navctrl = navctrl;
        this.afStore = afStore;
        this.http = http;
        this.navCtrl = navCtrl;
        this.postsexpolore = [];
        this.posts = [];
        this.postsactivity = [];
        this.teamrecords = [];
        this.explorerecords = [];
        this.posts;
        this.postsexpolore;
        let currentUser = localStorage.getItem('LoginData');
        this.currentUser = JSON.parse(currentUser);
        // console.log("CurentUser",this.currentUser);
        this.userid = this.currentUser.user.uid;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.explorerecords = [];
        this.afStore
            .collection('Explore_activities_saved/' + this.userid + '/activity', (ref) => ref.where('uid', '==', this.userid))
            .get()
            .subscribe((ss) => {
            let message;
            let single;
            if (ss.docs.length === 0) {
                message = 'Document not found! Try again!';
                this.exploreobject = null;
                // console.log('message', message);
            }
            else {
                ss.docs.forEach((doc) => {
                    message = '';
                    this.exploreobject = doc.data();
                    this.explorerecords.push(this.exploreobject);
                });
                // console.log('explorerecords', this.explorerecords);
            }
        });
        this.teamrecords = [];
        this.afStore
            .collection('Team_activities_saved/' + this.userid + '/activity', (ref) => ref.where('uid', '==', this.userid))
            .get()
            .subscribe((ss) => {
            let message;
            let single;
            if (ss.docs.length === 0) {
                message = 'Document not found! Try again!';
                this.teamobject = null;
                // console.log('message', message);
            }
            else {
                ss.docs.forEach((doc) => {
                    message = '';
                    this.teamobject = doc.data();
                    this.teamrecords.push(this.teamobject);
                });
                // console.log('teamrecords', this.teamrecords);
            }
        });
    }
    postapiaittable(toggleValue) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = this.createAuthorizationHeader(headers);
        const body = toggleValue;
        // console.log('body',body)
        this.http.put('https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities', body, { headers }).subscribe(data => {
            this.postId = data;
            // console.log('this.postAPI', this.postId)
            this.ngOnInit();
        });
    }
    createAuthorizationHeader(headers) {
        let _token = "keyhliJN6zZ2igddb";
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', `Bearer ${_token}`);
        return headers;
    }
    crazyEvent1(val, value) {
        // console.log("vslueOfToggle",val.detail.checked)
        // console.log("vslueOfObj",value);
        let records;
        let obj = {
            records: [
                {
                    id: value.id,
                    fields: {
                        Save: val.detail.checked
                    }
                }
            ]
        };
        // console.log("records",obj)
        this.postapiaittable1(obj);
    }
    postapiaittable1(toggleValue) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = this.createAuthorizationHeader(headers);
        const body = toggleValue;
        // console.log('body',body)
        this.http.put('https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities', body, { headers }).subscribe(data => {
            this.postId = data;
            // console.log('this.postAPI', this.postId)
        });
    }
    createAuthorizationHeader1(headers) {
        let _token = "keyhliJN6zZ2igddb";
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', `Bearer ${_token}`);
        return headers;
    }
    savedetailsexp(item) {
        // console.log('mmmmmmm', item)
        let navigationExtras = {
            state: {
                item
            },
        };
        this.navCtrl.navigateForward('save-details-explore', navigationExtras);
    }
    savedetailsteam(item) {
        let navigationExtras = {
            state: {
                item
            },
        };
        this.navCtrl.navigateForward('save-details', navigationExtras);
    }
    backbtn() {
        this.navctrl.navigateBack('dashboard');
    }
};
SavedActivitiesPage.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
SavedActivitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-saved-activities',
        template: _raw_loader_saved_activities_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saved_activities_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SavedActivitiesPage);



/***/ }),

/***/ "YaJL":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/saved-activities/saved-activities.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\" mode=\"md\">\r\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"!search\">Saved Activities</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"ion-text-center ion-padding-top\">\r\n  <img src=\"assets/img/3.png\">\r\n</div>\r\n\r\n <div *ngFor=\"let item of teamrecords\">\r\n    <ion-item (click)=\"savedetailsteam(item)\">\r\n    <ion-avatar slot=\"start\" class=\"ava\">\r\n      <img [src]=\"item.url\">\r\n    </ion-avatar>\r\n      <ion-label>\r\n        <h2 class=\"h22\">{{item.Name}}</h2>\r\n        <p class=\"p1\"> {{item.ActivityCategory}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </div> \r\n\r\n<!-- <div *ngFor=\"let item of posts | filter:filterTerm\">\r\n  <ion-list *ngIf=\"item.fields.Save === true\" class=\"ion-padding-top\">\r\n    <ion-item (click)=\"savedetailsteam(item)\">\r\n    <ion-avatar slot=\"start\" class=\"ava\" *ngFor=\"let postimg of item.fields.FeaturedPhoto\">\r\n      <img [src]=\"postimg.url\">\r\n    </ion-avatar>\r\n      <ion-label>\r\n        <h2 class=\"h22\">{{item.fields.Name}}</h2>\r\n        <p class=\"p1\"> {{item.fields.ActivityCategory}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  </div>\r\n\r\n  <div *ngFor=\"let item of postsexpolore | filter:filterTerm\">\r\n    <ion-list *ngIf=\"item.fields.Save === true\" class=\"ion-padding-top\">\r\n      <ion-item (click)=\"savedetailsexp(item)\">\r\n      <ion-avatar slot=\"start\" class=\"ava\" *ngFor=\"let postimg of item.fields.Featuredphoto\">\r\n        <img [src]=\"postimg.url\">\r\n      </ion-avatar>\r\n        <ion-label>\r\n          <h2 class=\"h22\">{{item.fields.Name}}</h2>\r\n          <p class=\"p1\">{{item.fields.TypeOfActivity}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n    </div> -->\r\n\r\n    <div class=\"align-items-center\" *ngFor=\"let record of explorerecords;\">\r\n          <ion-item (click)=\"savedetailsexp(record)\">\r\n          \r\n          <ion-avatar slot=\"start\" class=\"ava\">\r\n            <img [src]=\"record.url\">\r\n          </ion-avatar>\r\n            <ion-label>\r\n              <h2 class=\"h22\">{{record.Name}}</h2>\r\n              <p class=\"p1\">{{record.TypeOfActivity}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n      </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "j+Rg":
/*!***************************************************************************!*\
  !*** ./src/app/pages/saved-activities/saved-activities-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SavedActivitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedActivitiesPageRoutingModule", function() { return SavedActivitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _saved_activities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saved-activities.page */ "WsjL");




const routes = [
    {
        path: '',
        component: _saved_activities_page__WEBPACK_IMPORTED_MODULE_3__["SavedActivitiesPage"]
    }
];
let SavedActivitiesPageRoutingModule = class SavedActivitiesPageRoutingModule {
};
SavedActivitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SavedActivitiesPageRoutingModule);



/***/ }),

/***/ "q6Rk":
/*!*******************************************************************!*\
  !*** ./src/app/pages/saved-activities/saved-activities.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".se {\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n\n.ava {\n  height: 65px;\n  width: 65px;\n}\n\n.p1 {\n  font-size: 15px;\n  padding-top: 4px;\n}\n\n.h22 {\n  font-size: 18px;\n}\n\n.label1 {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.sear1 {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzYXZlZC1hY3Rpdml0aWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7QUFJRiIsImZpbGUiOiJzYXZlZC1hY3Rpdml0aWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZSB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uYnJke1xyXG4gIGJvcmRlcjogc29saWQgI2VhZThlODtcclxuXHJcbn1cclxuLmF2YSB7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIHdpZHRoOiA2NXB4O1xyXG59XHJcblxyXG4ucDEge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uaDIyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmxhYmVsMSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zZWFyMSB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-saved-activities-saved-activities-module.js.map