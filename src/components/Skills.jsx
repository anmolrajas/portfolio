import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FiCode, FiDatabase, FiServer, FiSmartphone, 
  FiGitBranch, FiShield
} from 'react-icons/fi';

const SkillsSection = styled.section`
  padding: 8rem 2rem;
  background: var(--background-color);
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: var(--card-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px var(--shadow-color);

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled(motion.span)`
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: var(--background-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }
`;

const ProgressSection = styled(motion.div)`
  margin-top: 4rem;
`;

const ProgressTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 3rem;
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProgressItem = styled(motion.div)`
  background: var(--card-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px var(--shadow-color);

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
  }
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProgressName = styled.span`
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1.1rem;
`;

const ProgressPercentage = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
`;

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Frontend Technologies',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: <FiServer />,
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      icon: <FiDatabase />,
      title: 'Database & Cloud',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      icon: <FiGitBranch />,
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    },
    {
      icon: <FiShield />,
      title: 'Security & Performance',
      skills: ['OAuth', 'JWT', 'HTTPS', 'CORS', 'CDN']
    }
  ];

  const progressSkills = [
    { name: 'React', percentage: 95 },
    { name: 'Node.js & Express', percentage: 90 },
    { name: 'TypeScript', percentage: 88 },
    { name: 'Database Design', percentage: 92 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <SkillsSection id="skills">
      <BackgroundDecoration>
        <FloatingElement
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '15%', left: '5%' }}
        />
        <FloatingElement
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '70%', right: '8%' }}
        />
      </BackgroundDecoration>

      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle>Skills & Technologies</SectionTitle>
          <SectionSubtitle>
            A comprehensive overview of my technical skills and expertise across various technologies
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryHeader>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <ProgressSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ProgressTitle>Proficiency Levels</ProgressTitle>
          <ProgressGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {progressSkills.map((skill, index) => (
              <ProgressItem
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ProgressHeader>
                  <ProgressName>{skill.name}</ProgressName>
                  <ProgressPercentage>{skill.percentage}%</ProgressPercentage>
                </ProgressHeader>
                <ProgressBar>
                  <ProgressFill
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </ProgressBar>
              </ProgressItem>
            ))}
          </ProgressGrid>
        </ProgressSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 