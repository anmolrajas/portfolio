import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectsSection = styled.section`
  padding: 8rem 2rem;
  background: var(--surface-color);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 500px));
  gap: 2rem;
  justify-content: center;
`;

const ProjectCard = styled(motion.div)`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'linear-gradient(135deg, var(--primary-color), #4cd4b0)'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(100, 255, 218, 0.2);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Upgradist – Online Learning & Assessment Platform',
      description: 'An online learning and assessment platform with practice modules, topic-wise quizzes, test creation, leaderboard, and analytics. Features include role-based dashboards, dynamic test generation, and seamless user experience for students and admins.',
      image: '/project-image.jpg',
      tech: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Cloudinary', 'MongoDB'],
      liveUrl: 'https://upgradist.vercel.app/',
      githubUrl: 'https://github.com/anmolrajas/EduQuest'
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionSubtitle>
            A showcase of my recent work and projects that demonstrate my skills and expertise
          </SectionSubtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectImage imageUrl={project.image}>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.tech.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiExternalLink />
                    Live Demo
                  </ProjectLink>
                  <ProjectLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiGithub />
                    Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 