(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-explore-details-explore-details-module"],{

/***/ "M0Me":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore-details/explore-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons mode=\"md\" slot=\"start\">\n      <ion-back-button defaultHref=\"explore-activities\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 10px;\">{{brandsdetails.fields.Name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-margin\">\n    <div class=\"ion-text-center\" *ngFor=\"let postvideo of brandsdetails.fields.Video\"> \n      <video width=\"320\" height=\"240\" controls>\n        <source [src]=\"postvideo.url\" [type]=\"postvideo.type\">\n      </video>\n    </div>\n    <div *ngFor=\"let postimg of brandsdetails.fields.Featuredphoto\">\n    <div  >\n      <img [src]=\"postimg.url\">\n    </div>\n    <div class=\"ion-margin\">\n      <ion-text class=\"\">\n        {{brandsdetails.fields.Notes}}\n      </ion-text>\n    </div>\n    <ion-item class=\"brd\" lines=\"none\">\n      <ion-label>Save Activity</ion-label>\n      <ion-toggle mode=\"ios\" checked=\"{{brandsdetails.fields.Save === true ? true : false}}\" (ionChange)=\"firebaseEvent($event,brandsdetails,postimg,postvideo)\" color=\"warning\"></ion-toggle>\n    </ion-item>\n\n    <ion-item class=\"brd\" lines=\"none\" (click)=\"sSShare(brandsdetails,postimg)\">\n      <ion-label>Share</ion-label>\n      <ion-icon name=\"share-outline\"></ion-icon>\n    </ion-item>\n  </div>\n</div>\n\n\n<!-- <ion-item  class=\"align-items-center\" *ngFor=\"let record of records;\">\n  <ion-text >\n    {{record.Name}}\n  </ion-text>\n  <ion-button color=\"primary\" (click)=\"DeleteRecord(record.id)\">cancel</ion-button>\n</ion-item> -->\n</ion-content>\n");

/***/ }),

/***/ "UhAA":
/*!***************************************************************!*\
  !*** ./src/app/pages/explore-details/explore-details.page.ts ***!
  \***************************************************************/
