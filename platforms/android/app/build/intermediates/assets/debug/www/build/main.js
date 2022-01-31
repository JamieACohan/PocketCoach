webpackJsonp([27],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_trainer_view_trainer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var TrainersPage = /** @class */ (function () {
    function TrainersPage(navCtrl, navParams, fireStore, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireStore = fireStore;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.users = [];
        this.watchCheck = [];
        // this.getUserData();
        this.getTrainerData();
    }
    TrainersPage.prototype.getTrainerData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fireStore.collection("users", function (ref) {
                            return ref.where("role", "==", 2);
                        }).valueChanges().subscribe(function (trainers) {
                            _this.onWatchList(trainers);
                        })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.fireStore.collection("users", function (ref) {
                                return ref.where("role", "==", 2);
                            }).valueChanges()];
                    case 2:
                        _a.trainers = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrainersPage.prototype.onWatchList = function (trainers) {
        var match = trainers.find(function (e) { return e.watchers[__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid] === true; });
        console.log(match);
        if (match == undefined) {
            console.log("Not on list");
            this.onwatchList = false;
        }
        else {
            console.log("On list");
            this.onwatchList = true;
        }
    };
    TrainersPage.prototype.watchlist = function (trainer) {
        var _this = this;
        console.log(trainer.id);
        var trainerDoc = trainer.UID;
        var userId = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        var action = trainer.watchers && trainer.watchers[__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid] == true ? "unwatch" : "watch";
        if (action == 'watch') {
            var toast_1 = this.toastCtrl.create({
                message: "You will be notified when trainer becomes available again."
            });
            toast_1.present();
            setTimeout(function () {
                toast_1.dismiss();
            }, 5000);
        }
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(trainerDoc).get().then(function (data) {
            var watchersCount = data.data().watchersCount || 0;
            var watchers = data.data().watchers || [];
            console.log(watchers);
            var updateData = {};
            if (action == "watch") {
                updateData["watchersCount"] = ++watchersCount;
                updateData["watchers." + userId] = true;
            }
            else {
                updateData["watchersCount"] = --watchersCount;
                updateData["watchers." + userId] = false;
            }
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(trainerDoc).update(updateData).then(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            }); }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    TrainersPage.prototype.openViewTrainerPage = function (trainer) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__view_trainer_view_trainer__["a" /* ViewTrainerPage */], { trainer: trainer });
    };
    TrainersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-trainers',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\trainers\trainers.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Trainers</ion-title>\n\n\n\n   \n\n\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div class="container" *ngFor="let trainer of trainers | async">\n\n      \n\n        <div class="trainer-card" *ngIf="trainer.isAvailable == true" >\n\n            <img (click)="openViewTrainerPage(trainer)" [src]="trainer.image"/>\n\n            <img (click)="openViewTrainerPage(trainer)" src="../assets/imgs/person.jpg" *ngIf="!trainer.image"/>\n\n            <div class="card">\n\n              <div class="desc">\n\n                  <h2>{{trainer.firstName}} {{trainer.surname}}</h2>\n\n                  <p>Subscription: {{trainer.duration}} days</p>\n\n                  <p>Price: €{{trainer.price}}</p>\n\n                  <p>Spaces left: {{trainer.spacesLeft}}</p>\n\n                  <p>Available <ion-icon name="checkmark"></ion-icon></p>\n\n                  \n\n                  \n\n              </div>\n\n            </div>\n\n\n\n         \n\n\n\n      </div>\n\n\n\n      <div class="trainer-card2" *ngIf="trainer.isAvailable == false"  >\n\n          <img (click)="openViewTrainerPage(trainer)" [src]="trainer.image"/>\n\n          <img (click)="openViewTrainerPage(trainer)" src="../assets/imgs/person.jpg" *ngIf="!trainer.image"/>\n\n        <div class="card">\n\n          <div class="desc">\n\n              <h2>{{trainer.firstName}} {{trainer.surname}}</h2>\n\n              <p>Subscription duration: {{trainer.duration}} days</p>\n\n              <p>Price: €{{trainer.price}}</p>\n\n              <p>Spaces left: {{trainer.spacesLeft}}</p>              \n\n              <p>Not Available <ion-icon name="close"></ion-icon></p>\n\n              <button ion-button icon-only color="danger" clear (click)="watchlist(trainer)" *ngIf="onwatchList == true">\n\n                Remove From Watchlist\n\n              </button>\n\n              <button ion-button icon-only color="primary" clear (click)="watchlist(trainer)" *ngIf="onwatchList == false">\n\n                Add to Watchlist\n\n              </button>\n\n              \n\n          </div>\n\n          <div class="more">\n\n            <p>\n\n             \n\n              {{trainer.watchersCount || 0}} <ion-icon name="eye"></ion-icon>\n\n            </p>\n\n          \n\n          </div>\n\n        </div>\n\n\n\n     \n\n\n\n  </div>\n\n    </div>\n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\trainers\trainers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
    ], TrainersPage);
    return TrainersPage;
}());

//# sourceMappingURL=trainers.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comments_comments__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams, loadingCtrl, toastCtrl, http, actionSheetCtrl, alertCtrl, modalCtrl, fireStore, storage, camara) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.fireStore = fireStore;
        this.storage = storage;
        this.camara = camara;
        this.post = {};
        this.postList = [];
        this.pageSize = 10;
        this.getUserData();
        // this.getPosts();
        this.getCurrentTime();
        this.post.content = "";
        this.currentUID = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
    }
    FeedPage.prototype.getPosts = function (trainerID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.fireStore.collection("/posts/", function (ref) {
                                return ref.where("trainerUID", "==", trainerID).orderBy('timestamp', 'desc');
                            }).valueChanges()];
                    case 1:
                        _a.posts = _b.sent();
                        return [4 /*yield*/, this.fireStore.collection("/posts/", function (ref) {
                                return ref.where("trainerUID", "==", trainerID).orderBy('timestamp', 'desc');
                            }).valueChanges().subscribe(function (posts) {
                                posts.forEach(function (data) {
                                    _this.postList.push(data);
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.getCurrentTime = function () {
        var now = new Date();
        return now;
    };
    FeedPage.prototype.postStatus = function () {
        var _this = this;
        if (this.post.content != "") {
            var now = new Date().toISOString();
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").add({
                content: this.post.content,
                timestamp: now,
                ownerUID: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                ownerName: this.post.ownerName,
                trainerUID: this.post.trainerUID
            }).then(function (doc) {
                console.log(doc);
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").doc(doc.id).update({
                    docID: doc.id
                }).catch(function (err) {
                    console.log(err);
                });
                if (_this.post.image) {
                    _this.upload(doc.id);
                }
                _this.post.content = "";
                _this.post.image = undefined;
                var toast = _this.toastCtrl.create({
                    message: "Your post has been created successfully.",
                    duration: 3000
                }).present();
            }).catch(function (err) {
                console.log(err);
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Failed: No content in post",
                duration: 3000
            }).present();
        }
    };
    FeedPage.prototype.ago = function (time) {
        var difference = __WEBPACK_IMPORTED_MODULE_7_moment___default()(time).diff(__WEBPACK_IMPORTED_MODULE_7_moment___default()());
        return __WEBPACK_IMPORTED_MODULE_7_moment___default.a.duration(difference).humanize();
    };
    FeedPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('role').then(function (role) {
                            if (role == 1) {
                                _this.storage.get('userDocID').then(function (docID) {
                                    _this.fireStore.doc("/users/" + docID).valueChanges().subscribe(function (profile) {
                                        _this.post.ownerName = profile.displayName;
                                        _this.post.ownerUID = profile.UID;
                                        _this.post.trainerUID = profile.trainerID;
                                        _this.getPosts(profile.trainerID);
                                    });
                                });
                            }
                            else {
                                _this.storage.get('userDocID').then(function (docID) {
                                    _this.fireStore.doc("/users/" + docID).valueChanges().subscribe(function (profile) {
                                        _this.post.ownerName = profile.displayName;
                                        _this.post.ownerUID = profile.UID;
                                        _this.post.trainerUID = profile.UID;
                                        _this.getPosts(profile.UID);
                                    });
                                });
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.addPhoto = function () {
        this.launchCamara();
    };
    FeedPage.prototype.launchCamara = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camara.PictureSourceType.CAMERA,
            destinationType: this.camara.DestinationType.DATA_URL,
            encodingType: this.camara.EncodingType.PNG,
            mediaType: this.camara.MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 512,
            targetWidth: 512,
            allowEdit: true
        };
        this.camara.getPicture(options).then(function (toBase64String) {
            console.log(toBase64String);
            _this.post.image = "data:image/png;base64," + toBase64String;
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.upload = function (postID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var loading = _this.loadingCtrl.create({
                content: "Uploading Image..."
            });
            var ref = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref("profilePictures/" + postID);
            var uploadTask = ref.putString(_this.post.image.split(',')[1], "base64");
            uploadTask.on("state_changed", function (taskSnapshot) {
                console.log(taskSnapshot);
                var percentage = taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100;
                loading.setContent("Uploaded " + percentage + "% ...");
            }, function (error) {
                console.log(error);
            }, function () {
                console.log("The upload is completed!");
                uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").doc(postID).update({
                        image: url
                    }).then(function () {
                        loading.dismiss();
                        resolve();
                    }).catch(function (err) {
                        loading.dismiss();
                        reject();
                    });
                }).catch(function (err) {
                    loading.dismiss();
                    reject();
                });
            });
        });
    };
    FeedPage.prototype.deletePost = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").doc(post.docID).delete()
                            .catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        toast = this.toastCtrl.create({
                            message: "Deleted."
                        });
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        setTimeout(function () {
                            toast.dismiss();
                        }, 5000);
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.like = function (post) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var postId, currentUserId, action, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postId = post.docID;
                        currentUserId = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
                        action = post.likes && post.likes[__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid] == true ? "unlike" : "like";
                        toast = this.toastCtrl.create({
                            message: "Liked."
                        });
                        toast.present();
                        setTimeout(function () {
                            toast.dismiss();
                        }, 5000);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").doc(postId).get().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var likesCount, likes, updateData;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            likesCount = data.data().likesCount || 0;
                                            likes = data.data().likes || [];
                                            updateData = {};
                                            if (action == "like") {
                                                updateData["likesCount"] = ++likesCount;
                                                updateData["likes." + currentUserId] = true;
                                            }
                                            else {
                                                updateData["likesCount"] = --likesCount;
                                                updateData["likes." + currentUserId] = false;
                                            }
                                            return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").doc(postId).update(updateData).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var body;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (!(action == "like")) return [3 /*break*/, 2];
                                                                body = {
                                                                    // docID: this.getTrainerID()
                                                                    userId: post.ownerUID,
                                                                    action: 'new_like'
                                                                };
                                                                return [4 /*yield*/, this.http.post("https://us-central1-mealmate-ad158.cloudfunctions.net/updatePost", JSON.stringify(body), {
                                                                        responseType: "text"
                                                                    }).subscribe(function (data) {
                                                                        console.log(data);
                                                                    }, function (error) {
                                                                        console.log(error);
                                                                    })];
                                                            case 1:
                                                                _a.sent();
                                                                _a.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); }).catch(function (err) {
                                                    console.log(err);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.comment = function (post) {
        var _this = this;
        this.actionSheetCtrl.create({
            buttons: [
                {
                    text: "View All Comments",
                    handler: function () {
                        _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__comments_comments__["a" /* CommentsPage */], {
                            "post": post
                        }).present();
                    }
                },
                {
                    text: "New Comment",
                    handler: function () {
                        _this.alertCtrl.create({
                            title: "New Comment",
                            message: "Type your comment",
                            inputs: [
                                {
                                    name: "comment",
                                    type: "text"
                                }
                            ],
                            buttons: [
                                {
                                    text: "Cancel"
                                },
                                {
                                    text: "Post",
                                    handler: function (data) {
                                        if (data.comment) {
                                            var now = new Date().toISOString();
                                            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("comments").add({
                                                content: data.comment,
                                                postID: post.docID,
                                                owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                                                ownerName: post.ownerName,
                                                created: now
                                            }).then(function (doc) {
                                                _this.toastCtrl.create({
                                                    message: "Comment posted successfully.",
                                                    duration: 3000
                                                }).present();
                                            }).catch(function (err) {
                                                _this.toastCtrl.create({
                                                    message: err.message,
                                                    duration: 3000
                                                }).present();
                                            });
                                        }
                                    }
                                }
                            ]
                        }).present();
                    }
                }
            ]
        }).present();
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\feed\feed.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Your Feed</ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-row margin class="rowStyle">\n\n    <button ion-button icon-only color="primary" clear (click)="addPhoto()">\n\n      <ion-icon name="images"></ion-icon>\n\n    </button>\n\n\n\n    <ion-input type="text" placeholder="Say something..." [(ngModel)]="post.content"></ion-input>\n\n\n\n\n\n    <button ion-button icon-only color="primary" clear (click)="postStatus()">\n\n      <ion-icon name="send"></ion-icon>\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-row margin class="rowStyle" *ngIf="post.image != null">\n\n    <ion-card class="round-corners">\n\n      <img [src]="post.image" class="round-corners">\n\n    </ion-card>\n\n  </ion-row>\n\n\n\n  <ion-card *ngFor="let p of posts | async">\n\n\n\n    <ion-item-divider color="primary" *ngIf="p.trainerUID == p.ownerUID">\n\n      {{p.ownerName}} <ion-icon style="color:gold;" name="star"></ion-icon>\n\n      <ion-icon *ngIf="currentUID == p.trainerUID || currentUID == p.ownerUID" style="float:right" name="trash"\n\n        (click)="deletePost(p)"></ion-icon>\n\n    </ion-item-divider>\n\n\n\n    <ion-item-divider color="primary" *ngIf="p.trainerUID != p.ownerUID">\n\n      {{p.ownerName}}\n\n      <ion-icon *ngIf="currentUID == p.trainerUID || currentUID == p.ownerUID" style="float:right" name="trash"\n\n        (click)="deletePost(p)"></ion-icon>\n\n    </ion-item-divider>\n\n\n\n    <ion-item text-wrap>\n\n      {{p.content}}\n\n    </ion-item>\n\n\n\n    <img [src]="p.image" *ngIf="p.image">\n\n\n\n    <ion-row class="bottom-bar">\n\n      <ion-col>\n\n        <button ion-button block icon-left clear small color="primary" class="border-right" (click)="like(p)">\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <small>{{p.likesCount || 0}}</small>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block icon-left clear small color="primary" class="border-right" (click)="comment(p)">\n\n          <ion-icon name="text"></ion-icon>\n\n          <small>{{p.commentsCount || 0}}</small>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block icon-left clear small color="primary">\n\n          <small>{{ ago(p.timestamp) }} ago</small>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n  </ion-card>\n\n\n\n\n\n  <div class="container-Empty" *ngIf="postList.length == 0">\n\n    <img src="../assets/imgs/noPosts.png">\n\n    <h2>No posts created yet.</h2>\n\n  </div>\n\n\n\n  <!-- <ion-infinite-scroll (ionInfinite)="loadMorePosts($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTrainerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewTrainerPage = /** @class */ (function () {
    function ViewTrainerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.users = [];
        var data = this.navParams.get('trainer');
        this.trainerData = data;
        this.getUserData();
    }
    ViewTrainerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewTrainerPage');
    };
    ViewTrainerPage.prototype.getUserData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users")
            .where("UID", "==", __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid)
            .get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                _this.users.push(doc);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    ViewTrainerPage.prototype.hasPaid = function () {
        var hasPaid = false;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            hasPaid = user.data().hasPaid;
        }
        return hasPaid;
    };
    ViewTrainerPage.prototype.toPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */], { trainerData: this.trainerData });
    };
    ViewTrainerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-trainer',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\view-trainer\view-trainer.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Trainer Details</ion-title>\n\n\n\n\n\n\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="container">\n\n    <ion-row class="user-image">\n\n      <!-- <ion-col col-3 text-left>\n\n            <button ion-button box-shadow gradient-left>\n\n              <ion-icon name="call"></ion-icon>\n\n            </button>\n\n          </ion-col> -->\n\n      <ion-col text-center>\n\n        <div class="image">\n\n          <img [src]="trainerData.image" *ngIf="trainerData.image" />\n\n          <img src="../assets/imgs/person.jpg" *ngIf="!trainerData.image" />\n\n        </div>\n\n      </ion-col>\n\n      <!-- <ion-col col-3 text-right>\n\n            <button ion-button box-shadow gradient-right>\n\n              <ion-icon name="md-text"></ion-icon>\n\n            </button>\n\n          </ion-col> -->\n\n    </ion-row>\n\n    <div class="user-profile">\n\n      <h2>{{trainerData.firstName}} {{trainerData.surname}} </h2>\n\n      <p>{{trainerData.city}}, {{trainerData.country}} </p>\n\n\n\n      <button ion-button gradient-left box-shadow [disabled]="hasPaid() == true" (click)="toPayment()">Hire\n\n        Trainer</button>\n\n    </div>\n\n\n\n    <ion-card box-shadow>\n\n      <ion-item>\n\n        <ion-icon item-left name="person" color="primary"></ion-icon>\n\n        <h2>Personal Info</h2>\n\n        <p><b>Age: </b>{{trainerData.age}}</p>\n\n        <p><b>Gender: </b>{{trainerData.sex}}</p>\n\n      </ion-item>\n\n    </ion-card>\n\n    <ion-card box-shadow>\n\n      <ion-item>\n\n        <ion-icon item-left name="podium" color="primary"></ion-icon>\n\n        <h2>Achievements and History</h2>\n\n        <p><b>Years of Experience: </b>{{trainerData.experience}}</p>\n\n        <p><b>Area of expertise: </b>{{trainerData.specialties}}</p>\n\n        <p><b>Certification: </b>{{trainerData.certification}}</p>\n\n      </ion-item>\n\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\view-trainer\view-trainer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewTrainerPage);
    return ViewTrainerPage;
}());

//# sourceMappingURL=view-trainer.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AddAppointmentPage = /** @class */ (function () {
    function AddAppointmentPage(navCtrl, navParams, viewCtrl, fireStore, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fireStore = fireStore;
        this.storage = storage;
        this.user = {};
        this.event = {
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false,
            gym: {}
        };
        this.minDate = new Date().toISOString();
        this.gyms$ = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])([{ id: "westpark", name: "Westpark" }, { id: "flyfit", name: "Flyfit" }, { id: "benDunne", name: "Ben Dunne" }]);
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    AddAppointmentPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userDocID').then(function (docId) {
                            _this.fireStore.doc("/users/" + docId).valueChanges().subscribe(function (user) {
                                if (user.role == 1) {
                                    __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("appointments").add(_this.event).then(function (doc) {
                                        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("appointments").doc(doc.id).update({
                                            trainerID: user.trainerID,
                                            clientName: user.firstName + " " + user.surname,
                                            trainerName: user.trainerName,
                                            ownerUID: __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid,
                                            clientID: user.UID,
                                            docID: doc.id
                                        }).then(function (doc2) {
                                            console.log(doc2);
                                        }).catch(function (err) {
                                            console.log(err);
                                        });
                                    }).catch(function (err) {
                                        console.log(err);
                                    });
                                }
                                else {
                                    var clientData = _this.navParams.get('clientData');
                                    __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("appointments").add(_this.event).then(function (doc) {
                                        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("appointments").doc(doc.id).update({
                                            trainerID: user.UID,
                                            trainerName: user.firstName + " " + user.surname,
                                            ownerUID: __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid,
                                            clientID: clientData.clientUID,
                                            clientName: clientData.firstName + " " + clientData.surname,
                                            docID: doc.id
                                        }).then(function (doc2) {
                                            console.log(doc2);
                                        }).catch(function (err) {
                                            console.log(err);
                                        });
                                    }).catch(function (err) {
                                        console.log(err);
                                    });
                                }
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddAppointmentPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddAppointmentPage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.viewCtrl.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddAppointmentPage.prototype.blockDay = function ($event) {
        console.log($event);
    };
    AddAppointmentPage.prototype.optionSelected = function ($event) {
        console.log($event);
        this.event.gym = $event;
    };
    AddAppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-appointment',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\add-appointment\add-appointment.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button icon-only (click)="cancel()">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>Event Details</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <ion-list padding>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Workout Type" [(ngModel)]="event.title"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-textarea placeholder="Workout Details" [(ngModel)]="event.notes" rows="3"></ion-textarea>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label>Start</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label>End</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label>Select Gym</ion-label>\n\n        <ion-select>\n\n          <ion-option (ionSelect)="optionSelected($event)" *ngFor="let gym of gyms$ | async" [value]="gym">{{gym.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n  \n\n  \n\n      <ion-item>\n\n        <ion-label>Block Day</ion-label>\n\n        <ion-checkbox [(ngModel)]="event.blockDay" (ionChange)="blockDay($event.value)"></ion-checkbox>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label>All Day?</ion-label>\n\n        <ion-checkbox [(ngModel)]="event.allDay" [disabled]="event.blockDay"></ion-checkbox>\n\n      </ion-item>\n\n      <button ion-button block icon-left (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon> Add Event\n\n    </button>\n\n    </ion-list>\n\n  \n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\add-appointment\add-appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], AddAppointmentPage);
    return AddAppointmentPage;
}());

