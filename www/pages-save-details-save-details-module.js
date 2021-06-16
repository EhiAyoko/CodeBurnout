(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-save-details-save-details-module"],{

/***/ "1KOs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/save-details/save-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons mode=\"md\" slot=\"start\">\n      <ion-back-button [text]=\"login\" defaultHref=\"explore-activities\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 10px;\">{{brandsdetails.Name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-margin\">\n    <div class=\"ion-text-center\" *ngIf=\"brandsdetails.Video\"> \n      <video width=\"320\" height=\"240\" controls>\n        <source [src]=\"brandsdetails.Video\" type=\"video/mp4\">\n      </video>\n    </div>\n    <div  >\n      <img [src]=\"brandsdetails.url\">\n    </div>\n    <div class=\"ion-margin\">\n      <ion-text class=\"\">\n        {{brandsdetails.ActivityCategory}}\n      </ion-text>\n    </div>\n    <ion-item class=\"brd\" lines=\"none\">\n      <ion-label>Save Activity</ion-label>\n      <ion-toggle mode=\"ios\" checked=\"{{brandsdetails.Save === true ? true : false}}\" (ionChange)=\"firebaseEvent($event,brandsdetails,postimg)\" color=\"warning\"></ion-toggle>\n    </ion-item>\n    <ion-item class=\"brd\" lines=\"none\" (click)=\"sSShare(brandsdetails)\">\n      <ion-label>Share</ion-label>\n      <ion-icon name=\"share-outline\"></ion-icon>\n    </ion-item>\n</div>\n</ion-content>\n");

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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/authication.service */ "h15u");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");









let SaveDetailsPage = class SaveDetailsPage {
    constructor(router, socialSharing, http, authpostservice, afStore) {
        this.router = router;
        this.socialSharing = socialSharing;
        this.http = http;
        this.authpostservice = authpostservice;
        this.afStore = afStore;
        this.brandsdetails = '';
        let currentUser = localStorage.getItem('LoginData');
        this.currentUser = JSON.parse(currentUser);
        // console.log("CurentUser",this.currentUser);
        this.userid = this.currentUser.user.uid;
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        if (state != undefined) {
            this.brandsdetails = state.item;
            // console.log(this.brandsdetails);
            this.authpostservice.getActivity(this.userid, this.brandsdetails.id)
                .then(doc => {
                // console.log('doc', doc)
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    this.brandsdetails.Save = true;
                }
                else {
                    this.brandsdetails.Save = false;
                }
                // console.log('this is fir data', this.brandsdetails);
            });
        }
    }
    ngOnInit() {
    }
    crazyEvent(val, value, postimg) {
        // console.log("vslueOfToggle",val.detail.checked)
        // console.log("vslueOfObj",value);
        // console.log("fff",postimg);
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
        // console.log("records",obj)
        this.postapiaittable(obj);
    }
    postapiaittable(toggleValue) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = this.createAuthorizationHeader(headers);
        const body = toggleValue;
        // console.log('body',body)
        this.http.put('https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities', body, { headers }).subscribe(data => {
            this.postId = data;
            // console.log('this.postAPI', this.postId)
        });
    }
    createAuthorizationHeader(headers) {
        let _token = "keyhliJN6zZ2igddb";
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', `Bearer ${_token}`);
        return headers;
    }
    firebaseEvent(val, value, postimg) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.brandsdetails;
        // console.log("vslueOfToggle",val.detail.checked)
        // console.log("vslueOfObj",value);
        if (val.detail.checked === true) {
            let addrecord = {};
            addrecord['id'] = (_a = this.brandsdetails) === null || _a === void 0 ? void 0 : _a.id;
            if (this.brandsdetails && ((_b = this.brandsdetails) === null || _b === void 0 ? void 0 : _b.Name) != undefined) {
                addrecord['Name'] = (_c = this.brandsdetails) === null || _c === void 0 ? void 0 : _c.Name;
            }
            addrecord['uid'] = this.userid;
            if (this.brandsdetails && ((_d = this.brandsdetails) === null || _d === void 0 ? void 0 : _d.description) != undefined) {
                addrecord['description'] = (_e = this.brandsdetails) === null || _e === void 0 ? void 0 : _e.description;
            }
            if (this.brandsdetails && ((_f = this.brandsdetails) === null || _f === void 0 ? void 0 : _f.TypeOfActivity) != undefined) {
                addrecord['TypeOfActivity'] = (_g = this.brandsdetails) === null || _g === void 0 ? void 0 : _g.TypeOfActivity;
            }
            if (this.brandsdetails && ((_h = this.brandsdetails) === null || _h === void 0 ? void 0 : _h.ActivityCategory) != undefined) {
                addrecord['ActivityCategory'] = (_j = this.brandsdetails) === null || _j === void 0 ? void 0 : _j.ActivityCategory;
            }
            if (this.brandsdetails && ((_k = this.brandsdetails) === null || _k === void 0 ? void 0 : _k.url) != undefined) {
                addrecord['url'] = (_l = this.brandsdetails) === null || _l === void 0 ? void 0 : _l.url;
            }
            if (this.brandsdetails && ((_m = this.brandsdetails) === null || _m === void 0 ? void 0 : _m.Video) != undefined) {
                addrecord['Video'] = (_o = this.brandsdetails) === null || _o === void 0 ? void 0 : _o.Video;
                // console.log('video', this.brandsdetails?.Video)
            }
            // console.log(addrecord)
            this.afStore
                .collection('Team_activities_saved/' + this.userid + '/activity')
                .doc(this.brandsdetails.id)
                .set(addrecord).then(() => {
            });
        }
        else {
            if (val.detail.checked === false) {
                this.afStore.doc('/Team_activities_saved/' + this.userid + '/activity/' + value.id).delete();
            }
        }
    }
    sSShare(brandsdetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('brandsdetails', brandsdetails)
            var options = {
                message: 'Activiy Name: ' + this.brandsdetails.Name,
                text: brandsdetails.description,
                url: 'code burnout app: ' + 'https://apps.apple.com/us/app/code-burnout/id1561832368',
                chooserTitle: 'code burnout',
            };
            yield this.socialSharing.shareWithOptions(options);
            // await  this.socialSharing.share('this is msg', 'subject', 'url').then().catch();
        });
    }
};
SaveDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_7__["AuthicationService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".brd {\n  border: solid #eae8e8;\n}\n\n.tr {\n  position: relative;\n  top: 9px;\n}\n\n.bl {\n  font-weight: bold;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzYXZlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0FBR0oiLCJmaWxlIjoic2F2ZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmR7XHJcbiAgICBib3JkZXI6IHNvbGlkICNlYWU4ZTg7XHJcbiAgICBcclxufVxyXG4udHJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDlweDtcclxufVxyXG4uYmx7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYnJke1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjZWFlOGU4O1xyXG4gICAgXHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-save-details-save-details-module.js.map