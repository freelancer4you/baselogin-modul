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
var auth_service_1 = require('../auth.service');
var AccountService = (function () {
    function AccountService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    AccountService.prototype.getAccountData = function () {
        //let headers = new Headers({ 'Accept': 'application/json' });
        //headers.append('authentication', `Bearer XY`);
        /*let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `He`)
        console.log(headers);
        let options = new RequestOptions({ headers: headers });
    
        let requestOptions = new RequestOptions({ headers: this.authService.getAuthHeaders() });
        console.log(this.authService.getAuthHeaders());
        return this.http.get('http://localhost:9000/protected/account', options)
        .map((res)=>res.json());*/
        //var xhr = new XMLHttpRequest();
        //xhr.open('GET', 'http://localhost:9000/protected/account', true);
        //xhr.withCredentials = true;
        //xhr.setRequestHeader("x-filename", "1");
        //xhr.setRequestHeader("authentication", "1");
        //xhr.setRequestHeader("Authorization","XY");
        //xhr.send(null);
        //var xhr = createCORSRequest('GET','http://localhost:9000/protected/account');
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        if ("withCredentials" in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari.
            xhr.open('GET', 'http://localhost:9000/protected/account', true);
        }
        else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open('GET', 'http://localhost:9000/protected/account');
        }
        else {
            // CORS not supported.
            xhr = null;
        }
        if (!xhr) {
            alert('CORS not supported');
            return;
        }
        // Response handlers.
        xhr.onload = function () {
            var text = xhr.responseText;
            var title = getTitle(text);
            alert('Response from CORS request to ' + url + ': ' + title);
        };
        xhr.onerror = function () {
            alert('Woops, there was an error making the request.');
        };
        xhr.setRequestHeader("authentication", "1");
        xhr.setRequestHeader("Authorization", "XY");
        xhr.send();
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, http_1.Http])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map