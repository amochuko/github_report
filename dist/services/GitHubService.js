"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("../models/User");
var Repo_1 = require("../models/Repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    }
};
var url = 'https://api.github.com/users/';
var GitHubService = /** @class */ (function () {
    function GitHubService() {
    }
    GitHubService.prototype.getUserInfo = function (userName, cb) {
        request.get(url + userName, OPTIONS, function (err, res, body) {
            if (err)
                console.log(err);
            var user = new User_1.User(JSON.parse(body));
            cb(user);
        });
    };
    GitHubService.prototype.getRepos = function (userName, cb) {
        request.get(url + userName + '/repos', OPTIONS, function (err, res, body) {
            if (err) {
                console.log(err);
            }
            var repos = JSON.parse(body).map(function (el) { return new Repo_1.Repo(el); });
            cb(repos);
        });
    };
    return GitHubService;
}());
exports.GitHubService = GitHubService;
