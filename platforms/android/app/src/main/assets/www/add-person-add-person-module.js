(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-person-add-person-module"],{

/***/ "6Edk":
/*!**********************************************************************!*\
  !*** ./src/app/pages/support-circle/add-person/add-person.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".se {\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n\n.ava {\n  height: 65px;\n  width: 65px;\n}\n\n.p1 {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.h22 {\n  font-size: 18px;\n}\n\n.label1 {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.list1 {\n  padding-top: 65px;\n}\n\n.btn1 {\n  --border-radius: 4px;\n  margin-top: 45px;\n  height: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLXBlcnNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQWI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQWxCOztBQUdBO0VBQ0UsZUFBZTtBQUFqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0FBRW5COztBQUNBO0VBQ0Usb0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBRWQiLCJmaWxlIjoiYWRkLXBlcnNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Uge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5icmR7XHJcbiAgYm9yZGVyOiBzb2xpZCAjZWFlOGU4O1xyXG5cclxufVxyXG5cclxuLmF2YSB7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIHdpZHRoOiA2NXB4O1xyXG59XHJcblxyXG4ucDEge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uaDIyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmxhYmVsMSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5saXN0MSB7XHJcbiAgcGFkZGluZy10b3A6IDY1cHg7XHJcbn1cclxuXHJcbi5idG4xIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "PSlI":
/*!**********************************************************************!*\
  !*** ./src/app/pages/support-circle/add-person/add-person.module.ts ***!
  \**********************************************************************/
/*! exports provided: AddPersonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonPageModule", function() { return AddPersonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_person_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-person-routing.module */ "S/oP");
/* harmony import */ var _add_person_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-person.page */ "ba9p");







let AddPersonPageModule = class AddPersonPageModule {
};
AddPersonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_person_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPersonPageRoutingModule"]
        ],
        declarations: [_add_person_page__WEBPACK_IMPORTED_MODULE_6__["AddPersonPage"]]
    })
], AddPersonPageModule);



/***/ }),

/***/ "S/oP":
/*!******************************************************************************!*\
  !*** ./src/app/pages/support-circle/add-person/add-person-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddPersonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonPageRoutingModule", function() { return AddPersonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_person_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-person.page */ "ba9p");




const routes = [
    {
        path: '',
        component: _add_person_page__WEBPACK_IMPORTED_MODULE_3__["AddPersonPage"]
    }
];
let AddPersonPageRoutingModule = class AddPersonPageRoutingModule {
};
AddPersonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPersonPageRoutingModule);



/***/ }),

/***/ "ba9p":
/*!********************************************************************!*\
  !*** ./src/app/pages/support-circle/add-person/add-person.page.ts ***!
  \********************************************************************/
/*! exports provided: AddPersonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonPage", function() { return AddPersonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_person_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-person.page.html */ "en1v");
/* harmony import */ var _add_person_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-person.page.scss */ "6Edk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");








let AddPersonPage = class AddPersonPage {
    constructor(httpClient, loadingController, alertController, navclrl, circleService, router) {
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.navclrl = navclrl;
        this.circleService = circleService;
        this.router = router;
        this.data = {
            Name: '',
            relationship: '',
            phone_number: '',
            userid: '',
            Email: '',
        };
        this.count = 0;
        let currentUser = localStorage.getItem('LoginData');
        this.currentUser = JSON.parse(currentUser);
        console.log("CurentUser", this.currentUser);
        this.data.userid = this.currentUser.user.uid;
    }
    ngOnInit() {
        // this.addCircle()
        this.circleService.circleGet().subscribe((circles) => {
            this.circles = circles;
            console.log('circles', this.circles);
            for (var circle of this.circles) {
                if (circle.fields.userid === this.data.userid) {
                    this.count++;
                }
            }
        });
    }
    addCircle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let obj = {
                records: [
                    {
                        // id: this.data.id,
                        fields: {
                            Name: this.data.Name,
                            Email: this.data.Email,
                            relationship: this.data.relationship,
                            phone_number: this.data.phone_number,
                            userid: this.data.userid,
                        }
                    }
                ]
            };
            console.log(this.count);
            if (this.count < 5) {
                this.postapiaittable1(obj);
                this.loading = yield this.loadingController.create({
                    message: 'Logging you in...'
                });
                this.loading.present();
            }
            else {
                const alert = yield this.alertController.create({
                    message: "Your Limits has been reached.",
                    buttons: [{ text: "Ok", role: 'cancel' }]
                });
                alert.present();
            }
        });
    }
    postapiaittable1(toggleValue) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = this.createAuthorizationHeader1(headers);
        const body = toggleValue;
        console.log('body', body);
        this.httpClient.post('https://api.airtable.com/v0/appSaPUQYwoPVm8Ny/Table%201', body, { headers }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.postId = data;
            console.log('this.postAPI', this.postId);
            this.navclrl.navigateRoot('support-circle');
            this.loading.dismiss();
        }));
    }
    createAuthorizationHeader1(headers) {
        let _token = "keyhliJN6zZ2igddb";
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', `Bearer ${_token}`);
        return headers;
    }
};
AddPersonPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddPersonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-person',
        template: _raw_loader_add_person_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_person_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddPersonPage);



/***/ }),

/***/ "en1v":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-circle/add-person/add-person.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" mode=\"md\">\r\n      <ion-back-button defaultHref=\"support-circle\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Add a Person</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"ion-text-center ion-padding-top\">\r\n  <img src=\"assets/img/6.png\">\r\n</div>\r\n\r\n<div class=\"ion-padding-top ion-padding-start\">\r\n  <ion-text>\r\n    <h3>\r\n      Add Person\r\n    </h3>\r\n  </ion-text>\r\n</div>\r\n<form >\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" color=\"medium\" name=\"person\"></ion-icon>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"data.Name\" name = \"Name\" placeholder=\"Name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" color=\"medium\" name=\"mail\"></ion-icon>\r\n    <ion-input required type=\"0\" [(ngModel)]=\"data.Email\" name = \"Email\" placeholder=\"Email\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" color=\"medium\" name=\"call\"></ion-icon>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"data.phone_number\" name = \"phone_number\" placeholder=\"Phone Number\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" color=\"medium\" name=\"people\"></ion-icon>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"data.relationship\" name = \"relationship\" placeholder=\"Relationship\"></ion-input>\r\n  </ion-item>\r\n  <ion-button (click)=\"addCircle()\"  expand=\"block\" color=\"tertiary\" class=\"ion-padding-start ion-padding-end btn1\">\r\n    ADD PERSON\r\n  </ion-button>\r\n</form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=add-person-add-person-module.js.map