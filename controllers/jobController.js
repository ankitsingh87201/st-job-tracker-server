import Job from "../models/Job.js";

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Add new job
// @route   POST /api/jobs
// @access  Public
export const addJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Delete a job
// @route   DELETE /api/jobs/:id
// @access  Public
export const deleteJob = async (req, res) => {
  try {
    const deleted = await Job.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateJobStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Job.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
