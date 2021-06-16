(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brd {\n  border-bottom: outset;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.brd1 {\n  border-bottom: outset;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.brd2 {\n  border: dashed #eae8e8;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.col {\n  color: #eae8e8;\n}\n\n.btn {\n  --background: #BB6BD9;\n  height: 51px;\n  /* border-radius: 84px; */\n  --border-radius: 4px;\n}\n\n.poss {\n  position: relative;\n  top: 35px;\n}\n\n.inng {\n  height: 88px;\n}\n\n.tyu {\n  position: relative;\n  top: 22px;\n}\n\n.hj {\n  position: relative;\n  top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUlBO0VBSUUscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFNQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFBRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBR0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZHtcclxuICAvLyBib3JkZXI6IHNvbGlkICNlYWU4ZTg7XHJcbiAgLy8gbWFyZ2luLXRvcDogMHB4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogb3V0c2V0O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmJyZDF7XHJcbiAgLy8gYm9yZGVyOiBzb2xpZCAjZWFlOGU4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgLy8gbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG91dHNldDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5icmQye1xyXG4gIGJvcmRlcjogZGFzaGVkICNlYWU4ZTg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uY29se1xyXG4gIGNvbG9yOiAjZWFlOGU4O1xyXG59XHJcbi5idG57XHJcbiAgLS1iYWNrZ3JvdW5kOiAjQkI2QkQ5O1xyXG4gIGhlaWdodDogNTFweDtcclxuICAvKiBib3JkZXItcmFkaXVzOiA4NHB4OyAqL1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5wb3Nze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDM1cHg7XHJcbn1cclxuLmlubmcge1xyXG4gIGhlaWdodDogODhweDtcclxufVxyXG4udHl1e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDIycHg7XHJcbn1cclxuLmhqe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title >Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n<div class=\"ion-padding ion-text-center tyu\">\r\n  <img class=\"inng\" src=\"assets/img/fdbdfbd.png\">\r\n</div>\r\n\r\n<div class=\"hj\">\r\n<form>\r\n<ion-item  class=\"brd1 ion-margin\" lines=\"none\">\r\n  <ion-label position=\"floating\">Email</ion-label>\r\n  <ion-input type=\"text\" #email required></ion-input>\r\n</ion-item>\r\n<ion-item  class=\"brd ion-margin\" lines=\"none\">\r\n  <ion-label position=\"floating\">Password</ion-label>\r\n  <ion-input type=\"password\" #password required></ion-input>\r\n</ion-item>\r\n<div class=\"poss\">\r\n  <ion-button (click)=\"logIn(email, password)\" type=\"submit\"  expand=\"block\" class=\"btn ion-margin\">\r\n    Log in\r\n  </ion-button>\r\n  <ion-button (click)=\"register()\" expand=\"full\" fill=\"clear\" class=\"ion-margin\">\r\n    Or create an account\r\n  </ion-button>\r\n</div>\r\n</form>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/authication.service */ "h15u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let LoginPage = class LoginPage {
    constructor(authService, router, loadingController) {
        this.authService = authService;
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    logIn(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.SignIn(email.value, password.value)
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                localStorage.setItem('LoginData', JSON.stringify(res));
                this.loading = yield this.loadingController.create({
                    message: 'Logging you in...'
                });
                this.loading.present();
                this.router.navigate(['dashboard']);
                this.loading.dismiss();
            })).catch((error) => {
                window.alert(error.message);
            });
        });
    }
    register() {
        this.router.navigate(['signup']);
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_4__["AuthicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map