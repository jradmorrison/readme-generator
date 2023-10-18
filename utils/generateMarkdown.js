// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

// const apiUrl = 'https://api.github.com/licenses'

// fetch(apiUrl)
//   .then(function (response) {return response.json;}).then(()(data) => {console.log(data)})
//   // .then(function (response) {console.log(response)})

function getApi() {

  let requestUrl = 'https://api.github.com/licenses';
  // let requestUrl = 'https://api.github.com/licenses/mit'

  fetch(requestUrl).then(function (response) {return response.json();}).then(function (data) {
    // let licenses = data.map((licenses) => licenses.name)
    let key = data.map((licenses) => licenses.key)
    console.log(key)
  });
}
getApi()