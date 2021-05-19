(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "UUSl":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "eOyQ");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "XHxw");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "XHxw":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "vfPX");
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ "bYg9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/authication.service */ "h15u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let SignupPage = class SignupPage {
    constructor(db, authService, router, fb, ngFireAuth, alertController, loadingController) {
        this.db = db;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.ngFireAuth = ngFireAuth;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.error = false;
        this.errorMessage = '';
        this.products = [];
        this.username = "";
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    this.isEmail
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    this.isEqualPassword.bind(this)
                ])],
        });
    }
    isEmail(control) {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            return { noEmail: true };
        }
    }
    isEqualPassword(control) {
        if (!this.myForm) {
            return { passwordsNotMatch: true };
        }
        if (control.value !== this.myForm.controls['password'].value) {
            return { passwordsNotMatch: true };
        }
    }
    signUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.myForm.value.password == this.myForm.value.confirmPassword) {
                this.ngFireAuth.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password)
                    .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log('res', res);
                    localStorage.setItem('LoginData', JSON.stringify(res));
                    this.loading = yield this.loadingController.create({
                        message: 'Please Wait...'
                    });
                    this.loading.present();
                    let userId = (yield this.ngFireAuth.currentUser).uid;
                    console.log('userId for signup', userId);
                    let userDoc = this.db.doc('users/' + userId);
                    userDoc.set({
                        username: this.myForm.value.username,
                        email: this.myForm.value.email
                    });
                    console.log('userDoc for signup', userDoc);
                    this.router.navigate(['dashboard']);
                    this.loading.dismiss();
                }), ((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const alert = yield this.alertController.create({
                        message: error.message,
                        buttons: [{ text: "Ok", role: 'cancel' }]
                    });
                    alert.present();
                })));
                // this.loading.present();
            }
            else {
                const alert = yield this.alertController.create({
                    message: "The passwords do not match.",
                    buttons: [{ text: "Ok", role: 'cancel' }]
                });
                alert.present();
            }
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_4__["AuthicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ }),

/***/ "bYg9":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brd {\n  border-bottom: outset;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.brd1 {\n  border-bottom: outset;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.gh {\n  position: relative;\n  top: 28px;\n}\n\n.brd2 {\n  border: dashed #eae8e8;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.col {\n  color: #eae8e8;\n}\n\n.tyu {\n  position: relative;\n  top: 20px;\n}\n\n.btn {\n  --background: #BB6BD9;\n  height: 51px;\n  /* border-radius: 84px; */\n  --border-radius: 4px;\n}\n\n.pos-set {\n  position: relative;\n  top: 25px;\n}\n\n.inng {\n  height: 85px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBRmpCOztBQUlBO0VBSUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBSmpCOztBQU1BO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFIWDs7QUFLQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQUZqQjs7QUFJQTtFQUNFLGNBQWM7QUFEaEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDaEIsU0FBUztBQUFiOztBQUVBO0VBQ0UscUJBQWE7RUFDYixZQUFZO0VBQ1oseUJBQUE7RUFDQSxvQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJke1xyXG4gIC8vIGJvcmRlcjogc29saWQgI2VhZThlODtcclxuICAvLyBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICBib3JkZXItYm90dG9tOiBvdXRzZXQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uYnJkMXtcclxuICAvLyBib3JkZXI6IHNvbGlkICNlYWU4ZTg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICAvLyBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogb3V0c2V0O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmdoe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI4cHg7XHJcbn1cclxuLmJyZDJ7XHJcbiAgYm9yZGVyOiBkYXNoZWQgI2VhZThlODtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5jb2x7XHJcbiAgY29sb3I6ICNlYWU4ZTg7XHJcbn1cclxuLnR5dXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuLmJ0bntcclxuICAtLWJhY2tncm91bmQ6ICNCQjZCRDk7XHJcbiAgaGVpZ2h0OiA1MXB4O1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDg0cHg7ICovXHJcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5wb3Mtc2V0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5pbm5nIHtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "eOyQ":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "XHxw");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "vfPX":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" mode=\"md\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title mode=\"ios\">Signup</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <div class=\"ion-padding ion-text-center gh\">\r\n    <img class=\"inng\" src=\"assets/img/fdbdfbd.png\">\r\n  </div>\r\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"signUp()\">\r\n <div class=\"pos-set\">\r\n  <ion-item  class=\"brd1 ion-margin\" >\r\n    <ion-label position=\"floating\">Name</ion-label>\r\n    <ion-input formControlName=\"username\" type=\"text\" id=\"username\" #email required></ion-input>\r\n  </ion-item>\r\n  <ion-item  class=\"brd1 ion-margin\" >\r\n    <ion-label position=\"floating\">Email</ion-label>\r\n    <ion-input formControlName=\"email\"  type=\"email\" id=\"email\" #email required ></ion-input>\r\n  </ion-item>\r\n  <ion-item  class=\"brd ion-margin\" >\r\n    <ion-label position=\"floating\">Password</ion-label>\r\n    <ion-input formControlName=\"password\" type=\"password\" id=\"password\" required ></ion-input>\r\n  </ion-item>\r\n  <ion-item  class=\"brd ion-margin\" >\r\n    <ion-label position=\"floating\">Confirm Password</ion-label>\r\n    <ion-input formControlName=\"confirmPassword\" type=\"password\" id=\"confirm-password\" required  #confirmPassword></ion-input>\r\n    <!-- <span >Passwords do not match</span> -->\r\n  </ion-item>\r\n  <div class=\"tyu\">\r\n    <ion-button type=\"submit\"  expand=\"block\" class=\"btn ion-margin\">\r\n      Sign Up\r\n    </ion-button>\r\n  </div>\r\n</div>\r\n</form>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module.js.map