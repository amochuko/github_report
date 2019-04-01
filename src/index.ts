import * as _ from 'lodash';
import * as readLine from 'readline';

import { GitHubService } from './services/GitHubService';
import { User } from './models/User';
import { Repo } from './models/Repo';

const git = new GitHubService();

const rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question(
	'Enter a username to search:',
	(userName: string): any => {
		//TODO: 
		git.getUserInfo(userName, (user: User) => {
			//repo
			git.getRepos(userName, (repos: Repo[]) => {
				let sortedRepos = _.sortBy(repos, [
					(repo: Repo) => repo.forkCount * -1
				]);
				let filteredRepos = _.take(sortedRepos, 5);
				user.repos = filteredRepos;
				console.log(user);
			});
		});
		rl.close();
	}
);
