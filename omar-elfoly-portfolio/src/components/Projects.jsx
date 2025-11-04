import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'Description of project one.',
        link: 'https://github.com/yourusername/project-one',
    },
    {
        title: 'Project Two',
        description: 'Description of project two.',
        link: 'https://github.com/yourusername/project-two',
    },
    {
        title: 'Project Three',
        description: 'Description of project three.',
        link: 'https://github.com/yourusername/project-three',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-5">
                            <h3 className="text-2xl font-semibold">{project.title}</h3>
                            <p className="mt-2">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline mt-4 block">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;