//# sourceMappingURL=add-appointment.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, fireStore, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireStore = fireStore;
        this.storage = storage;
        this.message = {};
        this.chat = {};
        this.messageCount = [];
        this.messageTest = [];
        this.count = 0;
        this.currentUserID = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        this.userData = this.navParams.get('userData');
        this.getMessages();
        this.getRecipient();
        this.messageSeen();
    };
    ChatPage.prototype.messageSeen = function () {
        var _this = this;
        this.storage.get('role').then(function (role) {
            if (role == 2) {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(_this.userData.trainerID).collection("clientList").doc(_this.userData.clientID).update({
                    unreadMessages: 0
                }).then(function (doc) {
                    console.log(doc);
                }).catch(function (err) {
                    console.log(err);
                });
            }
        });
    };
    ChatPage.prototype.getMessages = function () {
        this.messages = this.fireStore.collection("/chat/" + this.userData.clientID + "/messages", function (ref) {
            return ref.orderBy('timestamp', 'asc');
        }).valueChanges();
    };
    ChatPage.prototype.getRecipient = function () {
        var _this = this;
        if (this.userData.clientID == __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid) {
            this.recipient = this.fireStore.collection("users", function (ref) {
                return ref.where("UID", "==", _this.userData.trainerID);
            }).valueChanges();
        }
        else {
            this.recipient = this.fireStore.collection("users", function (ref) {
                return ref.where("UID", "==", _this.userData.clientID);
            }).valueChanges();
        }
    };
    ChatPage.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('role').then(function (role) {
                            if (role == 1) {
                                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("chat").doc(_this.userData.clientID).set({
                                    clientID: _this.userData.clientID,
                                    trainerID: _this.userData.trainerID,
                                    unreadMessages: Number(_this.count++)
                                }).then(function (doc) {
                                    console.log(doc);
                                }).catch(function (err) {
                                    console.log(err);
                                });
                                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("chat").doc(_this.userData.clientID).collection('messages').add({
                                    messageContent: _this.message.messageContent,
                                    sender: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                                    timestamp: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore.FieldValue.serverTimestamp()
                                }).then(function (doc) {
                                    console.log(doc);
                                    _this.message.messageContent = "";
                                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(_this.userData.trainerID).collection("clientList").doc(_this.userData.clientID)
                                        .get()
                                        .then(function (doc) {
                                        var unread = 0 + doc.data().unreadMessages + 1;
                                        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(_this.userData.trainerID).collection("clientList").doc(_this.userData.clientID).update({
                                            unreadMessages: unread
                                        }).then(function (doc) {
                                            console.log(doc);
                                        }).catch(function (err) {
                                            console.log(err);
                                        });
                                    }).catch(function (err) {
                                        console.log(err);
                                    });
                                }).catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("chat").doc(_this.userData.clientID).set({
                                    clientID: _this.userData.clientID,
                                    trainerID: _this.userData.trainerID
                                }).then(function (doc) {
                                    console.log(doc);
                                }).catch(function (err) {
                                    console.log(err);
                                });
                                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("chat").doc(_this.userData.clientID).collection('messages').add({
                                    messageContent: _this.message.messageContent,
                                    sender: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                                    timestamp: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore.FieldValue.serverTimestamp()
                                }).then(function (doc) {
                                    console.log(doc);
                                    _this.message.messageContent = "";
                                }).catch(function (err) {
                                    console.log(err);
                                });
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\chat\chat.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title *ngFor="let rec of recipient | async">\n\n      <img [src]="rec.image" *ngIf="rec.image">\n\n      <img src="../assets/imgs/person.jpg" *ngIf="!rec.image">\n\n      {{rec.firstName}} {{rec.surname}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon name="search-outline"></ion-icon>\n\n      </button>\n\n      <button ion-button>\n\n        <ion-icon name="settings-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding #content>\n\n  <div class="container">\n\n    <div *ngFor="let mess of messages | async">\n\n      <div [ngClass]="mess.sender === currentUserID ? \'from-me\': \'from-them\'">\n\n        <p>{{mess.messageContent}}</p>\n\n      </div>\n\n      <div class="clear"></div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="custom-form">\n\n    <ion-item>\n\n      <ion-input name="message" placeholder="Type message here..." [(ngModel)]="message.messageContent"></ion-input>\n\n    </ion-item>\n\n    <ion-buttons end>\n\n      <button ion-button color="primary" (click)="send()">\n\n        <ion-icon name="send" color="primary" item-left></ion-icon> Send\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trainerhub_trainerhub__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ClientListPage = /** @class */ (function () {
    function ClientListPage(navCtrl, navParams, storage, fireStore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fireStore = fireStore;
        this.clientList = [];
        this.user = {};
        this.messages = [];
        this.getClientData();
    }
    ClientListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientListPage');
    };
    ClientListPage.prototype.getClientData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.fireStore.collection("/users/" + __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid + "/clientList").valueChanges()];
                    case 1:
                        _a.clientData = _b.sent();
                        return [4 /*yield*/, this.fireStore.collection("/users/" + __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid + "/clientList").valueChanges().subscribe(function (clients) {
                                clients.forEach(function (data) {
                                    _this.clientList.push(data);
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientListPage.prototype.openTrainerHub = function (client) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__trainerhub_trainerhub__["a" /* TrainerhubPage */], { clientData: client });
    };
    ClientListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-list',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\client-list\client-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Client List</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="container">\n\n\n\n    <div class="trainer-card" *ngFor="let client of clientData | async" (click)="openTrainerHub(client)">\n\n      <img (click)="openTrainerHub(client)" [src]="client.image" />\n\n      <img src="../assets/imgs/person.jpg" *ngIf="!client.image">\n\n      <div class="card">\n\n        <div class="desc">\n\n          <h2>{{client.clientName}}</h2>\n\n          <p>{{client.city}}, {{client.country}}</p>\n\n          <p>Expiry Date: {{client.expiryDate}}</p>\n\n        </div>\n\n        <div class="more">\n\n          <p>\n\n\n\n            {{client.unreadMessages}} <ion-icon name="mail"></ion-icon>\n\n          </p>\n\n\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <div class="container-Empty" *ngIf="clientList.length == 0">\n\n    <img src="../assets/imgs/empty.png">\n\n    <h2>You don\'t have any clients yet.</h2>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\client-list\client-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], ClientListPage);
    return ClientListPage;
}());

//# sourceMappingURL=client-list.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_new_weight_add_new_weight__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ProgressPage = /** @class */ (function () {
    function ProgressPage(navCtrl, navParams, storage, fireStore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fireStore = fireStore;
        this.trainerHub = [];
        this.users = [];
        this.getUserData();
    }
    ProgressPage.prototype.ionViewDidLoad = function () {
    };
    ProgressPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users")
                            .where("UID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                            .get()
                            .then(function (docs) {
                            docs.forEach(function (doc) {
                                _this.users.push(doc);
                            });
                        }).catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getUserRole()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getClientInfo()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgressPage.prototype.getUserRole = function () {
        var role;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            role = user.data().role;
        }
        return role;
    };
    ProgressPage.prototype.getClientInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.getUserRole());
                        // Get client data from ClientList
                        if (this.getUserRole() == 2) {
                            this.clientFromList = this.navParams.get('clientData');
                        }
                        return [4 /*yield*/, this.getTrainerHubData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // for trainer to get data from trainerhub
    ProgressPage.prototype.getTrainerHubData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getUserRole() == 2)) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("trainerHub")
                                .where("clientUID", "==", this.clientFromList.clientUID)
                                .get()
                                .then(function (docs) {
                                docs.forEach(function (doc) {
                                    _this.trainerHub.push(doc);
                                });
                                console.log(_this.trainerHub);
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("trainerHub")
                            .where("clientUID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                            .get()
                            .then(function (docs) {
                            docs.forEach(function (doc) {
                                _this.trainerHub.push(doc);
                            });
                            console.log(_this.trainerHub);
                        }).catch(function (err) {
                            console.log(err);
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.getProgressData()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgressPage.prototype.getProgressData = function () {
        var docID;
        for (var _i = 0, _a = this.trainerHub; _i < _a.length; _i++) {
            var t = _a[_i];
            docID = t.data().clientUID;
            this.progress = this.fireStore.collection("/users/" + docID + "/progress", function (ref) {
                return ref.orderBy('timestamp', 'desc');
            }).valueChanges();
        }
    };
    ProgressPage.prototype.splitTimestamp = function () {
        // Remove time from time stamp and keeping date
        var todaysDate = new Date();
        var todaysDateString = String(todaysDate);
        var todaysDateSplit = todaysDateString.split(' ').slice(0, 4).join(' ');
        return todaysDateSplit;
    };
    ProgressPage.prototype.getUserDocID = function () {
        var docID;
        for (var _i = 0, _a = this.trainerHub; _i < _a.length; _i++) {
            var t = _a[_i];
            docID = t.data().clientUID;
        }
        return docID;
    };
    ProgressPage.prototype.addNewWeight = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_new_weight_add_new_weight__["a" /* AddNewWeightPage */], { docID: this.getUserDocID() });
    };
    ProgressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-progress',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\progress\progress.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end *ngIf="getUserRole() == 1">\n\n      <button ion-button icon-only (click)="addNewWeight()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Progress</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n<h3 style="text-align:center">Weight tracking </h3>\n\n\n\n<ion-list style="margin: 0%">\n\n  \n\n        <ion-item *ngFor="let p of progress | async" style="margin: 0%">\n\n            <ion-card class="progress-card">\n\n              <ion-grid>\n\n                <ion-row>\n\n                 \n\n                      <p><b>Date: </b>{{p.weightUpdated}} <br />\n\n                        <b>Current weight: </b>{{p.currentWeight}}kg\n\n                      </p>\n\n                      \n\n                      \n\n                      <img [src]="p.image" *ngIf="p.image">\n\n                    \n\n                </ion-row>\n\n              </ion-grid>\n\n           \n\n            \n\n          </ion-card>\n\n        </ion-item>\n\n  \n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\progress\progress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], ProgressPage);
    return ProgressPage;
}());

//# sourceMappingURL=progress.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewWeightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_firestore__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AddNewWeightPage = /** @class */ (function () {
    function AddNewWeightPage(navCtrl, navParams, formBuilder, camara, http, fireStore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.camara = camara;
        this.http = http;
        this.fireStore = fireStore;
        this.progressData = [];
        this.goalData = [];
        this.users = [];
        this.token = [];
        this.token1 = [];
        this.getProgressData();
        this.getGoalDataForClient();
        this.getUserData();
        this.getTrainerID();
        this.getGoalData();
        this.myForm = this.formBuilder.group({
            weight: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
            date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
            photo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
        });
    }
    AddNewWeightPage.prototype.getGoalData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fireStore.doc("/users/" + __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid + "/goals/" + __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).valueChanges().subscribe(function (goals) {
                            _this.getCurrentWeight(goals);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddNewWeightPage.prototype.getCurrentWeight = function (goals) {
        if (goals == undefined) {
            console.log("Empty List");
            this.weight = 0;
        }
        else {
            console.log("List contains data");
            this.weight = goals.currentWeight;
        }
    };
    AddNewWeightPage.prototype.splitTimestamp = function () {
        // Remove time from time stamp and keeping date
        var todaysDate = new Date();
        var todaysDateString = String(todaysDate);
        var todaysDateSplit = todaysDateString.split(' ').slice(0, 4).join(' ');
        return todaysDateSplit;
    };
    AddNewWeightPage.prototype.getProgressData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.docID = this.navParams.get('docID');
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('progress')
                                .get()
                                .then(function (docs) {
                                docs.forEach(function (doc) {
                                    _this.progressData.push(doc);
                                });
                                console.log(_this.progressData);
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddNewWeightPage.prototype.getGoalDataForClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('goals')
                            .where("UID", "==", __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid)
                            .get()
                            .then(function (docs) {
                            docs.forEach(function (doc) {
                                _this.goalData.push(doc);
                            });
                        }).catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddNewWeightPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users")
                            .where("UID", "==", __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid)
                            .get()
                            .then(function (docs) {
                            docs.forEach(function (doc) {
                                _this.users.push(doc);
                            });
                        }).catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddNewWeightPage.prototype.getTrainerID = function () {
        var trainerID;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            trainerID = user.data().trainerID;
            console.log(trainerID);
        }
        return trainerID;
    };
    AddNewWeightPage.prototype.updateWeight = function () {
        var _this = this;
        var body = {
            trainer: this.getTrainerID()
        };
        this.http.post("https://us-central1-mealmate-ad158.cloudfunctions.net/updateWeight", JSON.stringify(body), {
            responseType: "text"
        }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        if (this.progressData.length == 0) {
            console.log("Reaches here");
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('progress').add({
                currentWeight: Number(this.weight),
                weightUpdated: this.splitTimestamp(),
                timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore.FieldValue.serverTimestamp()
            }).then(function (doc) {
                console.log(doc);
                if (_this.image) {
                    _this.upload(_this.docID, doc.id);
                }
            }).catch(function (err) {
                console.log(err);
            });
            if (this.goalData.length == 0) {
                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('goals').doc(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).set({
                    currentWeight: Number(this.weight)
                }).then(function (doc) {
                    console.log(doc);
                }).catch(function (err) {
                    console.log(err);
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('goals').doc(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).update({
                    currentWeight: Number(this.weight)
                }).then(function (doc) {
                    console.log(doc);
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }
        else {
            var match = this.progressData.find(function (e) { return e.data().weightUpdated === _this.splitTimestamp(); });
            console.log(match);
            if (match == null) {
                console.log("Not Found");
                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('progress').add({
                    currentWeight: Number(this.weight),
                    weightUpdated: this.splitTimestamp(),
                    timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore.FieldValue.serverTimestamp()
                }).then(function (doc) {
                    console.log(doc);
                    if (_this.image) {
                        _this.upload(_this.docID, match.id);
                    }
                }).catch(function (err) {
                    console.log(err);
                });
                if (this.goalData.length == 0) {
                    __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('goals').doc(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).set({
                        currentWeight: Number(this.weight)
                    }).then(function (doc) {
                        console.log(doc);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('goals').doc(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).update({
                        currentWeight: Number(this.weight)
                    }).then(function (doc) {
                        console.log(doc);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            }
            else {
                console.log("Found");
                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('progress').doc(match.id).update({
                    currentWeight: Number(this.weight),
                    weightUpdated: this.splitTimestamp(),
                    timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore.FieldValue.serverTimestamp()
                }).then(function (doc) {
                    console.log(doc);
                    if (_this.image) {
                        _this.upload(_this.docID, match.id);
                    }
                }).catch(function (err) {
                    console.log(err);
                });
                if (this.goalData.length == 0) {
                    __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('goals').doc(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).set({
                        currentWeight: Number(this.weight)
                    }).then(function (doc) {
                        console.log(doc);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(this.docID).collection('goals').doc(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).update({
                        currentWeight: Number(this.weight)
                    }).then(function (doc) {
                        console.log(doc);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            }
        }
        this.navCtrl.pop();
    };
    AddNewWeightPage.prototype.addPhoto = function () {
        this.launchCamara();
    };
    AddNewWeightPage.prototype.launchCamara = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camara.PictureSourceType.CAMERA,
            destinationType: this.camara.DestinationType.DATA_URL,
            encodingType: this.camara.EncodingType.PNG,
            mediaType: this.camara.MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 512,
            targetWidth: 512,
            allowEdit: true
        };
        this.camara.getPicture(options).then(function (toBase64String) {
            console.log(toBase64String);
            _this.image = "data:image/png;base64," + toBase64String;
        }).catch(function (err) {
            console.log(err);
        });
    };
    AddNewWeightPage.prototype.upload = function (clientDocID, progressDocId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref("progressPictures/" + clientDocID);
            var uploadTask = ref.putString(_this.image.split(',')[1], "base64");
            uploadTask.on("state_changed", function (taskSnapshot) {
                console.log(taskSnapshot);
            }, function (error) {
                console.log(error);
            }, function () {
                console.log("The upload is completed!");
                uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                    __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(clientDocID).collection('progress').doc(progressDocId).update({
                        image: url
                    }).then(function () {
                        resolve();
                    }).catch(function (err) {
                        reject();
                    });
                }).catch(function (err) {
                    reject();
                });
            });
        });
    };
    AddNewWeightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-new-weight',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\add-new-weight\add-new-weight.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n      <ion-buttons end>\n\n          <button ion-button icon-only (click)="updateWeight()">\n\n            <ion-icon name="checkmark"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    <ion-title>Add Weight</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <form [formGroup]="myForm">\n\n      <ion-grid>\n\n        <ion-row style="border-bottom: 1px solid black">\n\n          <ion-col>\n\n              <ion-label style="font-size: 20px">Weight(kg):</ion-label>\n\n          </ion-col>\n\n          <ion-col>\n\n              <ion-input style="float: right !important; font-size: 20px" formControlName="weight" type="text" [(ngModel)]="weight"></ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row style="border-bottom: 1px solid black">\n\n            <ion-col>\n\n                <ion-label style="font-size: 20px">Date:</ion-label>\n\n            </ion-col>\n\n            <ion-col>\n\n                <p style="font-size: 20px; color: black">{{splitTimestamp()}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row style="border-bottom: 1px solid black">\n\n              <ion-col>\n\n                  <ion-label style="font-size: 20px">Progress Photo:</ion-label>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <button ion-button icon-only (click)="addPhoto()" style="margin-left: 20px">\n\n                      <ion-icon name="camera"></ion-icon>\n\n                    </button>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row class="rowStyle" *ngIf="image">\n\n              <ion-card class="rounded-corners">\n\n                \n\n                <img [src]="image" class="rounded-corners">\n\n              </ion-card>\n\n            </ion-row>\n\n      </ion-grid>\n\n  \n\n  </form>\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\add-new-weight\add-new-weight.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], AddNewWeightPage);
    return AddNewWeightPage;
}());

//# sourceMappingURL=add-new-weight.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJournalItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__journal_journal__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_modal_edit_modal__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditJournalItemPage = /** @class */ (function () {
    function EditJournalItemPage(navCtrl, navParams, modal, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.toast = toast;
        this.journalItem = {};
        this.journalItemID = navParams.get("journalItem_ID");
    }
    EditJournalItemPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("journalEntries").doc(this.journalItemID).get()
            .then(function (doc) {
            _this.entry = doc;
        }).catch(function (err) {
            console.log(err);
        });
        var data = this.navParams.get('data');
        this.journalItem.itemName = data.itemName;
        this.journalItem.brandName = data.brandName;
        this.journalItem.calories = data.calories;
        this.journalItem.carbs = data.carbs;
        this.journalItem.fat = data.fat;
        this.journalItem.protein = data.protein;
        this.journalItem.saturated_fat = data.saturated_fat;
        this.journalItem.trans_fatty_acid = data.trans_fatty_acid;
        this.journalItem.polyunsaturated_fat = data.polyunsaturated_fat;
        this.journalItem.monounsaturated_fat = data.monounsaturated_fat;
        this.journalItem.cholesterol = data.cholesterol;
        this.journalItem.sodium = data.sodium;
        this.journalItem.dietary_fiber = data.dietary_fiber;
        this.journalItem.sugars = data.sugars;
        this.journalItem.vitamin_a = data.vitamin_a;
        this.journalItem.vitamin_c = data.vitamin_c;
        this.journalItem.calcium = data.calcium;
        this.journalItem.iron = data.iron;
        this.journalItem.selectedServingType = data.selectedServingType;
        this.journalItem.selectedServingSize = data.selectedServingSize;
        this.journalItem.serving_weight_grams = data.serving_weight_grams;
        this.journalItem.noServings = data.noServings;
        this.journalItem.defaultServingSize = data.defaultServingSize;
    };
    EditJournalItemPage.prototype.openEditModal = function () {
        var _this = this;
        var editModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__pages_edit_modal_edit_modal__["a" /* EditModalPage */], { data: this.journalItem });
        editModal.present();
        editModal.onDidDismiss(function (journalItemObj) {
            // this.journalItem.itemName = journalItemObj.journalItemObj.itemName;
            // this.journalItem.brandName = journalItemObj.journalItemObj.brandName;
            _this.journalItem.calories = journalItemObj.journalItemObj.calories;
            _this.journalItem.carbs = journalItemObj.journalItemObj.carbs;
            _this.journalItem.fat = journalItemObj.journalItemObj.fat;
            _this.journalItem.protein = journalItemObj.journalItemObj.protein;
            _this.journalItem.saturated_fat = journalItemObj.journalItemObj.saturated_fat;
            _this.journalItem.trans_fatty_acid = journalItemObj.journalItemObj.trans_fatty_acid;
            _this.journalItem.polyunsaturated_fat = journalItemObj.journalItemObj.polyunsaturated_fat;
            _this.journalItem.monounsaturated_fat = journalItemObj.journalItemObj.monounsaturated_fat;
            _this.journalItem.cholesterol = journalItemObj.journalItemObj.cholesterol;
            _this.journalItem.sodium = journalItemObj.journalItemObj.sodium;
            _this.journalItem.dietary_fiber = journalItemObj.journalItemObj.dietary_fiber;
            _this.journalItem.sugars = journalItemObj.journalItemObj.sugars;
            _this.journalItem.vitamin_a = journalItemObj.journalItemObj.vitamin_a;
            _this.journalItem.vitamin_c = journalItemObj.journalItemObj.vitamin_c;
            _this.journalItem.calcium = journalItemObj.journalItemObj.calcium;
            _this.journalItem.iron = journalItemObj.journalItemObj.iron;
            _this.journalItem.selectedServingType = journalItemObj.journalItemObj.selectedServingType;
            _this.journalItem.selectedServingSize = journalItemObj.journalItemObj.selectedServingSize;
            _this.journalItem.serving_weight_grams = journalItemObj.journalItemObj.serving_weight_grams;
            _this.journalItem.noServings = journalItemObj.journalItemObj.noServings;
            _this.journalItem.defaultServingSize = journalItemObj.journalItemObj.defaultServingSize;
        });
    };
    EditJournalItemPage.prototype.updateEntry = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("journalEntries").doc(this.journalItemID).update({
            calories: this.journalItem.calories,
            carbs: this.journalItem.carbs,
            fat: this.journalItem.fat,
            protein: this.journalItem.protein,
            saturated_fat: Number(this.journalItem.saturated_fat),
            trans_fatty_acid: Number(this.journalItem.trans_fatty_acid),
            polyunsaturated_fat: Number(this.journalItem.polyunsaturated_fat),
            monounsaturated_fat: Number(this.journalItem.monounsaturated_fat),
            cholesterol: Number(this.journalItem.cholesterol),
            sodium: Number(this.journalItem.sodium),
            dietary_fiber: Number(this.journalItem.dietary_fiber),
            sugars: Number(this.journalItem.sugars),
            vitamin_a: Number(this.journalItem.vitamin_a),
            vitamin_c: Number(this.journalItem.vitamin_c),
            calcium: Number(this.journalItem.calcium),
            iron: Number(this.journalItem.iron),
            selectedServingType: this.journalItem.selectedServingType,
            selectedServingSize: Number(this.journalItem.selectedServingSize),
            serving_weight_grams: this.journalItem.serving_weight_grams,
            noServings: Number(this.journalItem.noServings)
        }).then(function (doc) {
            console.log(doc);
        }).catch(function (err) {
            console.log(err);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__journal_journal__["a" /* JournalPage */]);
        this.toast.create({
            message: "Updated",
            duration: 3000,
            cssClass: "success"
        }).present();
    };
    EditJournalItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-journal-item',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\edit-journal-item\edit-journal-item.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="updateEntry()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Edit Entry </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-content padding>\n\n\n\n\n\n    <div id="popover" *ngIf="entry">\n\n\n\n      <h5>{{ entry.data().itemName }} - {{entry.data().brandName}}</h5>\n\n      <br>\n\n      <br>\n\n\n\n      <ion-list>\n\n        <ion-item (click)="openEditModal()" style="float: left">\n\n          <h2>Servings:</h2>\n\n          <h3 style="float: right">{{journalItem.noServings}}</h3>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item (click)="openEditModal()">\n\n          <h2>Serving Size:</h2>\n\n          <h3 style="float: right">{{journalItem.selectedServingType}}</h3>\n\n\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Calories:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{ journalItem.calories.toFixed(1)}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Fat:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.fat.toFixed(1)}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Carbs:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.carbs.toFixed(1)}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Protein:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.protein.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Saturated fat:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.saturated_fat.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Trans fatty acid:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.trans_fatty_acid.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Polyunsaturated fat:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.polyunsaturated_fat.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Monounsaturated fat:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.monounsaturated_fat.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Cholesterol:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.cholesterol.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Sodium:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.sodium.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Dietary fiber:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.dietary_fiber.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Sugars:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.sugars.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Vitamin_a:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.vitamin_a.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Vitamin_c:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.vitamin_c.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Calcium:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.calcium.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <p><b>Iron:</b></p>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <p>{{journalItem.iron.toFixed(1)}}</p>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\edit-journal-item\edit-journal-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], EditJournalItemPage);
    return EditJournalItemPage;
}());

//# sourceMappingURL=edit-journal-item.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealOptionModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealOptionModalPage = /** @class */ (function () {
    function MealOptionModalPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.breakfast = 1;
        this.lunch = 2;
        this.dinner = 3;
        this.snack = 4;
    }
    MealOptionModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MealOptionModalPage');
    };
    MealOptionModalPage.prototype.selected = function (selection) {
        this.view.dismiss({ mealSelection: selection });
    };
    MealOptionModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meal-option-modal',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\meal-option-modal\meal-option-modal.html"*/'\n\n\n\n<ion-content class="main-view">\n\n    <div class="modal_content">\n\n  \n\n    <ion-card id="Breakfast"  (click)="selected(breakfast)">\n\n\n\n        <div class="card-title" ><b>Breakfast</b></div> \n\n\n\n   </ion-card>\n\n\n\n   <ion-card id="Lunch" var=1 (click)="selected(lunch)">\n\n\n\n      <div class="card-title" ><b>Lunch</b></div> \n\n\n\n </ion-card>\n\n\n\n <ion-card id="Dinner" var=1 (click)="selected(dinner)">\n\n\n\n    <div class="card-title" ><b>Dinner</b></div> \n\n\n\n</ion-card>\n\n\n\n<ion-card id="Snacks" var=1 (click)="selected(snack)">\n\n\n\n    <div class="card-title" ><b>Snacks</b></div> \n\n\n\n</ion-card>\n\n\n\n</div>\n\n\n\n</ion-content> \n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\meal-option-modal\meal-option-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], MealOptionModalPage);
    return MealOptionModalPage;
}());

//# sourceMappingURL=meal-option-modal.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_details_food_details__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoodResultsPage = /** @class */ (function () {
    function FoodResultsPage(navCtrl, navParams, _data, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._data = _data;
        this.keyboard = keyboard;
        this.entries = [];
        this.getEntries();
        var date = this.navParams.get('date');
        console.log(date);
        this.theDate = date;
        this.mealOption = this.navParams.get('mealOption');
        console.log(this.mealOption);
    }
    FoodResultsPage.prototype.getEntries = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.firestore().collection("journalEntries")
            .where("owner", "==", __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid)
            .get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                _this.entries.push(doc);
            });
            console.log(_this.entries);
        }).catch(function (err) {
            console.log(err);
        });
    };
    FoodResultsPage.prototype.search = function (term) {
        var _this = this;
        var search_term = term;
        this.keyboard.hide();
        this._data.getFoods(search_term)
            .subscribe(function (res) {
            _this.foods = res.hits;
        }, function (err) {
            alert("failed loading json data");
        });
    };
    FoodResultsPage.prototype.detailsPage = function (food) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__food_details_food_details__["a" /* FoodDetailsPage */], {
            food: food,
            date: this.theDate,
            mealOption: this.mealOption
        });
    };
    FoodResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-results',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\food-results\food-results.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Food Search</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-searchbar (search)="search($event.target.value)" [ngClass]="{\'show-search\': showSearch}"></ion-searchbar>\n\n\n\n\n\n\n\n\n\n  <div *ngIf="foods">\n\n\n\n\n\n\n\n    <ion-list *ngFor="let food of foods" style="margin: 0%">\n\n      <ion-item (click)="detailsPage(food)">\n\n\n\n\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col>\n\n              <h2><b>{{ food.fields.item_name }}</b></h2>\n\n              <h3>{{food.fields.brand_name}}</h3>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h3 style="float:right">{{food.fields.nf_calories}} kcals</h3>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n  </div>\n\n\n\n  <div *ngIf="!foods">\n\n    <h3 style="margin-top: 5%">Recent Foods:</h3>\n\n\n\n    <ion-list *ngFor="let entry of entries" style="margin: 0%">\n\n      <ion-item>\n\n\n\n\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col>\n\n              <h2><b>{{ entry.data().itemName }}</b></h2>\n\n              <h3>{{entry.data().brandName }}</h3>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h3 style="float:right">{{entry.data().calories }} kcals</h3>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\food-results\food-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */]])
    ], FoodResultsPage);
    return FoodResultsPage;
}());

//# sourceMappingURL=food-results.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__journal_journal__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_add_modal_add_modal__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FoodDetailsPage = /** @class */ (function () {
    function FoodDetailsPage(navCtrl, navParams, modal, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.toast = toast;
        this.journalItem = {};
        this.journalItem.noServings = 1;
        this.theDate = this.navParams.get('date');
        this.mealOption = this.navParams.get('mealOption');
    }
    FoodDetailsPage.prototype.openAddModal = function () {
        var _this = this;
        var addModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__pages_add_modal_add_modal__["a" /* AddModalPage */], { data: this.journalItem, date: this.theDate });
        addModal.present();
        addModal.onDidDismiss(function (journalItemObj) {
            _this.journalItem.calories = journalItemObj.journalItemObj.calories;
            _this.journalItem.carbs = journalItemObj.journalItemObj.carbs;
            _this.journalItem.fat = journalItemObj.journalItemObj.fat;
            _this.journalItem.protein = journalItemObj.journalItemObj.protein;
            _this.journalItem.saturated_fat = journalItemObj.journalItemObj.saturated_fat;
            _this.journalItem.trans_fatty_acid = journalItemObj.journalItemObj.trans_fatty_acid;
            _this.journalItem.polyunsaturated_fat = journalItemObj.journalItemObj.polyunsaturated_fat;
            _this.journalItem.monounsaturated_fat = journalItemObj.journalItemObj.monounsaturated_fat;
            _this.journalItem.cholesterol = journalItemObj.journalItemObj.cholesterol;
            _this.journalItem.sodium = journalItemObj.journalItemObj.sodium;
            _this.journalItem.dietary_fiber = journalItemObj.journalItemObj.dietary_fiber;
            _this.journalItem.sugars = journalItemObj.journalItemObj.sugars;
            _this.journalItem.vitamin_a = journalItemObj.journalItemObj.vitamin_a;
            _this.journalItem.vitamin_c = journalItemObj.journalItemObj.vitamin_c;
            _this.journalItem.calcium = journalItemObj.journalItemObj.calcium;
            _this.journalItem.iron = journalItemObj.journalItemObj.iron;
            _this.journalItem.selectedServingType = journalItemObj.journalItemObj.selectedServingType;
            _this.journalItem.selectedServingSize = journalItemObj.journalItemObj.selectedServingSize;
            _this.journalItem.serving_weight_grams = journalItemObj.journalItemObj.serving_weight_grams;
            _this.journalItem.noServings = journalItemObj.journalItemObj.noServings;
            _this.journalItem.defaultServingSize = journalItemObj.journalItemObj.defaultServingSize;
        });
    };
    FoodDetailsPage.prototype.confirmEntry = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("journalEntries").add({
            owner: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid,
            created: this.theDate,
            mealOption: Number(this.mealOption),
            itemName: this.journalItem.itemName,
            brandName: this.journalItem.brandName,
            calories: this.journalItem.calories,
            carbs: this.journalItem.carbs,
            fat: this.journalItem.fat,
            protein: this.journalItem.protein,
            saturated_fat: Number(this.journalItem.saturated_fat),
            trans_fatty_acid: Number(this.journalItem.trans_fatty_acid),
            polyunsaturated_fat: Number(this.journalItem.polyunsaturated_fat),
            monounsaturated_fat: Number(this.journalItem.monounsaturated_fat),
            cholesterol: Number(this.journalItem.cholesterol),
            sodium: Number(this.journalItem.sodium),
            dietary_fiber: Number(this.journalItem.dietary_fiber),
            sugars: Number(this.journalItem.sugars),
            vitamin_a: Number(this.journalItem.vitamin_a),
            vitamin_c: Number(this.journalItem.vitamin_c),
            calcium: Number(this.journalItem.calcium),
            iron: Number(this.journalItem.iron),
            selectedServingType: this.journalItem.selectedServingType,
            selectedServingSize: Number(this.journalItem.selectedServingSize),
            serving_weight_grams: this.journalItem.serving_weight_grams,
            defaultServingSize: this.journalItem.defaultServingSize,
            noServings: Number(this.journalItem.noServings)
        }).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(doc);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("journalEntries").doc(doc.id).update({
                                id: doc.id
                            }).then(function (doc1) {
                                console.log(doc1);
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            console.log(err);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__journal_journal__["a" /* JournalPage */]);
        this.toast.create({
            message: "Added",
            duration: 3000,
            cssClass: "success"
        }).present();
    };
    FoodDetailsPage.prototype.ionViewDidLoad = function () {
        var food = this.navParams.get("food");
        this.food = food;
        this.journalItem.itemName = food.fields.item_name;
        this.journalItem.brandName = food.fields.brand_name;
        this.journalItem.calories = 0 + food.fields.nf_calories;
        this.journalItem.carbs = 0 + food.fields.nf_total_carbohydrate;
        this.journalItem.fat = 0 + food.fields.nf_total_fat;
        this.journalItem.protein = 0 + food.fields.nf_protein;
        this.journalItem.saturated_fat = 0 + food.fields.nf_saturated_fat;
        this.journalItem.trans_fatty_acid = 0 + food.fields.nf_trans_fatty_acid;
        this.journalItem.polyunsaturated_fat = 0 + food.fields.nf_polyunsaturated_fat;
        this.journalItem.monounsaturated_fat = 0 + food.fields.nf_monounsaturated_fat;
        this.journalItem.cholesterol = 0 + food.fields.nf_cholesterol;
        this.journalItem.sodium = 0 + food.fields.nf_sodium;
        this.journalItem.dietary_fiber = 0 + food.fields.nf_dietary_fiber;
        this.journalItem.sugars = 0 + food.fields.nf_sugars;
        this.journalItem.vitamin_a = 0 + food.fields.nf_vitamin_a_dv;
        this.journalItem.vitamin_c = 0 + food.fields.nf_vitamin_c_dv;
        this.journalItem.calcium = 0 + food.fields.nf_calcium_dv;
        this.journalItem.iron = 0 + food.fields.nf_iron_dv;
        this.journalItem.serving_weight_grams = food.fields.nf_serving_weight_grams;
        this.journalItem.defaultServingSize = food.fields.nf_serving_weight_grams;
        if (this.journalItem.defaultServingSize != null) {
            this.journalItem.selectedServingType = String(this.journalItem.serving_weight_grams) + "g";
            this.journalItem.selectedServingSize = 1;
        }
        else if (this.journalItem.defaultServingSize == null) {
            this.journalItem.selectedServingType = "1.0 " + this.journalItem.itemName;
            this.journalItem.selectedServingSize = 4;
            this.journalItem.defaultServingSize = null;
            console.log("NULL");
        }
        else {
            return console.log("Error");
        }
    };
    FoodDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-details',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\food-details\food-details.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="confirmEntry()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>{{ journalItem.itemName }}</ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="main-view" padding>\n\n\n\n\n\n  <div id="popover">\n\n\n\n    <h5>{{ journalItem.itemName }} - {{journalItem.brandName}}</h5>\n\n    <br>\n\n    <br>\n\n\n\n    <ion-list>\n\n      <ion-item (click)="openAddModal()" style="float: left">\n\n        <h2>Servings:</h2>\n\n        <h3 style="float: right">{{journalItem.noServings}}</h3>\n\n\n\n      </ion-item>\n\n\n\n      <ion-item (click)="openAddModal()">\n\n        <h2>Serving Size:</h2>\n\n        <h3 style="float: right">{{journalItem.selectedServingType}}</h3>\n\n\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Calories:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.calories | number:\'.1-1\')}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Fat:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.fat | number:\'.1-1\')}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Carbs:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.carbs | number:\'.1-1\')}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Protein:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.protein | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Saturated fat:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.saturated_fat | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Trans fatty acid:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.trans_fatty_acid | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Polyunsaturated fat:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.polyunsaturated_fat | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Monounsaturated fat:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.monounsaturated_fat | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Cholesterol:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.cholesterol | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Sodium:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.sodium | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Dietary fiber:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.dietary_fiber | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Sugars:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.sugars | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Vitamin_a:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.vitamin_a | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Vitamin_c:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.vitamin_c | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Calcium:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.calcium | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <p><b>Iron:</b></p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <p>{{(journalItem.iron | number:\'.1-1\')}}</p>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n\n\n\n\n  <!-- <button ion-button block (click)="addJournalItem(food, journalItem)">Add Item</button> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\food-details\food-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], FoodDetailsPage);
    return FoodDetailsPage;
}());

