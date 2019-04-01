"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var readLine = __importStar(require("readline"));
var GitHubService_1 = require("./services/GitHubService");
var git = new GitHubService_1.GitHubService();
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a username to search:', function (userName) {
    //TODO: 
    git.getUserInfo(userName, function (user) {
        //repo
        git.getRepos(userName, function (repos) {
            var sortedRepos = _.sortBy(repos, [
                function (repo) { return repo.forkCount * -1; }
            ]);
            var filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
    rl.close();
});
