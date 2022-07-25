class GitHub {
    constructor() {
        this.client_id = '9f74c3a35d973165004c';
        this.client_secret = '24369e244177160947216d7c3dd4e35bc7281afe';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // await response of the fetch call
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // only proceed once that promise is resolved
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        // only proceed once second promise is resolved
        return {
            profile,
            repos
        }
    }
}