class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
        this.repo = document.querySelector('#repos');
        this.avatar = document.querySelector('#gitavatar');
        this.info = document.querySelector('#gituser');
    }

    // Display profile in UI
    showProfile(user) {
        this.profile.style = "";
        this.avatar.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <img class="card-image" src="${user.avatar_url}">
                </div>
            </div>
            <a target="_blank" href="${user.html_url}" class="btn btn-primary profile">See GitHub Profile</a>
        `;
        this.info.innerHTML = `<h2 class="fs-4">GitHub User: ${user.login}</h2>
            <span class="badge bg-secondary infobadge">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary infobadge">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-secondary infobadge">Followers: ${user.followers}</span>
            <span class="badge bg-secondary infobadge">Following: ${user.following}</span>
            <ul class="list-group my-3">`;
        if(user.location != null) { 
            this.info.innerHTML += `<li class="list-group-item"><u>Location</u>: ${user.location}</li>`;
        }
        if(user.company != null) { 
            this.info.innerHTML += `<li class="list-group-item"><u>Company</u>: ${user.company}</li>`;
        }
        if(user.blog != null) { 
            this.info.innerHTML += `<li class="list-group-item"><u>Website</u>: ${user.blog}</li>`;
        }
        const date = user.created_at;
        this.info.innerHTML += `
        <li class="list-group-item"><u>Member since</u>: ${date.substring(0,10)}</li></ul>`;
    }

    showRepos(repos) {
        this.repo.style = "";
        let output = '<div id="repos"><h2 class="fs-4">Repos</h2>';
        repos.forEach((repo) => {
            output += `
                <div class="card card-body mb-1">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge bg-secondary infobadge">Stars: ${repo.stargazers_count}</span>
                        </div>
                    </div>
                </div>
            `;
        document.querySelector('#repos').innerHTML = output;
        output += `</div>`;
        });
    }

    // Show alert message when user not found
    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        // Timeout
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear current profile
    clearProfile() {
        const searchResult = document.querySelector('#profile');
        const searchRepos = document.querySelector('#repos');
        searchResult.style.display="none";
        searchRepos.style.display="none";
    }
}