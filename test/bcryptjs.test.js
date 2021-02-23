const bcrypt = require('bcryptjs');


bcrypt.hash('pepe',6).then(r => console.log(r))
console.log(bcrypt);

bcrypt.compare('pepe','$2a$06$NPujnfudltuzTZeKA2UEQuREwzJ86RikKCR57objfXvKIS52bU6VO').then(console.log)