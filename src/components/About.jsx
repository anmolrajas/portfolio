import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiCode, FiDatabase, FiServer, FiSmartphone } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: var(--surface-color);
  position: relative;
  transition: background-color 0.3s ease;
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
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    color: var(--primary-color);
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: var(--card-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px var(--shadow-color);

  &:hover {
    background: rgba(99, 102, 241, 0.05);
    border-color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--background-color);
  font-weight: 700;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    background: var(--background-color);
    border-radius: 50%;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    z-index: 2;
  }

  &:hover::after {
    transform: translateX(100%);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: var(--gradient-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--background-color);
  font-weight: 700;
  z-index: 2;
  position: relative;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.05;
  pointer-events: none;
`;

const FloatingDot = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
`;

const About = () => {
  const skills = [
    {
      icon: <FiCode />,
      title: 'Frontend Development',
      description: 'React, TypeScript, HTML5, CSS3, Tailwind CSS'
    },
    {
      icon: <FiServer />,
      title: 'Backend Development',
      description: 'Node.js, Express'
    },
    {
      icon: <FiDatabase />,
      title: 'Database & Cloud',
      description: 'MongoDB, PostgreSQL, MySQL'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <AboutSection id="about">
      <BackgroundDecoration>
        <FloatingDot
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <FloatingDot
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '60%', right: '15%' }}
        />
      </BackgroundDecoration>

      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            Get to know me better and understand my passion for creating exceptional digital experiences
          </SectionSubtitle>
        </SectionHeader>

        <ContentGrid>
          <TextContent
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p>
              Hello! I'm <strong>Anmol Rajas</strong>, a passionate full-stack developer. My journey in web development started when I built my first 
              website, and I've been hooked ever since.
            </p>
            
            <p>
              I specialize in building scalable web applications using modern technologies. My expertise spans from 
              creating responsive user interfaces to designing robust backend systems. I believe in writing clean, 
              maintainable code and staying up-to-date with the latest industry trends.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I'm always excited to take on new challenges and 
              collaborate with like-minded individuals.
            </p>

            <SkillsGrid
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillCard>
              ))}
            </SkillsGrid>
          </TextContent>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 