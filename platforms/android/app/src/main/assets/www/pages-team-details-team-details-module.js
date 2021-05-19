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






let TeamDetailsPage = class TeamDetailsPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.brandsdetails = '';
        this.togglesavevalue = '';
        this.brandsdetails;
    }
    ngOnInit() {
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        if (state != undefined) {
            this.brandsdetails = state.item;
            console.log(this.brandsdetails);
        }
    }
    ionViewWillEnter() {
        this.brandsdetails;
    }
    crazyEvent(val, value, postimg) {
        this.brandsdetails;
        console.log("vslueOfToggle", val.detail.checked);
        console.log("vslueOfObj", value);
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
        console.log("records", obj);
        this.postapiaittable(obj);
    }
    postapiaittable(toggleValue) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers = this.createAuthorizationHeader(headers);
        const body = toggleValue;
        console.log('body', body);
        this.http.put('https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities', body, { headers }).subscribe(data => {
            this.postId = data;
            this.brandsdetails;
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
TeamDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons mode=\"md\" slot=\"start\">\n      <ion-back-button [text]=\"login\" defaultHref=\"team-details\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 10px;\"> {{brandsdetails.fields.Name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-margin\">\n    <div *ngFor=\"let postimg of brandsdetails.fields.FeaturedPhoto\" >\n      <img [src]=\"postimg.url\">\n    \n    <div class=\"ion-margin\">\n      <ion-text class=\"\">\n        {{brandsdetails.fields.description}}\n      </ion-text>\n    </div>\n    <div class=\"ion-margin\">\n      <!-- <ion-text class=\"font-set\">\n      Prep\n    </ion-text>\n        <br><br> -->\n      <ion-text class=\"sett\">\n          {{brandsdetails.fields.Prep}}\n      </ion-text>\n    </div><br>\n    <div class=\"rtre\">\n      <ion-item class=\"brd\" lines=\"none\">\n        <ion-label>Save Activity</ion-label>\n        <ion-toggle mode=\"ios\" checked=\"{{brandsdetails.fields.Save === true ? true : false}}\" (ionChange)=\"crazyEvent($event,brandsdetails,postimg)\" color=\"warning\"></ion-toggle>\n      </ion-item>\n    </div>\n  </div>\n</div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".brd {\n  border: solid #eae8e8;\n}\n\n.tr {\n  position: relative;\n  top: 9px;\n}\n\n.bl {\n  font-weight: bold;\n}\n\n.font-set {\n  font-weight: bold;\n  font-size: 23px;\n}\n\n.sett {\n  position: relative;\n  /* left: -1px; */\n  bottom: 25px;\n}\n\n.rtre {\n  position: relative;\n  bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZWFtLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7QUFDWjs7QUFDQTtFQUNJLGlCQUFpQjtBQUVyQjs7QUFBQTtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0FBR25COztBQURBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFBO0VBQ0EsWUFBWTtBQUloQjs7QUFGQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0FBS2hCIiwiZmlsZSI6InRlYW0tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJke1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjZWFlOGU4O1xyXG4gICAgXHJcbn1cclxuLnRye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA5cHg7XHJcbn1cclxuLmJse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmZvbnQtc2V0e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLnNldHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBsZWZ0OiAtMXB4OyAqL1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG59XHJcbi5ydHJle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-team-details-team-details-module.js.map