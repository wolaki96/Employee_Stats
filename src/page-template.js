const generateHTML = team => {
    const teamMembers = [];
    // create the manager html
    const generateManager = manager => {
    let managerCard =
         `
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${manager.memberName}</div>
          <p class="text-gray-700 text-base">
            <li>ID: ${manager.id}</li>
            <li>Email: ${manager.email}</li>
            <li>Office Number: ${manager.officeNumber}</li>
          </p>
        </div>
      </div>
        </body>
        </html>
        
        `;
        teamMembers.push(managerCard);
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        let engineerCard =
             `
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">${engineer.memberName}</div>
              <p class="text-gray-700 text-base">
                <li>ID: ${engineer.id}</li>
                <li>Email: ${engineer.email}</li>
                <li>Office Number: ${engineer.officeNumber}</li>
              </p>
            </div>
          </div>
            </body>
            </html>
            
            `;
            teamMembers.push(engineerCard);
        };

    // create the html for interns
    const generateIntern = intern => {
        let internCard =
             `
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">${intern.memberName}</div>
              <p class="text-gray-700 text-base">
                <li>ID: ${intern.id}</li>
                <li>Email: ${intern.email}</li>
                <li>Office Number: ${intern.officeNumber}</li>
              </p>
            </div>
          </div>
            </body>
            </html>
            
            `;
            teamMembers.push(internCard);
        };
}

    // use the team array to generate pieces of html based on the employee role

module.exports = generateHTML
// module.exports = team => {
//     // template literal - html body that calls the generate team function
// }