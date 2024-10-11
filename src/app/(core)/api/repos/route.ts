import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: process.env.APP_GITHUB_TOKEN });

export async function GET() {
  return octokit
    .request('GET /user/repos', {
      per_page: 1000,
      page: 0
    })
    .then(result => result.data)
    .then(repos => repos.map(repo => ({ name: 'gh → ' + repo.full_name, url: repo.html_url })))
    .then(repos => Response.json(repos));
}