/*! exports provided: ExploreDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreDetailsPage", function() { return ExploreDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-details.page.html */ "M0Me");
/* harmony import */ var _explore_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-details.page.scss */ "ehl2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/authication.service */ "h15u");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let ExploreDetailsPage = class ExploreDetailsPage {
    constructor(socialSharing, navctrl, router, http, authpostservice, afStore) {
        this.socialSharing = socialSharing;
        this.navctrl = navctrl;
        this.router = router;
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
            this.authpostservice.exploreActivity(this.userid, this.brandsdetails.id)
                .then(doc => {
                // console.log('doc', doc)
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    this.brandsdetails.fields.Save = true;
                }
                else {
                    this.brandsdetails.fields.Save = false;
                }
                // console.log('this is fir data', this.brandsdetails);
            });
        }
    }
    sShare(postimg, brandsdetails) {
        var options = {
            message: 'Code Burnout app',
            subject: brandsdetails.fields.Name,
            url: postimg.url,
            chooserTitle: brandsdetails.fields.Notes,
        };
        this.socialSharing.shareWithOptions(options);
    }
    ngOnInit() {
        // console.log('this.brandsdetails.fields.Name',this.brandsdetails.fields.Name)
        this.addrecord = { type: '', description: '', amount: null };
        this.afStore.collection('/Explore_activities_saved/').snapshotChanges().subscribe(res => {
            // console.log('res',res)
            if (res) {
                this.records = res.map(e => {
                    return {
                        id: e.payload.doc.id,
                        Name: e.payload.doc.data()['Name'],
                        TypeOfActivity: e.payload.doc.data()['Notes'],
                        url: e.payload.doc.data()['url']
                    };
                });
            }
        });
        // console.log('this.records',this.records)
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
        // console.log("records",obj)
        this.postapiaittable(obj);
    }
    postapiaittable(toggleValue) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = this.createAuthorizationHeader(headers);
        const body = toggleValue;
        // console.log('body',body)
        this.http.put('https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities', body, { headers }).subscribe(data => {
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
    firebaseEvent(val, value, postimg, postvideo) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.brandsdetails;
        // console.log("vslueOfToggle",val.detail.checked)
        // console.log("vslueOfObj",value);
        if (val.detail.checked === true) {
            let addrecord = {};
            addrecord['id'] = (_a = this.brandsdetails) === null || _a === void 0 ? void 0 : _a.id;
            if (this.brandsdetails && ((_b = this.brandsdetails) === null || _b === void 0 ? void 0 : _b.fields.Name) != undefined) {
                addrecord['Name'] = (_d = (_c = this.brandsdetails) === null || _c === void 0 ? void 0 : _c.fields) === null || _d === void 0 ? void 0 : _d.Name;
            }
            addrecord['uid'] = this.userid;
            if (this.brandsdetails && ((_e = this.brandsdetails) === null || _e === void 0 ? void 0 : _e.fields.Notes) != undefined) {
                addrecord['Notes'] = (_g = (_f = this.brandsdetails) === null || _f === void 0 ? void 0 : _f.fields) === null || _g === void 0 ? void 0 : _g.Notes;
            }
            if (this.brandsdetails && ((_h = this.brandsdetails) === null || _h === void 0 ? void 0 : _h.fields.TypeOfActivity) != undefined) {
                addrecord['TypeOfActivity'] = (_k = (_j = this.brandsdetails) === null || _j === void 0 ? void 0 : _j.fields) === null || _k === void 0 ? void 0 : _k.TypeOfActivity;
            }
            if (this.brandsdetails && (postimg === null || postimg === void 0 ? void 0 : postimg.url) != undefined) {
                addrecord['url'] = postimg === null || postimg === void 0 ? void 0 : postimg.url;
            }
            if (this.brandsdetails.fields.Video != undefined) {
                addrecord['Video'] = (_o = (_m = (_l = this.brandsdetails) === null || _l === void 0 ? void 0 : _l.fields) === null || _m === void 0 ? void 0 : _m.Video[0]) === null || _o === void 0 ? void 0 : _o.url;
                // console.log('video', this.brandsdetails?.fields?.Video[0]?.url)
            }
            // console.log(addrecord)
            this.afStore
                .collection('Explore_activities_saved/' + this.userid + '/activity')
                .doc(this.brandsdetails.id)
                .set(addrecord).then(() => {
                this.addrecord = { type: '', description: '', amount: null };
                // this.afStore.collection('Records').doc().set({id: '' , name:'hamza'})
            });
        }
        else {
            if (val.detail.checked === false) {
                this.afStore.doc('/Explore_activities_saved/' + this.userid + '/activity/' + value.id).delete();
            }
        }
    }
    DeleteRecord(id) {
        this.afStore.doc('/Explore_activities_saved/' + id).delete();
    }
    sSShare(brandsdetails, postimg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('brandsdetails', brandsdetails)
            var options = {
                message: 'Activiy Name: ' + this.brandsdetails.fields.Name,
                text: brandsdetails.fields.description,
                url: 'code burnout app: ' + 'https://apps.apple.com/us/app/code-burnout/id1561832368',
                chooserTitle: 'code burnout',
            };
            yield this.socialSharing.shareWithOptions(options);
            // await  this.socialSharing.share('this is msg', 'subject', 'url').then().catch();
        });
    }
};
ExploreDetailsPage.ctorParameters = () => [
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_7__["AuthicationService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
];
ExploreDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-details',
        template: _raw_loader_explore_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreDetailsPage);



/***/ }),

/***/ "Z30R":
/*!*****************************************************************!*\
  !*** ./src/app/pages/explore-details/explore-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExploreDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreDetailsPageModule", function() { return ExploreDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-details-routing.module */ "azCL");
/* harmony import */ var _explore_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-details.page */ "UhAA");







let ExploreDetailsPageModule = class ExploreDetailsPageModule {
};
ExploreDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _explore_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExploreDetailsPageRoutingModule"]
        ],
        declarations: [_explore_details_page__WEBPACK_IMPORTED_MODULE_6__["ExploreDetailsPage"]]
    })
], ExploreDetailsPageModule);



/***/ }),

/***/ "azCL":
/*!*************************************************************************!*\
  !*** ./src/app/pages/explore-details/explore-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ExploreDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreDetailsPageRoutingModule", function() { return ExploreDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _explore_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-details.page */ "UhAA");




const routes = [
    {
        path: '',
        component: _explore_details_page__WEBPACK_IMPORTED_MODULE_3__["ExploreDetailsPage"]
    }
];
let ExploreDetailsPageRoutingModule = class ExploreDetailsPageRoutingModule {
};
ExploreDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExploreDetailsPageRoutingModule);



/***/ }),

/***/ "ehl2":
/*!*****************************************************************!*\
  !*** ./src/app/pages/explore-details/explore-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brd {\n  border: solid #eae8e8;\n}\n\n.tr {\n  position: relative;\n  top: 9px;\n}\n\n.bl {\n  font-weight: bold;\n}\n\n.brd {\n  border: solid #eae8e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHBsb3JlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0FBR0oiLCJmaWxlIjoiZXhwbG9yZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmR7XHJcbiAgICBib3JkZXI6IHNvbGlkICNlYWU4ZTg7XHJcbiAgICBcclxufVxyXG4udHJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDlweDtcclxufVxyXG4uYmx7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYnJke1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjZWFlOGU4O1xyXG4gICAgXHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-explore-details-explore-details-module.js.map