//# sourceMappingURL=food-details.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddModalPage = /** @class */ (function () {
    function AddModalPage(navCtrl, navParams, view, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.toast = toast;
        this.journalItem = {};
        this.macro_counter = {};
        var date = this.navParams.get('date');
        this.theDate = date;
    }
    AddModalPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('data');
        this.entryData = data;
        this.journalItem.itemName = data.itemName;
        this.journalItem.brandName = data.brandName;
        this.journalItem.serving_weight_grams = data.defaultServingSize;
        // For one gram
        if (data.defaultServingSize != null) {
            this.journalItem.calories = Number(data.calories / data.serving_weight_grams);
            this.journalItem.fat = Number(data.fat / data.serving_weight_grams);
            this.journalItem.carbs = Number(data.carbs / data.serving_weight_grams);
            this.journalItem.protein = Number(data.protein / data.serving_weight_grams);
            this.journalItem.saturated_fat = Number(data.saturated_fat / data.serving_weight_grams);
            this.journalItem.trans_fatty_acid = Number(data.trans_fatty_acid / data.serving_weight_grams);
            this.journalItem.polyunsaturated_fat = Number(data.polyunsaturated_fat / data.serving_weight_grams);
            this.journalItem.monounsaturated_fat = Number(data.monounsaturated_fat / data.serving_weight_grams);
            this.journalItem.cholesterol = Number(data.cholesterol / data.serving_weight_grams);
            this.journalItem.sodium = Number(data.sodium / data.serving_weight_grams);
            this.journalItem.dietary_fiber = Number(data.dietary_fiber / data.serving_weight_grams);
            this.journalItem.sugars = Number(data.sugars / data.serving_weight_grams);
            this.journalItem.vitamin_a = Number(data.vitamin_a / data.serving_weight_grams);
            this.journalItem.vitamin_c = Number(data.vitamin_c / data.serving_weight_grams);
            this.journalItem.iron = Number(data.iron / data.serving_weight_grams);
            this.journalItem.calcium = Number(data.calcium / data.serving_weight_grams);
            this.journalItem.defaultServingSize = Number(data.defaultServingSize);
            this.journalItem.selectedServingType = String(this.journalItem.defaultServingSize) + "g";
            this.journalItem.noServings = Number(data.noServings);
            this.journalItem.selectedServingSize = data.selectedServingSize;
        }
        else {
            this.journalItem.calories = Number(data.calories / data.noServings);
            this.journalItem.fat = Number(data.fat / data.noServings);
            this.journalItem.carbs = Number(data.carbs / data.noServings);
            this.journalItem.protein = Number(data.protein / data.noServings);
            this.journalItem.saturated_fat = Number(data.saturated_fat / data.noServings);
            this.journalItem.trans_fatty_acid = Number(data.trans_fatty_acid / data.noServings);
            this.journalItem.polyunsaturated_fat = Number(data.polyunsaturated_fat / data.noServings);
            this.journalItem.monounsaturated_fat = Number(data.monounsaturated_fat / data.noServings);
            this.journalItem.cholesterol = Number(data.cholesterol / data.noServings);
            this.journalItem.sodium = Number(data.sodium / data.noServings);
            this.journalItem.dietary_fiber = Number(data.dietary_fiber / data.noServings);
            this.journalItem.sugars = Number(data.sugars / data.noServings);
            this.journalItem.vitamin_a = Number(data.vitamin_a / data.noServings);
            this.journalItem.vitamin_c = Number(data.vitamin_c / data.noServings);
            this.journalItem.iron = Number(data.iron / data.noServings);
            this.journalItem.calcium = Number(data.calcium / data.noServings);
            this.journalItem.defaultServingSize = null;
            this.journalItem.selectedServingType = "1.0 " + this.journalItem.itemName;
            this.journalItem.noServings = Number(data.noServings);
            this.journalItem.selectedServingSize = data.selectedServingSize;
        }
    };
    AddModalPage.prototype.closeAddModal = function () {
        this.journalItem.calories = this.entryData.calories;
        this.journalItem.carbs = this.entryData.carbs;
        this.journalItem.fat = this.entryData.fat;
        this.journalItem.protein = this.entryData.protein;
        this.journalItem.saturated_fat = this.entryData.saturated_fat;
        this.journalItem.trans_fatty_acid = this.entryData.trans_fatty_acid;
        this.journalItem.polyunsaturated_fat = this.entryData.polyunsaturated_fat;
        this.journalItem.monounsaturated_fat = this.entryData.monounsaturated_fat;
        this.journalItem.cholesterol = this.entryData.cholesterol;
        this.journalItem.sodium = this.entryData.sodium;
        this.journalItem.dietary_fiber = this.entryData.dietary_fiber;
        this.journalItem.sugars = this.entryData.sugars;
        this.journalItem.vitamin_a = this.entryData.vitamin_a;
        this.journalItem.vitamin_c = this.entryData.vitamin_c;
        this.journalItem.calcium = this.entryData.calcium;
        this.journalItem.iron = this.entryData.iron;
        this.journalItem.serving_weight_grams = this.entryData.serving_weight_grams;
        this.journalItem.noServings = this.entryData.noServings;
        this.journalItem.selectedServingSize = this.entryData.selectedServingSize;
        this.journalItem.selectedServingType = this.entryData.selectedServingType;
        this.view.dismiss({ journalItemObj: this.journalItem });
    };
    AddModalPage.prototype.saveAddModal = function () {
        if (this.journalItem.selectedServingSize == 1) {
            this.journalItem.selectedServingType = String(this.journalItem.defaultServingSize) + "g";
            //Macros 
            this.journalItem.calories = (this.journalItem.calories * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.fat = (this.journalItem.fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.carbs = (this.journalItem.carbs * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.protein = (this.journalItem.protein * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.saturated_fat = (this.journalItem.saturated_fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.trans_fatty_acid = (this.journalItem.trans_fatty_acid * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.polyunsaturated_fat = (this.journalItem.polyunsaturated_fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.monounsaturated_fat = (this.journalItem.monounsaturated_fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.cholesterol = (this.journalItem.cholesterol * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.sodium = (this.journalItem.sodium * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.dietary_fiber = (this.journalItem.dietary_fiber * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.sugars = (this.journalItem.sugars * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.vitamin_a = (this.journalItem.vitamin_a * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.vitamin_c = (this.journalItem.vitamin_c * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.iron = (this.journalItem.iron * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.calcium = (this.journalItem.calcium * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            //Servings
            this.journalItem.serving_weight_grams = this.journalItem.serving_weight_grams * this.journalItem.noServings;
        }
        else if (this.journalItem.selectedServingSize == 2) {
            this.journalItem.selectedServingType = "1g";
            this.journalItem.calories = this.journalItem.calories * this.journalItem.noServings;
            this.journalItem.fat = this.journalItem.fat * this.journalItem.noServings;
            this.journalItem.carbs = this.journalItem.carbs * this.journalItem.noServings;
            this.journalItem.protein = this.journalItem.protein * this.journalItem.noServings;
            this.journalItem.saturated_fat = this.journalItem.saturated_fat * this.journalItem.noServings;
            this.journalItem.trans_fatty_acid = this.journalItem.trans_fatty_acid * this.journalItem.noServings;
            this.journalItem.polyunsaturated_fat = this.journalItem.polyunsaturated_fat * this.journalItem.noServings;
            this.journalItem.monounsaturated_fat = this.journalItem.monounsaturated_fat * this.journalItem.noServings;
            this.journalItem.cholesterol = this.journalItem.cholesterol * this.journalItem.noServings;
            this.journalItem.sodium = this.journalItem.sodium * this.journalItem.noServings;
            this.journalItem.dietary_fiber = this.journalItem.dietary_fiber * this.journalItem.noServings;
            this.journalItem.sugars = this.journalItem.sugars * this.journalItem.noServings;
            this.journalItem.vitamin_a = this.journalItem.vitamin_a * this.journalItem.noServings;
            this.journalItem.vitamin_c = this.journalItem.vitamin_c * this.journalItem.noServings;
            this.journalItem.iron = this.journalItem.iron * this.journalItem.noServings;
            this.journalItem.calcium = this.journalItem.calcium * this.journalItem.noServings;
            this.journalItem.serving_weight_grams = 1 * this.journalItem.noServings;
        }
        else if (this.journalItem.selectedServingSize == 3) {
            this.journalItem.selectedServingType = "100g";
            this.journalItem.calories = (this.journalItem.calories * 100) * this.journalItem.noServings;
            this.journalItem.fat = (this.journalItem.fat * 100) * this.journalItem.noServings;
            this.journalItem.carbs = (this.journalItem.carbs * 100) * this.journalItem.noServings;
            this.journalItem.protein = (this.journalItem.protein * 100) * this.journalItem.noServings;
            this.journalItem.saturated_fat = (this.journalItem.saturated_fat * 100) * this.journalItem.noServings;
            this.journalItem.trans_fatty_acid = (this.journalItem.trans_fatty_acid * 100) * this.journalItem.noServings;
            this.journalItem.polyunsaturated_fat = (this.journalItem.polyunsaturated_fat * 100) * this.journalItem.noServings;
            this.journalItem.monounsaturated_fat = (this.journalItem.monounsaturated_fat * 100) * this.journalItem.noServings;
            this.journalItem.cholesterol = (this.journalItem.cholesterol * 100) * this.journalItem.noServings;
            this.journalItem.sodium = (this.journalItem.sodium * 100) * this.journalItem.noServings;
            this.journalItem.dietary_fiber = (this.journalItem.dietary_fiber * 100) * this.journalItem.noServings;
            this.journalItem.sugars = (this.journalItem.sugars * 100) * this.journalItem.noServings;
            this.journalItem.vitamin_a = (this.journalItem.vitamin_a * 100) * this.journalItem.noServings;
            this.journalItem.vitamin_c = (this.journalItem.vitamin_c * 100) * this.journalItem.noServings;
            this.journalItem.iron = (this.journalItem.iron * 100) * this.journalItem.noServings;
            this.journalItem.calcium = (this.journalItem.calcium * 100) * this.journalItem.noServings;
            this.journalItem.serving_weight_grams = 100 * this.journalItem.noServings;
        }
        else if (this.journalItem.selectedServingSize == 4) {
            this.journalItem.selectedServingType = "1.0 " + this.journalItem.itemName;
            this.journalItem.defaultServingSize = null;
            this.journalItem.calories = this.journalItem.calories * this.journalItem.noServings;
            this.journalItem.fat = this.journalItem.fat * this.journalItem.noServings;
            this.journalItem.carbs = this.journalItem.carbs * this.journalItem.noServings;
            this.journalItem.protein = this.journalItem.protein * this.journalItem.noServings;
            this.journalItem.saturated_fat = this.journalItem.saturated_fat * this.journalItem.noServings;
            this.journalItem.trans_fatty_acid = this.journalItem.trans_fatty_acid * this.journalItem.noServings;
            this.journalItem.polyunsaturated_fat = this.journalItem.polyunsaturated_fat * this.journalItem.noServings;
            this.journalItem.monounsaturated_fat = this.journalItem.monounsaturated_fat * this.journalItem.noServings;
            this.journalItem.cholesterol = this.journalItem.cholesterol * this.journalItem.noServings;
            this.journalItem.sodium = this.journalItem.sodium * this.journalItem.noServings;
            this.journalItem.dietary_fiber = this.journalItem.dietary_fiber * this.journalItem.noServings;
            this.journalItem.sugars = this.journalItem.sugars * this.journalItem.noServings;
            this.journalItem.vitamin_a = this.journalItem.vitamin_a * this.journalItem.noServings;
            this.journalItem.vitamin_c = this.journalItem.vitamin_c * this.journalItem.noServings;
            this.journalItem.iron = this.journalItem.iron * this.journalItem.noServings;
            this.journalItem.calcium = this.journalItem.calcium * this.journalItem.noServings;
        }
        else {
            console.log("error updating data");
        }
        this.view.dismiss({ journalItemObj: this.journalItem });
    };
    AddModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-modal',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\add-modal\add-modal.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="main-view">\n\n  <div class="modal_content">\n\n\n\n      <div id="popover">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                <p><b>{{ journalItem.itemName }} - {{journalItem.brandName}}</b></p>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                  <p>Servings</p>\n\n                <ion-item no-lines>\n\n                  <ion-input type="number" [(ngModel)]="journalItem.noServings"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n            <ion-col col-12>\n\n                <p>Serving Size</p>\n\n              <ion-item *ngIf="entryData.defaultServingSize > 0" no-lines>\n\n\n\n                      <ion-select [(ngModel)]="journalItem.selectedServingSize">\n\n                          <ion-option selected value="1">{{journalItem.defaultServingSize}}g</ion-option>\n\n                          <ion-option value="2">1g</ion-option>\n\n                          <ion-option value="3">100g</ion-option>\n\n                  \n\n                          \n\n                      </ion-select>\n\n                </ion-item> \n\n\n\n                     \n\n\n\n                 <ion-item *ngIf="entryData.defaultServingSize < 1" > \n\n                    <ion-label floating>Serving Size</ion-label>\n\n                    <ion-select  [(ngModel)]="journalItem.selectedServingSize">\n\n                          <ion-option selected value="4">1.0 ({{entryData.itemName}})</ion-option>\n\n                          \n\n\n\n                          \n\n                    </ion-select> \n\n                  \n\n                \n\n              </ion-item> \n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n      </div>\n\n\n\n  <button ion-button (click)="closeAddModal()">Close</button>\n\n  <button ion-button (click)="saveAddModal()" [disabled]="journalItem.noServings <= 0 || journalItem.noServings >= 500">Save</button>\n\n\n\n  </div>\n\n\n\n</ion-content> \n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\add-modal\add-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], AddModalPage);
    return AddModalPage;
}());

//# sourceMappingURL=add-modal.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MacroBreakdownPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MacroBreakdownPage = /** @class */ (function () {
    function MacroBreakdownPage(navCtrl, navParams, fireStore, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireStore = fireStore;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.now = new Date();
        this.journalItem = {};
        this.goalMacros = {};
        this.remainingMacros = {};
        var newDate = this.navParams.get('newDate');
        if (newDate != null) {
            this.now = newDate;
        }
        this.getEntries();
        this.getGoalData();
    }
    MacroBreakdownPage_1 = MacroBreakdownPage;
    MacroBreakdownPage.prototype.ionViewDidLoad = function () {
    };
    MacroBreakdownPage.prototype.getEntries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fireStore.collection("journalEntries", function (ref) {
                            return ref.where("owner", "==", __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid).where("created", "==", _this.now.toDateString());
                        }).valueChanges().subscribe(function (entries) {
                            console.log(entries);
                            _this.getTotalMacroCount(entries);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MacroBreakdownPage.prototype.getGoalData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userDocID').then(function (docID) {
                            _this.fireStore.collection("/users/" + docID + "/goals").valueChanges().subscribe(function (goals) {
                                console.log(goals);
                                _this.assignGoalData(goals);
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MacroBreakdownPage.prototype.getTotalMacroCount = function (entryList) {
        this.journalItem.protein = 0;
        this.journalItem.carbs = 0;
        this.journalItem.fat = 0;
        this.journalItem.saturated_fat = 0;
        this.journalItem.trans_fatty_acid = 0;
        this.journalItem.polyunsaturated_fat = 0;
        this.journalItem.monounsaturated_fat = 0;
        this.journalItem.cholesterol = 0;
        this.journalItem.sodium = 0;
        this.journalItem.dietary_fiber = 0;
        this.journalItem.sugars = 0;
        this.journalItem.vitamin_a = 0;
        this.journalItem.vitamin_c = 0;
        this.journalItem.calcium = 0;
        this.journalItem.iron = 0;
        for (var _i = 0, entryList_1 = entryList; _i < entryList_1.length; _i++) {
            var entry = entryList_1[_i];
            this.journalItem.protein += entry.protein;
            this.journalItem.carbs += entry.carbs;
            this.journalItem.fat += entry.fat;
            this.journalItem.saturated_fat += entry.saturated_fat;
            this.journalItem.trans_fatty_acid += entry.trans_fatty_acid;
            this.journalItem.polyunsaturated_fat += entry.polyunsaturated_fat;
            this.journalItem.monounsaturated_fat += entry.monounsaturated_fat;
            this.journalItem.cholesterol += entry.cholesterol;
            this.journalItem.sodium += entry.sodium;
            this.journalItem.dietary_fiber += entry.dietary_fiber;
            this.journalItem.sugars += entry.sugars;
            this.journalItem.vitamin_a += entry.vitamin_a;
            this.journalItem.vitamin_c += entry.vitamin_c;
            this.journalItem.calcium += entry.calcium;
            this.journalItem.iron += entry.iron;
        }
    };
    MacroBreakdownPage.prototype.assignGoalData = function (goalData) {
        this.goalMacros.protein = 0;
        this.goalMacros.fat = 0;
        this.goalMacros.carbs = 0;
        this.goalMacros.saturated_fat = 17;
        this.goalMacros.trans_fatty_acid = 0;
        this.goalMacros.polyunsaturated_fat = 0;
        this.goalMacros.monounsaturated_fat = 0;
        this.goalMacros.cholesterol = 300;
        this.goalMacros.sodium = 2300;
        this.goalMacros.dietary_fiber = 38;
        this.goalMacros.sugars = 56;
        this.goalMacros.vitamin_a = 100;
        this.goalMacros.vitamin_c = 100;
        this.goalMacros.calcium = 100;
        this.goalMacros.iron = 100;
        for (var _i = 0, goalData_1 = goalData; _i < goalData_1.length; _i++) {
            var goal = goalData_1[_i];
            this.goalMacros.protein = goal.goalProtein | 0;
            this.goalMacros.fat = goal.goalFat | 0;
            this.goalMacros.carbs = goal.goalCarbs | 0;
        }
    };
    MacroBreakdownPage.prototype.increment = function () {
        this.now.setDate(this.now.getDate() + 1);
        console.log(this.now);
        this.navCtrl.setRoot(MacroBreakdownPage_1, { newDate: this.now });
    };
    MacroBreakdownPage.prototype.decrement = function () {
        this.now.setDate(this.now.getDate() - 1);
        console.log(this.now);
        this.navCtrl.setRoot(MacroBreakdownPage_1, { newDate: this.now });
    };
    MacroBreakdownPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MacroBreakdownPage = MacroBreakdownPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-macro-breakdown',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\macro-breakdown\macro-breakdown.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n\n\n      <ion-buttons end>\n\n          <button ion-button icon-only clear (click)="close()">\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n    <ion-title>Macro Breakdown</ion-title>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button icon-only (click)="decrement()">\n\n                <ion-icon name="arrow-dropleft"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>{{now | date:\'EEEE, MMM d\'}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="increment()">\n\n              <ion-icon name="arrow-dropright"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n\n\n<div class="container">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n\n\n      </ion-col>\n\n      <ion-col>\n\n        <h4 style="float: right">Total</h4>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h4 style="float: right">Goal</h4>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h4 style="float: right">Left</h4>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Protein</h4>\n\n            </ion-col>\n\n            <ion-col size="2">\n\n              <p>{{(journalItem.protein | number) || 0}}</p>\n\n            </ion-col>\n\n            <ion-col size="2">\n\n              <p>{{(goalMacros.protein | number)  || 0}}</p>\n\n            </ion-col>\n\n            <ion-col size="2">\n\n              <p>{{(goalMacros.protein  - journalItem.protein).toFixed(1)  || 0}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col width-25 size="12">\n\n              <h4>Carbohydrates</h4>\n\n            </ion-col>\n\n            <ion-col align-self-center>\n\n              <p>{{(journalItem.carbs | number) || 0}}</p>\n\n              </ion-col>\n\n              <ion-col size="2">\n\n                  <p>{{(goalMacros.carbs | number) || 0}}</p>\n\n              </ion-col>\n\n              <ion-col size="2">\n\n                <p>{{(goalMacros.carbs  - journalItem.carbs).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Fat</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.fat | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.fat | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.fat  - journalItem.fat).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Saturated fat</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.saturated_fat | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.saturated_fat | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.saturated_fat  - journalItem.saturated_fat).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Trans fatty acid</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.trans_fatty_acid | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.trans_fatty_acid | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.trans_fatty_acid  - journalItem.trans_fatty_acid).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Polyunsaturated fat</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.polyunsaturated_fat | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.polyunsaturated_fat | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.polyunsaturated_fat  - journalItem.polyunsaturated_fat).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Monounsaturated fat</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.monounsaturated_fat | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.monounsaturated_fat | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.monounsaturated_fat  - journalItem.monounsaturated_fat).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Cholesterol</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.cholesterol | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.cholesterol | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.cholesterol  - journalItem.cholesterol).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Sodium</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.sodium | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.sodium | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.sodium  - journalItem.sodium).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Dietary fiber</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.dietary_fiber | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.dietary_fiber | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.dietary_fiber  - journalItem.dietary_fiber).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Vitamin_a</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.vitamin_a | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.vitamin_a | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.vitamin_a  - journalItem.vitamin_a).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Vitamin_c</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.vitamin_c | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.vitamin_c | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.vitamin_c  - journalItem.vitamin_c).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Calcium</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.calcium | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.calcium | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.calcium  - journalItem.calcium).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-row>\n\n          <ion-col size="6">\n\n            <h4>Sugars</h4>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p>{{(journalItem.sugars | number:\'.1-1\') || 0}}</p>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(goalMacros.sugars | number:\'.1-1\') || 0}}</p>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(goalMacros.sugars  - journalItem.sugars).toFixed(1)  || 0}}</p>\n\n            </ion-col>\n\n        </ion-row>\n\n  </ion-item>\n\n    <ion-item>\n\n        <ion-row>\n\n            <ion-col size="6">\n\n              <h4>Iron</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p>{{(journalItem.iron | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.iron | number:\'.1-1\') || 0}}</p>\n\n              </ion-col>\n\n              <ion-col>\n\n                <p>{{(goalMacros.iron  - journalItem.iron).toFixed(1)  || 0}}</p>\n\n              </ion-col>\n\n          </ion-row>\n\n    </ion-item>\n\n  </ion-grid>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\macro-breakdown\macro-breakdown.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], MacroBreakdownPage);
    return MacroBreakdownPage;
    var MacroBreakdownPage_1;
}());

//# sourceMappingURL=macro-breakdown.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditModalPage = /** @class */ (function () {
    function EditModalPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.journalItem = {};
    }
    EditModalPage.prototype.closeEditModal = function () {
        this.journalItem.calories = this.entryData.calories;
        this.journalItem.carbs = this.entryData.carbs;
        this.journalItem.fat = this.entryData.fat;
        this.journalItem.protein = this.entryData.protein;
        this.journalItem.saturated_fat = this.entryData.saturated_fat;
        this.journalItem.trans_fatty_acid = this.entryData.trans_fatty_acid;
        this.journalItem.polyunsaturated_fat = this.entryData.polyunsaturated_fat;
        this.journalItem.monounsaturated_fat = this.entryData.monounsaturated_fat;
        this.journalItem.cholesterol = this.entryData.cholesterol;
        this.journalItem.sodium = this.entryData.sodium;
        this.journalItem.dietary_fiber = this.entryData.dietary_fiber;
        this.journalItem.sugars = this.entryData.sugars;
        this.journalItem.vitamin_a = this.entryData.vitamin_a;
        this.journalItem.vitamin_c = this.entryData.vitamin_c;
        this.journalItem.calcium = this.entryData.calcium;
        this.journalItem.iron = this.entryData.iron;
        this.journalItem.selectedServingType = this.entryData.selectedServingType;
        this.journalItem.selectedServingSize = this.entryData.selectedServingSize;
        this.journalItem.serving_weight_grams = this.entryData.serving_weight_grams;
        this.journalItem.noServings = this.entryData.noServings;
        this.journalItem.defaultServingSize = this.entryData.defaultServingSize;
        this.view.dismiss({ journalItemObj: this.journalItem });
    };
    EditModalPage.prototype.saveEditModal = function () {
        if (this.journalItem.selectedServingSize == 1) {
            this.journalItem.selectedServingType = String(this.journalItem.defaultServingSize) + "g";
            this.journalItem.calories = (this.journalItem.calories * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.fat = (this.journalItem.fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.carbs = (this.journalItem.carbs * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.protein = (this.journalItem.protein * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.saturated_fat = (this.journalItem.saturated_fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.trans_fatty_acid = (this.journalItem.trans_fatty_acid * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.polyunsaturated_fat = (this.journalItem.polyunsaturated_fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.monounsaturated_fat = (this.journalItem.monounsaturated_fat * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.cholesterol = (this.journalItem.cholesterol * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.sodium = (this.journalItem.sodium * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.dietary_fiber = (this.journalItem.dietary_fiber * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.sugars = (this.journalItem.sugars * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.vitamin_a = (this.journalItem.vitamin_a * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.vitamin_c = (this.journalItem.vitamin_c * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.iron = (this.journalItem.iron * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.calcium = (this.journalItem.calcium * this.journalItem.defaultServingSize) * this.journalItem.noServings;
            this.journalItem.serving_weight_grams = this.journalItem.defaultServingSize * this.journalItem.noServings;
        }
        else if (this.journalItem.selectedServingSize == 2) {
            this.journalItem.selectedServingType = "1g";
            this.journalItem.calories = this.journalItem.calories * this.journalItem.noServings;
            this.journalItem.fat = this.journalItem.fat * this.journalItem.noServings;
            this.journalItem.carbs = this.journalItem.carbs * this.journalItem.noServings;
            this.journalItem.protein = this.journalItem.protein * this.journalItem.noServings;
            this.journalItem.saturated_fat = this.journalItem.saturated_fat * this.journalItem.noServings;
            this.journalItem.trans_fatty_acid = this.journalItem.trans_fatty_acid * this.journalItem.noServings;
            this.journalItem.polyunsaturated_fat = this.journalItem.polyunsaturated_fat * this.journalItem.noServings;
            this.journalItem.monounsaturated_fat = this.journalItem.monounsaturated_fat * this.journalItem.noServings;
            this.journalItem.cholesterol = this.journalItem.cholesterol * this.journalItem.noServings;
            this.journalItem.sodium = this.journalItem.sodium * this.journalItem.noServings;
            this.journalItem.dietary_fiber = this.journalItem.dietary_fiber * this.journalItem.noServings;
            this.journalItem.sugars = this.journalItem.sugars * this.journalItem.noServings;
            this.journalItem.vitamin_a = this.journalItem.vitamin_a * this.journalItem.noServings;
            this.journalItem.vitamin_c = this.journalItem.vitamin_c * this.journalItem.noServings;
            this.journalItem.iron = this.journalItem.iron * this.journalItem.noServings;
            this.journalItem.calcium = this.journalItem.calcium * this.journalItem.noServings;
            this.journalItem.serving_weight_grams = 1 * this.journalItem.noServings;
        }
        else if (this.journalItem.selectedServingSize == 3) {
            this.journalItem.selectedServingType = "100g";
            this.journalItem.calories = (this.journalItem.calories * 100) * this.journalItem.noServings;
            this.journalItem.fat = (this.journalItem.fat * 100) * this.journalItem.noServings;
            this.journalItem.carbs = (this.journalItem.carbs * 100) * this.journalItem.noServings;
            this.journalItem.protein = (this.journalItem.protein * 100) * this.journalItem.noServings;
            this.journalItem.saturated_fat = (this.journalItem.saturated_fat * 100) * this.journalItem.noServings;
            this.journalItem.trans_fatty_acid = (this.journalItem.trans_fatty_acid * 100) * this.journalItem.noServings;
            this.journalItem.polyunsaturated_fat = (this.journalItem.polyunsaturated_fat * 100) * this.journalItem.noServings;
            this.journalItem.monounsaturated_fat = (this.journalItem.monounsaturated_fat * 100) * this.journalItem.noServings;
            this.journalItem.cholesterol = (this.journalItem.cholesterol * 100) * this.journalItem.noServings;
            this.journalItem.sodium = (this.journalItem.sodium * 100) * this.journalItem.noServings;
            this.journalItem.dietary_fiber = (this.journalItem.dietary_fiber * 100) * this.journalItem.noServings;
            this.journalItem.sugars = (this.journalItem.sugars * 100) * this.journalItem.noServings;
            this.journalItem.vitamin_a = (this.journalItem.vitamin_a * 100) * this.journalItem.noServings;
            this.journalItem.vitamin_c = (this.journalItem.vitamin_c * 100) * this.journalItem.noServings;
            this.journalItem.iron = (this.journalItem.iron * 100) * this.journalItem.noServings;
            this.journalItem.calcium = (this.journalItem.calcium * 100) * this.journalItem.noServings;
            this.journalItem.serving_weight_grams = 100 * this.journalItem.noServings;
        }
        else if (this.journalItem.selectedServingSize == 4) {
            this.journalItem.selectedServingType = "1.0 " + this.journalItem.itemName;
            this.journalItem.defaultServingSize = null;
            this.journalItem.calories = this.journalItem.calories * this.journalItem.noServings;
            this.journalItem.fat = this.journalItem.fat * this.journalItem.noServings;
            this.journalItem.carbs = this.journalItem.carbs * this.journalItem.noServings;
            this.journalItem.protein = this.journalItem.protein * this.journalItem.noServings;
            this.journalItem.saturated_fat = this.journalItem.saturated_fat * this.journalItem.noServings;
            this.journalItem.trans_fatty_acid = this.journalItem.trans_fatty_acid * this.journalItem.noServings;
            this.journalItem.polyunsaturated_fat = this.journalItem.polyunsaturated_fat * this.journalItem.noServings;
            this.journalItem.monounsaturated_fat = this.journalItem.monounsaturated_fat * this.journalItem.noServings;
            this.journalItem.cholesterol = this.journalItem.cholesterol * this.journalItem.noServings;
            this.journalItem.sodium = this.journalItem.sodium * this.journalItem.noServings;
            this.journalItem.dietary_fiber = this.journalItem.dietary_fiber * this.journalItem.noServings;
            this.journalItem.sugars = this.journalItem.sugars * this.journalItem.noServings;
            this.journalItem.vitamin_a = this.journalItem.vitamin_a * this.journalItem.noServings;
            this.journalItem.vitamin_c = this.journalItem.vitamin_c * this.journalItem.noServings;
            this.journalItem.iron = this.journalItem.iron * this.journalItem.noServings;
            this.journalItem.calcium = this.journalItem.calcium * this.journalItem.noServings;
            this.journalItem.serving_weight_grams = null;
        }
        else {
            console.log("error updating data");
        }
        this.view.dismiss({ journalItemObj: this.journalItem });
    };
    EditModalPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('data');
        console.log(data.defaultServingSize);
        this.entryData = data;
        this.journalItem.itemName = data.itemName;
        this.journalItem.brandName = data.brandName;
        // For one gram
        if (data.defaultServingSize != null) {
            this.journalItem.calories = Number(data.calories / data.defaultServingSize);
            this.journalItem.fat = Number(data.fat / data.defaultServingSize);
            this.journalItem.carbs = Number(data.carbs / data.defaultServingSize);
            this.journalItem.protein = Number(data.protein / data.defaultServingSize);
            this.journalItem.saturated_fat = Number(data.saturated_fat / data.defaultServingSize);
            this.journalItem.trans_fatty_acid = Number(data.trans_fatty_acid / data.defaultServingSize);
            this.journalItem.polyunsaturated_fat = Number(data.polyunsaturated_fat / data.defaultServingSize);
            this.journalItem.monounsaturated_fat = Number(data.monounsaturated_fat / data.defaultServingSize);
            this.journalItem.cholesterol = Number(data.cholesterol / data.defaultServingSize);
            this.journalItem.sodium = Number(data.sodium / data.defaultServingSize);
            this.journalItem.dietary_fiber = Number(data.dietary_fiber / data.defaultServingSize);
            this.journalItem.sugars = Number(data.sugars / data.defaultServingSize);
            this.journalItem.vitamin_a = Number(data.vitamin_a / data.defaultServingSize);
            this.journalItem.vitamin_c = Number(data.vitamin_c / data.defaultServingSize);
            this.journalItem.iron = Number(data.iron / data.defaultServingSize);
            this.journalItem.calcium = Number(data.calcium / data.defaultServingSize);
            this.journalItem.noServings = Number(data.noServings);
            this.journalItem.selectedServingSize = Number(data.selectedServingSize);
            this.journalItem.selectedServingType = data.selectedServingType;
            this.journalItem.defaultServingSize = data.defaultServingSize;
        }
        else {
            this.journalItem.calories = Number(data.calories / data.noServings);
            this.journalItem.fat = Number(data.fat / data.noServings);
            this.journalItem.carbs = Number(data.carbs / data.noServings);
            this.journalItem.protein = Number(data.protein / data.noServings);
            this.journalItem.saturated_fat = Number(data.saturated_fat / data.noServings);
            this.journalItem.trans_fatty_acid = Number(data.trans_fatty_acid / data.noServings);
            this.journalItem.polyunsaturated_fat = Number(data.polyunsaturated_fat / data.noServings);
            this.journalItem.monounsaturated_fat = Number(data.monounsaturated_fat / data.noServings);
            this.journalItem.cholesterol = Number(data.cholesterol / data.noServings);
            this.journalItem.sodium = Number(data.sodium / data.noServings);
            this.journalItem.dietary_fiber = Number(data.dietary_fiber / data.noServings);
            this.journalItem.sugars = Number(data.sugars / data.noServings);
            this.journalItem.vitamin_a = Number(data.vitamin_a / data.noServings);
            this.journalItem.vitamin_c = Number(data.vitamin_c / data.noServings);
            this.journalItem.iron = Number(data.iron / data.noServings);
            this.journalItem.calcium = Number(data.calcium / data.noServings);
            this.journalItem.noServings = Number(data.noServings);
            this.journalItem.selectedServingSize = Number(data.selectedServingSize);
            this.journalItem.selectedServingType = data.selectedServingType;
            this.journalItem.defaultServingSize = null;
        }
    };
    EditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-modal',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\edit-modal\edit-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Edit</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="main-view">\n\n  <div class="modal_content">\n\n\n\n    <div id="popover">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <p><b>{{ journalItem.itemName }} - {{journalItem.brandName}}</b></p>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <p>Servings</p>\n\n            <ion-item no-lines>\n\n              <ion-input type="number" [(ngModel)]="journalItem.noServings" min=1></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <p>Serving Size</p>\n\n            <ion-item *ngIf="entryData.defaultServingSize > 0 && journalItem.selectedServingSize == 1" no-lines>\n\n\n\n\n\n              <ion-select [(ngModel)]="journalItem.selectedServingSize">\n\n                <ion-option selected value="1">{{entryData.defaultServingSize}}g</ion-option>\n\n                <ion-option value="2">1g</ion-option>\n\n                <ion-option value="3">100g</ion-option>\n\n\n\n\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item *ngIf="entryData.defaultServingSize > 0 && journalItem.selectedServingSize == 2" no-lines>\n\n\n\n\n\n              <ion-select [(ngModel)]="journalItem.selectedServingSize">\n\n                <ion-option value="1">{{entryData.defaultServingSize}}g</ion-option>\n\n                <ion-option selected value="2">1g</ion-option>\n\n                <ion-option value="3">100g</ion-option>\n\n\n\n\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item *ngIf="entryData.defaultServingSize > 0 && journalItem.selectedServingSize == 3" no-lines>\n\n\n\n\n\n              <ion-select [(ngModel)]="journalItem.selectedServingSize">\n\n                <ion-option value="1">{{entryData.defaultServingSize}}g</ion-option>\n\n                <ion-option value="2">1g</ion-option>\n\n                <ion-option selected value="3">100g</ion-option>\n\n\n\n\n\n              </ion-select>\n\n\n\n\n\n\n\n\n\n            </ion-item>\n\n            <ion-item *ngIf="entryData.defaultServingSize < 1" no-lines>\n\n\n\n              <ion-select [(ngModel)]="journalItem.selectedServingSize">\n\n                <ion-option selected value="4">{{journalItem.selectedServingType}}</ion-option>\n\n\n\n\n\n\n\n              </ion-select>\n\n\n\n\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <button ion-button (click)="closeEditModal()">Close</button>\n\n    <button ion-button (click)="saveEditModal()"\n\n      [disabled]="journalItem.noServings <= 0 || journalItem.noServings >= 500">Save</button>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\edit-modal\edit-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], EditModalPage);
    return EditModalPage;
}());

//# sourceMappingURL=edit-modal.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMacrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goals_goals__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditMacrosPage = /** @class */ (function () {
    function EditMacrosPage(navCtrl, navParams, storage, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toast = toast;
        this.goalData = [];
        this.goals = {};
    }
    EditMacrosPage.prototype.calorieChange = function (event) {
        this.save();
    };
    EditMacrosPage.prototype.carbChange = function ($event) {
        console.log($event);
        this.goals.carbPercent = Number($event);
        this.save();
    };
    EditMacrosPage.prototype.proteinChange = function ($event) {
        console.log($event);
        this.goals.proteinPercent = Number($event);
        this.save();
    };
    EditMacrosPage.prototype.fatChange = function ($event) {
        console.log($event);
        this.goals.fatPercent = Number($event);
        this.save();
    };
    EditMacrosPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('goalData');
        this.data = data;
        if (this.data == 0) {
            this.goals.totalMatch = true;
            this.goals.goalCalories = 0;
            this.goals.goalFat = 0;
            this.goals.goalCarbs = 0;
            this.goals.goalProtein = 0;
            this.goals.proteinPercent = 0;
            this.goals.carbPercent = 0;
            this.goals.fatPercent = 0;
            this.goals.percentTotal = 0;
        }
        else {
            this.goals.goalCalories = data.data().goalCalories;
            this.goals.goalFat = data.data().goalFat;
            this.goals.goalCarbs = data.data().goalCarbs;
            this.goals.goalProtein = data.data().goalProtein;
            this.goals.proteinPercent = data.data().proteinPercent;
            this.goals.carbPercent = data.data().carbPercent;
            this.goals.fatPercent = data.data().fatPercent;
            this.goals.percentTotal = data.data().percentTotal;
            this.goals.totalMatch = data.data().totalMatch;
        }
    };
    EditMacrosPage.prototype.refresh = function () {
        window.location.reload();
    };
    EditMacrosPage.prototype.getGoalData = function () {
        var _this = this;
        this.storage.get('userDocID').then(function (val) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(val).collection('goals')
                .where("UID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                .get()
                .then(function (docs) {
                docs.forEach(function (doc) {
                    _this.goalData.push(doc);
                });
                console.log(_this.goalData);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    EditMacrosPage.prototype.save = function () {
        this.goals.percentTotal = this.goals.proteinPercent + this.goals.carbPercent + this.goals.fatPercent;
        // Carbs = 4cals, Protein = 4cals, Fat = 9cals per gram 
        this.goals.goalCarbs = (this.goals.goalCalories * this.goals.carbPercent) / 4;
        this.goals.goalProtein = (this.goals.goalCalories * this.goals.proteinPercent) / 4;
        this.goals.goalFat = (this.goals.goalCalories * this.goals.fatPercent) / 9;
    };
    EditMacrosPage.prototype.saveDataToFirebase = function () {
        var _this = this;
        this.storage.get('userDocID').then(function (val) {
            console.log('userDocID is: ', val);
            // Add Firestore UID to User collection
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(val).collection('goals').doc(_this.data.id)
                .update({
                goalCalories: Number(_this.goals.goalCalories),
                goalFat: Number(_this.goals.goalFat),
                goalCarbs: Number(_this.goals.goalCarbs),
                goalProtein: Number(_this.goals.goalProtein),
                totalMatch: _this.goals.totalMatch,
                proteinPercent: Number(_this.goals.proteinPercent),
                carbPercent: Number(_this.goals.carbPercent),
                fatPercent: Number(_this.goals.fatPercent),
                percentTotal: Number(_this.goals.percentTotal),
            }).then(function (doc) {
                console.log(doc);
            }).catch(function (err) {
                console.log(err);
            });
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__goals_goals__["a" /* GoalsPage */]);
        this.toast.create({
            message: "Macros Updated",
            duration: 3000,
            cssClass: "success"
        }).present();
    };
    EditMacrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-macros',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\edit-macros\edit-macros.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Edit Macros</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <h2 style="text-align: center">Daily Nutrition Goals</h2>\n\n    <ion-grid style="border: 1px solid black">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item no-lines>\n\n            <ion-label style="text-align: left">Calories:</ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item no-lines class="item">\n\n\n\n            <ion-input type="number" (input)=\'calorieChange($event.target.value)\' [(ngModel)]="goals.goalCalories">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Carbs: {{goals.goalCarbs.toFixed(1)}}g</ion-label>\n\n      <ion-select (ionChange)="carbChange($event)" [(ngModel)]="goals.carbPercent" style="text-align: right">\n\n        <ion-option value="0.05">5%</ion-option>\n\n        <ion-option value="0.10">10%</ion-option>\n\n        <ion-option value="0.15">15%</ion-option>\n\n        <ion-option value="0.20">20%</ion-option>\n\n        <ion-option value="0.25">25%</ion-option>\n\n        <ion-option value="0.30">30%</ion-option>\n\n        <ion-option value="0.35">35%</ion-option>\n\n        <ion-option value="0.40">40%</ion-option>\n\n        <ion-option value="0.45">45%</ion-option>\n\n        <ion-option value="0.50">50%</ion-option>\n\n        <ion-option value="0.55">55%</ion-option>\n\n        <ion-option value="0.60">60%</ion-option>\n\n        <ion-option value="0.65">65%</ion-option>\n\n        <ion-option value="0.70">70%</ion-option>\n\n        <ion-option value="0.75">75%</ion-option>\n\n        <ion-option value="0.80">80%</ion-option>\n\n        <ion-option value="0.85">85%</ion-option>\n\n        <ion-option value="0.90">90%</ion-option>\n\n        <ion-option value="0.95">95%</ion-option>\n\n        <ion-option value="1">100%</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Protein: {{goals.goalProtein.toFixed(1)}}g</ion-label>\n\n      <ion-select (ionChange)="proteinChange($event)" [(ngModel)]="goals.proteinPercent" style="text-align: right">\n\n        <ion-option value="0.05">5%</ion-option>\n\n        <ion-option value="0.10">10%</ion-option>\n\n        <ion-option value="0.15">15%</ion-option>\n\n        <ion-option value="0.20">20%</ion-option>\n\n        <ion-option value="0.25">25%</ion-option>\n\n        <ion-option value="0.30">30%</ion-option>\n\n        <ion-option value="0.35">35%</ion-option>\n\n        <ion-option value="0.40">40%</ion-option>\n\n        <ion-option value="0.45">45%</ion-option>\n\n        <ion-option value="0.50">50%</ion-option>\n\n        <ion-option value="0.55">55%</ion-option>\n\n        <ion-option value="0.60">60%</ion-option>\n\n        <ion-option value="0.65">65%</ion-option>\n\n        <ion-option value="0.70">70%</ion-option>\n\n        <ion-option value="0.75">75%</ion-option>\n\n        <ion-option value="0.80">80%</ion-option>\n\n        <ion-option value="0.85">85%</ion-option>\n\n        <ion-option value="0.90">90%</ion-option>\n\n        <ion-option value="0.95">95%</ion-option>\n\n        <ion-option value="1">100%</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Fat: {{goals.goalFat.toFixed(1)}}g</ion-label>\n\n      <ion-select (ionChange)="fatChange($event)" [(ngModel)]="goals.fatPercent" style="text-align: right">\n\n        <ion-option value="0.05">5%</ion-option>\n\n        <ion-option value="0.10">10%</ion-option>\n\n        <ion-option value="0.15">15%</ion-option>\n\n        <ion-option value="0.20">20%</ion-option>\n\n        <ion-option value="0.25">25%</ion-option>\n\n        <ion-option value="0.30">30%</ion-option>\n\n        <ion-option value="0.35">35%</ion-option>\n\n        <ion-option value="0.40">40%</ion-option>\n\n        <ion-option value="0.45">45%</ion-option>\n\n        <ion-option value="0.50">50%</ion-option>\n\n        <ion-option value="0.55">55%</ion-option>\n\n        <ion-option value="0.60">60%</ion-option>\n\n        <ion-option value="0.65">65%</ion-option>\n\n        <ion-option value="0.70">70%</ion-option>\n\n        <ion-option value="0.75">75%</ion-option>\n\n        <ion-option value="0.80">80%</ion-option>\n\n        <ion-option value="0.85">85%</ion-option>\n\n        <ion-option value="0.90">90%</ion-option>\n\n        <ion-option value="0.95">95%</ion-option>\n\n        <ion-option value="1">100%</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <p>% Total</p>\n\n            <p>Macronutrients must equal 100%</p>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 style="text-align: right; height: 10%">{{goals.percentTotal*100}}%</h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <div padding>\n\n    <button ion-button (click)="saveDataToFirebase()" [disabled]="goals.percentTotal != 1" round block>\n\n      Save\n\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\edit-macros\edit-macros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], EditMacrosPage);
    return EditMacrosPage;
}());

//# sourceMappingURL=edit-macros.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGoalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goals_goals__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditGoalsPage = /** @class */ (function () {
    function EditGoalsPage(navCtrl, navParams, fb, storage, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.storage = storage;
        this.formBuilder = formBuilder;
        //form validation_messages
        this.validation_messages = {
            'currentWeight': [
                { type: 'required', message: 'Name is required.' },
                { type: 'min', message: 'Not valid' },
            ],
            'goalWeight': [
                { type: 'required', message: 'Field is required.' },
                { type: 'min', message: 'Not valid' },
            ],
            'weeklyGoal': [
                { type: 'required', message: 'Field is required.' },
                { type: 'min', message: 'Not valid' },
            ],
            'height': [
                { type: 'required', message: 'Field is required.' },
                { type: 'min', message: 'Not valid' },
            ],
            'activityLevel': [
                { type: 'required', message: 'Field is required.' },
            ],
            'goal': [
                { type: 'required', message: 'Field is required.' }
            ]
        };
        this.progressData = [];
        this.goalData = [];
        this.userData = [];
        this.goals = {};
        this.getProgressData();
        this.goalsForm = this.formBuilder.group({
            currentWeight: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].min(1),
            ])),
            goalWeight: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].min(1),
            ])),
            weeklyGoal: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].min(0),
            ])),
            height: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].min(1),
            ])),
            activityLevel: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
            goal: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]))
        });
    }
    EditGoalsPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('goalData');
        this.data = data;
        if (this.data == 0) {
            this.goals.currentWeight = 0;
            this.goals.goalWeight = 0;
            this.goals.weeklyGoal = 0;
            this.goals.height = 0;
            this.goals.activityLevel = 1;
            this.goals.bmr = 0;
            this.goals.tdee = 0;
            this.goals.leanBodyMass = 0;
            this.goals.bodyFat = 0;
            this.goals.goalCalories = 0;
            this.goals.goalFat = 0;
            this.goals.goalCarbs = 0;
            this.goals.goalProtein = 0;
            this.goals.goal = 1;
            this.goals.totalMatch = true;
            this.goals.proteinPercent = 0;
            this.goals.carbPercent = 0;
            this.goals.fatPercent = 0;
            this.goals.percentTotal = 0;
        }
        else {
            this.goals.currentWeight = data.data().currentWeight;
            this.goals.goalWeight = data.data().goalWeight;
            this.goals.weeklyGoal = data.data().weeklyGoal;
            this.goals.height = data.data().height;
            this.goals.activityLevel = data.data().activityLevel;
            this.goals.bmr = data.data().bmr;
            this.goals.tdee = data.data().tdee;
            this.goals.leanBodyMass = data.data().leanBodyMass;
            this.goals.bodyFat = data.data().bodyFat;
            this.goals.goalCalories = data.data().goalCalories;
            this.goals.goalFat = data.data().goalFat;
            this.goals.goalCarbs = data.data().goalCarbs;
            this.goals.goalProtein = data.data().goalProtein;
            this.goals.goal = data.data().goal;
            this.goals.proteinPercent = data.data().proteinPercent;
            this.goals.carbPercent = data.data().carbPercent;
            this.goals.fatPercent = data.data().fatPercent;
            this.goals.percentTotal = data.data().percentTotal;
            this.goals.totalMatch = data.data().totalMatch;
        }
    };
    EditGoalsPage.prototype.getProgressData = function () {
        var _this = this;
        this.storage.get('userDocID').then(function (val) {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(val).collection('progress')
                .get()
                .then(function (docs) {
                docs.forEach(function (doc) {
                    _this.progressData.push(doc);
                    console.log("Hello");
                    console.log(_this.progressData);
                });
                console.log(_this.progressData);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    EditGoalsPage.prototype.splitTimestamp = function () {
        // Remove time from time stamp and keeping date
        var todaysDate = new Date();
        var todaysDateString = String(todaysDate);
        var todaysDateSplit = todaysDateString.split(' ').slice(0, 4).join(' ');
        return todaysDateSplit;
    };
    EditGoalsPage.prototype.getGoalData = function () {
        var _this = this;
        this.storage.get('userDocID').then(function (val) {
            console.log('userDocID is: ', val);
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(val).collection('goals')
                .where("UID", "==", __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid)
                .get()
                .then(function (docs) {
                docs.forEach(function (doc) {
                    _this.goalData.push(doc);
                });
                console.log(_this.goalData);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    EditGoalsPage.prototype.save = function () {
        var _this = this;
        if (this.data == 0) {
            this.storage.get('userDocID').then(function (val) {
                console.log('userDocID is: ', val);
                // Add Firestore UID to User collection
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(val).collection('goals').doc(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid).set({
                    UID: __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid,
                    currentWeight: Number(_this.goals.currentWeight),
                    goalWeight: Number(_this.goals.goalWeight),
                    weeklyGoal: Number(_this.goals.weeklyGoal),
                    height: Number(_this.goals.height),
                    activityLevel: Number(_this.goals.activityLevel),
                    bmr: Number(_this.goals.bmr),
                    tdee: Number(_this.goals.tdee),
                    leanBodyMass: Number(_this.goals.leanBodyMass),
                    bodyFat: Number(_this.goals.bodyFat),
                    goalCalories: Number(_this.goals.goalCalories),
                    goalFat: Number(_this.goals.goalFat),
                    goalCarbs: Number(_this.goals.goalCarbs),
                    goalProtein: Number(_this.goals.goalProtein),
                    goal: Number(_this.goals.goal),
                    totalMatch: _this.goals.totalMatch,
                    proteinPercent: Number(_this.goals.proteinPercent),
                    carbPercent: Number(_this.goals.carbPercent),
                    fatPercent: Number(_this.goals.fatPercent),
                    percentTotal: Number(_this.goals.percentTotal),
                }).then(function (doc) {
                    console.log(doc);
                }).catch(function (err) {
                    console.log(err);
                });
            });
            this.storage.get('userDocID').then(function (docID) {
                if (_this.progressData.length == 0) {
                    console.log("Reaches here");
                    __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(docID).collection('progress').add({
                        currentWeight: Number(_this.goals.currentWeight),
                        weightUpdated: _this.splitTimestamp()
                    }).then(function (doc) {
                        console.log(doc);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
                var match = _this.progressData.find(function (e) { return e.data().weightUpdated === _this.splitTimestamp(); });
                console.log(match);
                if (match == null) {
                    console.log("Not found");
                    __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(docID).collection('progress').add({
                        currentWeight: Number(_this.goals.currentWeight),
                        weightUpdated: _this.splitTimestamp()
                    }).then(function (doc) {
                        console.log(doc);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
                else {
                    console.log("Found");
                    __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(docID).collection('progress').doc(match.id).update({
                        currentWeight: Number(_this.goals.currentWeight),
                        weightUpdated: _this.splitTimestamp()
                    }).then(function (doc) {
                        console.log(doc);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            });
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__goals_goals__["a" /* GoalsPage */]);
        }
        else {
            //BMR
            //TDEE
            this.storage.get('age').then(function (val) {
                var age = val;
                _this.storage.get('sex').then(function (val) {
                    var sex = val;
                    //BMR
                    //Female
                    if (sex.toUpperCase() == "FEMALE") {
                        _this.goals.bmr = 655 + (9.6 * _this.goals.currentWeight) + (1.8 * _this.goals.height) - (4.7 * age);
                    }
                    else {
                        _this.goals.bmr = 66 + (13.7 * _this.goals.currentWeight) + (5 * _this.goals.height) - (6.8 * age);
                    }
                    //TDEE
                    //Sedentary
                    if (_this.goals.activityLevel == 1) {
                        _this.goals.tdee = _this.goals.bmr * 1.2;
                    }
                    else if (_this.goals.activityLevel == 2) {
                        _this.goals.tdee = _this.goals.bmr * 1.375;
                    }
                    else if (_this.goals.activityLevel == 3) {
                        _this.goals.tdee = _this.goals.bmr * 1.55;
                    }
                    else if (_this.goals.activityLevel == 4) {
                        _this.goals.tdee = _this.goals.bmr * 1.725;
                    }
                    else {
                        _this.goals.tdee = _this.goals.bmr * 1.9;
                    }
                    // Calories based on goals
                    //Maintain
                    if (_this.goals.goal == 1) {
                        _this.goals.goalCalories = _this.goals.tdee;
                    }
                    else if (_this.goals.goal == 2) {
                        _this.goals.goalCalories = _this.goals.tdee - 250;
                    }
                    else if (_this.goals.goal == 3) {
                        _this.goals.goalCalories = _this.goals.tdee + 250;
                    }
                    // Macros Initial Split 40/40/20
                    _this.goals.fatPercent = 0.20;
                    _this.goals.proteinPercent = 0.40;
                    _this.goals.carbPercent = 0.40;
                    // Carbs = 4cals, Protein = 4cals, Fat = 9cals per gram 
                    _this.goals.goalCarbs = (_this.goals.goalCalories * _this.goals.carbPercent) / 4;
                    _this.goals.goalProtein = (_this.goals.goalCalories * _this.goals.proteinPercent) / 4;
                    _this.goals.goalFat = (_this.goals.goalCalories * _this.goals.fatPercent) / 9;
                    _this.goals.percentTotal = _this.goals.proteinPercent + _this.goals.carbPercent + _this.goals.fatPercent;
                    _this.storage.get('userDocID').then(function (val) {
                        // Add Firestore UID to User collection
                        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(val).collection('goals').doc(_this.data.id)
                            .update({
                            UID: __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid,
                            currentWeight: Number(_this.goals.currentWeight),
                            goalWeight: Number(_this.goals.goalWeight),
                            weeklyGoal: Number(_this.goals.weeklyGoal),
                            height: Number(_this.goals.height),
                            activityLevel: Number(_this.goals.activityLevel),
                            bmr: Number(_this.goals.bmr),
                            tdee: Number(_this.goals.tdee),
                            leanBodyMass: Number(_this.goals.leanBodyMass),
                            bodyFat: Number(_this.goals.bodyFat),
                            goalCalories: Number(_this.goals.goalCalories.toFixed(0)),
                            goalFat: Number(_this.goals.goalFat.toFixed(1)),
                            goalCarbs: Number(_this.goals.goalCarbs.toFixed(1)),
                            goalProtein: Number(_this.goals.goalProtein.toFixed(1)),
                            goal: Number(_this.goals.goal),
                            totalMatch: _this.goals.totalMatch,
                            proteinPercent: Number(_this.goals.proteinPercent),
                            carbPercent: Number(_this.goals.carbPercent),
                            fatPercent: Number(_this.goals.fatPercent),
                            percentTotal: Number(_this.goals.percentTotal),
                        }).then(function (doc) {
                            console.log(doc);
                        }).catch(function (err) {
                            console.log(err);
                        });
                    });
                    _this.storage.get('userDocID').then(function (docID) {
                        if (_this.progressData.length == 0) {
                            console.log("Reaches here");
                            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(docID).collection('progress').add({
                                currentWeight: Number(_this.goals.currentWeight),
                                weightUpdated: _this.splitTimestamp()
                            }).then(function (doc) {
                                console.log(doc);
                            }).catch(function (err) {
                                console.log(err);
                            });
                        }
                        var match = _this.progressData.find(function (e) { return e.data().weightUpdated === _this.splitTimestamp(); });
                        console.log(match);
                        if (match == null) {
                            console.log("Not found");
                            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(docID).collection('progress').add({
                                currentWeight: Number(_this.goals.currentWeight),
                                weightUpdated: _this.splitTimestamp()
                            }).then(function (doc) {
                                console.log(doc);
                            }).catch(function (err) {
                                console.log(err);
                            });
                        }
                        else {
                            console.log("Found");
                            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(docID).collection('progress').doc(match.id).update({
                                currentWeight: Number(_this.goals.currentWeight),
                                weightUpdated: _this.splitTimestamp()
                            }).then(function (doc) {
                                console.log(doc);
                            }).catch(function (err) {
                                console.log(err);
                            });
                        }
                    });
                });
            });
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__goals_goals__["a" /* GoalsPage */]);
        }
    };
    EditGoalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-goals',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\edit-goals\edit-goals.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Goals</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="container">\n\n\n\n    <div class="scroll" id="tony">\n\n      <form [formGroup]="goalsForm">\n\n        <ion-list>\n\n\n\n          <ion-grid>\n\n\n\n            <ion-row>\n\n\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Current Weight(kg)</ion-label>\n\n                  <ion-input formControlName="currentWeight" type="number" [(ngModel)]="goals.currentWeight"\n\n                    [class.invalid]="!goalsForm.controls.currentWeight.valid && goalsForm.controls.currentWeight.touched"\n\n                    placeholder="Kg"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.currentWeight">\n\n                    <div class="error-message"\n\n                      *ngIf="goalsForm.get(\'currentWeight\').hasError(validation.type) && (goalsForm.get(\'currentWeight\').dirty || goalsForm.get(\'currentWeight\').touched)">\n\n                      {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n              </ion-col>\n\n\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Goal Weight(kg)</ion-label>\n\n                  <ion-input formControlName="goalWeight" type="number" [(ngModel)]="goals.goalWeight"\n\n                    [class.invalid]="!goalsForm.controls.goalWeight.valid && goalsForm.controls.goalWeight.touched"\n\n                    placeholder="Kg"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.goalWeight">\n\n                    <div class="error-message"\n\n                      *ngIf="goalsForm.get(\'goalWeight\').hasError(validation.type) && (goalsForm.get(\'goalWeight\').dirty || goalsForm.get(\'goalWeight\').touched)">\n\n                      {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n\n\n                <ion-item>\n\n                  <ion-label floating>Height(cm)</ion-label>\n\n\n\n                  <ion-input formControlName="height" type="number" [(ngModel)]="goals.height"\n\n                    [class.invalid]="!goalsForm.controls.height.valid && goalsForm.controls.height.touched"\n\n                    placeholder="cm"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.height">\n\n                    <div class="error-message"\n\n                      *ngIf="goalsForm.get(\'height\').hasError(validation.type) && (goalsForm.get(\'height\').dirty || goalsForm.get(\'height\').touched)">\n\n                      {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label floating>Weekly Goal(kg)</ion-label>\n\n                  <ion-input formControlName="weeklyGoal" type="number" [(ngModel)]="goals.weeklyGoal"\n\n                    [class.invalid]="!goalsForm.controls.weeklyGoal.valid && goalsForm.controls.weeklyGoal.touched"\n\n                    placeholder="Kg"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.weeklyGoal">\n\n                    <div class="error-message"\n\n                      *ngIf="goalsForm.get(\'weeklyGoal\').hasError(validation.type) && (goalsForm.get(\'weeklyGoal\').dirty || goalsForm.get(\'weeklyGoal\').touched)">\n\n                      {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n\n\n\n\n\n\n          <ion-item>\n\n            <ion-label floating>Activity Level</ion-label>\n\n            <ion-select formControlName="activityLevel"\n\n              [class.invalid]="!goalsForm.controls.activityLevel.valid && goalsForm.controls.activityLevel.touched"\n\n              [(ngModel)]="goals.activityLevel">\n\n              <ion-option value="1">Sedentary</ion-option>\n\n              <ion-option value="2">Lightly active</ion-option>\n\n              <ion-option value="3">Moderately active</ion-option>\n\n              <ion-option value="4">Very active</ion-option>\n\n              <ion-option value="5">Extremely active</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label name="goal" floating>Fitness Goal</ion-label>\n\n            <ion-select formControlName="goal"\n\n              [class.invalid]="!goalsForm.controls.goal.valid && goalsForm.controls.goal.touched"\n\n              [(ngModel)]="goals.goal">\n\n              <ion-option value="1">Maintain Weight</ion-option>\n\n              <ion-option value="2">Lose Weight</ion-option>\n\n              <ion-option value="3">Gain Weight</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n\n\n\n\n        </ion-list>\n\n      </form>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<div class="floating">\n\n  <button ion-button block gradient-left box-shadow (click)="save()" [disabled]="!goalsForm.valid">Update\n\n    Profile</button>\n\n</div>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\edit-goals\edit-goals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditGoalsPage);
    return EditGoalsPage;
}());

//# sourceMappingURL=edit-goals.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fAuth, formBuilder, toastCtrl, alertCtrl, loadingCtrl) {
        // this.getUserDetails();
        // this.checkUserRole();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fAuth = fAuth;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.userDetails = [];
        this.type = 'password';
        this.showPass = false;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Invalid email address.' },
            ],
            'password': [
                { type: 'minLength', message: 'Password must be at least 6 characters long.' },
                { type: 'pattern', message: 'Your Password must contain Upercase, Lowercase numbers.' },
                { type: 'required', message: 'Password is required.' }
            ],
        };
        this.myForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required
                //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
            ]))
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)];
                    case 1:
                        r = _a.sent();
                        if (r) {
                            console.log("Successfully logged in!");
                            this.presentToast();
                            this.presentLoadingText();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.code !== "") {
                            if (error_1.code == "auth/user-not-found") {
                                this.EmailpresentToast();
                            }
                            console.error(error_1);
                            if (error_1.code == "auth/wrong-password") {
                                this.PasspresentToast();
                            }
                            console.error(error_1);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gotoregister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Login successfully',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage.prototype.EmailpresentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Email wrong',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage.prototype.PasspresentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'password wrong',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    LoginPage.prototype.presentLoadingText = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait a moment...'
        });
        loading.present();
        setTimeout(function () {
        }, 2000);
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__menu_menu__["a" /* MenuPage */]);
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\login\login.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="myForm">\n\n    <ion-list padding text-center>\n\n      <div text-center>\n\n        <img style=" border-radius: 100%; width: 50%;" src="../assets/imgs/PC.jpg"/>\n\n        <h1>PocketCoach</h1>\n\n      </div>\n\n      <ion-item>\n\n        <ion-label color="primary">\n\n        <ion-icon name="mail"></ion-icon>\n\n        </ion-label>\n\n        <ion-input placeholder="Email address" formControlName="email" type="text" [(ngModel)]="user.email" [class.invalid]="!myForm.controls.email.valid && myForm.controls.email.touched"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.email" >\n\n          <div class="error-message" *ngIf="myForm.get(\'email\').hasError(validation.type) && (myForm.get(\'email\').dirty || myForm.get(\'email\').touched)">\n\n        {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n      <ion-item>\n\n        <ion-label color="primary">\n\n        <ion-icon name="lock"></ion-icon>\n\n        </ion-label>\n\n        <ion-input placeholder="Password" formControlName="password" type="{{type}}" [(ngModel)]="user.password" [class.invalid]="!myForm.controls.password.valid && myForm.controls.password.touched"></ion-input>\n\n        <button *ngIf="!showPass" ion-button clear icon-only item-right color="primary" type="button" item-right (click)="showPassword()"> <ion-icon name="ios-eye-off-outline"></ion-icon></button>\n\n        <button *ngIf="showPass" ion-button clear icon-only item-right color="primary" type="button" item-right (click)="showPassword()"> <ion-icon name="ios-eye-outline"></ion-icon></button>\n\n\n\n      </ion-item>\n\n\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.password" >\n\n          <div style="color: \'#fff\'" class="error-message" *ngIf="myForm.get(\'password\').hasError(validation.type) && (myForm.get(\'password\').dirty || myForm.get(\'password\').touched)">\n\n        {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n    </ion-list>\n\n\n\n  </form>\n\n\n\n  <button class="loginBtn" ion-button (click)="login()" [disabled]="!myForm.valid" round block>\n\n    Login\n\n  </button>\n\n  <ion-label padding (click)="goToResetPassword()" text-left>Forgot your password?</ion-label>\n\n\n\n  <button ion-button (click)="gotoregister()" clear block>Don\'t have an account? Sign Up</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_journal_journal__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_goals_goals__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trainers_trainers__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trainerhub_trainerhub__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__client_list_client_list__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feed_feed__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__trainer_apps_trainer_apps__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_firestore__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, storage, firebaseCordova, fireStore) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.firebaseCordova = firebaseCordova;
        this.fireStore = fireStore;
        this.rootPage = "LoginPage";
        this.pages = [];
        this.user = {};
        this.users = [];
        this.test = [];
        this.getEntries();
        this.firebaseCordova.getToken().then(function (token) {
            console.log(token);
            _this.updateToken(token, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
        }).catch(function (err) {
            console.log(err);
        });
    }
    MenuPage.prototype.updateToken = function (token, uid) {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("userTokens").doc(uid).set({
            token: token,
            tokenUpdate: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore.FieldValue.serverTimestamp()
        }, {
            merge: true
        }).then(function () {
            console.log("token saved to firestore");
        }).catch(function (err) {
            console.log(err);
        });
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fireStore.doc("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).valueChanges().subscribe(function (profile) {
            _this.user.displayName = profile.displayName;
            _this.user.image = profile.image;
        });
    };
    MenuPage.prototype.getEntries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users")
                            .where("UID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                            .get()
                            .then(function (docs) {
                            docs.forEach(function (doc) {
                                _this.users.push(doc);
                            });
                        }).catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.checkUserRole()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.checkUserRole = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.storage.set('userDocID', entry.id);
            this.storage.set('sex', entry.data().sex);
            this.storage.set('age', entry.data().age);
            this.storage.set('role', entry.data().role);
            if (entry.data().role == 0) {
                this.pages = [
                    { title: 'Home', page: 'AdminHomePage', icon: 'home' }
                ];
                this.openPage('AdminHomePage');
                console.log("Admin");
            }
            else if (entry.data().role == 1) {
                this.pages = [
                    { title: 'Profile', page: __WEBPACK_IMPORTED_MODULE_10__profile_profile__["a" /* ProfilePage */], icon: 'person' },
                    { title: 'Journal', page: __WEBPACK_IMPORTED_MODULE_3__pages_journal_journal__["a" /* JournalPage */], icon: "create" },
                    { title: 'Goals', page: __WEBPACK_IMPORTED_MODULE_4__pages_goals_goals__["a" /* GoalsPage */], icon: 'podium' },
                    { title: 'Trainers', page: __WEBPACK_IMPORTED_MODULE_6__trainers_trainers__["a" /* TrainersPage */], icon: 'contacts' },
                    { title: 'TrainerHub', page: __WEBPACK_IMPORTED_MODULE_7__trainerhub_trainerhub__["a" /* TrainerhubPage */], icon: 'trophy' },
                ];
                this.openPage(__WEBPACK_IMPORTED_MODULE_3__pages_journal_journal__["a" /* JournalPage */]);
                console.log("Client");
            }
            else {
                this.pages = [
                    { title: 'Profile', page: __WEBPACK_IMPORTED_MODULE_10__profile_profile__["a" /* ProfilePage */], icon: 'person' },
                    { title: 'Client List', page: __WEBPACK_IMPORTED_MODULE_8__client_list_client_list__["a" /* ClientListPage */], icon: 'contacts' },
                    { title: 'Group Feed', page: __WEBPACK_IMPORTED_MODULE_11__feed_feed__["a" /* FeedPage */], icon: 'paper' },
                    { title: 'Appointments', page: __WEBPACK_IMPORTED_MODULE_12__trainer_apps_trainer_apps__["a" /* TrainerAppsPage */], icon: 'calendar' }
                ];
                this.openPage(__WEBPACK_IMPORTED_MODULE_8__client_list_client_list__["a" /* ClientListPage */]);
                console.log("Trainer");
            }
        }
    };
    MenuPage.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MenuPage.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("userTokens").doc(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).delete()
            .catch(function (err) {
            console.log(err);
        });
        this.navCtrl.setRoot('LoginPage');
        window.location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n\n\n    <ion-header>\n\n  \n\n        <ion-toolbar color="primary">\n\n            <ion-title>Menu</ion-title>\n\n          </ion-toolbar>\n\n      \n\n      </ion-header>\n\n  \n\n      <ion-content>\n\n          <ion-list>\n\n              <ion-item lines>\n\n                  <ion-avatar >\n\n                      <img [src]="user.image" *ngIf="user.image"/>\n\n                      <img src="../assets/imgs/person.jpg" *ngIf="!user.image">\n\n                  </ion-avatar>\n\n                  <h2>{{user.displayName}}</h2>\n\n              </ion-item>\n\n            <button ion-item detail-non block menuClose *ngFor="let p of pages" (click)="openPage(p.page)">\n\n              <ion-icon item-start [name]="p.icon"></ion-icon>\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n  \n\n        <ion-footer>\n\n          <ion-toolbar color="primary">\n\n            <ion-row>\n\n             \n\n                  <button ion-button full clear ion-left (click)="logout()" style="font-size: 20px; margin-left:10px; color: white">\n\n                      <ion-icon name="exit" style="font-size: 20px; margin-right: 5px"></ion-icon>\n\n                      Logout\n\n                  </button>\n\n             \n\n  \n\n            </ion-row>\n\n          </ion-toolbar>\n\n        </ion-footer>\n\n  \n\n  </ion-menu>\n\n  \n\n  \n\n  \n\n  \n\n  \n\n  <ion-nav #content main [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_13__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__renew_payment_renew_payment__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, storage, fireStore, camara, http, modal, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fireStore = fireStore;
        this.camara = camara;
        this.http = http;
        this.modal = modal;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        //form validation_messages
        this.validation_messages = {
            'displayName': [
                { type: 'required', message: 'Name is required.' },
                { type: 'minLength', message: 'Username must be at least 6 characters long.' },
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Invalid email address.' },
            ],
            'firstName': [
                { type: 'minLength', message: 'First name must be at least 2 characters long' },
                { type: 'required', message: 'Field name is required.' }
            ],
            'surname': [
                { type: 'minLength', message: 'Surname must be at least 2 characters long.' },
                { type: 'required', message: 'Field is required.' }
            ],
            'sex': [
                { type: 'required', message: 'Field is required.' }
            ],
            'age': [
                { type: 'required', message: 'Age is required.' },
                { type: 'min', message: 'Age not valid.' },
                { type: 'max', message: 'Not valid' }
            ],
            'country': [
                { type: 'required', message: 'Field is required.' }
            ],
            'city': [
                { type: 'required', message: 'Field is required.' }
            ],
            'certification': [
                { type: 'required', message: 'Field is required.' }
            ],
            'experience': [
                { type: 'required', message: 'Field is required.' },
                { type: 'min', message: 'Not valid' },
                { type: 'max', message: 'Not valid' }
            ],
            'specialties': [
                { type: 'required', message: 'Field is required.' }
            ],
            'price': [
                { type: 'required', message: 'Field is required.' },
                { type: 'min', message: 'Not valid' },
                { type: 'max', message: 'Not valid' }
            ],
            'duration': [
                { type: 'required', message: 'Field is required.' },
                { type: 'min', message: 'Not valid' },
                { type: 'max', message: 'Not valid' }
            ],
            'maxClients': [
                { type: 'required', message: 'Field is required.' },
                { type: 'min', message: 'Not valid' },
                { type: 'max', message: 'Not valid' }
            ]
        };
        this.user = {};
        // this.assignData();
        // this.getUserData();
        this.assignData();
        this.myForm = this.formBuilder.group({
            displayName: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].minLength(6),
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            firstName: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required
            ])),
            surname: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required
            ])),
            age: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].min(1),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].max(150),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required
            ])),
            country: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required
            ])),
            city: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required
            ]))
        });
        // Achievements form 
        this.achiForm = this.formBuilder.group({
            certification: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].maxLength(30),
            ])),
            experience: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].min(0),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required
            ])),
            specialties: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].maxLength(40),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required
            ]))
        });
        // Sub form 
        this.subForm = this.formBuilder.group({
            price: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].min(0),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].max(500)
            ])),
            duration: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].min(7),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].max(365),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required
            ])),
            maxClients: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].min(1),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].max(500),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* Validators */].required
            ]))
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.openRenewModal = function () {
        var date = new Date(this.user.expiryDate);
        var renewModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__renew_payment_renew_payment__["a" /* RenewPaymentPage */], { newExpiryDate: this.addDays(date, this.user.duration), Price: this.user.price, Duration: this.user.duration });
        renewModal.present();
    };
    ProfilePage.prototype.assignData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('userDocID').then(function (docID) {
                            _this.users = _this.fireStore.doc("/users/" + docID).valueChanges().subscribe(function (profile) {
                                _this.user.displayName = profile.displayName;
                                _this.user.firstName = profile.firstName;
                                _this.user.surname = profile.surname;
                                _this.user.age = profile.age;
                                _this.user.city = profile.city;
                                _this.user.country = profile.country;
                                _this.user.email = profile.email;
                                _this.user.role = profile.role;
                                _this.user.price = profile.price;
                                _this.user.clientCount = profile.clientCount;
                                _this.user.maxClients = profile.maxClients;
                                _this.user.experience = profile.experience;
                                _this.user.specialties = profile.specialties;
                                _this.user.certification = profile.certification;
                                _this.user.image = profile.image;
                                _this.user.expiryDate = profile.expiryDate;
                                _this.user.duration = profile.duration;
                                _this.user.hasPaid = profile.hasPaid;
                                // this.user.trainerId = profile.trainerID;
                                var trainerUID = profile.trainerID;
                                if (profile.role == 1 && profile.hasPaid == true) {
                                    _this.getTrainer(trainerUID);
                                    _this.subscriptionExpiry(profile.expiryDate);
                                }
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.getTrainer = function (trainerUID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users")
                            .where("UID", "==", trainerUID)
                            .get()
                            .then(function (docs) {
                            docs.forEach(function (doc) {
                                _this.user.duration = doc.data().duration;
                                _this.user.price = doc.data().price;
                            });
                        }).catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.subscriptionExpiry = function (days) {
        var today = new Date();
        var expiry = new Date(days);
        var diff = expiry.valueOf() - today.valueOf();
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        this.subExpiry = diffDays;
    };
    ProfilePage.prototype.addDays = function (date, days) {
        date.setDate(date.getDate() + days);
        return date.toDateString().split(' ').slice(1, 4).join(' ');
    };
    ProfilePage.prototype.renewSub = function () {
        var _this = this;
        this.storage.get('userDocID').then(function (docID) {
            var date = new Date(_this.user.expiryDate);
            _this.addDays(date, _this.user.duration);
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(docID).update({
                expiryDate: _this.addDays(date, _this.user.duration)
            }).then(function (doc) {
                console.log(doc);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    // Updating Profile
    ProfilePage.prototype.save = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: "Profile updated."
        });
        this.storage.get('userDocID').then(function (docID) {
            if (_this.user.role == 1) {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(docID).update({
                    displayName: _this.user.displayName,
                    firstName: _this.user.firstName,
                    surname: _this.user.surname,
                    age: Number(_this.user.age),
                    email: _this.user.email,
                    country: _this.user.country,
                    city: _this.user.city
                }).then(function (doc) {
                    console.log(doc);
                    if (_this.image) {
                        _this.upload();
                    }
                    // if (this.user.image) {
                    //   firebase.firestore().collection("users").doc(this.user.trainerId).collection("clientList").doc(firebase.auth().currentUser.uid).update({
                    //     image: this.user.image,
                    //   }).then((doc) => {
                    //     console.log(doc)
                    //   }).catch((err) => {
                    //     console.log(err)
                    //   })
                    // }
                }).catch(function (err) {
                    console.log(err);
                });
            }
            else {
                if (_this.user.clientCount >= _this.user.maxClients) {
                    _this.user.isAvailable = false;
                    _this.user.spacesLeft = _this.user.maxClients - _this.user.clientCount;
                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(docID).update({
                        displayName: _this.user.displayName,
                        firstName: _this.user.firstName,
                        surname: _this.user.surname,
                        age: Number(_this.user.age),
                        email: _this.user.email,
                        country: _this.user.country,
                        city: _this.user.city,
                        price: Number(_this.user.price),
                        clientCount: Number(_this.user.clientCount),
                        maxClients: Number(_this.user.maxClients),
                        spacesLeft: Number(_this.user.spacesLeft),
                        isAvailable: _this.user.isAvailable,
                        specialties: _this.user.specialties,
                        experience: Number(_this.user.experience),
                        certification: _this.user.certification,
                        duration: Number(_this.user.duration)
                    }).then(function (doc) {
                        console.log(doc);
                        if (_this.image) {
                            _this.upload();
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.user.isAvailable = true;
                    _this.user.spacesLeft = _this.user.maxClients - _this.user.clientCount;
                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(docID).update({
                        displayName: _this.user.displayName,
                        firstName: _this.user.firstName,
                        surname: _this.user.surname,
                        age: Number(_this.user.age),
                        email: _this.user.email,
                        country: _this.user.country,
                        city: _this.user.city,
                        price: Number(_this.user.price),
                        clientCount: Number(_this.user.clientCount),
                        maxClients: Number(_this.user.maxClients),
                        spacesLeft: Number(_this.user.spacesLeft),
                        isAvailable: _this.user.isAvailable,
                        specialties: _this.user.specialties,
                        experience: Number(_this.user.experience),
                        certification: _this.user.certification,
                        duration: Number(_this.user.duration)
                    }).then(function (doc) {
                        console.log(doc);
                        if (_this.image) {
                            _this.upload();
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            }
        });
        toast.present();
        setTimeout(function () {
            toast.dismiss();
        }, 5000);
    };
    ProfilePage.prototype.addPhoto = function () {
        this.launchCamara();
    };
    ProfilePage.prototype.launchCamara = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camara.PictureSourceType.CAMERA,
            destinationType: this.camara.DestinationType.DATA_URL,
            encodingType: this.camara.EncodingType.PNG,
            mediaType: this.camara.MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 512,
            targetWidth: 512,
            allowEdit: true
        };
        this.camara.getPicture(options).then(function (toBase64String) {
            console.log(toBase64String);
            _this.image = "data:image/png;base64," + toBase64String;
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.upload = function () {
        var _this = this;
        this.storage.get('userDocID').then(function (docID) {
            return new Promise(function (resolve, reject) {
                var ref = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref("profilePictures/" + docID);
                var uploadTask = ref.putString(_this.image.split(',')[1], "base64");
                uploadTask.on("state_changed", function (taskSnapshot) {
                    console.log(taskSnapshot);
                }, function (error) {
                    console.log(error);
                }, function () {
                    console.log("The upload is completed!");
                    uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(docID).update({
                            image: url
                        }).then(function () {
                            resolve();
                        }).catch(function (err) {
                            reject();
                        });
                    }).catch(function (err) {
                        reject();
                    });
                });
            });
        });
    };
    ProfilePage.prototype.cancelSub = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users")
            .where("UID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
            .get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                // Get trainer related to client
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").where("UID", "==", doc.data().trainerID).get()
                    .then(function (docs2) {
                    docs2.forEach(function (doc2) {
                        var isAvailable = doc2.data().isAvailable;
                        var spacesLeft = doc2.data().spacesLeft + 1;
                        var clientCount = doc2.data().clientCount - 1;
                        if (isAvailable === false) {
                            isAvailable === true;
                        }
                        else {
                            isAvailable === isAvailable;
                        }
                        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(doc2.id).update({
                            isAvailable: isAvailable,
                            spacesLeft: spacesLeft,
                            clientCount: clientCount
                        }).then(function () {
                            // Delete client from clientList
                            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(doc2.id).collection("clientList").doc(doc.data().UID).delete()
                                .then(function () {
                                // Delete Trainer details from client table
                                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(doc.id).update({
                                    hasPaid: false,
                                    trainerName: "",
                                    trainerID: "",
                                    expiryDate: ""
                                }).then(function () {
                                    // Delete Previous Messages 
                                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("chat").doc(doc.data().UID).collection("messages").get()
                                        .then(function (docs3) {
                                        docs3.forEach(function (doc3) {
                                            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("chat").doc(doc.data().UID).collection('messages').doc(doc3.id).delete()
                                                .then(function () {
                                                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("chat").doc(doc.data().UID).delete()
                                                    .catch(function (err) {
                                                    console.log(err);
                                                });
                                            }).catch(function (err) {
                                                console.log(err);
                                            });
                                        });
                                    }).catch(function (err) {
                                        console.log(err);
                                    });
                                }).catch(function (err) {
                                    console.log(err);
                                });
                            }).catch(function (err) {
                                console.log(err);
                            });
                        }).catch(function (err) {
                            console.log(err);
                        });
                    });
                }).catch(function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
        // Delete appointments
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("appointments").where("clientID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("appointments").doc(doc.id).delete()
                    .catch(function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
        // Delete TrainerHub collection
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("trainerHub").where("clientUID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("trainerHub").doc(doc.id).delete()
                    .catch(function (err) {
                    console.log(err);
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\profile\profile.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Profile</ion-title>\n\n    </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n    <div class="container custom-floating-form" >\n\n          <div class="user-image" (click)="addPhoto()">\n\n            <img [src]="image" *ngIf="image">\n\n            <img [src]="user.image" *ngIf="user.image && !image">\n\n            <img src="../assets/imgs/person.jpg" *ngIf="!user.image && !image">\n\n          </div>\n\n           <h2>{{user.displayName}}</h2>\n\n \n\n        <div class="scroll">\n\n   \n\n          \n\n            <form [formGroup]="myForm">\n\n          \n\n                    <ion-card class="about">\n\n                        <h2>About Me</h2>\n\n                        <ion-list>\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                    \n\n                                <ion-item no-lines style="background-color: #10C488">\n\n                                  <ion-label style="text-align: left;">Display Name:</ion-label>\n\n                                  <ion-input style="color: white" formControlName="displayName" type="text" [(ngModel)]="user.displayName" [class.invalid]="!myForm.controls.displayName.valid && myForm.controls.displayName.touched" placeholder="Display Name"></ion-input>\n\n                                </ion-item>\n\n                                <div class="validation-errors">\n\n                                    <ng-container *ngFor="let validation of validation_messages.displayName" >\n\n                                      <div class="error-message" *ngIf="myForm.get(\'displayName\').hasError(validation.type) && (myForm.get(\'displayName\').dirty || myForm.get(\'displayName\').touched)">\n\n                                    {{ validation.message }}\n\n                                      </div>\n\n                                    </ng-container>\n\n                                  </div>\n\n                          \n\n                            </ion-row>\n\n                            <ion-row>\n\n                              \n\n                                <ion-item no-lines style="background-color: #10C488">\n\n                                  <ion-label style="text-align: left;">First Name:</ion-label>\n\n                                  <ion-input formControlName="firstName" type="text" [(ngModel)]="user.firstName" [class.invalid]="!myForm.controls.firstName.valid && myForm.controls.firstName.touched" placeholder="Forename"></ion-input>\n\n                                </ion-item>\n\n                                <div class="validation-errors">\n\n                                  <ng-container *ngFor="let validation of validation_messages.firstName" >\n\n                                    <div class="error-message" *ngIf="myForm.get(\'firstName\').hasError(validation.type) && (myForm.get(\'firstName\').dirty || myForm.get(\'firstName\').touched)">\n\n                                  {{ validation.message }}\n\n                                    </div>\n\n                                  </ng-container>\n\n                                </div>\n\n                          \n\n                            </ion-row>\n\n          \n\n                            <ion-row>\n\n                              \n\n                                <ion-item no-lines style="background-color: #10C488">\n\n                                  <ion-label style="text-align: left;">Surname:</ion-label>\n\n                                  <ion-input formControlName="surname" type="text" [(ngModel)]="user.surname" [class.invalid]="!myForm.controls.surname.valid && myForm.controls.surname.touched" placeholder="Surname"></ion-input>\n\n                                </ion-item>\n\n                                <div class="validation-errors">\n\n                                  <ng-container *ngFor="let validation of validation_messages.surname" >\n\n                                    <div class="error-message" *ngIf="myForm.get(\'surname\').hasError(validation.type) && (myForm.get(\'surname\').dirty || myForm.get(\'surname\').touched)">\n\n                                  {{ validation.message }}\n\n                                    </div>\n\n                                  </ng-container>\n\n                                </div>\n\n                          \n\n                            </ion-row>\n\n          \n\n                            <ion-row>\n\n                              \n\n                                <ion-item no-lines style="background-color: #10C488">\n\n                                  <ion-label style="text-align: left;">Age:</ion-label>\n\n                                  <ion-input formControlName="age" min="0" max="110" type="number" [(ngModel)]="user.age" [class.invalid]="!myForm.controls.age.valid && myForm.controls.age.touched" placeholder="Age"></ion-input>\n\n                                </ion-item>\n\n                                <div class="validation-errors">\n\n                                  <ng-container *ngFor="let validation of validation_messages.age" >\n\n                                    <div class="error-message" *ngIf="myForm.get(\'age\').hasError(validation.type) && (myForm.get(\'age\').dirty || myForm.get(\'age\').touched)">\n\n                                  {{ validation.message }}\n\n                                    </div>\n\n                                  </ng-container>\n\n                                </div>\n\n                          \n\n                            </ion-row>\n\n          \n\n                            <ion-row>\n\n                              \n\n                                <ion-item no-lines style="background-color: #10C488">\n\n                                  <ion-label style="text-align: left;">Email:</ion-label>\n\n                                  <ion-input formControlName="email" type="text" [(ngModel)]="user.email" [class.invalid]="!myForm.controls.email.valid && myForm.controls.email.touched" placeholder="Email"></ion-input>\n\n                                </ion-item>\n\n                                <div class="validation-errors">\n\n                                  <ng-container *ngFor="let validation of validation_messages.email" >\n\n                                    <div class="error-message" *ngIf="myForm.get(\'email\').hasError(validation.type) && (myForm.get(\'email\').dirty || myForm.get(\'email\').touched)">\n\n                                  {{ validation.message }}\n\n                                    </div>\n\n                                  </ng-container>\n\n                                </div>\n\n                          \n\n                            </ion-row>\n\n          \n\n                            <!-- <ion-row>\n\n                              \n\n                                <ion-item no-lines style="background-color: #10C488">\n\n                                  <ion-label style="text-align: left; color: white">Password:</ion-label>\n\n                                  <ion-input type="text" [(ngModel)]="user.password"></ion-input>\n\n                                </ion-item>\n\n                          \n\n                            </ion-row> -->\n\n          \n\n                            <ion-row>\n\n                              \n\n                                <ion-item no-lines style="background-color: #10C488">\n\n                                  <ion-label style="text-align: left;">Country:</ion-label>\n\n                                  <ion-input formControlName="country" type="text" [(ngModel)]="user.country" [class.invalid]="!myForm.controls.country.valid && myForm.controls.country.touched" placeholder="Country"></ion-input>\n\n                                </ion-item>\n\n                                <div class="validation-errors">\n\n                                  <ng-container *ngFor="let validation of validation_messages.country" >\n\n                                    <div class="error-message" *ngIf="myForm.get(\'country\').hasError(validation.type) && (myForm.get(\'country\').dirty || myForm.get(\'country\').touched)">\n\n                                  {{ validation.message }}\n\n                                    </div>\n\n                                  </ng-container>\n\n                                </div>\n\n                          \n\n                            </ion-row>\n\n          \n\n                            <ion-row>\n\n                              \n\n                                <ion-item no-lines style="background-color: #10C488">\n\n                                  <ion-label style="text-align: left;">City:</ion-label>\n\n                                  <ion-input formControlName="city" type="text" [(ngModel)]="user.city" [class.invalid]="!myForm.controls.city.valid && myForm.controls.city.touched" placeholder="City"></ion-input>\n\n                                </ion-item>\n\n                                <div class="validation-errors">\n\n                                  <ng-container *ngFor="let validation of validation_messages.city" >\n\n                                    <div class="error-message" *ngIf="myForm.get(\'city\').hasError(validation.type) && (myForm.get(\'city\').dirty || myForm.get(\'city\').touched)">\n\n                                  {{ validation.message }}\n\n                                    </div>\n\n                                  </ng-container>\n\n                                </div>\n\n                          \n\n                            </ion-row>\n\n          \n\n                          </ion-grid>\n\n                        </ion-list>\n\n                    </ion-card> \n\n                   \n\n              </form>\n\n\n\n\n\n        <form [formGroup]="achiForm">\n\n          <ion-card class="achievements" *ngIf="user.role == 2">\n\n            <h2>Achievements</h2>\n\n        \n\n            <ion-row>\n\n        \n\n              <ion-item no-lines style="background-color: #10C488">\n\n                <ion-label style="text-align: left;color: #4d4d4d">Certification:</ion-label>\n\n                <ion-input formControlName="certification" type="text" [(ngModel)]="user.certification"\n\n                  [class.invalid]="!achiForm.controls.certification.valid && achiForm.controls.certification.touched"\n\n                  placeholder="Certification"></ion-input>\n\n              </ion-item>\n\n              <div class="validation-errors">\n\n                <ng-container *ngFor="let validation of validation_messages.certification">\n\n                  <div class="error-message"\n\n                    *ngIf="achiForm.get(\'certification\').hasError(validation.type) && (achiForm.get(\'certification\').dirty || achiForm.get(\'certification\').touched)">\n\n                    {{ validation.message }}\n\n                  </div>\n\n                </ng-container>\n\n              </div>\n\n            </ion-row>\n\n        \n\n        \n\n        \n\n            <ion-row>\n\n        \n\n              <ion-item no-lines style="background-color: #10C488">\n\n                <ion-label style="text-align: left;color: #4d4d4d">Years of Experience:</ion-label>\n\n                <ion-input formControlName="experience" type="number" [(ngModel)]="user.experience"\n\n                  [class.invalid]="!achiForm.controls.experience.valid && achiForm.controls.experience.touched"\n\n                  placeholder="Experience"></ion-input>\n\n              </ion-item>\n\n              <div class="validation-errors">\n\n                <ng-container *ngFor="let validation of validation_messages.experience">\n\n                  <div class="error-message"\n\n                    *ngIf="achiForm.get(\'experience\').hasError(validation.type) && (achiForm.get(\'experience\').dirty || achiForm.get(\'experience\').touched)">\n\n                    {{ validation.message }}\n\n                  </div>\n\n                </ng-container>\n\n              </div>\n\n        \n\n            </ion-row>\n\n            \n\n            <ion-row>\n\n            \n\n              <ion-item no-lines style="background-color: #10C488">\n\n                <ion-label style="text-align: left;color: #4d4d4d">Specialties:</ion-label>\n\n              <ion-input formControlName="specialties" type="text" [(ngModel)]="user.specialties"\n\n                [class.invalid]="!achiForm.controls.specialties.valid && achiForm.controls.specialties.touched"\n\n                placeholder="Specialties"></ion-input>\n\n              </ion-item>\n\n              <div class="validation-errors">\n\n                <ng-container *ngFor="let validation of validation_messages.specialties">\n\n                  <div class="error-message"\n\n                    *ngIf="achiForm.get(\'specialties\').hasError(validation.type) && (achiForm.get(\'specialties\').dirty || achiForm.get(\'specialties\').touched)">\n\n                    {{ validation.message }}\n\n                  </div>\n\n                </ng-container>\n\n              </div>\n\n\n\n\n\n            </ion-row>\n\n        \n\n          </ion-card>\n\n        </form>\n\n\n\n        <form [formGroup]="subForm">\n\n          <ion-card class="subscription">\n\n            <h2>Subscription Details</h2>\n\n           \n\n            <ion-grid *ngIf="user.role == 2">\n\n                <ion-row>\n\n                      \n\n                  <ion-item no-lines style="background-color: #10C488">\n\n                    <ion-label style="text-align: left;color: #4d4d4d">Price:</ion-label>\n\n                  <ion-input formControlName="price" type="number" [(ngModel)]="user.price"\n\n                  [class.invalid]="!subForm.controls.price.valid && subForm.controls.price.touched"\n\n                  placeholder="Price"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.price">\n\n                    <div class="error-message"\n\n                      *ngIf="subForm.get(\'price\').hasError(validation.type) && (subForm.get(\'price\').dirty || subForm.get(\'price\').touched)">\n\n                      {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n              </ion-row>\n\n\n\n              <ion-row>\n\n                      \n\n                  <ion-item no-lines style="background-color: #10C488">\n\n                    <ion-label style="text-align: left;color: #4d4d4d">Duration(Days):</ion-label>\n\n                  <ion-input formControlName="duration" type="number" [(ngModel)]="user.duration"\n\n                  [class.invalid]="!subForm.controls.duration.valid && subForm.controls.duration.touched"\n\n                  placeholder="Duration"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.duration">\n\n                    <div class="error-message"\n\n                      *ngIf="subForm.get(\'duration\').hasError(validation.type) && (subForm.get(\'duration\').dirty || subForm.get(\'duration\').touched)">\n\n                      {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n              </ion-row>\n\n\n\n              <ion-row>\n\n                      \n\n                <ion-item no-lines style="background-color: #10C488">\n\n                  <ion-label style="text-align: left;color: #4d4d4d">Max Clients:</ion-label>\n\n                <ion-input formControlName="maxClients" type="number" [(ngModel)]="user.maxClients"\n\n                [class.invalid]="!subForm.controls.maxClients.valid && subForm.controls.maxClients.touched"\n\n                placeholder="Max Clients"></ion-input>\n\n              </ion-item>\n\n              <div class="validation-errors">\n\n                <ng-container *ngFor="let validation of validation_messages.maxClients">\n\n                  <div class="error-message"\n\n                    *ngIf="subForm.get(\'maxClients\').hasError(validation.type) && (subForm.get(\'maxClients\').dirty || subForm.get(\'maxClients\').touched)">\n\n                    {{ validation.message }}\n\n                  </div>\n\n                </ng-container>\n\n              </div>\n\n          \n\n            </ion-row>\n\n       \n\n\n\n            <ion-row style="background-color: #10C488; margin: 8px">            \n\n \n\n                <p style="text-align: left; color: #4d4d4d; font-size: 16px; margin-right: 8px; padding-left: 10px">Client Count: </p> <p style="text-align: right; color: white; font-size: 17px">{{user.clientCount}}</p>\n\n\n\n        \n\n          </ion-row>\n\n          </ion-grid>\n\n\n\n          <ion-grid *ngIf="user.role == 1 && user.hasPaid == true">\n\n              <ion-row style="background-color: #10C488; margin: 8px">\n\n\n\n                <p style="text-align: left; color: #4d4d4d; font-size: 17px; margin-right: 8px;">Expiry Date: </p> <p style="text-align: right; color: white; font-size: 17px">{{user.expiryDate}}</p>\n\n\n\n              </ion-row>\n\n\n\n              <ion-row style="background-color: #10C488; margin: 8px">\n\n\n\n                  <p style="text-align: left; color: #4d4d4d; font-size: 17px; margin-right: 8px;">Time Remaining: </p> <p style="text-align: right; color: white; font-size: 17px">{{subExpiry}} days</p>\n\n  \n\n                </ion-row>\n\n          </ion-grid>\n\n\n\n          <ion-grid *ngIf="user.role == 1 && user.hasPaid == false">\n\n              <ion-row style="background-color: #10C488; margin: 8px">\n\n\n\n                <p style="text-align: left; color: #4d4d4d; font-size: 17px; margin-right: 8px;">No active subscription </p>\n\n\n\n              </ion-row>\n\n\n\n            \n\n          </ion-grid>\n\n\n\n          <div class="floating" *ngIf="user.role == 1 && user.hasPaid == true">\n\n              <button ion-button block gradient-left box-shadow (click)="openRenewModal()">Renew Subscription</button>\n\n          </div>\n\n\n\n          <div class="cancel" *ngIf="user.role == 1 && user.hasPaid == true">\n\n            <button ion-button block gradient-left box-shadow (click)="cancelSub()">Cancel Subscription</button>\n\n        </div>\n\n         \n\n\n\n        </ion-card>\n\n          \n\n\n\n\n\n      </form>\n\n\n\n       \n\n\n\n        </div>\n\n    </div>\n\n    <div class="floating" *ngIf="user.role == 1">\n\n      <button ion-button block gradient-left box-shadow (click)="save()" [disabled]="!myForm.valid">Update Profile</button>\n\n  </div>\n\n\n\n  <div class="floating" *ngIf="user.role == 2">\n\n      <button ion-button block gradient-left box-shadow (click)="save()" [disabled]="!myForm.valid || !subForm.valid || !achiForm.valid">Update Profile</button>\n\n  </div>\n\n  </ion-content>\n\n\n\n  \n\n    '/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenewPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RenewPaymentPage = /** @class */ (function () {
    function RenewPaymentPage(navCtrl, navParams, storage, fireStore, http, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fireStore = fireStore;
        this.http = http;
        this.view = view;
        this.user = {};
        this.users = [];
        this.token = '';
        this.ngForm = {
            cc: "",
            cvc: "",
            month: "",
            year: "",
            amount: ""
        };
        this.hasPaid = false;
        Stripe.setPublishableKey('pk_test_r48revO6ivJFIShuQpqCoNxM00fFFQA1qP');
        this.newExpiryDate = this.navParams.get('newExpiryDate');
        this.price = this.navParams.get('Price');
        this.duration = this.navParams.get('Duration');
    }
    RenewPaymentPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.ngForm);
        Stripe.card.createToken({
            number: this.ngForm.cc,
            cvc: this.ngForm.cvc,
            exp_month: this.ngForm.month,
            exp_year: this.ngForm.year //2020,
        }, function (status, response) {
            return _this.stripeResponseHandler(status, response);
        });
    };
    RenewPaymentPage.prototype.stripeResponseHandler = function (status, response) {
        var _this = this;
        if (response.error) {
            // Show the errors on the form
            console.log('error');
            console.log(response.error.message);
        }
        else {
            // response contains id and card, which contains
            //additional card details
            this.token = response.id;
            // Insert the token into the form so it gets
            //submitted to the server
            console.log('success');
            console.log('Sending token param:');
            console.log(this.token);
            this.storage.get('userDocID').then(function (docID) {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(docID).update({
                    expiryDate: _this.newExpiryDate
                }).then(function (doc) {
                    console.log(doc);
                }).catch(function (err) {
                    console.log(err);
                });
            });
            this.hasPaid = true;
        }
    };
    RenewPaymentPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    RenewPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-renew-payment',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\renew-payment\renew-payment.html"*/'<ion-content class="main-content" *ngIf="hasPaid == false">\n\n\n\n    <div class="container">\n\n    <ion-icon name="close-circle" class="closeIcon" (click)="closeModal()"></ion-icon>\n\n     \n\n  \n\n  <p class="center">\n\n    <img src="../assets/imgs/stripe.png" class="logo"/>\n\n  </p>\n\n  <ion-card>\n\n\n\n      <ion-card-header>\n\n        <h2 style="color: white; text-align: center">Subscription Length: {{duration}} days</h2>\n\n     \n\n      </ion-card-header>\n\n    <ion-card-content>\n\n      ￼￼￼￼\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-input type="number" name="cc" [(ngModel)]="ngForm.cc" placeholder="Number"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-input type="number" name="cvc" [(ngModel)]="ngForm.cvc" placeholder="CVC">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          \n\n          <ion-input item-left type="number" name="month" [(ngModel)]="ngForm.month" placeholder="Month"></ion-input>\n\n          <ion-input item-right type="number" name="year" [(ngModel)]="ngForm.year" placeholder="Year"></ion-input>\n\n        </ion-item>\n\n\n\n        <button type="button" ion-button bottom block (click)="onSubmit()">Pay €{{price}}</button>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</div>\n\n</ion-content>\n\n\n\n<ion-content class="main-content"  *ngIf="hasPaid == true" >\n\n   <div class="container">\n\n\n\n    <div class="center1">\n\n\n\n      <img src="../assets/imgs/conf.jpg" style="border-radius: 100%;">\n\n\n\n      <h1>Payment Confirmed</h1>\n\n      <button ion-button secondary (click)="closeModal()">\n\n        <p style="font-size: 12px; color: white"><ion-icon name="arrow-round-back" style="font-size: 18px; color: white"></ion-icon> Back to Profile</p>\n\n    </button>\n\n\n\n</div>\n\n\n\n   </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\renew-payment\renew-payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], RenewPaymentPage);
    return RenewPaymentPage;
}());

//# sourceMappingURL=renew-payment.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerAppsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var TrainerAppsPage = /** @class */ (function () {
    function TrainerAppsPage(navCtrl, navParams, fireStore, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireStore = fireStore;
        this.storage = storage;
        this.apps = [];
        this.getAppointments();
    }
    TrainerAppsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrainerAppsPage');
    };
    TrainerAppsPage.prototype.getAppointments = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.fireStore.collection("appointments", function (ref) {
                                return ref.where("trainerID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).orderBy("startTime", "desc");
                            }).valueChanges()];
                    case 1:
                        _a.appointments = _b.sent();
                        return [4 /*yield*/, this.fireStore.collection("appointments", function (ref) {
                                return ref.where("trainerID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).orderBy("startTime", "desc");
                            }).valueChanges().subscribe(function (apps) {
                                apps.forEach(function (data) {
                                    _this.apps.push(data);
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrainerAppsPage.prototype.toDate = function (date) {
        var newDate = new Date(date);
        return newDate.toDateString();
    };
    TrainerAppsPage.prototype.toTime = function (time) {
        var newTime = __WEBPACK_IMPORTED_MODULE_5_moment___default()(time).format('HH.mm');
        return newTime;
    };
    TrainerAppsPage.prototype.cancelApp = function (docID) {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("appointments").doc(docID).delete()
            .catch(function (err) {
            console.log(err);
        });
    };
    TrainerAppsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trainer-apps',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\trainer-apps\trainer-apps.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  <ion-title>Upcoming Appointments</ion-title>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div class="container">\n\n      \n\n        <div class="app-card" *ngFor="let app of appointments | async ">\n\n            <div class="card">\n\n              <div class="desc">\n\n                  <h2>Client Name: {{app.clientName}}</h2>\n\n                  <p><b>Date: </b>{{toDate(app.startTime)}}</p>\n\n                  <p><b>Timeslot: </b>{{toTime(app.startTime)}} - {{toTime(app.endTime)}}</p>\n\n                  <p><b>Gym: </b>{{app.gym.name}}</p>\n\n                  <p><b>Training: </b>{{app.title}} | {{app.notes}}</p>\n\n              </div>\n\n            <div class="reject">\n\n              <button ion-button block gradient-left box-shadow (click)="cancelApp(app.docID)">Cancel</button>\n\n          </div>\n\n            </div>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="container-Empty" *ngIf="apps.length == 0">\n\n        <img src="../assets/imgs/noApp.png" >\n\n      <h2>You don\'t have any appointments.</h2>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\trainer-apps\trainer-apps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], TrainerAppsPage);
    return TrainerAppsPage;
}());

//# sourceMappingURL=trainer-apps.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, fAuth, formBuilder, toastCtrl, alertCtrl, loadingCtrl, _md5) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fAuth = fAuth;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this._md5 = _md5;
        this.user = {};
        this.firebase_id = { firebase_id_var: '' };
        //form validation_messages
        this.validation_messages = {
            'displayName': [
                { type: 'required', message: 'Name is required.' },
                { type: 'minLength', message: 'Username must be at least 6 characters long.' },
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Invalid email address.' },
            ],
            'password': [
                { type: 'minLength', message: 'Password must be at least 6 characters long.' },
                { type: 'pattern', message: 'Your Password must contain Upercase, Lowercase numbers.' },
                { type: 'required', message: 'Password is required.' }
            ],
            'firstName': [
                { type: 'minLength', message: 'First name must be at least 2 characters long' },
                { type: 'required', message: 'First name is required.' }
            ],
            'surname': [
                { type: 'minLength', message: 'Surname must be at least 2 characters long.' },
                { type: 'required', message: 'Surname is required.' }
            ],
            'sex': [
                { type: 'required', message: 'Sex is required.' }
            ],
            'age': [
                { type: 'required', message: 'Age is required.' }
            ],
            'country': [
                { type: 'required', message: 'Country is required.' }
            ],
            'city': [
                { type: 'required', message: 'City is required.' }
            ]
        };
        this.type = 'password';
        this.showPass = false;
        this.time = new Date();
        this.hash = __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"].hashStr(this.time); //unique id
        this.uuid = __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__["UUID"].UUID();
        this.user.role = 1;
        this.user.sex = "Male";
        this.myForm = this.formBuilder.group({
            displayName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(6),
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
            ])),
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
            ])),
            surname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
            ])),
            sex: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
            ])),
            age: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].min(1),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
            ])),
            role: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                // Validators.minLength(6),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
            ])),
            country: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
            ])),
            city: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
            ]))
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var r, error_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(function (newUser) {
                                console.log('email', _this.user.email);
                                //console.log(newUser.user.uid)
                                console.log("Successfully registered!");
                                var user = _this.fAuth.auth.currentUser;
                                // Setting up user tables in firebase based on roles 
                                // Role 1 = Client
                                if (_this.user.role == 1) {
                                    __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.firestore().collection("users").doc(_this.fAuth.auth.currentUser.uid).set({
                                        displayName: _this.user.displayName,
                                        firstName: _this.user.firstName,
                                        surname: _this.user.surname,
                                        age: Number(_this.user.age),
                                        email: _this.user.email.toLowerCase(),
                                        role: Number(_this.user.role),
                                        sex: _this.user.sex,
                                        country: _this.user.country,
                                        city: _this.user.city,
                                        hasPaid: false,
                                        UID: _this.fAuth.auth.currentUser.uid,
                                        image: "",
                                        trainerID: "",
                                        trainerName: ""
                                    }).then(function (doc) {
                                        console.log(doc);
                                    }).catch(function (err) {
                                        console.log(err);
                                    });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.firestore().collection("users").doc(_this.fAuth.auth.currentUser.uid).set({
                                        UID: _this.fAuth.auth.currentUser.uid,
                                        displayName: _this.user.displayName,
                                        firstName: _this.user.firstName,
                                        surname: _this.user.surname,
                                        age: Number(_this.user.age),
                                        email: _this.user.email.toLowerCase(),
                                        role: Number(_this.user.role),
                                        sex: _this.user.sex,
                                        country: _this.user.country,
                                        city: _this.user.city,
                                        specialties: "",
                                        certification: "",
                                        experience: Number(0),
                                        price: Number(0),
                                        maxClients: Number(0),
                                        clientCount: Number(0),
                                        isAvailable: false,
                                        spacesLeft: Number(0),
                                        duration: Number(0),
                                        watchList: [],
                                        watchers: Number(0),
                                        image: ""
                                    }).then(function (doc) {
                                        console.log(doc);
                                    }).catch(function (err) {
                                        console.log(err);
                                    });
                                }
                                // Setting up trainer hub
                                _this.presentToast();
                                _this.presentLoadingText();
                            })];
                    case 1:
                        r = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.code !== "") {
                            if (error_1.code == "auth/email-already-in-use") {
                                alert_1 = this.alertCtrl.create({
                                    title: 'Email Exists',
                                    subTitle: 'The email you entered is already registered.',
                                    buttons: ['Retry']
                                });
                                alert_1.present();
                            }
                            console.error(error_1);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.gotologin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'SignUp successfully',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegisterPage.prototype.presentLoadingText = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait a moment...'
        });
        loading.present();
        setTimeout(function () {
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\register\register.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="myForm">\n\n    <ion-list text-center>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label color="primary">\n\n                      <ion-icon name="person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input formControlName="firstName" type="text" [(ngModel)]="user.firstName" [class.invalid]="!myForm.controls.firstName.valid && myForm.controls.firstName.touched" placeholder="Forename"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.firstName" >\n\n                    <div class="error-message" *ngIf="myForm.get(\'firstName\').hasError(validation.type) && (myForm.get(\'firstName\').dirty || myForm.get(\'firstName\').touched)">\n\n                  {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n          </ion-col>\n\n          <ion-col>\n\n              \n\n        <ion-item>\n\n            <ion-label color="primary">\n\n            </ion-label>\n\n            <ion-input formControlName="surname" type="text" [(ngModel)]="user.surname" [class.invalid]="!myForm.controls.surname.valid && myForm.controls.surname.touched" placeholder="Surname"></ion-input>\n\n          </ion-item>\n\n          <div class="validation-errors">\n\n            <ng-container *ngFor="let validation of validation_messages.surname" >\n\n              <div class="error-message" *ngIf="myForm.get(\'surname\').hasError(validation.type) && (myForm.get(\'surname\').dirty || myForm.get(\'surname\').touched)">\n\n            {{ validation.message }}\n\n              </div>\n\n            </ng-container>\n\n          </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label color="primary">\n\n                  <ion-icon name="contact"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input formControlName="displayName" type="text" [(ngModel)]="user.displayName" [class.invalid]="!myForm.controls.displayName.valid && myForm.controls.displayName.touched" placeholder="Display Name"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.displayName" >\n\n                    <div class="error-message" *ngIf="myForm.get(\'displayName\').hasError(validation.type) && (myForm.get(\'displayName\').dirty || myForm.get(\'displayName\').touched)">\n\n                  {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label color="primary">\n\n                  <ion-icon name="mail"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input formControlName="email" type="text" [(ngModel)]="user.email" [class.invalid]="!myForm.controls.email.valid && myForm.controls.email.touched" placeholder="Email"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.email" >\n\n                    <div class="error-message" *ngIf="myForm.get(\'email\').hasError(validation.type) && (myForm.get(\'email\').dirty || myForm.get(\'email\').touched)">\n\n                  {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label color="primary">\n\n                  <ion-icon name="lock"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input name="password" formControlName="password" type="{{type}}" [(ngModel)]="user.password" [class.invalid]="!myForm.controls.password.valid && myForm.controls.password.touched" placeholder="Password"></ion-input>\n\n                  <button *ngIf="!showPass" ion-button clear icon-only item-right color="primary" type="button" item-right (click)="showPassword()"> <ion-icon name="ios-eye-off-outline"></ion-icon></button>\n\n                  <button *ngIf="showPass" ion-button clear icon-only item-right color="primary" type="button" item-right (click)="showPassword()"> <ion-icon name="ios-eye-outline"></ion-icon></button>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.password" >\n\n                    <div class="error-message" *ngIf="myForm.get(\'password\').hasError(validation.type) && (myForm.get(\'password\').dirty || myForm.get(\'password\').touched)">\n\n                  {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label color="primary">\n\n                    <ion-icon name="bookmark"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input formControlName="age" min="0" max="110" type="number" [(ngModel)]="user.age" [class.invalid]="!myForm.controls.age.valid && myForm.controls.age.touched" placeholder="Age"></ion-input>\n\n                </ion-item>\n\n                <div class="validation-errors">\n\n                  <ng-container *ngFor="let validation of validation_messages.age" >\n\n                    <div class="error-message" *ngIf="myForm.get(\'age\').hasError(validation.type) && (myForm.get(\'age\').dirty || myForm.get(\'age\').touched)">\n\n                  {{ validation.message }}\n\n                    </div>\n\n                  </ng-container>\n\n                </div>\n\n          </ion-col>\n\n          <ion-col >\n\n              <ion-item style="text-align: right">\n\n                <ion-label>Gender</ion-label>\n\n                  <ion-select formControlName="sex" [(ngModel)]="user.sex" style="max-width: 100%;">\n\n                      <ion-option value="Male">Male</ion-option>\n\n                      <ion-option value="Female">Female</ion-option>\n\n                    </ion-select>\n\n              </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label color="primary">\n\n                        <ion-icon name="globe"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input formControlName="country" type="text" [(ngModel)]="user.country" [class.invalid]="!myForm.controls.country.valid && myForm.controls.country.touched" placeholder="Country"></ion-input>\n\n                  </ion-item>\n\n                  <div class="validation-errors">\n\n                    <ng-container *ngFor="let validation of validation_messages.country" >\n\n                      <div class="error-message" *ngIf="myForm.get(\'country\').hasError(validation.type) && (myForm.get(\'country\').dirty || myForm.get(\'country\').touched)">\n\n                    {{ validation.message }}\n\n                      </div>\n\n                    </ng-container>\n\n                  </div>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label color="primary">\n\n                    </ion-label>\n\n                    <ion-input formControlName="city" type="text" [(ngModel)]="user.city" [class.invalid]="!myForm.controls.city.valid && myForm.controls.city.touched" placeholder="City"></ion-input>\n\n                  </ion-item>\n\n                  <div class="validation-errors">\n\n                    <ng-container *ngFor="let validation of validation_messages.city" >\n\n                      <div class="error-message" *ngIf="myForm.get(\'city\').hasError(validation.type) && (myForm.get(\'city\').dirty || myForm.get(\'city\').touched)">\n\n                    {{ validation.message }}\n\n                      </div>\n\n                    </ng-container>\n\n                  </div>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n              <ion-col>\n\n                  <ion-item>\n\n                      <ion-label>User type</ion-label>\n\n                      <ion-select formControlName="role" [(ngModel)]="user.role" style="max-width: 100%;">\n\n                        <ion-option selected value="1">Client</ion-option>\n\n                        <ion-option value="2">Trainer</ion-option>     \n\n                      </ion-select>\n\n                   </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n      </ion-grid>\n\n \n\n   \n\n   \n\n\n\n\n\n      \n\n\n\n\n\n      \n\n\n\n    \n\n    \n\n    </ion-list>\n\n  </form>\n\n\n\n\n\n  <div padding>\n\n    <button ion-button (click)="register()" [disabled]="!myForm.valid" round block>\n\n      Register\n\n    </button>\n\n  </div>\n\n  <button ion-button (click)="gotologin()" clear block>\n\n    Already have an account? Login\n\n  </button>\n\n  \n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\register\register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams, fAuth, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fAuth = fAuth;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = new User();
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    ResetPasswordPage.prototype.resetPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fAuth.auth.sendPasswordResetEmail(this.user.email)];
                    case 1:
                        r = _a.sent();
                        console.log('email sent');
                        this.emailsent();
                        this.presentLoadingText();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.code !== "") {
                            if (error_1.code == "auth/user-not-found") {
                                this.authusernotfound();
                            }
                            console.error(error_1);
                        }
                        if (error_1.code !== "") {
                            if (error_1.code == "auth/invalid-email") {
                                this.authinvalidemail();
                            }
                            console.error(error_1);
                        }
                        if (error_1.code !== "") {
                            if (error_1.code == "auth/invalid-email") {
                                this.authargumenterror();
                            }
                            console.error(error_1);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResetPasswordPage.prototype.authusernotfound = function () {
        var toast = this.toastCtrl.create({
            message: 'Email not found',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ResetPasswordPage.prototype.authinvalidemail = function () {
        var toast = this.toastCtrl.create({
            message: 'Enter valid email',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ResetPasswordPage.prototype.authargumenterror = function () {
        var toast = this.toastCtrl.create({
            message: 'Enter valid email',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ResetPasswordPage.prototype.emailsent = function () {
        var toast = this.toastCtrl.create({
            message: 'Password reset email has been sent to your mail',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ResetPasswordPage.prototype.presentLoadingText = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait a moment...'
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\reset-password\reset-password.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Reset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n	<ion-list>\n\n\n\n	  <ion-item>\n\n	    <ion-label floating>Email</ion-label>\n\n	    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n	  </ion-item>\n\n\n\n	</ion-list>\n\n  \n\n	<div padding>\n\n    	<button ion-button (click)="resetPassword()" block>Reset Password</button>\n\n  	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trainerhub_trainerhub__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, fireStore, http, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireStore = fireStore;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.users = [];
        this.token = '';
        this.ngForm = {
            cc: "",
            cvc: "",
            month: "",
            year: "",
            amount: ""
        };
        this.getUserData();
        this.hasPaid = false;
        Stripe.setPublishableKey('pk_test_r48revO6ivJFIShuQpqCoNxM00fFFQA1qP');
        var data = this.navParams.get('trainerData');
        this.trainerData = data;
        // this.hasPaid = this.navParams.get('Paid');
        this.trainer = this.fireStore.doc("/users/" + data.UID).valueChanges().subscribe(function (profile) {
            _this.user.clientCount = profile.clientCount;
            _this.user.maxClients = profile.maxClients;
            _this.user.price = profile.price;
            _this.user.duration = profile.duration;
            _this.user.isAvailable = profile.isAvailable;
            if (profile.isAvailable == false && _this.hasPaid == false) {
                // this.navCtrl.setRoot(TrainersPage);
                var toast_1 = _this.toastCtrl.create({
                    message: "Trainer has become unavailable."
                });
                toast_1.present();
                setTimeout(function () {
                    toast_1.dismiss();
                }, 5000);
            }
        });
        this.fireStore.doc("/users/" + __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).valueChanges().subscribe(function (profile) {
            _this.user.hasPaid = profile.hasPaid;
        });
    }
    PaymentPage.prototype.addDays = function (date, days) {
        date.setDate(date.getDate() + days);
        return date.toDateString().split(' ').slice(1, 4).join(' ');
    };
    PaymentPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users")
                            .where("UID", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                            .get()
                            .then(function (docs) {
                            docs.forEach(function (doc) {
                                _this.users.push(doc);
                            });
                        }).catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.ngForm);
        Stripe.card.createToken({
            number: this.ngForm.cc,
            cvc: this.ngForm.cvc,
            exp_month: this.ngForm.month,
            exp_year: this.ngForm.year //2020,
        }, function (status, response) {
            return _this.stripeResponseHandler(status, response);
        });
    };
    PaymentPage.prototype.stripeResponseHandler = function (status, response) {
        if (response.error) {
            // Show the errors on the form
            console.log('error');
            console.log(response.error.message);
        }
        else {
            // response contains id and card, which contains
            //additional card details
            this.token = response.id;
            // Insert the token into the form so it gets
            //submitted to the server
            console.log('success');
            console.log('Sending token param:');
            console.log(this.token);
            // Updating Client info to give access to trainerHub
            // Add trainer realtionship to user
            var today = new Date();
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                .update({
                hasPaid: true,
                trainerName: this.trainerData.firstName + " " + this.trainerData.surname,
                trainerID: this.trainerData.UID,
                expiryDate: this.addDays(today, this.user.duration)
            }).then(function (doc) {
                console.log(doc);
            }).catch(function (err) {
                console.log(err);
            });
            for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                var image;
                if (user.data().image) {
                    image = user.data().image;
                }
                else {
                    image = "";
                }
                // Add Client to Trainer List
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(this.trainerData.UID).collection('clientList').doc(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).set({
                    clientUID: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                    clientEmail: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.email,
                    clientName: user.data().firstName + " " + user.data().surname,
                    firstName: user.data().firstName,
                    surname: user.data().surname,
                    image: image,
                    age: user.data().age,
                    country: user.data().country,
                    city: user.data().city,
                    sex: user.data().firstName,
                    expiryDate: this.addDays(today, 31),
                    unreadMessages: 0
                }).then(function () {
                    console.log("Done");
                }).catch(function (err) {
                    console.log(err);
                });
                // Set up TrainerHub for Client/Trainer
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("trainerHub").add({
                    trainerUID: this.trainerData.UID,
                    clientUID: user.data().UID
                }).then(function (doc) {
                    console.log(doc);
                }).catch(function (err) {
                    console.log(err);
                });
            }
            this.user.clientCount++;
            if (this.user.clientCount >= this.user.maxClients) {
                var isAvailable = false;
                var spacesLeft = this.user.maxClients - this.user.clientCount;
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(this.trainerData.UID).update({
                    clientCount: this.user.clientCount,
                    isAvailable: isAvailable,
                    spacesLeft: spacesLeft
                }).then(function (doc) {
                    console.log(doc);
                }).catch(function (err) {
                    console.log(err);
                });
            }
            else {
                var isAvailable = true;
                var spacesLeft = this.user.maxClients - this.user.clientCount;
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(this.trainerData.UID).update({
                    clientCount: this.user.clientCount,
                    isAvailable: isAvailable,
                    spacesLeft: spacesLeft
                }).then(function (doc) {
                    console.log(doc);
                }).catch(function (err) {
                    console.log(err);
                });
            }
            var body = {
                // docID: this.getTrainerID()
                trainer: this.trainerData.UID
            };
            this.http.post("https://us-central1-mealmate-ad158.cloudfunctions.net/new_client", JSON.stringify(body), {
                responseType: "text"
            }).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            });
            this.hasPaid = true;
        }
    };
    PaymentPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    PaymentPage.prototype.toTrainerHub = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__trainerhub_trainerhub__["a" /* TrainerhubPage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\payment\payment.html"*/'<ion-content class="main-content" *ngIf="hasPaid == false">\n\n\n\n  <div class="container">\n\n  <ion-icon name="close-circle" class="closeIcon" (click)="closeModal()"></ion-icon>\n\n   \n\n\n\n<p class="center">\n\n  <img src="../assets/imgs/stripe.png" class="logo"/>\n\n</p>\n\n<ion-card>\n\n    <ion-card-content>\n\n      ￼￼￼￼\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-input type="number" name="cc" [(ngModel)]="ngForm.cc" placeholder="Number"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-input type="number" name="cvc" [(ngModel)]="ngForm.cvc" placeholder="CVC">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          \n\n          <ion-input item-left type="number" name="month" [(ngModel)]="ngForm.month" placeholder="Month"></ion-input>\n\n          <ion-input item-right type="number" name="year" [(ngModel)]="ngForm.year" placeholder="Year"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <button type="button" ion-button bottom block (click)="onSubmit()" [disabled]="user.isAvailable == false">€{{user.price}}</button>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</div>\n\n</ion-content>\n\n\n\n\n\n<ion-content class="main-content"  *ngIf="hasPaid == true" >\n\n  <div class="container">\n\n\n\n   <div class="center1">\n\n\n\n     <img src="../assets/imgs/conf.jpg" style="border-radius: 100%;">\n\n\n\n     <h1>Payment Confirmed</h1>\n\n     <button ion-button secondary (click)="toTrainerHub()">\n\n       <p style="font-size: 12px; color: white">To TrainerHub <ion-icon name="arrow-dropright-circle" style="font-size: 18px; color: white"></ion-icon></p>\n\n   </button>\n\n\n\n</div>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 226;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-appointment/add-appointment.module": [
		685,
		26
	],
	"../pages/add-modal/add-modal.module": [
		707,
		25
	],
	"../pages/add-new-weight/add-new-weight.module": [
		708,
		24
	],
	"../pages/admin-home/admin-home.module": [
		686,
		0
	],
	"../pages/chat/chat.module": [
		687,
		23
	],
	"../pages/client-list/client-list.module": [
		688,
		22
	],
	"../pages/edit-goals/edit-goals.module": [
		709,
		21
	],
	"../pages/edit-journal-item/edit-journal-item.module": [
		689,
		20
	],
	"../pages/edit-macros/edit-macros.module": [
		690,
		19
	],
	"../pages/edit-modal/edit-modal.module": [
		710,
		18
	],
	"../pages/food-details/food-details.module": [
		691,
		17
	],
	"../pages/food-results/food-results.module": [
		692,
		16
	],
	"../pages/goals/goals.module": [
		693,
		15
	],
	"../pages/login/login.module": [
		694,
		14
	],
	"../pages/macro-breakdown/macro-breakdown.module": [
		695,
		13
	],
	"../pages/meal-option-modal/meal-option-modal.module": [
		696,
		12
	],
	"../pages/menu/menu.module": [
		698,
		11
	],
	"../pages/payment/payment.module": [
		697,
		10
	],
	"../pages/profile/profile.module": [
		711,
		9
	],
	"../pages/progress/progress.module": [
		699,
		8
	],
	"../pages/register/register.module": [
		700,
		7
	],
	"../pages/renew-payment/renew-payment.module": [
		701,
		6
	],
	"../pages/reset-password/reset-password.module": [
		702,
		5
	],
	"../pages/trainer-apps/trainer-apps.module": [
		703,
		4
	],
	"../pages/trainerhub/trainerhub.module": [
		704,
		3
	],
	"../pages/trainers/trainers.module": [
		705,
		2
	],
	"../pages/view-trainer/view-trainer.module": [
		706,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 269;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, navParams, viewCtrl, fireStore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fireStore = fireStore;
        this.post = this.navParams.get("post");
        this.commentsCount = this.post.commentsCount;
        console.log(this.post);
        this.getComments();
    }
    CommentsPage.prototype.getComments = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.fireStore.collection("/comments/", function (ref) {
                                return ref.where('postID', '==', _this.post.docID).orderBy("created", "desc");
                            }).valueChanges()];
                    case 1:
                        _a.comments = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    CommentsPage.prototype.ago = function (time) {
        var difference = __WEBPACK_IMPORTED_MODULE_2_moment___default()(time).diff(__WEBPACK_IMPORTED_MODULE_2_moment___default()());
        return __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(difference).humanize();
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\comments\comments.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <small>{{ commentsCount || 0}} people have commented.</small>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let comment of comments | async">\n\n      <ion-icon item-left name="ios-chatbubbles-outline"></ion-icon>\n\n\n\n      <h2>\n\n        <small>{{ comment.content }}</small>\n\n      </h2>\n\n      <p>\n\n        <small>\n\n          {{ comment.ownerName }} <i> {{ ago(comment.created) }} ago </i>\n\n        </small>\n\n      </p>\n\n\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\comments\comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_appointment_add_appointment__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AppointmentsPage = /** @class */ (function () {
    function AppointmentsPage(navCtrl, actionSheetCtrl, modalCtrl, fireStore, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.fireStore = fireStore;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.selectedDay = new Date();
        this.eventSource = [];
        this.calendarModes = [
            { key: 'month', value: 'Month' },
            { key: 'week', value: 'Week' },
            { key: 'day', value: 'Day' },
        ];
        this.calendar = {
            mode: this.calendarModes[0].key,
            currentDate: new Date()
        }; // these are the variable used by the calendar.
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return (date < current);
        };
        this.userRole = this.navParams.get('role');
        console.log(this.userRole);
        if (this.userRole == 2) {
            this.clientData = this.navParams.get('clientData');
            console.log(this.clientData);
        }
        this.getUserData(this.userRole);
    }
    AppointmentsPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    AppointmentsPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    AppointmentsPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    AppointmentsPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    AppointmentsPage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        this.selectedObject = ev;
    };
    AppointmentsPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
        this.selectedDay = event;
    };
    AppointmentsPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    AppointmentsPage.prototype.openActionSheet = function (event) {
        var _this = this;
        console.log('opening');
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Option",
            buttons: [
                {
                    text: 'Block Date',
                    handler: function () {
                        console.log("Block Date Clicked: ", event);
                        var d = event.selectedTime;
                        //d.setHours(0, 0, 0);
                        setTimeout(function () {
                            _this.blockDayEvent(d);
                        }, 2);
                    }
                },
                {
                    text: 'Meet Up With',
                    handler: function () {
                        console.log("Meet Up With Clicked");
                    }
                }
            ]
        });
        actionsheet.present();
    };
    AppointmentsPage.prototype.blockDayEvent = function (date) {
        var _this = this;
        var startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        var endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        var events = this.eventSource;
        events.push({
            title: 'All Day ',
            startTime: startTime,
            endTime: endTime,
            allDay: true
        });
        this.eventSource = [];
        setTimeout(function () {
            _this.eventSource = events;
        });
    };
    AppointmentsPage.prototype.addEvent = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_appointment_add_appointment__["a" /* AddAppointmentPage */], { selectedDay: this.selectedDay, clientData: this.clientData });
        modal.present();
    };
    AppointmentsPage.prototype.onOptionSelected = function ($event) {
        console.log($event);
    };
    AppointmentsPage.prototype.getUserData = function (role) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(role == 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fireStore.collection("appointments", function (ref) {
                                return ref.where("clientID", "==", __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid);
                            }).valueChanges().subscribe(function (apps) {
                                apps.forEach(function (data) {
                                    if (data) {
                                        console.log(data);
                                        var eventData = data;
                                        eventData.startTime = new Date(data.startTime);
                                        eventData.endTime = new Date(data.endTime);
                                        var events_1 = _this.eventSource;
                                        events_1.push(eventData);
                                        _this.eventSource = [];
                                        setTimeout(function () {
                                            _this.eventSource = events_1;
                                        });
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.fireStore.collection("appointments", function (ref) {
                            return ref.where("trainerID", "==", __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid);
                        }).valueChanges().subscribe(function (apps) {
                            apps.forEach(function (data) {
                                if (data) {
                                    console.log(data);
                                    var eventData = data;
                                    eventData.startTime = new Date(data.startTime);
                                    eventData.endTime = new Date(data.endTime);
                                    var events_2 = _this.eventSource;
                                    events_2.push(eventData);
                                    _this.eventSource = [];
                                    setTimeout(function () {
                                        _this.eventSource = events_2;
                                    });
                                }
                            });
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppointmentsPage.prototype.deleteApp = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("appointments").doc(app.docID).delete()
                            .catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        toast = this.toastCtrl.create({
                            message: "Deleted."
                        });
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        setTimeout(function () {
                            toast.dismiss();
                        }, 5000);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppointmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointments',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\appointments\appointments.html"*/'<ng-template #template let-showEventDetail="showEventDetail" let-selectedDate="selectedDate"\n\n  let-noEventsLabel="noEventsLabel">\n\n  <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">\n\n    <ion-item *ngFor="let event of selectedDate?.events" text-wrap class="appItem">\n\n      <!-- <button class="cancel" ion-button block gradient-left box-shadow (click)="deleteApp(event)">Cancel</button> -->\n\n      <span *ngIf="!event.allDay" class="monthview-eventdetail-timecolumn">\n\n        {{event.startTime|date: \'HH:mm\'}} - {{event.endTime|date: \'HH:mm\'}}\n\n      </span>\n\n      <span *ngIf="event.allDay" class="monthview-eventdetail-timecolumn">{{allDayLabel}} </span>\n\n      <span class="event-detail"> : {{event.gym.name}}</span>\n\n      <p>{{event.title}} | {{event.notes}}</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="selectedDate?.events.length==0">\n\n      <div class="no-events-label">{{noEventsLabel}}</div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ng-template>\n\n\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{viewTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="has-header">\n\n  <ion-row ion-content>\n\n    <ion-col col-9>\n\n      <button ion-button small (click)="addEvent()">ADD EVENT</button>\n\n    </ion-col>\n\n    <ion-col col-3>\n\n      <ion-select [(ngModel)]="calendar.mode" style="max-width: 100%">\n\n        <ion-option (ionSelect)="onOptionSelected($event)" *ngFor="let mode of calendarModes" [value]="mode.key">\n\n          {{mode.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n  <!-- <p>{{selectedObject | json}}</p>\n\n          <p>{{eventSource | json}}</p> -->\n\n  <calendar [monthviewEventDetailTemplate]="template" [eventSource]="eventSource" [markDisabled]="markDisabled"\n\n    [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate"\n\n    (onCurrentDateChanged)="onCurrentDateChanged($event)" (onEventSelected)="onEventSelected($event)"\n\n    (onTitleChanged)="onViewTitleChanged($event)" (onTimeSelected)="onTimeSelected($event)" step="30">\n\n  </calendar>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\appointments\appointments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], AppointmentsPage);
    return AppointmentsPage;
}());

//# sourceMappingURL=appointments.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'X-Mashape-Key': 'd6ffa8a33b0923db92001cc3adb44961' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.limit = 50;
        console.log('Hello DataProvider Provider');
    }
    DataProvider.prototype.getFoods = function (kw) {
        var keyword = kw;
        // let data:Observable<any>;
        return this.http.get('https://api.nutritionix.com/v1_1/search/' + keyword + '?results=0%3A50&fields=*&appId=82f16779&appKey=d6ffa8a33b0923db92001cc3adb44961')
            .map(function (response) { return response.json(); });
    };
    DataProvider.prototype.getFoodById = function (food) {
        var item_id = food;
        return this.http.get('https://api.nutritionix.com/v1_1/item?id=' + item_id + '&appId=82f16779&appKey=d6ffa8a33b0923db92001cc3adb44961')
            .map(function (res) {
            return res.json();
        });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(581);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_view_trainer_view_trainer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_trainers_trainers__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_edit_macros_edit_macros__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_goals_edit_goals__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_goals_goals__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_journal_journal__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_food_results_food_results__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_food_details_food_details__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_journal_item_edit_journal_item__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_modal_edit_modal__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_add_modal_add_modal__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reset_password_reset_password__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_meal_option_modal_meal_option_modal__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_menu_menu__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_payment_payment__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_trainerhub_trainerhub__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_client_list_client_list__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_progress_progress__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_new_weight_add_new_weight__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_chat_chat__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_feed_feed__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_renew_payment_renew_payment__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_comments_comments__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_appointments_appointments__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_add_appointment_add_appointment__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_macro_breakdown_macro_breakdown__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_trainer_apps_trainer_apps__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ionic2_calendar__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angularfire2__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__firebase_info__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angularfire2_database__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_stripe_ngx__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_firebase__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_status_bar__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_splash_screen__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_data_data__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_keyboard__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_http__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_ng2_charts_x__ = __webpack_require__(683);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































__WEBPACK_IMPORTED_MODULE_49_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_38__firebase_info__["a" /* FIREBASE_INFO */]);
__WEBPACK_IMPORTED_MODULE_49_firebase___default.a.firestore().settings({
    timestampsInSnapshots: true
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_journal_journal__["a" /* JournalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_food_results_food_results__["a" /* FoodResultsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_food_details_food_details__["a" /* FoodDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_journal_item_edit_journal_item__["a" /* EditJournalItemPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_modal_edit_modal__["a" /* EditModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_modal_add_modal__["a" /* AddModalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_meal_option_modal_meal_option_modal__["a" /* MealOptionModalPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_goals_goals__["a" /* GoalsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_edit_goals_edit_goals__["a" /* EditGoalsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_edit_macros_edit_macros__["a" /* EditMacrosPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_trainers_trainers__["a" /* TrainersPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_view_trainer_view_trainer__["a" /* ViewTrainerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_trainerhub_trainerhub__["a" /* TrainerhubPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_client_list_client_list__["a" /* ClientListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_progress_progress__["a" /* ProgressPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_new_weight_add_new_weight__["a" /* AddNewWeightPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_renew_payment_renew_payment__["a" /* RenewPaymentPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_add_appointment_add_appointment__["a" /* AddAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_trainer_apps_trainer_apps__["a" /* TrainerAppsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_macro_breakdown_macro_breakdown__["a" /* MacroBreakdownPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-appointment/add-appointment.module#AddAppointmentPageModule', name: 'AddAppointmentPage', segment: 'add-appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-home/admin-home.module#AdminHomePageModule', name: 'AdminHomePage', segment: 'admin-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-list/client-list.module#ClientListPageModule', name: 'ClientListPage', segment: 'client-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-journal-item/edit-journal-item.module#EditJournalItemPageModule', name: 'EditJournalItemPage', segment: 'edit-journal-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-macros/edit-macros.module#EditMacrosPageModule', name: 'EditMacrosPage', segment: 'edit-macros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-details/food-details.module#FoodDetailsPageModule', name: 'FoodDetailsPage', segment: 'food-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-results/food-results.module#FoodResultsPageModule', name: 'FoodResultsPage', segment: 'food-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/goals/goals.module#GoalsPageModule', name: 'GoalsPage', segment: 'goals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/macro-breakdown/macro-breakdown.module#MacroBreakdownPageModule', name: 'MacroBreakdownPage', segment: 'macro-breakdown', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meal-option-modal/meal-option-modal.module#MealOptionModalPageModule', name: 'MealOptionModalPage', segment: 'meal-option-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/progress/progress.module#ProgressPageModule', name: 'ProgressPage', segment: 'progress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/renew-payment/renew-payment.module#RenewPaymentPageModule', name: 'RenewPaymentPage', segment: 'renew-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trainer-apps/trainer-apps.module#TrainerAppsPageModule', name: 'TrainerAppsPage', segment: 'trainer-apps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trainerhub/trainerhub.module#TrainerhubPageModule', name: 'TrainerhubPage', segment: 'trainerhub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trainers/trainers.module#TrainersPageModule', name: 'TrainersPage', segment: 'trainers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-trainer/view-trainer.module#ViewTrainerPageModule', name: 'ViewTrainerPage', segment: 'view-trainer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-modal/add-modal.module#AddModalPageModule', name: 'AddModalPage', segment: 'add-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-new-weight/add-new-weight.module#AddNewWeightPageModule', name: 'AddNewWeightPage', segment: 'add-new-weight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-goals/edit-goals.module#EditGoalsPageModule', name: 'EditGoalsPage', segment: 'edit-goals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-modal/edit-modal.module#EditModalPageModule', name: 'EditModalPage', segment: 'edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_37_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_36_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_38__firebase_info__["a" /* FIREBASE_INFO */]),
                __WEBPACK_IMPORTED_MODULE_48__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_39_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_40__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_35__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_43__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_34_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_50_ng2_charts_x__["a" /* ChartsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_journal_journal__["a" /* JournalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_food_results_food_results__["a" /* FoodResultsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_food_details_food_details__["a" /* FoodDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_journal_item_edit_journal_item__["a" /* EditJournalItemPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_modal_edit_modal__["a" /* EditModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_modal_add_modal__["a" /* AddModalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_meal_option_modal_meal_option_modal__["a" /* MealOptionModalPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_goals_goals__["a" /* GoalsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_edit_goals_edit_goals__["a" /* EditGoalsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_edit_macros_edit_macros__["a" /* EditMacrosPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_trainers_trainers__["a" /* TrainersPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_view_trainer_view_trainer__["a" /* ViewTrainerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_trainerhub_trainerhub__["a" /* TrainerhubPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_client_list_client_list__["a" /* ClientListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_progress_progress__["a" /* ProgressPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_new_weight_add_new_weight__["a" /* AddNewWeightPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_renew_payment_renew_payment__["a" /* RenewPaymentPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_add_appointment_add_appointment__["a" /* AddAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_trainer_apps_trainer_apps__["a" /* TrainerAppsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_macro_breakdown_macro_breakdown__["a" /* MacroBreakdownPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_46__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_stripe_ngx__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_35__angular_fire_firestore__["a" /* AngularFirestore */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 270,
	"./af.js": 270,
	"./ar": 271,
	"./ar-dz": 272,
	"./ar-dz.js": 272,
	"./ar-kw": 273,
	"./ar-kw.js": 273,
	"./ar-ly": 274,
	"./ar-ly.js": 274,
	"./ar-ma": 275,
	"./ar-ma.js": 275,
	"./ar-sa": 276,
	"./ar-sa.js": 276,
	"./ar-tn": 277,
	"./ar-tn.js": 277,
	"./ar.js": 271,
	"./az": 278,
	"./az.js": 278,
	"./be": 279,
	"./be.js": 279,
	"./bg": 280,
	"./bg.js": 280,
	"./bm": 281,
	"./bm.js": 281,
	"./bn": 282,
	"./bn.js": 282,
	"./bo": 283,
	"./bo.js": 283,
	"./br": 284,
	"./br.js": 284,
	"./bs": 285,
	"./bs.js": 285,
	"./ca": 286,
	"./ca.js": 286,
	"./cs": 287,
	"./cs.js": 287,
	"./cv": 288,
	"./cv.js": 288,
	"./cy": 289,
	"./cy.js": 289,
	"./da": 290,
	"./da.js": 290,
	"./de": 291,
	"./de-at": 292,
	"./de-at.js": 292,
	"./de-ch": 293,
	"./de-ch.js": 293,
	"./de.js": 291,
	"./dv": 294,
	"./dv.js": 294,
	"./el": 295,
	"./el.js": 295,
	"./en-SG": 296,
	"./en-SG.js": 296,
	"./en-au": 297,
	"./en-au.js": 297,
	"./en-ca": 298,
	"./en-ca.js": 298,
	"./en-gb": 299,
	"./en-gb.js": 299,
	"./en-ie": 300,
	"./en-ie.js": 300,
	"./en-il": 301,
	"./en-il.js": 301,
	"./en-nz": 302,
	"./en-nz.js": 302,
	"./eo": 303,
	"./eo.js": 303,
	"./es": 304,
	"./es-do": 305,
	"./es-do.js": 305,
	"./es-us": 306,
	"./es-us.js": 306,
	"./es.js": 304,
	"./et": 307,
	"./et.js": 307,
	"./eu": 308,
	"./eu.js": 308,
	"./fa": 309,
	"./fa.js": 309,
	"./fi": 310,
	"./fi.js": 310,
	"./fo": 311,
	"./fo.js": 311,
	"./fr": 312,
	"./fr-ca": 313,
	"./fr-ca.js": 313,
	"./fr-ch": 314,
	"./fr-ch.js": 314,
	"./fr.js": 312,
	"./fy": 315,
	"./fy.js": 315,
	"./ga": 316,
	"./ga.js": 316,
	"./gd": 317,
	"./gd.js": 317,
	"./gl": 318,
	"./gl.js": 318,
	"./gom-latn": 319,
	"./gom-latn.js": 319,
	"./gu": 320,
	"./gu.js": 320,
	"./he": 321,
	"./he.js": 321,
	"./hi": 322,
	"./hi.js": 322,
	"./hr": 323,
	"./hr.js": 323,
	"./hu": 324,
	"./hu.js": 324,
	"./hy-am": 325,
	"./hy-am.js": 325,
	"./id": 326,
	"./id.js": 326,
	"./is": 327,
	"./is.js": 327,
	"./it": 328,
	"./it-ch": 329,
	"./it-ch.js": 329,
	"./it.js": 328,
	"./ja": 330,
	"./ja.js": 330,
	"./jv": 331,
	"./jv.js": 331,
	"./ka": 332,
	"./ka.js": 332,
	"./kk": 333,
	"./kk.js": 333,
	"./km": 334,
	"./km.js": 334,
	"./kn": 335,
	"./kn.js": 335,
	"./ko": 336,
	"./ko.js": 336,
	"./ku": 337,
	"./ku.js": 337,
	"./ky": 338,
	"./ky.js": 338,
	"./lb": 339,
	"./lb.js": 339,
	"./lo": 340,
	"./lo.js": 340,
	"./lt": 341,
	"./lt.js": 341,
	"./lv": 342,
	"./lv.js": 342,
	"./me": 343,
	"./me.js": 343,
	"./mi": 344,
	"./mi.js": 344,
	"./mk": 345,
	"./mk.js": 345,
	"./ml": 346,
	"./ml.js": 346,
	"./mn": 347,
	"./mn.js": 347,
	"./mr": 348,
	"./mr.js": 348,
	"./ms": 349,
	"./ms-my": 350,
	"./ms-my.js": 350,
	"./ms.js": 349,
	"./mt": 351,
	"./mt.js": 351,
	"./my": 352,
	"./my.js": 352,
	"./nb": 353,
	"./nb.js": 353,
	"./ne": 354,
	"./ne.js": 354,
	"./nl": 355,
	"./nl-be": 356,
	"./nl-be.js": 356,
	"./nl.js": 355,
	"./nn": 357,
	"./nn.js": 357,
	"./pa-in": 358,
	"./pa-in.js": 358,
	"./pl": 359,
	"./pl.js": 359,
	"./pt": 360,
	"./pt-br": 361,
	"./pt-br.js": 361,
	"./pt.js": 360,
	"./ro": 362,
	"./ro.js": 362,
	"./ru": 363,
	"./ru.js": 363,
	"./sd": 364,
	"./sd.js": 364,
	"./se": 365,
	"./se.js": 365,
	"./si": 366,
	"./si.js": 366,
	"./sk": 367,
	"./sk.js": 367,
	"./sl": 368,
	"./sl.js": 368,
	"./sq": 369,
	"./sq.js": 369,
	"./sr": 370,
	"./sr-cyrl": 371,
	"./sr-cyrl.js": 371,
	"./sr.js": 370,
	"./ss": 372,
	"./ss.js": 372,
	"./sv": 373,
	"./sv.js": 373,
	"./sw": 374,
	"./sw.js": 374,
	"./ta": 375,
	"./ta.js": 375,
	"./te": 376,
	"./te.js": 376,
	"./tet": 377,
	"./tet.js": 377,
	"./tg": 378,
	"./tg.js": 378,
	"./th": 379,
	"./th.js": 379,
	"./tl-ph": 380,
	"./tl-ph.js": 380,
	"./tlh": 381,
	"./tlh.js": 381,
	"./tr": 382,
	"./tr.js": 382,
	"./tzl": 383,
	"./tzl.js": 383,
	"./tzm": 384,
	"./tzm-latn": 385,
	"./tzm-latn.js": 385,
	"./tzm.js": 384,
	"./ug-cn": 386,
	"./ug-cn.js": 386,
	"./uk": 387,
	"./uk.js": 387,
	"./ur": 388,
	"./ur.js": 388,
	"./uz": 389,
	"./uz-latn": 390,
	"./uz-latn.js": 390,
	"./uz.js": 389,
	"./vi": 391,
	"./vi.js": 391,
	"./x-pseudo": 392,
	"./x-pseudo.js": 392,
	"./yo": 393,
	"./yo.js": 393,
	"./zh-cn": 394,
	"./zh-cn.js": 394,
	"./zh-hk": 395,
	"./zh-hk.js": 395,
	"./zh-tw": 396,
	"./zh-tw.js": 396
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 606;

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    // pages: Array<{title: string, component: any}>;
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // @ViewChild(Nav) nav: Nav;
        this.rootPage = "LoginPage";
        this.initializeApp();
        // // used for an example of ngFor and navigation
        // this.pages = [
        //   { title: 'Home', component: HomePage },
        //   { title: 'Journal', component: JournalPage },
        //   { title: 'Goals', component: RecipesPage }
        // ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n<!-- <ion-menu [content]="content" >\n\n  <ion-header>\n\n    <ion-toolbar color="primary">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu> -->\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_INFO; });
var FIREBASE_INFO = {
    apiKey: "AIzaSyACmTKjpBZWUZIhMbQD1ZkcgKsBi4hzGM4",
    authDomain: "mealmate-ad158.firebaseapp.com",
    databaseURL: "https://mealmate-ad158.firebaseio.com",
    projectId: "mealmate-ad158",
    storageBucket: "mealmate-ad158.appspot.com",
    messagingSenderId: "680295001958"
};
//# sourceMappingURL=firebase.info.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerhubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_progress__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trainers_trainers__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_firestore__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feed_feed__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__appointments_appointments__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var TrainerhubPage = /** @class */ (function () {
    function TrainerhubPage(navCtrl, navParams, fireStore, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireStore = fireStore;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.chat = {};
        this.users = [];
        this.getUserData();
    }
    TrainerhubPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users")
                            .where("UID", "==", __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid)
                            .get()
                            .then(function (docs) {
                            docs.forEach(function (doc) {
                                _this.users.push(doc);
                            });
                        }).catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getUserRole()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getClientInfo()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrainerhubPage.prototype.getUserRole = function () {
        var role;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            role = user.data().role;
        }
        return role;
    };
    TrainerhubPage.prototype.userHasPaid = function () {
        if (this.getUserRole() == 1) {
            var hasPaid;
            for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                hasPaid = user.data().hasPaid;
            }
        }
        return hasPaid;
    };
    TrainerhubPage.prototype.getClientInfo = function () {
        // Get client data from ClientList
        if (this.getUserRole() == 2) {
            this.clientFromList = this.navParams.get('clientData');
            this.clientName = this.clientFromList.clientName;
        }
        this.assignData();
    };
    TrainerhubPage.prototype.getTrainerName = function () {
        var trainerName;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            trainerName = user.data().trainerName;
        }
        return trainerName;
    };
    TrainerhubPage.prototype.assignData = function () {
        var _this = this;
        if (this.getUserRole() == 1) {
            this.userData = this.fireStore.doc("/users/" + __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).valueChanges().subscribe(function (profile) {
                _this.chat.clientID = profile.UID;
                _this.chat.trainerID = profile.trainerID;
                _this.hasPaid = profile.hasPaid;
                if (profile.hasPaid == false) {
                    var toast_1 = _this.toastCtrl.create({
                        message: "No active subscription."
                    });
                    toast_1.present();
                    setTimeout(function () {
                        toast_1.dismiss();
                    }, 5000);
                }
            });
        }
        else {
            this.userData = this.fireStore.doc("/users/" + __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).valueChanges().subscribe(function (profile) {
                _this.chat.clientID = _this.clientFromList.clientUID;
                _this.chat.trainerID = profile.UID;
            });
        }
    };
    TrainerhubPage.prototype.ionViewDidLoad = function () {
        this.menus = [
            {
                icon: '../assets/imgs/progress-report.png',
                head: 'Progress',
                sub: 'Keep track',
            }, {
                icon: '../assets/imgs/group.png',
                head: 'Group Forum',
                sub: 'Share with others',
            }, {
                icon: '../assets/imgs/appoint.png',
                head: 'Appointments',
                sub: 'Book with trainer',
            }, {
                icon: '../assets/imgs/chat.png',
                head: 'Message',
                sub: 'Get in touch',
            },
        ];
        this.rows = Array.from(Array(Math.ceil(this.menus.length / 2)).keys());
    };
    TrainerhubPage.prototype.open = function (menu) {
        if (menu.head == 'Progress') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__progress_progress__["a" /* ProgressPage */], { clientData: this.clientFromList });
        }
        else if (menu.head == 'Message') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], { userData: this.chat });
        }
        else if (menu.head == 'Group Forum') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__feed_feed__["a" /* FeedPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__appointments_appointments__["a" /* AppointmentsPage */], { clientData: this.clientFromList, role: this.getUserRole() });
        }
    };
    TrainerhubPage.prototype.navToTrainerListPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__trainers_trainers__["a" /* TrainersPage */]);
    };
    TrainerhubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trainerhub',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\trainerhub\trainerhub.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>TrainerHub</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="hasPaid == false">\n\n\n\n  <div class="container" style="padding-top: 25%; text-align: center">\n\n\n\n    <img src="../assets/imgs/error.png" />\n\n\n\n    <p class="formidable-light">No trainer assigned</p>\n\n    <button ion-button secondary (click)="navToTrainerListPage()">\n\n      <p style="font-size: 25px; color: white">Browse Trainers <ion-icon name="arrow-dropright-circle"\n\n          style="font-size: 25px; color: white"></ion-icon>\n\n      </p>\n\n    </button>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-content padding *ngIf="hasPaid == true || getUserRole() == 2">\n\n\n\n\n\n  <div class="container">\n\n    <p class="formidable">TrainerHub</p>\n\n    <p *ngIf="getTrainerName() != null" class="formidable-light">Trainer: {{getTrainerName()}}</p>\n\n    <p *ngIf="getTrainerName() == null" class="formidable-light">Client: {{clientName}}</p>\n\n\n\n    <ion-grid class="menu">\n\n      <ion-row *ngFor="let i of rows;">\n\n        <ion-col *ngFor="let menu of menus | slice:(i*2):(i+1)*2">\n\n          <ion-card (click)="open(menu)">\n\n            <img [src]="menu.icon" alt="">\n\n            <div class="desc">\n\n              <h2 [innerHTML]="menu.head"></h2>\n\n              <p [innerHTML]="menu.sub"></p>\n\n            </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\trainerhub\trainerhub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], TrainerhubPage);
    return TrainerhubPage;
}());

