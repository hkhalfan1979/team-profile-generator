// Manager profile template
const managerCard = (profile) => `
  <div class="card col-md-4">
    <div class="card-header bg-dark text-white">
      <h3> ${profile.getName()} </h3>
      <h4> ${profile.getRole()} </h4>
    </div>
    <div class="card-body">
      <ul>
        <li>
          ID: ${profile.getID()}
        </li>
        <li>          
          Email: <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a>
        </li>
        <li>
          Office:  ${profile.getOffice()}
        </li>
      </ul>
    </div>
  </div>
`;

module.exports = managerCard;