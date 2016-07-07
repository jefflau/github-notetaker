const api = {
  url: 'https://api.github.com/',
  getBio(username){
    console.log('here')
    var username = username.toLowerCase().trim();
    return fetch(`${this.url}users/${username}`).then(res => res.json())
  },
  getRepos(username){
    var username = username.toLowerCase().trim();
    return fetch(`${this.url}users/${username}/repos`).then(res => res.json())
  }
}

export default api;
