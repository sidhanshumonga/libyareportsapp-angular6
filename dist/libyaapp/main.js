(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/CONSTANTS.ts":
/*!******************************!*\
  !*** ./src/app/CONSTANTS.ts ***!
  \******************************/
/*! exports provided: BASE_URL, DATASETS_API, USER_ORGUNIT, OU_CHILDREN_BASE, OU_CHILDREN_FILTER, months, quarters, sixmonths, years, periods, DATASET_ID_EWARN_REPORT, DATASETS_ID_PHC, DATASETS_ID_HOSPITAL, DATASETS_ID_MEDICALCENTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATASETS_API", function() { return DATASETS_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ORGUNIT", function() { return USER_ORGUNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OU_CHILDREN_BASE", function() { return OU_CHILDREN_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OU_CHILDREN_FILTER", function() { return OU_CHILDREN_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quarters", function() { return quarters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sixmonths", function() { return sixmonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "periods", function() { return periods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATASET_ID_EWARN_REPORT", function() { return DATASET_ID_EWARN_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATASETS_ID_PHC", function() { return DATASETS_ID_PHC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATASETS_ID_HOSPITAL", function() { return DATASETS_ID_HOSPITAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATASETS_ID_MEDICALCENTER", function() { return DATASETS_ID_MEDICALCENTER; });
var BASE_URL = "../../";
var DATASETS_API = "dataSets.json?fields=name,id,attributeValues[value,attribute[id,name]]&paging=none";
var USER_ORGUNIT = "me.json?fields=organisationUnits[children,id,name]";
var OU_CHILDREN_BASE = "organisationUnits/";
var OU_CHILDREN_FILTER = ".json?fields=id,children[id,name,children],ancestors[id,name]";
var months = [
    { name: "January", value: "01" },
    { name: "February", value: "02" },
    { name: "March", value: "03" },
    { name: "April", value: "04" },
    { name: "May", value: "05" },
    { name: "June", value: "06" },
    { name: "July", value: "07" },
    { name: "August", value: "08" },
    { name: "september", value: "09" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" }
];
var quarters = [
    { name: "January-March", value: "Q1" },
    { name: "April-June", value: "Q2" },
    { name: "July-September", value: "Q3" },
    { name: "October-December", value: "Q4" }
];
var sixmonths = [
    { name: "January-June", value: "S1" },
    { name: "July-December", value: "S2" },
];
var years = [
    "2018",
    "2017",
    "2016"
];
var periods = [
    "Weekly",
    "Monthly",
    "Quarterly",
    "Six-monthly",
    "Yearly"
];
var DATASET_ID_EWARN_REPORT = [{ id: "h1Q03rJqNQr", name: "EWARN Reporting Dataset" }];
//phc datasets uid
var DATASETS_ID_PHC = [
    { id: 'sl7pTQ0lY4K', name: "Population Data Set" },
    { id: 'yY9r5kbus3t', name: "PHC OPD Dataset" },
    { id: 'DVEYU2A2aF2', name: "PHC Emergency Care Dataset" },
    { id: 'WRzYEN981Nb', name: "Dental Services Dataset" },
    { id: 'dL7jX6E0UOB', name: "Diabetes Services Dataset" },
    { id: 'NL5AxxiJt31', name: "MCH and Family Planning Dataset" },
    { id: 'jqSaKxtj8IA', name: "Immunisation Dataset" },
    { id: 'i5doaVaayYN', name: "PHC Radiology Services Dataset" },
    { id: 'YcywkvYogw3', name: "PHC Laboratory Services Dataset" },
    { id: 'qq8aqH1YPjT', name: "Essential Drugs and Consumables Stocks Dataset" },
    { id: 'Ri1mp3YgF3s', name: "PHC Human Resource Dataset" },
    { id: 'n71AgyCV7gp', name: "Physiotherapy Services Dataset" }
];
var DATASETS_ID_HOSPITAL = [
    { id: 'IgbqlaxE83v', name: "Hospital OPD Services Dataset" },
    { id: 'tgGyJAaIahr', name: "Hospital/Medical Centre Emergency Care Dataset" },
    { id: 'bGnNmKSuZlw', name: "Hospital IPD Services Dataset" },
    { id: 'vQeZkk8Fz2y', name: "Hospital/Medical Centre Delivery and Birth Services Dataset" },
    { id: 'CFDWUtgFaSX', name: "Hospital Surgery Services Dataset" },
    { id: 'ShLvZi45WYv', name: "Hospital/Medical Centre Radiology Services Dataset" },
    { id: 'FN9wO5d2jmN', name: "Hospital/Medical Centre Laboratory and Blood Bank Services Dataset" },
    { id: 'TKR665WfTQd', name: "Hospital Human Resource Dataset" },
    { id: 'NVirEUvg4lE', name: "Hospital/Medical Centre Infectious Disease and Deaths Dataset" },
    { id: 'fyIza2Ggy2G', name: "Hospital/Medical Centre Infectious Disease Dataset (Age group)" },
    { id: 'n71AgyCV7gp', name: "Physiotherapy Services Dataset" }
];
var DATASETS_ID_MEDICALCENTER = [
    { id: 'KeIRqetnAE2', name: "Medical Centre OPD Services Dataset" },
    { id: 'tgGyJAaIahr', name: "Hospital/Medical Centre Emergency Care Dataset" },
    { id: 'hOAXV4EYKNG', name: "Medical Centre IPD Services Dataset" },
    { id: 'vQeZkk8Fz2y', name: "Hospital/Medical Centre Delivery and Birth Services Dataset" },
    { id: 'EUzM2mlJQm4', name: "Medical Centre Surgery Services Dataset" },
    { id: 'ShLvZi45WYv', name: "Hospital/Medical Centre Radiology Services Dataset" },
    { id: 'FN9wO5d2jmN', name: "Hospital/Medical Centre Laboratory and Blood Bank Services Dataset" },
    { id: 'w9qPPMwmPJy', name: "Medical Centre Human Resource Dataset" },
    { id: 'NVirEUvg4lE', name: "Hospital/Medical Centre Infectious Disease and Deaths Dataset" },
    { id: 'fyIza2Ggy2G', name: "Hospital/Medical Centre Infectious Disease Dataset (Age group)" },
    { id: 'n71AgyCV7gp', name: "Physiotherapy Services Dataset" }
];


/***/ }),

