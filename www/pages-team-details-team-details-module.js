(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-details-team-details-module"],{

/***/ "CUB/":
/*!*********************************************************!*\
  !*** ./src/app/pages/team-details/team-details.page.ts ***!
  \*********************************************************/
/*! exports provided: TeamDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailsPage", function() { return TeamDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_team_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./team-details.page.html */ "NI6X");
/* harmony import */ var _team_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-details.page.scss */ "nyWd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/authication.service */ "h15u");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "/+Rg");












let TeamDetailsPage = class TeamDetailsPage {
    constructor(router, navCtrl, uniqueDeviceID, http, alertController, afStore, socialSharing, formBuilder, authpostservice, actionSheetController) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.uniqueDeviceID = uniqueDeviceID;
        this.http = http;
        this.alertController = alertController;
        this.afStore = afStore;
        this.socialSharing = socialSharing;
        this.formBuilder = formBuilder;
        this.authpostservice = authpostservice;
        this.actionSheetController = actionSheetController;
        this.brandsdetails = '';
        this.togglesavevalue = '';
        if (localStorage.getItem('LoginData')) {
            let currentUser = localStorage.getItem('LoginData');
            this.currentUser = JSON.parse(currentUser);
            console.log("CurentUser", this.currentUser);
            this.userid = this.currentUser.user.uid;
            console.log("this.userid", this.userid);
        }
        else {
            this.loadCall();
        }
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        if (state != undefined) {
            this.brandsdetails = state.item;
            this.authpostservice.getActivity(this.userid, this.brandsdetails.id)
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
    loadCall() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                message: 'If you want to use <strong>Save Activity</strong>, you need to login',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.router.navigateByUrl('/team-activities');
                        }
                    }, {
                        text: 'Login',
                        handler: () => {
                            // this.router.navigateByUrl('/login');
                            this.navCtrl.navigateForward('login');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() { }
    sShare(brandsdetails, postimg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('brandsdetails', brandsdetails)
            var options = {
                message: 'Activiy Name: ' + this.brandsdetails.fields.Name,
                text: brandsdetails.fields.description,
                url: 'code burnout app: ' + 'https://apps.apple.com/us/app/code-burnout/id1561832368',
                chooserTitle: 'code burnout',
            };
            yield this.socialSharing.shareWithOptions(options);
        });
    }
    // working for save activity
    crazyEvent(val, value, postimg) {
        this.brandsdetails;
        let records;
        let obj = {
            records: [
                {
                    id: value.id,
                    fields: {
                        Save: val.detail.checked,
                        Name: this.brandsdetails.fields.Name,
                        description: this.brandsdetails.fields.description,
                        ActivityCategory: this.brandsdetails.fields.ActivityCategory,
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
        // console.log("records", obj)
        this.postapiaittable(obj);
    }
    postapiaittable(toggleValue) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = this.createAuthorizationHeader(headers);
        const body = toggleValue;
        // console.log('body', body)
        this.http.put('https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities', body, { headers }).subscribe(data => {
            this.postId = data;
            this.brandsdetails;
            // console.log('this.postAPI', this.postId)
        });
    }
    createAuthorizationHeader(headers) {
        let _token = "keyhliJN6zZ2igddb";
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', `Bearer ${_token}`);
        return headers;
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.brandsdetails;
            this.addrecord = { type: '', description: '', amount: null };
            this.afStore.collection('/Team_activities_saved/').snapshotChanges().subscribe(res => {
                if (res) {
                    this.records = res.map(e => {
                        return {
                            id: e.payload.doc.id,
                            Name: e.payload.doc.data()['Name'],
                            TypeOfActivity: e.payload.doc.data()['TypeOfActivity'],
                            url: e.payload.doc.data()['url']
                        };
                    });
                }
            });
            // console.log('this.records', this.records)
        });
    }
    firebaseEvent(val, value, postimg) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        this.brandsdetails;
        if (val.detail.checked === true) {
            let addrecord = {};
            addrecord['id'] = (_a = this.brandsdetails) === null || _a === void 0 ? void 0 : _a.id;
            if (this.brandsdetails && ((_b = this.brandsdetails) === null || _b === void 0 ? void 0 : _b.fields.Name) != undefined) {
                addrecord['Name'] = (_d = (_c = this.brandsdetails) === null || _c === void 0 ? void 0 : _c.fields) === null || _d === void 0 ? void 0 : _d.Name;
            }
            addrecord['uid'] = this.userid;
            if (this.brandsdetails && ((_e = this.brandsdetails) === null || _e === void 0 ? void 0 : _e.fields.description) != undefined) {
                addrecord['description'] = (_g = (_f = this.brandsdetails) === null || _f === void 0 ? void 0 : _f.fields) === null || _g === void 0 ? void 0 : _g.description;
            }
            if (this.brandsdetails && ((_h = this.brandsdetails) === null || _h === void 0 ? void 0 : _h.fields.TypeOfActivity) != undefined) {
                addrecord['TypeOfActivity'] = (_k = (_j = this.brandsdetails) === null || _j === void 0 ? void 0 : _j.fields) === null || _k === void 0 ? void 0 : _k.TypeOfActivity;
            }
            if (this.brandsdetails && ((_l = this.brandsdetails) === null || _l === void 0 ? void 0 : _l.fields.ActivityCategory) != undefined) {
                addrecord['ActivityCategory'] = (_o = (_m = this.brandsdetails) === null || _m === void 0 ? void 0 : _m.fields) === null || _o === void 0 ? void 0 : _o.ActivityCategory;
            }
            if (this.brandsdetails && ((_p = this.brandsdetails) === null || _p === void 0 ? void 0 : _p.fields.ActivityCategory) != undefined) {
                addrecord['ActivityCategory'] = (_r = (_q = this.brandsdetails) === null || _q === void 0 ? void 0 : _q.fields) === null || _r === void 0 ? void 0 : _r.ActivityCategory;
            }
            if (this.brandsdetails && (postimg === null || postimg === void 0 ? void 0 : postimg.url) != undefined) {
                addrecord['url'] = postimg === null || postimg === void 0 ? void 0 : postimg.url;
            }
            if (this.brandsdetails.fields.Video != undefined) {
                addrecord['Video'] = (_u = (_t = (_s = this.brandsdetails) === null || _s === void 0 ? void 0 : _s.fields) === null || _t === void 0 ? void 0 : _t.Video[0]) === null || _u === void 0 ? void 0 : _u.url;
                // console.log('video', this.brandsdetails?.fields?.Video[0]?.url)
            }
            this.afStore
                .collection('Team_activities_saved/' + this.userid + '/activity')
                .doc(this.brandsdetails.id)
                .set(addrecord).then(() => {
                this.addrecord = { type: '', description: '', amount: null };
            });
        }
        else {
            if (val.detail.checked === false) {
                this.afStore.doc('/Team_activities_saved/' + this.userid + '/activity/' + value.id).delete();
            }
        }
    }
    DeleteRecord(id) {
        this.afStore.doc('/Team_activities_saved/' + id).delete();
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                buttons: [
                    {
                        text: 'WhatsApp',
                        icon: 'logo-whatsapp',
                        handler: () => {
                            // console.log('Share clicked');
                        }
                    }, {
                        text: 'Instagram',
                        icon: 'logo-instagram',
                        handler: () => {
                            // console.log('Play clicked');
                        }
                    }, {
                        text: 'facebook',
                        icon: 'logo-facebook',
                        handler: () => {
                            this.socialSharing.shareViaWhatsApp('Message via WhatsApp', null /* img */, null /* url */).then(() => {
                                // console.log(' Success!');
                            }).catch(() => {
                                // console.log(' Error!');
                            });
                        }
                    },
                    {
                        text: 'Twitter',
                        icon: 'logo-twitter',
                        handler: () => {
                            // console.log('Favorite clicked');
                        }
                    },
                    {
                        text: 'SMS',
                        icon: 'chatbubble-outline',
                        handler: () => {
                            // console.log('Favorite clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            // console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
TeamDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_11__["UniqueDeviceID"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_services_auth_authication_service__WEBPACK_IMPORTED_MODULE_7__["AuthicationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"] }
];
TeamDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-team-details',
        template: _raw_loader_team_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_team_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TeamDetailsPage);



/***/ }),

