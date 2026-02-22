import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiBook, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const EducationSection = styled.section`
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const EducationCard = styled(motion.div)`
  background: var(--card-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px var(--shadow-color);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
    border-color: var(--primary-color);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const EducationIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: var(--background-color);
`;

const DegreeTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const InstitutionName = styled.h4`
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EducationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const CGPA = styled.div`
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

const Achievements = styled.div`
  margin-top: 1rem;
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

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sagar Institute of Science Technology and Engineering",
      location: "Bhopal, Madhya Pradesh",
      period: "2021 - 2025",
      cgpa: "7.86/10"
    },
    {
      id: 2,
      degree: "High School (12th Standard)",
      institution: "Govt. Subhash Higher Secondary Excellence School",
      location: "Bhopal, Madhya Pradesh",
      period: "2020 - 2021",
      cgpa: "87.2%"
    },
    {
      id: 3,
      degree: "Secondary School (10th Standard)",
      institution: "Govt. Subhash Higher Secondary Excellence School",
      location: "Bhopal, Madhya Pradesh",
      period: "2018 - 2019",
      cgpa: "87.2%"
    }
  ];

  return (
    <EducationSection id="education">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle>Education</SectionTitle>
          <SectionSubtitle>
            My academic journey and achievements that shaped my foundation
          </SectionSubtitle>
        </SectionHeader>

        <EducationGrid>
          {educationData.map((education, index) => (
            <EducationCard
              key={education.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <EducationIcon>
                <FiBook />
              </EducationIcon>
              
              <DegreeTitle>{education.degree}</DegreeTitle>
              
              <InstitutionName>
                <FiMapPin />
                {education.institution}
              </InstitutionName>
              
              <EducationDetails>
                <DetailItem>
                  <FiCalendar />
                  {education.period}
                </DetailItem>
                <DetailItem>
                  <FiMapPin />
                  {education.location}
                </DetailItem>
              </EducationDetails>
              
              <CGPA>
                <FiAward />
                {education.cgpa.includes('%') ? `Percentage: ${education.cgpa}` : `CGPA: ${education.cgpa}`}
              </CGPA>
            </EducationCard>
          ))}
        </EducationGrid>
      </Container>
    </EducationSection>
  );
};

export default Education; 