/***/ "./src/app/ajaxservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/ajaxservice.service.ts ***!
  \****************************************/
/*! exports provided: AjaxserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxserviceService", function() { return AjaxserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/CONSTANTS */ "./src/app/CONSTANTS.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AjaxserviceService = /** @class */ (function () {
    function AjaxserviceService(http) {
        this.http = http;
        //urls required
        this.dataseturl = src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["DATASETS_API"];
        this.userorguniturl = src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["USER_ORGUNIT"];
    }
    //funtions required
    AjaxserviceService.prototype.getDatasets = function () {
        return this.http.get(this.dataseturl);
    };
    AjaxserviceService.prototype.getUserOu = function () {
        return this.http.get(this.userorguniturl);
    };
    AjaxserviceService.prototype.getChildOu = function (child) {
        return this.http.get(src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["OU_CHILDREN_BASE"] + child + src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["OU_CHILDREN_FILTER"]);
    };
    AjaxserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AjaxserviceService);
    return AjaxserviceService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  background-color: #E8EAF6 !important;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader id=\"loader\"></app-loader>\n\n<div class=\"row no-gutters flex-xl-nowrap clearfix\" style=\"min-height:100vh;display: none;\" id=\"mainPage\">\n    <div class=\"col-12 col-md-3 col-xl-2 bd-sidebar\">\n        <app-orgunitlibrary></app-orgunitlibrary>\n    </div>\n    <!-- <mat-divider [vertical]=\"true\"></mat-divider> -->\n    <div class=\"col-lg-8 col-12 col-md-9 col-xl-8 py-md-1 pl-md-3\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <app-headerselections></app-headerselections>\n            </div>\n        </div>\n        <mat-divider></mat-divider>\n        <div class=\"row\">\n            <div class=\"col\">\n                <app-rightbarselections></app-rightbarselections>\n            </div>\n        </div><br><br>\n        <div class=\"row\">\n            <div class=\"col\">\n                <app-tablecard></app-tablecard>\n            </div>\n        </div>\n    </div>\n    <!-- <mat-divider [vertical]=\"true\"></mat-divider> -->\n    <div class=\"d-none d-xl-block col-xl-2 bd-toc\">\n        <app-datasetstabs></app-datasetstabs>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#loader").fadeOut(500);
            jquery__WEBPACK_IMPORTED_MODULE_1__("#mainPage").fadeIn(800);
        }, 3000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component',
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: DemoMaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _datasetstabs_datasetstabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datasetstabs/datasetstabs.component */ "./src/app/datasetstabs/datasetstabs.component.ts");
/* harmony import */ var _headerselections_headerselections_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./headerselections/headerselections.component */ "./src/app/headerselections/headerselections.component.ts");
/* harmony import */ var _rightbarselections_rightbarselections_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rightbarselections/rightbarselections.component */ "./src/app/rightbarselections/rightbarselections.component.ts");
/* harmony import */ var _orgunitlibrary_orgunitlibrary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orgunitlibrary/orgunitlibrary.component */ "./src/app/orgunitlibrary/orgunitlibrary.component.ts");
/* harmony import */ var _tablecard_tablecard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tablecard/tablecard.component */ "./src/app/tablecard/tablecard.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
            ],
            declarations: []
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                DemoMaterialModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _datasetstabs_datasetstabs_component__WEBPACK_IMPORTED_MODULE_9__["DatasetstabsComponent"],
                _headerselections_headerselections_component__WEBPACK_IMPORTED_MODULE_10__["HeaderselectionsComponent"], _rightbarselections_rightbarselections_component__WEBPACK_IMPORTED_MODULE_11__["RightbarselectionsComponent"],
                _orgunitlibrary_orgunitlibrary_component__WEBPACK_IMPORTED_MODULE_12__["OrgunitlibraryComponent"], _tablecard_tablecard_component__WEBPACK_IMPORTED_MODULE_13__["TablecardComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_CHIPS_DEFAULT_OPTIONS"],
                    useValue: {
                        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]]
                    }
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/datasetstabs/datasetstabs.component.css":
/*!*********************************************************!*\
  !*** ./src/app/datasetstabs/datasetstabs.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n    text-align: center;\n    height: 100%;\n    padding:30px 10px 10px 20px;\n    border-left:1px solid lightgray;\n  }"

/***/ }),

