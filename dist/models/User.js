"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userRes) {
        this.login = userRes.login;
        this.fullName = userRes.name;
        this.repoCount = userRes.public_repos;
        this.followerCount = userRes.followers;
        this.repos = userRes.repos;
    }
    return User;
}());
exports.User = User;
