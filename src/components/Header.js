import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: example@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/",
  },
];

const Header = () => {

  const headerRef = useRef()

  const handleClick = (e, anchor) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };



  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
      zIndex={10000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacin={16}>
              {socials.map((el, i) => <a key={i} href={el.url} target="_blank"><FontAwesomeIcon icon={el.icon} size="2x" /></a>)}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={e => handleClick(e, 'projects')}>Projects</a>
              <a href="#contactme" onClick={e => handleClick(e, 'contactme')}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