//# sourceMappingURL=trainerhub.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_macros_edit_macros__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_goals_edit_goals__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoalsPage = /** @class */ (function () {
    function GoalsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.goalData = [];
        this.userData = [];
        this.goals = {};
        this.getGoalData();
        // this.checkIfCollectionExists();
    }
    GoalsPage.prototype.getActivityLevel = function () {
        var level;
        for (var _i = 0, _a = this.goalData; _i < _a.length; _i++) {
            var goal = _a[_i];
            if (goal.data().activityLevel == 1) {
                level = "Sedentary";
            }
            else if (goal.data().activityLevel == 2) {
                level = "Lightly active";
            }
            else if (goal.data().activityLevel == 3) {
                level = "Moderately active";
            }
            else if (goal.data().activityLevel == 4) {
                level = "Very active";
            }
            else {
                level = "Extremely active";
            }
        }
        return level;
    };
    GoalsPage.prototype.editGoals = function () {
        if (this.goalData.length == 0) {
            this.checker = 0;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__edit_goals_edit_goals__["a" /* EditGoalsPage */], { goalData: this.checker });
        }
        else {
            for (var _i = 0, _a = this.goalData; _i < _a.length; _i++) {
                var entry = _a[_i];
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__edit_goals_edit_goals__["a" /* EditGoalsPage */], { goalData: entry });
            }
        }
        // this.navCtrl.push(EditGoalsPage, {goalData: entry});
    };
    GoalsPage.prototype.editMacros = function () {
        if (this.goalData.length == 0) {
            this.checker = 0;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_macros_edit_macros__["a" /* EditMacrosPage */], { goalData: this.checker });
        }
        else {
            for (var _i = 0, _a = this.goalData; _i < _a.length; _i++) {
                var entry = _a[_i];
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_macros_edit_macros__["a" /* EditMacrosPage */], { goalData: entry });
            }
        }
    };
    GoalsPage.prototype.getGoalData = function () {
        var _this = this;
        this.storage.get('userDocID').then(function (val) {
            var query = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("users").doc(val).collection('goals').where("UID", "==", __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid);
            query.onSnapshot(function (snapshot) {
                var changedDocs = snapshot.docChanges();
                changedDocs.forEach(function (change) {
                    if (change.type == "added") {
                        //TODO
                        var match = _this.goalData.find(function (e) { return e.id !== change.doc.id; });
                        console.log(match);
                        if (match == undefined) {
                            console.log("Already added");
                        }
                        else {
                            _this.goalData.push(change.doc);
                        }
                    }
                    if (change.type == "modified") {
                        //TODO
                        console.log("Modified doc " + change.doc.id);
                        for (var i = 0; i < _this.goalData.length; i++) {
                            if (_this.goalData[i].id == change.doc.id) {
                                _this.goalData[i] = change.doc;
                            }
                        }
                    }
                    if (change.type == "removed") {
                        for (var i = 0; i < _this.goalData.length; i++) {
                            if (_this.goalData[i].id == change.doc.id) {
                                _this.goalData.splice(i, 1);
                            }
                        }
                    }
                });
            });
            query.get()
                .then(function (docs) {
                docs.forEach(function (doc) {
                    _this.goalData.push(doc);
                });
                console.log(_this.goalData);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    GoalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-goals',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\goals\goals.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  <ion-title>Goals</ion-title>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="container">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        <ion-icon class="title" name="person"></ion-icon>Personal Goals\n\n        <ion-fab top right class="personal">\n\n          <button ion-fab mini (click)="editGoals()"><ion-icon name="md-create"></ion-icon></button>\n\n          \n\n        </ion-fab>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content>\n\n        <div class="info">\n\n          <p class="label">Current Weight</p>\n\n          <p *ngFor="let entry of goalData">{{entry.data().currentWeight}}kg</p>\n\n          <p class="label">Goal Weight</p>\n\n          <p *ngFor="let entry of goalData">{{entry.data().goalWeight}}kg</p>\n\n          <p class="label">Weekly Goal</p>\n\n          <p *ngFor="let entry of goalData">{{entry.data().weeklyGoal}}kg</p>\n\n          <p class="label">Activity Level</p>\n\n          <p *ngFor="let entry of goalData">{{getActivityLevel()}}</p>\n\n          <p class="label">Height</p>\n\n          <p *ngFor="let entry of goalData">{{entry.data().height}}cm</p>\n\n          \n\n      \n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header>\n\n        <ion-icon class="title" name="heart"></ion-icon>Nutritional Goals\n\n        <ion-fab top right class="personal">\n\n          <button ion-fab mini (click)="editMacros()"><ion-icon name="md-create"></ion-icon></button>\n\n          \n\n        </ion-fab>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content>\n\n        <div class="info">\n\n          <p class="label">Calories</p>\n\n          <p *ngFor="let entry of goalData">{{entry.data().goalCalories}}kcals</p>\n\n          <p class="label">Protein</p>\n\n          <p *ngFor="let entry of goalData">{{entry.data().goalProtein.toFixed(1)}}g</p>\n\n          <p class="label">Fat</p>\n\n          <p *ngFor="let entry of goalData">{{entry.data().goalFat.toFixed(1)}}g</p>\n\n          <p class="label">Carbs</p>\n\n          <p *ngFor="let entry of goalData">{{entry.data().goalCarbs.toFixed(1)}}g</p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<!-- <div class="floating">\n\n  <button ion-button block gradient-left box-shadow (click)="add()">Update Profile</button>\n\n</div> -->'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\goals\goals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], GoalsPage);
    return GoalsPage;
}());

//# sourceMappingURL=goals.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__meal_option_modal_meal_option_modal__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__food_results_food_results__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_edit_journal_item_edit_journal_item__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__macro_breakdown_macro_breakdown__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_firestore__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var JournalPage = /** @class */ (function () {
    function JournalPage(navCtrl, navParams, actionSheetCtrl, storage, toast, modal, fireStore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.toast = toast;
        this.modal = modal;
        this.fireStore = fireStore;
        this.foodItems = [];
        this.goalData = [];
        this.food = [];
        this.now = new Date();
        this.totalCalories = 0;
        this.totalCalsForBreakfast = 0;
        this.totalCalsForLunch = 0;
        this.totalCalsForDinner = 0;
        this.totalCalsForSnacks = 0;
        this.journalItem = {};
        this.getGoalData();
        this.getFoodData();
        // this.setValues();
        // this.getCalories();
        var newDate = this.navParams.get('newDate');
        if (newDate != null) {
            this.now = newDate;
        }
        this.dateString = this.now.toDateString();
        this.getFood();
    }
    JournalPage_1 = JournalPage;
    JournalPage.prototype.macroBreakdown = function () {
        var macroModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__macro_breakdown_macro_breakdown__["a" /* MacroBreakdownPage */]);
        macroModal.present();
    };
    JournalPage.prototype.getGoalData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fireStore.doc("/users/" + __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid + "/goals/" + __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid).valueChanges().subscribe(function (goals) {
                            _this.getGoalCals(goals);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JournalPage.prototype.getGoalCals = function (goals) {
        if (goals == undefined) {
            console.log("Empty List");
            this.goalCalories = 0;
        }
        else {
            console.log("List contains data");
            this.goalCalories = goals.goalCalories;
        }
    };
    JournalPage.prototype.getFoodData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fireStore.collection("journalEntries", function (ref) {
                            return ref.where("owner", "==", __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid);
                        }).valueChanges().subscribe(function (entries) {
                            // this.getTotalCalories(entries);
                        })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.fireStore.collection("journalEntries", function (ref) {
                                return ref.where("owner", "==", __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid);
                            }).valueChanges()];
                    case 2:
                        _a.entries = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // getTotalCalories(){
    //   for(let entry of this.food){
    //     if(this.dateString == entry.created)
    //     {
    //     this.totalCalories += entry.calories;
    //     }
    //     // For breakfast
    //     if(entry.mealOption == 1 && this.dateString == entry.created)
    //     {
    //       this.totalCalsForBreakfast += entry.calories;
    //     }
    //     // For Lunch
    //     else if(entry.mealOption == 2 && this.dateString == entry.created)
    //     {
    //       this.totalCalsForLunch += entry.calories;
    //     }
    //     else if(entry.mealOption == 3 && this.dateString == entry.created)
    //     {
    //       this.totalCalsForDinner += entry.calories;
    //     }
    //     else if(entry.mealOption == 4 && this.dateString == entry.created)
    //     {
    //       this.totalCalsForSnacks += entry.calories;
    //     }
    //     else
    //     {
    //       console.log("Error: Invalid meal option")
    //     }
    //   }
    // }
    JournalPage.prototype.getFood = function () {
        var _this = this;
        var query = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("journalEntries").where("owner", "==", __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid);
        query.onSnapshot(function (snapshot) {
            var changedDocs = snapshot.docChanges();
            changedDocs.forEach(function (change) {
                if (change.type == "added") {
                    //TODO
                    var match = _this.food.find(function (e) { return e.id !== change.doc.id; });
                    console.log(match);
                    if (match == undefined) {
                        console.log("Already added");
                    }
                    else {
                        _this.food.push(change.doc);
                        _this.navCtrl.setRoot(JournalPage_1);
                    }
                }
                if (change.type == "modified") {
                    //TODO
                    console.log("Modified doc " + change.doc.id);
                    for (var i = 0; i < _this.food.length; i++) {
                        if (_this.food[i].id == change.doc.id) {
                            _this.food[i] = change.doc;
                        }
                    }
                }
                if (change.type == "removed") {
                    for (var i = 0; i < _this.food.length; i++) {
                        if (_this.food[i].id == change.doc.id) {
                            _this.food.splice(i, 1);
                        }
                    }
                }
            });
            query.get()
                .then(function (docs) {
                docs.forEach(function (doc) {
                    _this.food.push(doc);
                });
                console.log(_this.food);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    JournalPage.prototype.getTotalCalories = function () {
        var total = 0;
        for (var _i = 0, _a = this.food; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (this.dateString == entry.data().created) {
                total += entry.data().calories;
            }
        }
        return total;
    };
    JournalPage.prototype.getTotalCalsForBreakfast = function () {
        var total = 0;
        for (var _i = 0, _a = this.food; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (this.dateString == entry.data().created && entry.data().mealOption == 1) {
                total += entry.data().calories;
            }
        }
        return total;
    };
    JournalPage.prototype.getTotalCalsForLunch = function () {
        var total = 0;
        for (var _i = 0, _a = this.food; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (this.dateString == entry.data().created && entry.data().mealOption == 2) {
                total += entry.data().calories;
            }
        }
        return total;
    };
    JournalPage.prototype.getTotalCalsForDinner = function () {
        var total = 0;
        for (var _i = 0, _a = this.food; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (this.dateString == entry.data().created && entry.data().mealOption == 3) {
                total += entry.data().calories;
            }
        }
        return total;
    };
    JournalPage.prototype.getTotalCalsForSnacks = function () {
        var total = 0;
        for (var _i = 0, _a = this.food; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (this.dateString == entry.data().created && entry.data().mealOption == 4) {
                total += entry.data().calories;
            }
        }
        return total;
    };
    JournalPage.prototype.selectEntry = function (food) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: "" + food.itemName,
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_edit_journal_item_edit_journal_item__["a" /* EditJournalItemPage */], { journalItem_ID: food.id, data: food });
                    }
                },
                {
                    text: 'Delete',
                    role: "destructive",
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore().collection("journalEntries").doc(food.id).delete();
                        console.log("Entry Deleted");
                        _this.navCtrl.setRoot(JournalPage_1);
                        _this.toast.create({
                            message: "Deleted",
                            duration: 3000,
                            cssClass: "success"
                        }).present();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("User has selected cancel button");
                    }
                }
            ]
        }).present();
    };
    JournalPage.prototype.openModal = function () {
        var _this = this;
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_0__meal_option_modal_meal_option_modal__["a" /* MealOptionModalPage */]);
        myModal.present();
        myModal.onDidDismiss(function (mealSelection) {
            var selection1 = mealSelection.mealSelection;
            console.log(selection1);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__food_results_food_results__["a" /* FoodResultsPage */], { mealOption: selection1, date: _this.dateString });
        });
    };
    JournalPage.prototype.navToFoodResultsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__food_results_food_results__["a" /* FoodResultsPage */], { date: this.dateString });
    };
    JournalPage.prototype.increment = function () {
        this.now.setDate(this.now.getDate() + 1);
        console.log(this.now);
        this.navCtrl.setRoot(JournalPage_1, { newDate: this.now });
    };
    JournalPage.prototype.decrement = function () {
        this.now.setDate(this.now.getDate() - 1);
        console.log(this.now);
        this.navCtrl.setRoot(JournalPage_1, { newDate: this.now });
    };
    JournalPage = JournalPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-journal',template:/*ion-inline-start:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\journal\journal.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="macroBreakdown()">\n\n            <ion-icon name="pie"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n    <ion-title>Journal</ion-title>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button icon-only (click)="decrement()">\n\n                <ion-icon name="arrow-dropleft"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>{{now | date:\'EEEE, MMM d\'}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="increment()">\n\n              <ion-icon name="arrow-dropright"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n\n\n    <ion-card style="border: 1px solid #10C488; height: 100px; font-size: 1.4rem;" >\n\n\n\n      <ion-card-content>\n\n       <ion-grid>\n\n         <ion-row>\n\n           <ion-col >\n\n            <p>Goal</p>\n\n           </ion-col>\n\n           <ion-col >\n\n             <p>Consumed</p>\n\n          </ion-col>\n\n          <ion-col>\n\n            <p>Left</p>\n\n          </ion-col>\n\n         </ion-row>\n\n         <ion-row>\n\n            <ion-col >\n\n             <p>{{(goalCalories | number:\'.1-1\') || 0}}</p>\n\n            </ion-col>\n\n            <ion-col >\n\n              <p>{{(getTotalCalories() | number:\'.1-1\') || 0}}</p>\n\n           </ion-col>\n\n           <ion-col>\n\n             <p>{{((goalCalories - totalCalories | number:\'.1-1\')) || 0}}</p>\n\n           </ion-col>\n\n          </ion-row>\n\n       </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n  <div class="container">\n\n  <ion-list>\n\n    \n\n    <div class="breakfast" style="border:0.2px  black; margin-bottom: 10px; height: 10%">\n\n        <ion-item class="toolbarItems" no-lines>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                  <h4>Breakfast</h4>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <h5 style="float:right">{{(getTotalCalsForBreakfast() | number:\'.1-1\')}}</h5>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-item>\n\n        <ion-list *ngFor="let entry of entries | async" style="margin: 0%">\n\n          <ion-item *ngIf="entry.mealOption == 1  && entry.created == dateString"  (click)="selectEntry(entry)">\n\n              \n\n      \n\n          <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                    <h2>{{entry.itemName}}</h2>\n\n                    <h3>{{entry.brandName}}</h3>\n\n                    <p>{{entry.selectedServingType}}</p>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <h3 style="float:right">{{(entry.calories | number:\'.1-1\')}} cals</h3>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n  \n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div class="lunch" style="border:0.2px  black; margin-bottom: 10px;">\n\n      <ion-item class="toolbarItems" no-lines>\n\n          <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                    <h4>Lunch</h4>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <h5 style="float:right">{{(getTotalCalsForLunch() | number:\'.1-1\')}}</h5>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-item>\n\n          <ion-list *ngFor="let entry of entries | async" style="margin: 0%">\n\n            <ion-item *ngIf="entry.mealOption == 2  && entry.created == dateString"  (click)="selectEntry(entry)">\n\n                \n\n        \n\n            <ion-grid>\n\n                <ion-row>\n\n                  <ion-col>\n\n                      <h2>{{entry.itemName}}</h2>\n\n                      <h3>{{entry.brandName}}</h3>\n\n                      <p>{{entry.selectedServingType}}</p>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                      <h3 style="float:right">{{(entry.calories | number:\'.1-1\')}} cals</h3>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n    \n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n    \n\n    <div class="dinner" style="border:0.2px  black; margin-bottom: 10px;">\n\n        <ion-item class="toolbarItems" no-lines>\n\n            <ion-grid>\n\n                <ion-row>\n\n                  <ion-col>\n\n                      <h4>Dinner</h4>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                      <h5 style="float:right">{{(getTotalCalsForDinner() | number:\'.1-1\')}}</h5>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-item>\n\n            <ion-list *ngFor="let entry of entries | async" style="margin: 0%">\n\n              <ion-item *ngIf="entry.mealOption == 3  && entry.created == dateString"  (click)="selectEntry(entry)">\n\n                  \n\n          \n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                        <h2>{{entry.itemName}}</h2>\n\n                        <h3>{{entry.brandName}}</h3>\n\n                        <p>{{entry.selectedServingType}}</p>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <h3 style="float:right">{{(entry.calories | number:\'.1-1\')}} cals</h3>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n      \n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n      <div class="snacks" style="border:0.2px  black; margin-bottom: 10px;">\n\n          <ion-item class="toolbarItems" no-lines>\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                        <h4>Snacks</h4>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <h5 style="float:right">{{(getTotalCalsForSnacks() | number:\'.1-1\')}}</h5>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </ion-item>\n\n\n\n              <ion-list *ngFor="let entry of entries | async" style="margin: 0%">\n\n                  <ion-item *ngIf="entry.mealOption == 4  && entry.created == dateString"  (click)="selectEntry(entry)">\n\n                      \n\n              \n\n                  <ion-grid>\n\n                      <ion-row>\n\n                        <ion-col>\n\n                            <h2>{{entry.itemName}}</h2>\n\n                            <h3>{{entry.brandName}}</h3>\n\n                            <p>{{entry.selectedServingType}}</p>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <h3 style="float:right">{{(entry.calories | number:\'.1-1\')}} cals</h3>\n\n                        </ion-col>\n\n                      </ion-row>\n\n                    </ion-grid>\n\n          \n\n              </ion-item>\n\n            </ion-list>\n\n        </div>\n\n  </ion-list>\n\n</div>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jamie\source\repos\Ionic\PocketCoach\src\pages\journal\journal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], JournalPage);
    return JournalPage;
    var JournalPage_1;
}());

//# sourceMappingURL=journal.js.map

/***/ })

},[460]);
//# sourceMappingURL=main.js.map