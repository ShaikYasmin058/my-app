const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
    try {
        const { title, description, goal, deadline } = req.body;
        const newProject = new Project({ title, description, goal, deadline, owner: req.user.id });

        await newProject.save();
        res.json(newProject);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};
