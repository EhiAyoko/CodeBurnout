(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-save-details-save-details-module"],{

/***/ "1KOs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/save-details/save-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons mode=\"md\" slot=\"start\">\n      <ion-back-button [text]=\"login\" defaultHref=\"explore-activities\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 10px;\">{{brandsdetails.fields.Name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-margin\">\n    <div *ngFor=\"let postimg of brandsdetails.fields.FeaturedPhoto\">\n    <div  >\n      <img [src]=\"postimg.url\">\n    </div>\n    <div class=\"ion-margin\">\n      <ion-text class=\"\">\n        {{brandsdetails.fields.ActivityCategory}}\n      </ion-text>\n    </div>\n    <ion-item class=\"brd\" lines=\"none\">\n      <ion-label>Save Activity</ion-label>\n      <ion-toggle mode=\"ios\" checked=\"{{brandsdetails.fields.Save === true ? true : false}}\" (ionChange)=\"crazyEvent($event,brandsdetails,postimg)\" color=\"warning\"></ion-toggle>\n    </ion-item>\n  </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "1Rci":
/*!*******************************************************************!*\
  !*** ./src/app/pages/save-details/save-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SaveDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDetailsPageRoutingModule", function() { return SaveDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _save_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save-details.page */ "8/zz");




const routes = [
    {
        path: '',
        component: _save_details_page__WEBPACK_IMPORTED_MODULE_3__["SaveDetailsPage"]
    }
];
let SaveDetailsPageRoutingModule = class SaveDetailsPageRoutingModule {
};
SaveDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaveDetailsPageRoutingModule);



/***/ }),

/***/ "8/zz":
/*!*********************************************************!*\
  !*** ./src/app/pages/save-details/save-details.page.ts ***!
  \*********************************************************/
/*! exports provided: SaveDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDetailsPage", function() { return SaveDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_save_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./save-details.page.html */ "1KOs");
/* harmony import */ var _save_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-details.page.scss */ "ysCh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let SaveDetailsPage = class SaveDetailsPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.brandsdetails = '';
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        if (state != undefined) {
            this.brandsdetails = state.item;
            console.log(this.brandsdetails);
        }
    }
    ngOnInit() {
    }
    crazyEvent(val, value, postimg) {
        console.log("vslueOfToggle", val.detail.checked);
        console.log("vslueOfObj", value);
        console.log("fff", postimg);
        let records;
        let obj = {
            records: [
                {
                    id: value.id,
                    fields: {
                        Save: val.detail.checked,
                        Name: this.brandsdetails.fields.Name,
                        ActivityCategory: this.brandsdetails.fields.ActivityCategory,
                        description: this.brandsdetails.fields.description,
                        FeaturedPhoto: [
                            {
                                url: postimg.url,
                            }
                        ],
                        TypeOfActivity: this.brandsdetails.fields.TypeOfActivity,
                    }
                }
            ]
        };
        console.log("records", obj);
        this.postapiaittable(obj);
    }
    postapiaittable(toggleValue) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = this.createAuthorizationHeader(headers);
        const body = toggleValue;
        console.log('body', body);
        this.http.put('https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities', body, { headers }).subscribe(data => {
            this.postId = data;
            console.log('this.postAPI', this.postId);
        });
    }
    createAuthorizationHeader(headers) {
        let _token = "keyhliJN6zZ2igddb";
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', `Bearer ${_token}`);
        return headers;
    }
};
SaveDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SaveDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-save-details',
        template: _raw_loader_save_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_save_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SaveDetailsPage);



/***/ }),

/***/ "hG1c":
/*!***********************************************************!*\
  !*** ./src/app/pages/save-details/save-details.module.ts ***!
  \***********************************************************/
/*! exports provided: SaveDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDetailsPageModule", function() { return SaveDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _save_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save-details-routing.module */ "1Rci");
/* harmony import */ var _save_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save-details.page */ "8/zz");







let SaveDetailsPageModule = class SaveDetailsPageModule {
};
SaveDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _save_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaveDetailsPageRoutingModule"]
        ],
        declarations: [_save_details_page__WEBPACK_IMPORTED_MODULE_6__["SaveDetailsPage"]]
    })
], SaveDetailsPageModule);



/***/ }),

/***/ "ysCh":
/*!***********************************************************!*\
  !*** ./src/app/pages/save-details/save-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brd {\n  border: solid #eae8e8;\n}\n\n.tr {\n  position: relative;\n  top: 9px;\n}\n\n.bl {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzYXZlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7QUFDWjs7QUFDQTtFQUNJLGlCQUFpQjtBQUVyQiIsImZpbGUiOiJzYXZlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZHtcclxuICAgIGJvcmRlcjogc29saWQgI2VhZThlODtcclxuICAgIFxyXG59XHJcbi50cntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOXB4O1xyXG59XHJcbi5ibHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-save-details-save-details-module.js.map