(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-save-details-explore-save-details-explore-module"],{

/***/ "4A3R":
/*!*************************************************************************!*\
  !*** ./src/app/pages/save-details-explore/save-details-explore.page.ts ***!
  \*************************************************************************/
/*! exports provided: SaveDetailsExplorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDetailsExplorePage", function() { return SaveDetailsExplorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_save_details_explore_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./save-details-explore.page.html */ "fgbg");
/* harmony import */ var _save_details_explore_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-details-explore.page.scss */ "F8Lt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






let SaveDetailsExplorePage = class SaveDetailsExplorePage {
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
                        Notes: this.brandsdetails.fields.Notes,
                        Featuredphoto: [
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
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = this.createAuthorizationHeader(headers);
        const body = toggleValue;
        console.log('body', body);
        this.http.put('https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities', body, { headers }).subscribe(data => {
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
SaveDetailsExplorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
SaveDetailsExplorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-save-details-explore',
        template: _raw_loader_save_details_explore_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_save_details_explore_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SaveDetailsExplorePage);



/***/ }),

/***/ "9aGB":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/save-details-explore/save-details-explore-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SaveDetailsExplorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDetailsExplorePageRoutingModule", function() { return SaveDetailsExplorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _save_details_explore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save-details-explore.page */ "4A3R");




const routes = [
    {
        path: '',
        component: _save_details_explore_page__WEBPACK_IMPORTED_MODULE_3__["SaveDetailsExplorePage"]
    }
];
let SaveDetailsExplorePageRoutingModule = class SaveDetailsExplorePageRoutingModule {
};
SaveDetailsExplorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaveDetailsExplorePageRoutingModule);



/***/ }),

/***/ "F8Lt":
/*!***************************************************************************!*\
  !*** ./src/app/pages/save-details-explore/save-details-explore.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brd {\n  border: solid #eae8e8;\n}\n\n.tr {\n  position: relative;\n  top: 9px;\n}\n\n.bl {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzYXZlLWRldGFpbHMtZXhwbG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNaOztBQUNBO0VBQ0ksaUJBQWlCO0FBRXJCIiwiZmlsZSI6InNhdmUtZGV0YWlscy1leHBsb3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmR7XHJcbiAgICBib3JkZXI6IHNvbGlkICNlYWU4ZTg7XHJcbiAgICBcclxufVxyXG4udHJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDlweDtcclxufVxyXG4uYmx7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "fgbg":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/save-details-explore/save-details-explore.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons mode=\"md\" slot=\"start\">\n      <ion-back-button [text]=\"login\" defaultHref=\"explore-activities\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 10px;\">{{brandsdetails.fields.Name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-margin\">\n    <div *ngFor=\"let postimg of brandsdetails.fields.Featuredphoto\">\n    <div>\n      <img [src]=\"postimg.url\">\n    </div>\n    <div class=\"ion-margin\">\n      <ion-text class=\"\">\n        {{brandsdetails.fields.Notes}}\n      </ion-text>\n    </div>\n    <ion-item class=\"brd\" lines=\"none\">\n      <ion-label>Save Activity</ion-label>\n      <ion-toggle mode=\"ios\" checked=\"{{brandsdetails.fields.Save === true ? true : false}}\" (ionChange)=\"crazyEvent($event,brandsdetails,postimg)\" color=\"warning\"></ion-toggle>\n    </ion-item>\n  </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "u6zF":
/*!***************************************************************************!*\
  !*** ./src/app/pages/save-details-explore/save-details-explore.module.ts ***!
  \***************************************************************************/
/*! exports provided: SaveDetailsExplorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDetailsExplorePageModule", function() { return SaveDetailsExplorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _save_details_explore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save-details-explore-routing.module */ "9aGB");
/* harmony import */ var _save_details_explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save-details-explore.page */ "4A3R");







let SaveDetailsExplorePageModule = class SaveDetailsExplorePageModule {
};
SaveDetailsExplorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _save_details_explore_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaveDetailsExplorePageRoutingModule"]
        ],
        declarations: [_save_details_explore_page__WEBPACK_IMPORTED_MODULE_6__["SaveDetailsExplorePage"]]
    })
], SaveDetailsExplorePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-save-details-explore-save-details-explore-module.js.map