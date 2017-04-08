"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HeroFormComponent = (function () {
    function HeroFormComponent(http) {
        this.http = http;
        this.getAllArticlesData();
        //this.getSingleUser();
        // this.getSingleNode();
        //this.createData();
    }
    HeroFormComponent.prototype.getAllArticlesData = function () {
        var _this = this;
        this.http.get('http://localhost:8888/drupal-8.2.7/articles')
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    HeroFormComponent.prototype.getSingleUser = function () {
        var _this = this;
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        this.http.get('http://localhost:8888/drupal-8.2.7/user/1?_format=json', {
            headers: headers
        })
            .subscribe(function (res) { return _this.data = [res.json()]; });
    };
    HeroFormComponent.prototype.getSingleNode = function () {
        var _this = this;
        var headers = new http_1.Headers();
        this.http.get('http://localhost:8888/drupal-8.2.7/node/11?_format=json', {
            headers: headers
        })
            .subscribe(function (res) { return _this.data = [res.json()]; });
    };
    HeroFormComponent.prototype.createData = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', "application/json; charset=utf8");
        this.createAuthorizationHeader(headers);
        var body;
        body = {
            "type": [{ "target_id": "article" }],
            "title": [{ "value": "Hello Anand" }],
            "body": [{ "value": "How are you?" }]
        };
        this.http.post('http://localhost:8888/drupal-8.2.7/entity/node/', JSON.stringify(body), {
            headers: headers
        }).subscribe();
    };
    HeroFormComponent.prototype.updateData = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', "application/json");
        headers.append('Accept', "application/json");
        this.createAuthorizationHeader(headers);
        var body;
        body = {
            "type": [{ "target_id": "article" }],
            "title": [{ "value": "Hello bbbb" }],
            "body": [{ "value": "How are you?" }]
        };
        this.http.patch('http://localhost:8888/drupal-8.2.7/node/10?_format=json', body, {
            headers: headers
        }).subscribe();
    };
    HeroFormComponent.prototype.deleteData = function (id) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        return this.http.delete('http://localhost:8888/drupal-8.2.7/node' + id, {
            headers: headers,
        }).subscribe();
    };
    HeroFormComponent.prototype.editData = function (id) {
        var _this = this;
        this.http.get('http://localhost:8888/drupal-8.2.7/articles' + id)
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    HeroFormComponent.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('admin:admin'));
    };
    return HeroFormComponent;
}());
HeroFormComponent = __decorate([
    core_1.Component({
        selector: 'hero-form',
        templateUrl: 'app/hero-form.component.html',
        viewProviders: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HeroFormComponent);
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map