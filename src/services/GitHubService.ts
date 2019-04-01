import * as request from 'request';
import { User } from '../models/User';
import { Repo } from '../models/Repo';

const OPTIONS: any = {
	headers: {
		'User-Agent': 'request'
	}
};
let url = 'https://api.github.com/users/';

export class GitHubService {
	getUserInfo(userName: string, cb: (user: User) => any) {
		request.get(url + userName, OPTIONS, (err: any, res: any, body: any) => {
			if (err) console.log(err);
			let user = new User(JSON.parse(body));
			cb(user);
		});
	}
	getRepos(userName: string, cb: (repos: Repo[]) => any) {
		request.get(
			url + userName + '/repos',
			OPTIONS,
			(err: any, res: any, body: any) => {
				if (err) {
					console.log(err);
				}
				let repos = JSON.parse(body).map((el: any) => new Repo(el));
				cb(repos);
			}
		);
	}
}