/***/ "./src/app/datasetstabs/datasetstabs.component.html":
/*!**********************************************************!*\
  !*** ./src/app/datasetstabs/datasetstabs.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n  <div class=\"col\">\n      <mat-chip-list #chipList>\n          <mat-chip *ngFor=\"let data of datasetsm\" [selectable]=\"selectable\" [value]=\"data.id\" (update)=\"selectionChange($event)\" [removable]=\"removable\"\n            (removed)=\"remove(data)\">\n            {{data.name}}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n          </mat-chip>\n        </mat-chip-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/datasetstabs/datasetstabs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/datasetstabs/datasetstabs.component.ts ***!
  \********************************************************/
/*! exports provided: DatasetstabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetstabsComponent", function() { return DatasetstabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared.service */ "./src/app/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetstabsComponent = /** @class */ (function () {
    function DatasetstabsComponent(chipsService) {
        var _this = this;
        this.chipsService = chipsService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.datasetsm = [];
        this.chipsService.chipServiceMethod.subscribe(function (chipss) {
            chipss.sort(function (a, b) {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0; //default return value (no sorting)
            });
            if (chipss)
                _this.datasetsm = chipss.map(function (x) { return x; });
        });
    }
    DatasetstabsComponent.prototype.remove = function (data) {
        var index = this.datasetsm.indexOf(data);
        if (index >= 0) {
            this.datasetsm.splice(index, 1);
            this.chipsService.callMethodToUnselect(this.datasetsm);
        }
    };
    DatasetstabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datasetstabs',
            template: __webpack_require__(/*! ./datasetstabs.component.html */ "./src/app/datasetstabs/datasetstabs.component.html"),
            styles: [__webpack_require__(/*! ./datasetstabs.component.css */ "./src/app/datasetstabs/datasetstabs.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], DatasetstabsComponent);
    return DatasetstabsComponent;
}());



/***/ }),

/***/ "./src/app/headerselections/headerselections.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/headerselections/headerselections.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n  padding: 10px 10px 10px 100px;\n}"

/***/ }),

/***/ "./src/app/headerselections/headerselections.component.html":
/*!******************************************************************!*\
  !*** ./src/app/headerselections/headerselections.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n    <div class=\"col\">\n      <!-- selection dropdown for reports -->\n      <mat-form-field>\n        <mat-select placeholder=\"Select report\" [(ngModel)]=\"reportName\">\n          <mat-option *ngFor=\"let report of reports\" [value]=\"report.value\" (click)=\"validatePeriods()\">\n            {{ report.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"col align-self-center\">\n      <!-- toggle for enabling dataset dropdown -->\n      <mat-slide-toggle class=\"mat-primary\" [(ngModel)]=\"checked\" (click)=\"clearChips(checked)\" [disabled]=\"!reportName || reportName=='Ewarn Report'\">Multiple datasets ?</mat-slide-toggle>\n    </div>\n    <div class=\"col\">\n      <!-- selection dropdown for datasets -->\n      <mat-form-field>\n        <mat-select placeholder=\"Select Dataset\" [disabled]=\"!checked || reportName=='Ewarn Report'\" [formControl]=\"multidatasets\"\n          [(ngModel)]=\"selectedvalues\" multiple>\n          <mat-option *ngFor=\"let dataset of datasetsArray\" [disabled]=\"dataset.value!=reportName\" [value]=\"dataset\" (click)=\"chips($event, selectedvalues)\">\n            {{ dataset.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/headerselections/headerselections.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/headerselections/headerselections.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderselectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderselectionsComponent", function() { return HeaderselectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var src_app_ajaxservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ajaxservice.service */ "./src/app/ajaxservice.service.ts");
