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


const workstationSchema = new mongoose.Schema({
  name: {type: String,required: true},
  status: {type: String,enum: ['Active', 'Inactive', 'Maintenance'],default: 'Active'},
  ipAddress: {type: String,required: true},
  location: {type: String,required: true},
  lastMaintenance: {type: Date,default: null},
  specifications: {os: String,ram: String,processor: String,storage: String},
  assignedTo: {type: String,default: ''}
}, {
  timestamps: true
});


const Patient = mongoose.model("ClientBill", ClientBillSchema);
const Workers = mongoose.model('Workstation', workstationSchema);


export {Patient,Workers};
