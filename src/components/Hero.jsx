import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    grid-template-areas: "image" "content";
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 5;
  
  @media (max-width: 768px) {
    grid-area: content;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-area: image;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  
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
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 2;
  position: relative;
`;

const Greeting = styled(motion.div)`
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 4rem);
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  color: var(--text-secondary);
  line-height: 1.3;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 500px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  &.primary {
    background: var(--gradient-primary);
    color: var(--background-color);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
    }
  }
  
  &.secondary {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    
    &:hover {
      background: rgba(99, 102, 241, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  z-index: 10;
  position: relative;
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-secondary);
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const ScrollArrow = styled(motion.div)`
  width: 2px;
  height: 30px;
  background: var(--primary-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid var(--primary-color);
  }
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.05;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
`;

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <HeroSection id="home">
      <BackgroundAnimation>
        <FloatingElement
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <FloatingElement
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '60%', right: '15%' }}
        />
      </BackgroundAnimation>

      <HeroContainer>
        <ContentSection
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greeting variants={itemVariants}>
            Hi, my name is
          </Greeting>

          <Name variants={itemVariants}>
            Anmol Rajas
          </Name>

          <Title variants={itemVariants}>
            I build things for the web
          </Title>

          <Description variants={itemVariants}>
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </Description>

          <ButtonGroup variants={itemVariants}>
            <Button
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('#contact', '_self')}
            >
              Get In Touch
            </Button>
            <Button
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/file/d/1SnRmi9BrueGfUO0IyScLF5j9ll8SCBj2/view?usp=sharing', '_blank')}
            >
              <FiDownload />
              Resume
            </Button>
          </ButtonGroup>

          <SocialLinks variants={itemVariants}>
            <SocialLink
              href="https://github.com/anmolrajas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => console.log('GitHub clicked')}
            >
              <FiGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/anmol-rajas-898049395/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => console.log('LinkedIn clicked')}
            >
              <FiLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:anmolrajas251@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => console.log('Email clicked')}
            >
              <FiMail />
            </SocialLink>
          </SocialLinks>
        </ContentSection>

        <ImageSection>
          <ProfileImage
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <ProfileImg src="/profile-image.jpg" alt="Anmol Rajas" />
          </ProfileImage>
        </ImageSection>
      </HeroContainer>

      <ScrollIndicator
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <span>Scroll Down</span>
        <ScrollArrow
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 