/* harmony import */ var src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/CONSTANTS */ "./src/app/CONSTANTS.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderselectionsComponent = /** @class */ (function () {
    function HeaderselectionsComponent(chipsService, ajaxService) {
        var _this = this;
        this.chipsService = chipsService;
        this.ajaxService = ajaxService;
        this.reports = [
            { value: 'Ewarn Report', viewValue: 'Ewarn Report' },
            { value: 'PHC Report', viewValue: 'PHC Report' },
            { value: 'Hospital Report', viewValue: 'Hospital Report' },
            { value: 'Medical Center', viewValue: 'Medical Center' }
        ];
        //multiple selection form control for datasets
        this.multidatasets = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.datasetsArray = [];
        //method which gets values from datasettabs!
        this.chipsService.unselectServiceMethod.subscribe(function (chipss) {
            if (chipss)
                _this.selectedvalues = chipss.map(function (x) { return x; });
        });
    }
    HeaderselectionsComponent.prototype.chips = function (event, value) {
        //service to send values in datasettabs!
        this.chipsService.callMethodToChangeChips(value);
    };
    ;
    HeaderselectionsComponent.prototype.getDatasets = function () {
        var _this = this;
        this.ajaxService.getDatasets()
            .subscribe(function (datas) {
            var datasets = datas.dataSets;
            for (var i = 0; i < datasets.length; i++) {
                if (datasets[i].attributeValues.length != 0) {
                    var attr = datasets[i].attributeValues;
                    for (var j = 0; j < attr.length; j++) {
                        if (attr[j].attribute.name == 'Report app' && attr[j].value == 'true') {
                            for (var k = 0; k < attr.length; k++) {
                                if (attr[k].attribute.name != 'Report app' && attr[k].value == 'true') {
                                    var obj = { 'name': datasets[i].name, 'value': attr[k].attribute.name, 'id': datasets[i].id }; // attr[k].attribute.name};
                                    _this.datasetsArray.push(obj);
                                }
                            }
                        }
                    }
                }
            }
        });
    };
    HeaderselectionsComponent.prototype.validatePeriods = function () {
        if (this.reportName == "Ewarn Report") {
            this.chipsService.callMethodToValidatePeriods(true);
            if (!this.checked)
                this.chipsService.callMethodToChangeChips(src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_4__["DATASET_ID_EWARN_REPORT"]);
        }
        else {
            this.chipsService.callMethodToValidatePeriods(false);
            if (this.reportName == "PHC Report" && !this.checked)
                this.chipsService.callMethodToChangeChips(src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_4__["DATASETS_ID_PHC"]);
            if (this.reportName == "Hospital Report" && !this.checked)
                this.chipsService.callMethodToChangeChips(src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_4__["DATASETS_ID_HOSPITAL"]);
            if (this.reportName == "Medical Center" && !this.checked)
                this.chipsService.callMethodToChangeChips(src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_4__["DATASETS_ID_MEDICALCENTER"]);
        }
        this.getDatasets();
    };
    HeaderselectionsComponent.prototype.clearChips = function (val) {
        if (!val && this.reportName != "Ewarn Report")
            this.chipsService.callMethodToChangeChips([]);
        else {
            if (this.reportName == "Ewarn Report")
                this.chipsService.callMethodToChangeChips(src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_4__["DATASET_ID_EWARN_REPORT"]);
            if (this.reportName == "PHC Report")
                this.chipsService.callMethodToChangeChips(src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_4__["DATASETS_ID_PHC"]);
            if (this.reportName == "Hospital Report")
                this.chipsService.callMethodToChangeChips(src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_4__["DATASETS_ID_HOSPITAL"]);
            if (this.reportName == "Medical Center")
                this.chipsService.callMethodToChangeChips(src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_4__["DATASETS_ID_MEDICALCENTER"]);
        }
    };
    HeaderselectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headerselections',
            template: __webpack_require__(/*! ./headerselections.component.html */ "./src/app/headerselections/headerselections.component.html"),
            styles: [__webpack_require__(/*! ./headerselections.component.css */ "./src/app/headerselections/headerselections.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], src_app_ajaxservice_service__WEBPACK_IMPORTED_MODULE_3__["AjaxserviceService"]])
    ], HeaderselectionsComponent);
    return HeaderselectionsComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbody {\n    background-color: #22475E;\n    overflow:hidden;\n  }\n  div {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    background-color: #ccc;\n    top: 45%;\n    border-radius: 50%;\n  }\n  div:nth-child(1) {\n    background-color: #9FA8DA;\n    -webkit-animation: move 2s infinite cubic-bezier(.2,.64,.81,.23);\n            animation: move 2s infinite cubic-bezier(.2,.64,.81,.23);\n  }\n  div:nth-child(2) {\n    background-color: #FF9D84;\n    -webkit-animation: move 2s 150ms infinite cubic-bezier(.2,.64,.81,.23);\n            animation: move 2s 150ms infinite cubic-bezier(.2,.64,.81,.23);\n  }\n  div:nth-child(3) {\n    background-color: #F0E797;\n    -webkit-animation: move 2s 300ms infinite cubic-bezier(.2,.64,.81,.23);\n            animation: move 2s 300ms infinite cubic-bezier(.2,.64,.81,.23);\n  }\n  div:nth-child(4) {\n    background-color: #75B08A;\n    -webkit-animation: move 2s 450ms infinite cubic-bezier(.2,.64,.81,.23);\n            animation: move 2s 450ms infinite cubic-bezier(.2,.64,.81,.23);\n  }\n  @-webkit-keyframes move {\n    0% {left: 0%;}\n    100% {left:100%;}\n  }\n  @keyframes move {\n    0% {left: 0%;}\n    100% {left:100%;}\n  }"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div></div>\n<div></div>\n<div></div>\n<div></div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/orgunitlibrary/orgunitlibrary.component.css":
/*!*************************************************************!*\
  !*** ./src/app/orgunitlibrary/orgunitlibrary.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n    padding:30px 10px 10px 20px;\n}\n#outable thead {\n    \tdisplay:block;\n    }\n#outable tbody{\n      display:block;\n      min-height:92%;\n      overflow-y:auto;\n      overflow-x:hidden;\n    }\n.ouselect, .ouid{\n    cursor:pointer !important;\n }\n#outree{\n    border-right:1px solid lightgray;\n    height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/orgunitlibrary/orgunitlibrary.component.html":
/*!**************************************************************!*\
  !*** ./src/app/orgunitlibrary/orgunitlibrary.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"outree\">\n  <div class=\"col\">\n      <table id=\"outable\">\n          <tbody>\n    \n          </tbody>\n        </table>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/orgunitlibrary/orgunitlibrary.component.ts":
/*!************************************************************!*\
  !*** ./src/app/orgunitlibrary/orgunitlibrary.component.ts ***!
  \************************************************************/
/*! exports provided: OrgunitlibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgunitlibraryComponent", function() { return OrgunitlibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_ajaxservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ajaxservice.service */ "./src/app/ajaxservice.service.ts");
/* harmony import */ var src_app_utilityservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilityservice.service */ "./src/app/utilityservice.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrgunitlibraryComponent = /** @class */ (function () {
    // row:string;
    function OrgunitlibraryComponent(orgunitService, onclicks, util) {
        this.orgunitService = orgunitService;
        this.onclicks = onclicks;
        this.util = util;
        this.displayedColumns = ['id', 'name'];
        this.ouHeaders = [];
        this.previousSelection = { id: "unknown", style: { color: "black" } };
        this.hashmapForClasses = [];
        this.hashmapForOuSelect = [];
        this.padding = 0;
    }
    OrgunitlibraryComponent.prototype.ngOnInit = function () {
        this.setOu();
    };
    OrgunitlibraryComponent.prototype.mapClasses = function () {
        //for expanding tree - class mapping
        var classes = this.onclicks.nativeElement.querySelectorAll('.ouid');
        for (var j = 0; j < classes.length; j++) {
            if (this.hashmapForClasses[classes[j].attributes[2].value]) { }
            else {
                classes[j].addEventListener('click', this.setChildOu.bind(this));
                this.hashmapForClasses[classes[j].attributes[2].value] = true;
            }
        }
        //for selected ou id
        var classesou = this.onclicks.nativeElement.querySelectorAll('.ouselect');
        for (var j = 0; j < classesou.length; j++) {
            if (this.hashmapForOuSelect[classesou[j].attributes[1].value]) { }
            else {
                classesou[j].addEventListener('click', this.ouselect.bind(this));
                this.hashmapForOuSelect[classesou[j].attributes[1].value] = true;
            }
        }
    };
    ;
    OrgunitlibraryComponent.prototype.ouselect = function (element) {
        var rowid = element.currentTarget.parentElement;
        element.currentTarget.style.color = "#3f51b5";
        this.selectedOrgUnit = rowid.attributes[0].value;
        if (this.previousSelection.id != element.currentTarget.id) {
            this.previousSelection.style.color = "black";
        }
        this.previousSelection = element.currentTarget;
    };
    OrgunitlibraryComponent.prototype.setOu = function () {
        var _this = this;
        this.orgunitService.getUserOu()
            .subscribe(function (response) {
            for (var i = 0; i < response.organisationUnits.length; i++) {
                var child = false;
                if (response.organisationUnits[i].children.length != 0) {
                    child = true;
                }
                var name_1 = response.organisationUnits[i].name;
                var id = response.organisationUnits[i].id;
                _this.ouHeaders.push({ "name": name_1, "id": id, "child": child });
            }
        });
        setTimeout(function () {
            _this.printTable(_this.ouHeaders);
        }, 1000);
    };
    OrgunitlibraryComponent.prototype.setChildOu = function (row) {
        var _this = this;
        if (row.currentTarget.parentElement.rowIndex == 0)
            this.padding = 10;
        var ou = row.currentTarget.attributes[2].value;
        var child = row.currentTarget.attributes[3].value;
        this.checked = row.currentTarget.attributes[4].value;
        var rowElement = row.currentTarget;
        var numOfRowToDelete = 0;
        var newou = [];
        this.orgunitService.getChildOu(ou)
            .subscribe(function (response) {
            if (_this.checked == "true") {
                numOfRowToDelete = response.children.length;
            }
            else {
                var parent = response.id;
                for (var j = 0; j < response.ancestors.length; j++) {
                    parent = parent + " " + response.ancestors[j].id;
                }
                for (var i = 0; i < response.children.length; i++) {
                    var child_1 = false;
                    if (response.children[i].children.length != 0) {
                        child_1 = true;
                    }
                    var name_2 = response.children[i].name;
                    var id = response.children[i].id;
                    newou.push({ "name": name_2, "id": id, "child": child_1, "parent": parent });
                }
            }
        });
        setTimeout(function () {
            if (_this.checked == "true") {
                _this.deleteRows(rowElement);
                rowElement.attributes[4].value = false;
                _this.padding -= 10;
                rowElement.innerHTML = "<i class='fa fa-plus-square-o' aria-hidden='true'></i>";
            }
            else {
                newou.sort(function (a, b) {
                    var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                    if (nameA > nameB)
                        return -1;
                    if (nameA < nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
                _this.padding += 10;
                _this.printOuChild(newou, rowElement);
                rowElement.attributes[4].value = true;
                rowElement.innerHTML = "<i class='fa fa-minus-square-o' aria-hidden='true'></i>";
            }
        }, 1000);
    };
    OrgunitlibraryComponent.prototype.printTable = function (head) {
        for (var i = 0; i < head.length; i++) {
            if (head[i].child)
                var row = '<tr id="' + head[i].id + i + '"><td style="cursor:pointer !important;" class="ouid" value="' + head[i].id + '" child="true" clicked="false"><i class="fa fa-plus-square-o" aria-hidden="true"></i></td><td class="ouselect" value="' + head[i].id + '" style="cursor:pointer !important;" id="' + head[i].id + '">' + head[i].name + '</td></tr>';
            else
                var row = '<tr id="' + head[i].id + i + '"><td style="cursor:pointer !important;" class="ouid" value="' + head[i].id + '" child="false" clicked="false"></td><td class="ouselect" value="' + head[i].id + '" style="cursor:pointer !important;" id="' + head[i].id + '">' + head[i].name + '</td></tr>';
            jquery__WEBPACK_IMPORTED_MODULE_3__('#outable > tbody').append(row);
            this.hashmapForClasses[head[i].id] = false;
            this.hashmapForOuSelect[head[i].id] = false;
        }
        this.mapClasses();
    };
    OrgunitlibraryComponent.prototype.printOuChild = function (head, rowElement) {
        for (var i = 0; i < head.length; i++) {
            if (head[i].child)
                var row = '<tr id="' + head[i].id + i + '"  class="' + head[i].parent + '"><td style="cursor:pointer !important;padding-left:' + this.padding + 'px" class="ouid" value="' + head[i].id + '" child="true" clicked="false"><i class="fa fa-plus-square-o" aria-hidden="true"></i></td><td class="ouselect" value="' + head[i].id + '" style="cursor:pointer !important;padding-left:' + this.padding + 'px" id="' + head[i].id + '">' + head[i].name + '</td></tr>';
            else
                var row = '<tr id="' + head[i].id + i + '" class="' + head[i].parent + '"><td style="cursor:pointer !important;padding-left:' + this.padding + 'px" class="ouid" value="' + head[i].id + '" child="false" clicked="false"></td><td class="ouselect" value="' + head[i].id + '" style="cursor:pointer !important;padding-left:' + this.padding + 'px" id="' + head[i].id + '">' + head[i].name + '</td></tr>';
            var index = rowElement.parentElement.rowIndex;
            jquery__WEBPACK_IMPORTED_MODULE_3__('#outable > tbody > tr').eq(index).after(row);
            this.hashmapForClasses[head[i].id] = false;
            this.hashmapForOuSelect[head[i].id] = false;
        }
        this.mapClasses();
    };
    OrgunitlibraryComponent.prototype.deleteRows = function (row) {
        var classname = row.parentElement.children[1].id;
        var allrows = document.getElementsByClassName(classname);
        for (var t = allrows.length - 1; t >= 0; t--) {
            allrows[t].remove();
        }
        // $("#outable tr:gt(" + rowIndex + "):lt(" + (num) + ")").remove();
    };
    OrgunitlibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orgunitlibrary',
            template: __webpack_require__(/*! ./orgunitlibrary.component.html */ "./src/app/orgunitlibrary/orgunitlibrary.component.html"),
            styles: [__webpack_require__(/*! ./orgunitlibrary.component.css */ "./src/app/orgunitlibrary/orgunitlibrary.component.css")],
        }),
        __metadata("design:paramtypes", [src_app_ajaxservice_service__WEBPACK_IMPORTED_MODULE_1__["AjaxserviceService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], src_app_utilityservice_service__WEBPACK_IMPORTED_MODULE_2__["UtilityserviceService"]])
    ], OrgunitlibraryComponent);
    return OrgunitlibraryComponent;
}());



