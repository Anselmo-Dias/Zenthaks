import mongoose from "mongoose";

async function conectaNaDatabase() {
  await mongoose.connect(
    "mongodb+srv://Zenthaks:Zenthaks123@zenthaks.37333qm.mongodb.net/Guilda?appName=Zenthaks"
  );

  return mongoose.connection;
}

export default conectaNaDatabase;