import mongoose from 'mongoose'

const ClientBillSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientID: { type: String, required: true, unique: true },
  visitDate: { type: Date, required: true },
  visitID: { type: String, required: true },
  clientName: { type: String, required: true },
  testName: { type: String, required: true },
  MRP: { type: Number, required: true },
  discountAmount: { type: Number, default: 0 },
  netAmount: { type: Number, required: true },
  collectedAmount: { type: Number, required: true },
  dueAmount: { type: Number, default: 0 },
  B2B: { type: Boolean, default: false },
  differenceAmount: { type: Number, default: 0 },
}, { timestamps: true });

const Patient = mongoose.model("ClientBill", ClientBillSchema);

export {Patient};
