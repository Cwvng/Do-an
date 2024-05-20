import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  issues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Issue' }],
  projectManager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema)
export default Project