/***/ "EUNA":
/*!***********************************************************!*\
  !*** ./src/app/pages/team-details/team-details.module.ts ***!
  \***********************************************************/
/*! exports provided: TeamDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailsPageModule", function() { return TeamDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _team_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-details-routing.module */ "gJwd");
/* harmony import */ var _team_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-details.page */ "CUB/");







let TeamDetailsPageModule = class TeamDetailsPageModule {
};
TeamDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _team_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamDetailsPageRoutingModule"]
        ],
        declarations: [_team_details_page__WEBPACK_IMPORTED_MODULE_6__["TeamDetailsPage"]]
    })
], TeamDetailsPageModule);



/***/ }),

/***/ "NI6X":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team-details/team-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons mode=\"md\" slot=\"start\">\n      <ion-back-button [text]=\"login\" defaultHref=\"team-details\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 10px;\"> {{brandsdetails.fields.Name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-margin\">\n    <div class=\"ion-text-center\" *ngFor=\"let postvideo of brandsdetails.fields.Video\" > \n        <video width=\"320\" height=\"240\" controls>\n          <source [src]=\"postvideo.url\" [type]=\"postvideo.type\">\n        </video>\n      </div>\n    \n    </div>\n\n    <div *ngFor=\"let postimg of brandsdetails.fields.FeaturedPhoto\" >\n      <img [src]=\"postimg.url\">\n\n    <div class=\"ion-margin\">\n      <ion-text class=\"\">\n        {{brandsdetails.fields.description}}\n      </ion-text>\n    </div>\n    <div class=\"ion-margin\">\n      <ion-text class=\"sett\">\n          {{brandsdetails.fields.Prep}}\n      </ion-text>\n    </div><br>\n\n    <div class=\"rtre\" >\n      <ion-item class=\"brd\" lines=\"none\">\n        <ion-label >Save Activity</ion-label>\n  <ion-toggle mode=\"ios\" checked=\"{{brandsdetails.fields.Save === true ? true : false}}\" (ionChange)=\"firebaseEvent($event,brandsdetails,postimg)\" color=\"warning\"></ion-toggle>\n</ion-item>\n\n<ion-item class=\"brd\" lines=\"none\" (click)=\"sShare(brandsdetails,postimg)\">\n  <ion-label>Share</ion-label>\n  <ion-icon name=\"share-outline\"></ion-icon>\n</ion-item>\n    </div>\n</div>\n\n<!-- \n<ion-item  class=\"align-items-center\" *ngFor=\"let record of records;\">\n  <ion-text >\n    {{record.Name}}\n  </ion-text>\n  <ion-button color=\"primary\" (click)=\"DeleteRecord(record.id)\">cancel</ion-button>\n</ion-item> -->\n</ion-content>\n");

