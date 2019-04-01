import { Repo } from './Repo';

export class User {
	login: string;
	fullName: string;
	repoCount: number;
	followerCount: number;
	repos?: Repo[];

	constructor(userRes: any) {
		this.login = userRes.login;
		this.fullName = userRes.name;
		this.repoCount = userRes.public_repos;
		this.followerCount = userRes.followers;
		this.repos = userRes.repos;
	}
}