/***/ }),

/***/ "./src/app/rightbarselections/rightbarselections.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/rightbarselections/rightbarselections.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n  padding: 10px 10px 10px 100px;\n}\nbutton{\n  margin-left:35%;\n}\n"

/***/ }),

/***/ "./src/app/rightbarselections/rightbarselections.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/rightbarselections/rightbarselections.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- selection dropdown for reports -->\n<div class=\"row\">\n  <div class=\"col\">\n    <mat-form-field>\n      <mat-select placeholder=\"Select Period\" [(ngModel)]=\"selectedPeriodType\">\n        <mat-option *ngFor=\"let period of periods\" [value]=\"period\" (click)=\"gotPeriodValue(period)\">\n          <!--[disabled]=\"period=='Weekly'\" -->\n          {{ period }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"col\">\n    <mat-form-field>\n      <mat-select placeholder=\"Select Year\" [(ngModel)]=\"selectedYearModel\">\n        <mat-option *ngFor=\"let year of years\" [value]=\"year\" (click)=\"getWeeks(selectedPeriodType)\">\n          {{ year }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <!-- selection dropdown for datasets -->\n  <div class=\"col\">\n    <mat-form-field>\n      <mat-select placeholder=\"Select an option\" [disabled]=\"selectedPeriodType=='Yearly'\" [(ngModel)]=\"optionvalue\">\n        <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">\n          {{ option.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n<!-- <mat-divider></mat-divider><br> -->\n<div class=\"row\">\n  <div class=\"col\">\n    <button mat-raised-button color=\"primary\" (click)=\"generateReport(selectedPeriodType,selectedYearModel,optionvalue)\">Generate Report</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/rightbarselections/rightbarselections.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/rightbarselections/rightbarselections.component.ts ***!
  \********************************************************************/
/*! exports provided: RightbarselectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightbarselectionsComponent", function() { return RightbarselectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/CONSTANTS */ "./src/app/CONSTANTS.ts");
/* harmony import */ var src_app_utilityservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilityservice.service */ "./src/app/utilityservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RightbarselectionsComponent = /** @class */ (function () {
    function RightbarselectionsComponent(chipsService) {
        var _this = this;
        this.chipsService = chipsService;
        this.years = src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["years"];
        this.months = src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["months"];
        this.sixmonths = src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["sixmonths"];
        this.quarters = src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["quarters"];
        this.periods = src_app_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__["periods"];
        this.gotPeriodValue = function (value) {
            if (value == "Monthly")
                this.options = this.months.map(function (x) { return x; });
            if (value == "Quarterly")
                this.options = this.quarters.map(function (x) { return x; });
            if (value == "Six-monthly")
                this.options = this.sixmonths.map(function (x) { return x; });
            if (value == "Weekly")
                this.getWeeks(value);
        };
        this.getWeeks = function (type) {
            if (type == "Weekly") {
                var sd = new Date(this.selectedYearModel, 0, 1);
                var ed = new Date(this.selectedYearModel, 11, 31);
                var utility = new src_app_utilityservice_service__WEBPACK_IMPORTED_MODULE_3__["UtilityserviceService"]();
                this.options = utility.getweeks(sd, ed);
            }
        };
        //function to get reports on table
        this.generateReport = function (period, year, option) {
            if (period == "Yearly")
                var reportPeriod = year;
            else
                var reportPeriod = year + option;
            console.log(reportPeriod);
        };
        //method service which gets value from headerseletions
        this.chipsService.periodValidateServiceMedthod.subscribe(function (value) {
            if (value)
                _this.periods = ["Weekly"];
            else {
                _this.periods = ["Monthly", "Quarterly", "Six-monthly", "Yearly"];
            }
        });
    }
    RightbarselectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rightbarselections',
            template: __webpack_require__(/*! ./rightbarselections.component.html */ "./src/app/rightbarselections/rightbarselections.component.html"),
            styles: [__webpack_require__(/*! ./rightbarselections.component.css */ "./src/app/rightbarselections/rightbarselections.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], RightbarselectionsComponent);
    return RightbarselectionsComponent;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        //code to call function from header to datasettabs
        this.methodToChangeChips = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.chipServiceMethod = this.methodToChangeChips.asObservable();
        //code to call function from datasettabs to header
        this.methodToUnselect = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.unselectServiceMethod = this.methodToUnselect.asObservable();
        //code to call function from header to datasettabs
        this.methodTovalidatePeriods = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.periodValidateServiceMedthod = this.methodTovalidatePeriods.asObservable();
    }
    SharedService.prototype.callMethodToChangeChips = function (chipss) {
        this.methodToChangeChips.next(chipss);
    };
    SharedService.prototype.callMethodToUnselect = function (chipss) {
        this.methodToUnselect.next(chipss);
    };
    SharedService.prototype.callMethodToValidatePeriods = function (value) {
        this.methodTovalidatePeriods.next(value);
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/tablecard/tablecard.component.css":
/*!***************************************************!*\
  !*** ./src/app/tablecard/tablecard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n  width:100%;\n  padding:10px;\n}\ntable{\n  width:100%;\n  height: 100%;\n}"

/***/ }),

/***/ "./src/app/tablecard/tablecard.component.html":
/*!****************************************************!*\
  !*** ./src/app/tablecard/tablecard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card id=\"tablecard\"> -->\n  <div class=\"row no-gutters\">\n    <div class=\"col\">\n        <table class=\"table table-bordered table-striped table-responsive\">\n\n          </table>\n    </div>\n  </div>\n        \n    "

/***/ }),

