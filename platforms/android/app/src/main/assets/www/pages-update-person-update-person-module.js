(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-update-person-update-person-module"],{

/***/ "IL+6":
/*!*************************************************************!*\
  !*** ./src/app/pages/update-person/update-person.module.ts ***!
  \*************************************************************/
/*! exports provided: UpdatePersonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonPageModule", function() { return UpdatePersonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _update_person_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-person-routing.module */ "gL8w");
/* harmony import */ var _update_person_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-person.page */ "rBgb");







let UpdatePersonPageModule = class UpdatePersonPageModule {
};
UpdatePersonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_person_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdatePersonPageRoutingModule"]
        ],
        declarations: [_update_person_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePersonPage"]]
    })
], UpdatePersonPageModule);



/***/ }),

/***/ "Iqeq":
/*!*************************************************************!*\
  !*** ./src/app/pages/update-person/update-person.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".se {\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n\n.ava {\n  height: 65px;\n  width: 65px;\n}\n\n.p1 {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.h22 {\n  font-size: 18px;\n}\n\n.label1 {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.list1 {\n  padding-top: 65px;\n}\n\n.btn1 {\n  --border-radius: 4px;\n  margin-top: 45px;\n  height: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1cGRhdGUtcGVyc29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0FBQ25COztBQUVFO0VBQ0UscUJBQXFCO0FBQ3pCOztBQUdFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFBZjs7QUFHRTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFBcEI7O0FBR0U7RUFDRSxlQUFlO0FBQW5COztBQUVFO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDbkI7O0FBQ0U7RUFDRSxpQkFBaUI7QUFFckI7O0FBQ0U7RUFDRSxvQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFFaEIiLCJmaWxlIjoidXBkYXRlLXBlcnNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Uge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAuYnJke1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjZWFlOGU4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuYXZhIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gIH1cclxuICBcclxuICAucDEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmgyMiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5sYWJlbDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5saXN0MSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bjEge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAiXX0= */");

/***/ }),

/***/ "gL8w":
/*!*********************************************************************!*\
  !*** ./src/app/pages/update-person/update-person-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdatePersonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonPageRoutingModule", function() { return UpdatePersonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _update_person_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-person.page */ "rBgb");




const routes = [
    {
        path: '',
        component: _update_person_page__WEBPACK_IMPORTED_MODULE_3__["UpdatePersonPage"]
    }
];
let UpdatePersonPageRoutingModule = class UpdatePersonPageRoutingModule {
};
UpdatePersonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdatePersonPageRoutingModule);



/***/ }),

/***/ "nwV4":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/update-person/update-person.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" mode=\"md\">\r\n      <ion-back-button defaultHref=\"support-circle\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{blogdetails.fields.Name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"ion-text-center ion-padding-top\">\r\n  <img src=\"assets/img/6.png\">\r\n</div>\r\n\r\n<div class=\"ion-padding-top ion-padding-start\">\r\n  <ion-text>\r\n    <h3>\r\n      Add Person\r\n    </h3>\r\n  </ion-text>\r\n</div>\r\n<form >\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" color=\"medium\" name=\"person\"></ion-icon>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"data.Name\" name = \"Name\" >{{blogdetails.fields.Name}}</ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" color=\"medium\" name=\"mail\"></ion-icon>\r\n    <ion-input required type=\"0\" [(ngModel)]=\"data.Email\" name = \"Email\" >{{blogdetails.fields.Email}}</ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" color=\"medium\" name=\"call\"></ion-icon>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"data.phone_number\" name = \"phone_number\" >{{blogdetails.fields.phone_number}}</ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" color=\"medium\" name=\"people\"></ion-icon>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"data.relationship\" name = \"relationship\" >{{blogdetails.fields.relationship}}</ion-input>\r\n  </ion-item>\r\n  <ion-button (click)=\"updateCircle()\"  expand=\"block\" color=\"tertiary\" class=\"ion-padding-start ion-padding-end btn1\">\r\n    Update\r\n  </ion-button>\r\n</form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "rBgb":
/*!***********************************************************!*\
  !*** ./src/app/pages/update-person/update-person.page.ts ***!
  \***********************************************************/
/*! exports provided: UpdatePersonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonPage", function() { return UpdatePersonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_person_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-person.page.html */ "nwV4");
/* harmony import */ var _update_person_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-person.page.scss */ "Iqeq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");








let UpdatePersonPage = class UpdatePersonPage {
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
            Email: '',
        };
        this.count = 0;
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
    updateCircle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let obj = {
                records: [
                    {
                        id: this.blogdetails.id,
                        fields: {
                            Name: this.data.Name,
                            Email: this.data.Email,
                            relationship: this.data.relationship,
                            phone_number: this.data.phone_number,
                            userid: this.blogdetails.fields.userid,
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
        this.httpClient.put('https://api.airtable.com/v0/appSaPUQYwoPVm8Ny/Table%201', body, { headers }).subscribe(data => {
            this.postId = data;
            console.log('this.postAPI', this.postId);
            this.navclrl.navigateRoot('support-circle');
            this.loading.dismiss();
        });
    }
    createAuthorizationHeader1(headers) {
        let _token = "keyhliJN6zZ2igddb";
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', `Bearer ${_token}`);
        return headers;
    }
};
UpdatePersonPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UpdatePersonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-update-person',
        template: _raw_loader_update_person_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_person_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdatePersonPage);



/***/ })

}]);
//# sourceMappingURL=pages-update-person-update-person-module.js.map