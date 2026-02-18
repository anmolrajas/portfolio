import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const FooterSection = styled.footer`
  background: var(--background-color);
  border-top: 1px solid var(--border-color);
  padding: 3rem 2rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FooterLogo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
`;

const FooterDescription = styled.p`
  color: var(--text-secondary);
  max-width: 500px;
  line-height: 1.6;
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const HeartIcon = styled(motion.span)`
  color: #ff6b6b;
  display: inline-block;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterLogo
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Anmol Rajas
          </FooterLogo>

          <FooterDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Full Stack Developer passionate about creating exceptional digital experiences. 
            Always eager to learn new technologies and take on challenging projects.
          </FooterDescription>

          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SocialLink
              href="https://github.com/anmolrajas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/anmol-rajas-898049395/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:anmolrajas251@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail />
            </SocialLink>
          </SocialLinks>

          <Copyright
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span>© {currentYear} Anmol Rajas. All rights reserved.</span>
            <span>Made with</span>
            <HeartIcon
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart />
            </HeartIcon>
            <span>using React</span>
          </Copyright>
        </FooterContent>
      </Container>
    </FooterSection>
  );
};

export default Footer; 