/***/ "./src/app/tablecard/tablecard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tablecard/tablecard.component.ts ***!
  \**************************************************/
/*! exports provided: TablecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablecardComponent", function() { return TablecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TablecardComponent = /** @class */ (function () {
    function TablecardComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    TablecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tablecard',
            template: __webpack_require__(/*! ./tablecard.component.html */ "./src/app/tablecard/tablecard.component.html"),
            styles: [__webpack_require__(/*! ./tablecard.component.css */ "./src/app/tablecard/tablecard.component.css")]
        })
    ], TablecardComponent);
    return TablecardComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


/***/ }),

/***/ "./src/app/utilityservice.service.ts":
/*!*******************************************!*\
  !*** ./src/app/utilityservice.service.ts ***!
  \*******************************************/
/*! exports provided: UtilityserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityserviceService", function() { return UtilityserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityserviceService = /** @class */ (function () {
    function UtilityserviceService() {
    }
    UtilityserviceService.prototype.getweeks = function (sd, ed) {
        var arrayw = [];
        var i = 1;
        while (ed > sd) {
            var wsd = new Date(sd);
            var wed = new Date(sd);
            wed = new Date(wed.setDate(wed.getDate() + 6));
            var j = void 0;
            if (i < 10) {
                j = "0" + i;
            }
            else {
                j = i;
            }
            var date = new Date(wsd).getFullYear() + "W" + j + " - " + this.getProperDate(wsd) + " - " + this.getProperDate((wed));
            var val = new Date(wsd).getFullYear() + "W" + j;
            arrayw.push({ "name": date, "value": val });
            i++;
            sd = new Date(sd).setDate(new Date(sd).getDate() + 7);
        }
        return arrayw;
    };
    UtilityserviceService.prototype.getProperDate = function (d) {
        var y = d.getFullYear();
        var m = (d.getMonth() + 1);
        var dd = d.getDate();
        if (parseInt(m) < 10) {
            m = '0' + m;
        }
        if (parseInt(dd) < 10) {
            dd = '0' + dd;
        }
        return y + "/" + m + "/" + dd;
    };
    UtilityserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilityserviceService);
    return UtilityserviceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sidhanshu/libyareportsapp-angular6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map