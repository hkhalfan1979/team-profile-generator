// Engineer profile template
const engineerCard = (profile) => `
  <div class="card col-md-4">
    <div class="card-header bg-dark text-white">
      <h3> ${profile.getName()} </h3>
      <h4> ${profile.getRole()} </h4>
    </div>
    <div class="card-body bg-light">
      <ul>
        <li>
          ID: ${profile.getID()}
        </li>
        <li>         
          Email: <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a>
        </li>
        <li>          
          GitHub: <a href="http://www.github.com/${profile.getGithub()}">${profile.getGithub()}</a>
        </li>
      </ul>
    </div>
  </div>
`;

module.exports = engineerCard;