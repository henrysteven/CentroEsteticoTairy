module.exports = {
  HOST: "database-1.c51hbxpnuqg0.us-east-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "admin12345",
  DB: "cet",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
};