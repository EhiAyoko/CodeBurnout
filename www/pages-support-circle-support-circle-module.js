(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-circle-support-circle-module"],{

/***/ "/uEh":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-circle/support-circle.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" mode=\"md\">\r\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Support Circle</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"ion-text-center ion-padding-top\">\r\n  <img src=\"assets/img/4.png\">\r\n</div>\r\n<div class=\"ion-text-center\">\r\n  <h2 class=\"h111\">Build Your Support Circle</h2>\r\n</div>\r\n\r\n<ion-button *ngIf=\"!persons\"  expand=\"block\" color=\"tertiary\" class=\"ion-padding-start ion-padding-end btn1\">\r\n  ADD A PERSON\r\n</ion-button>\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle class=\"cs1\">My Circle of Support</ion-card-subtitle>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content class=\"ion-no-padding\">\r\n    <span *ngFor=\"let item of persons; let i = index;\">\r\n      <div *ngIf='item.fields.userid === userid'>\r\n        <ion-item>\r\n      <ion-avatar slot=\"start\" class=\"ava\">\r\n        <img src=\"assets/img/11.png\">\r\n      </ion-avatar>\r\n      <ion-label slot=\"end\" class=\"ion-text-end lab1\">{{item.fields.relationship}}</ion-label>\r\n      <ion-icon color=\"primary\" slot=\"end\" name=\"create-outline\" *ngIf=\"editbtn\" (click)=\"edititem(item)\"></ion-icon>\r\n\r\n      <ion-label class=\"h22\">\r\n        {{item.fields.Name}}\r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n  </span>\r\n\r\n    <hr>\r\n    <ion-button  fill=\"clear\" (click)=\"editPerson()\">\r\n      EDIT\r\n    </ion-button>\r\n    <ion-button  fill=\"clear\" (click)=\"addPerson()\">\r\n      ADD A PERSON\r\n    </ion-button>\r\n  </ion-card-content>\r\n\r\n</ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "B//f":
/*!*************************************************************!*\
  !*** ./src/app/pages/support-circle/support-circle.page.ts ***!
  \*************************************************************/
/*! exports provided: SupportCirclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportCirclePage", function() { return SupportCirclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_support_circle_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./support-circle.page.html */ "/uEh");
/* harmony import */ var _support_circle_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support-circle.page.scss */ "xX9A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let SupportCirclePage = class SupportCirclePage {
    constructor(http, router, navCtrl) {
        this.http = http;
        this.router = router;
        this.navCtrl = navCtrl;
        this.editbtn = false;
        this.persons = [];
        let currentUser = localStorage.getItem('LoginData');
        this.currentUser = JSON.parse(currentUser);
        console.log("CurentUser", this.currentUser);
        this.userid = this.currentUser.user.uid;
    }
    ngOnInit() {
        this.loadPerson();
    }
    ionViewWillEnter() {
        this.loadPerson();
    }
    loadPerson() {
        this.http.getPersons().subscribe((res) => {
            // console.log(res);
            console.log(res);
            this.persons = res;
        }, error => {
            console.log(error);
        });
    }
    addPerson() {
        this.router.navigateByUrl('support-circle/add-person');
    }
    editPerson() {
        if (!this.editbtn) {
            this.editbtn = true;
        }
        else {
            this.editbtn = false;
        }
    }
    edititem(item) {
        console.log(item);
        let navigationExtras = {
            state: {
                item
            },
        };
        this.navCtrl.navigateForward('update-person', navigationExtras);
    }
};
SupportCirclePage.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
SupportCirclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-support-circle',
        template: _raw_loader_support_circle_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_support_circle_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SupportCirclePage);



/***/ }),

/***/ "cQTH":
/*!***********************************************************************!*\
  !*** ./src/app/pages/support-circle/support-circle-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SupportCirclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportCirclePageRoutingModule", function() { return SupportCirclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _support_circle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support-circle.page */ "B//f");




const routes = [
    {
        path: '',
        component: _support_circle_page__WEBPACK_IMPORTED_MODULE_3__["SupportCirclePage"]
    },
    {
        path: 'add-person',
        loadChildren: () => __webpack_require__.e(/*! import() | add-person-add-person-module */ "add-person-add-person-module").then(__webpack_require__.bind(null, /*! ./add-person/add-person.module */ "PSlI")).then(m => m.AddPersonPageModule)
    }
];
let SupportCirclePageRoutingModule = class SupportCirclePageRoutingModule {
};
SupportCirclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SupportCirclePageRoutingModule);



/***/ }),

/***/ "xX9A":
/*!***************************************************************!*\
  !*** ./src/app/pages/support-circle/support-circle.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".h111 {\n  font-weight: bold;\n}\n\n.se {\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n\n.ava {\n  height: 65px;\n  width: 65px;\n}\n\n.p1 {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.h22 {\n  font-size: 18px;\n  padding-bottom: 10px;\n}\n\n.lab1 {\n  padding-bottom: 10px;\n  color: #ccc;\n}\n\n.label1 {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.list1 {\n  padding-top: 65px;\n}\n\nhr {\n  border-bottom: 1px solid #ccc;\n  margin: 10px 0;\n  width: 100%;\n}\n\n.cs1 {\n  color: #ccc;\n}\n\n.btn1 {\n  --border-radius: 4px;\n  margin-top: 45px;\n  height: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdXBwb3J0LWNpcmNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUVqQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUV2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNiLG9CQUFvQjtBQUN4Qjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0FBRWI7O0FBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUdqQjs7QUFEQTtFQUNFLGlCQUFpQjtBQUluQjs7QUFGQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsV0FBVztBQUtiOztBQUhBO0VBQ0UsV0FBVztBQU1iOztBQUpBO0VBQ0Usb0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBT2QiLCJmaWxlIjoic3VwcG9ydC1jaXJjbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgxMTEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zZSB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmJyZHtcclxuICBib3JkZXI6IHNvbGlkICNlYWU4ZTg7XHJcblxyXG59XHJcblxyXG4uYXZhIHtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbn1cclxuXHJcbi5wMSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5oMjIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5sYWIxIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG4ubGFiZWwxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmxpc3QxIHtcclxuICBwYWRkaW5nLXRvcDogNjVweDtcclxufVxyXG5ociB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNzMSB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbn1cclxuLmJ0bjEge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ziyX":
/*!***************************************************************!*\
  !*** ./src/app/pages/support-circle/support-circle.module.ts ***!
  \***************************************************************/
/*! exports provided: SupportCirclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportCirclePageModule", function() { return SupportCirclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _support_circle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support-circle-routing.module */ "cQTH");
/* harmony import */ var _support_circle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-circle.page */ "B//f");







let SupportCirclePageModule = class SupportCirclePageModule {
};
SupportCirclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _support_circle_routing_module__WEBPACK_IMPORTED_MODULE_5__["SupportCirclePageRoutingModule"]
        ],
        declarations: [_support_circle_page__WEBPACK_IMPORTED_MODULE_6__["SupportCirclePage"]]
    })
], SupportCirclePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-support-circle-support-circle-module.js.map