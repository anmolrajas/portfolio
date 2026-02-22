import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiCalendar, FiMapPin, FiExternalLink, FiAward } from 'react-icons/fi';

const ExperienceSection = styled.section`
  padding: 8rem 2rem;
  background: var(--background-color);
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 45%;

  &:nth-child(odd) {
    left: 0;
    text-align: left;

    @media (max-width: 768px) {
      width: 100%;
      text-align: left;
      padding-left: 50px;
    }
  }

  &:nth-child(even) {
    left: 55%;
    text-align: left;

    @media (max-width: 768px) {
      width: 100%;
      left: 0;
      text-align: left;
      padding-left: 50px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 16px;
    height: 16px;
    background: var(--primary-color);
    border-radius: 50%;
    border: 3px solid var(--background-color);

    @media (max-width: 768px) {
      left: 12px;
    }
  }

  &:nth-child(odd)::before {
    right: -8px;

    @media (max-width: 768px) {
      right: auto;
      left: 12px;
    }
  }

  &:nth-child(even)::before {
    left: -8px;

    @media (max-width: 768px) {
      left: 12px;
    }
  }
`;

const ExperienceCard = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.h4`
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  flex-wrap: wrap;
`;

const JobDetail = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const JobDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Achievements = styled.div`
  margin-bottom: 1rem;
`;

const AchievementTitle = styled.h5`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AchievementItem = styled.li`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '•';
    color: var(--primary-color);
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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

const CompanyLink = styled(motion.a)`
  color: var(--primary-color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4cd4b0;
  }
`;

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Mediology Software Pvt. Ltd.',
      location: 'Gurugram, India',
      period: 'Aug 2025 - Present',
      achievements: [
        'Building membership and invoice dashboards, including a month‑wise automated invoice generator to streamline billing workflows.',
        'Working with MCP (Model Context Protocol) servers to integrate advanced AI-driven functionalities into products.',
        'Actively exploring AI technologies and contributing to features that bring AI capabilities to content management and automation.'
      ],
      tech: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Tailwind CSS', 'AI', 'MCP servers'],
      companyUrl: 'https://www.mediologysoftware.com'
    },
    {
      id: 2,
      title: 'Software Engineer Intern',
      company: 'Mediology Software Pvt. Ltd.',
      location: 'Gurugram, India',
      period: 'Aug 2024 - July 2025',
      achievements: [
        'Worked on AI-powered CMS development and implementation',
        'Developed Cricket Widget Builder for enhanced user experience',
        'Created interactive dashboards for enterprise web applications',
        'Contributed to front-end and back-end features using React and Node.js',
        'Collaborated with senior developers to ensure scalable and performant solutions'
      ],
      tech: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Tailwind CSS'],
      companyUrl: 'https://www.mediologysoftware.com'
    },
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Work Experience</SectionTitle>
          <SectionSubtitle>
            My professional journey and the companies I've had the privilege to work with
          </SectionSubtitle>
        </SectionHeader>

        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ExperienceCard>
                <JobTitle>{experience.title}</JobTitle>
                <CompanyName>
                  {experience.company}
                  <CompanyLink
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiExternalLink />
                  </CompanyLink>
                </CompanyName>
                <JobDetails>
                  <JobDetail>
                    <FiCalendar />
                    {experience.period}
                  </JobDetail>
                  <JobDetail>
                    <FiMapPin />
                    {experience.location}
                  </JobDetail>
                </JobDetails>
                <Achievements>
                  <AchievementTitle>
                    <FiAward />
                    Key Achievements
                  </AchievementTitle>
                  <AchievementList>
                    {experience.achievements.map((achievement, index) => (
                      <AchievementItem key={index}>
                        {achievement}
                      </AchievementItem>
                    ))}
                  </AchievementList>
                </Achievements>
                <TechStack>
                  {experience.tech.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 