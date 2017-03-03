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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.clientId = 'porfolio-service';
        this.redirectUrl = 'http://localhost:8080/auth/realms/portfolio/protocol/openid-connect/auth';
        this.requestOptions = new http_1.RequestOptions({
            headers: new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
        });
    }
    AuthService.prototype.login = function () {
        var url = this.redirectUrl +
            "?response_type=id_token+token&scope=openid%20profile" +
            "&client_id=" + encodeURIComponent(this.clientId) +
            "&redirect_uri=" + encodeURIComponent(window.location.origin) +
            "&nonce=" + encodeURIComponent(this.createNonce());
        location.href = url;
    };
    AuthService.prototype.checkLoginState = function () {
        console.log("checkLoginState");
        var oidcResponse = window.location.hash.substr(1);
        if (!oidcResponse) {
            return;
        }
        var oidcParams = oidcResponse.split("&");
        var splitParams;
        var data = {};
        for (var i = 0; i < oidcParams.length; i++) {
            splitParams = oidcParams[i].split("=");
            splitParams[0] = decodeURIComponent(splitParams[0]);
            splitParams[1] = decodeURIComponent(splitParams[1]);
            data[splitParams[0]] = splitParams[1];
        }
        this.authState = data;
        var split_id_token = this.authState.id_token.split('.');
        this.id_token_payload = JSON.parse(atob(split_id_token[1]));
    };
    AuthService.prototype.logout = function () {
        this.authState = null;
    };
    AuthService.prototype.isLoggedIn = function () {
        console.log("isLoggedIn:" + !!this.authState);
        return !!this.authState;
    };
    AuthService.prototype.getAuthHeaders = function () {
        return new http_1.Headers({ 'Authorization': 'Bearer ' + this.authState.access_token });
    };
    AuthService.prototype.getUserName = function () {
        return this.id_token_payload.preferred_username ?
            this.id_token_payload.preferred_username : this.id_token_payload.name;
    };
    AuthService.prototype.createNonce = function () {
        //Nonce Generierung: Statische Demo-Implementierung
        var nonce = Math.floor(Math.random() * 1000) + '';
        localStorage.setItem("nonce", nonce);
        return nonce;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map