/***/ }),

/***/ "gJwd":
/*!*******************************************************************!*\
  !*** ./src/app/pages/team-details/team-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TeamDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailsPageRoutingModule", function() { return TeamDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _team_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-details.page */ "CUB/");




const routes = [
    {
        path: '',
        component: _team_details_page__WEBPACK_IMPORTED_MODULE_3__["TeamDetailsPage"]
    }
];
let TeamDetailsPageRoutingModule = class TeamDetailsPageRoutingModule {
};
TeamDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamDetailsPageRoutingModule);



/***/ }),

/***/ "nyWd":
/*!***********************************************************!*\
  !*** ./src/app/pages/team-details/team-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brd {\n  border: solid #eae8e8;\n}\n\n.tr {\n  position: relative;\n  top: 9px;\n}\n\n.bl {\n  font-weight: bold;\n}\n\n.font-set {\n  font-weight: bold;\n  font-size: 23px;\n}\n\n.sett {\n  position: relative;\n  /* left: -1px; */\n  bottom: 25px;\n}\n\n.rtre {\n  position: relative;\n  bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZWFtLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUtKIiwiZmlsZSI6InRlYW0tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJke1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjZWFlOGU4O1xyXG4gICAgXHJcbn1cclxuLnRye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA5cHg7XHJcbn1cclxuLmJse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmZvbnQtc2V0e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLnNldHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBsZWZ0OiAtMXB4OyAqL1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG59XHJcbi5ydHJle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-team-details-team-details-module.js.map