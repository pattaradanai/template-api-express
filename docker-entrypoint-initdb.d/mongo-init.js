db = db.getSiblingDB('mobilebe');
db.createUser(
    {
      user: 'root',
      pwd: 'secret',
      roles: [{ role: 'readWrite', db: 'mobilebe' }],
    },
  );