import mongoose from 'mongoose';

const TiraiSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  action: { type: String, required: true },
});

export default mongoose.models.Mekatronika_Tirai || mongoose.model('Mekatronika_Tirai', TiraiSchema);