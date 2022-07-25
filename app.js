// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.querySelector('.searchUser');

// Search input event listener
// searchUser.addEventListener('keyup', (e) => {
searchUser.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        const userText = e.target.value;
        console.log(userText);
        if(userText !== '') {
            // Make http call
            github.getUser(userText)
                .then(data => {
                    // console.log(data.data);
                    // const coin = data.data.filter(e => {
                    //     if(e.id == userText) {
                    //       return true;
                    //     }
                    // });
                    console.log(data);
                    if(data.profile.message == 'Not Found') {
                        ui.clearProfile();
                        ui.showAlert('User not found', 'alert alert-danger');
                    } else {
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos);
                    }
                })
        }
    }
});