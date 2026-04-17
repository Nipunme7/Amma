import { Box, Text, Image, Flex, Collapse, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const [hasStartedMusic, setHasStartedMusic] = useState(false);
  const audioRef = useRef(null);

  const handleToggle = () => {
    setShow(!show);

    if (!hasStartedMusic && audioRef.current) {
      audioRef.current.play().catch(() => {});
      setHasStartedMusic(true);
    }
  };

  return (
    <div>
      <main>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          marginTop={{ base: "72px", md: "150px" }}
          px={{ base: 4, sm: 6, md: 8 }}
          pb={{ base: 10, md: 12 }}
          maxW="100%"
          mx="auto"
          gap={{ base: 6, md: 0 }}
        >
          <Flex
            direction="column"
            marginRight={{ base: 0, md: "30px", lg: "100px" }}
            padding="10px"
            maxW={{ base: "100%", md: "599px" }}
            alignItems={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              fontSize={{ base: "18px", sm: "22px", md: "25px" }}
              fontWeight="bold"
              color="#C769AA"
              lineHeight="shorter"
              px={{ base: 1, md: 0 }}
            >
              HAPPY MOTHERS DAY MATASHREE ❤️
            </Text>
            <Collapse startingHeight={0} in={show}>
              <Text
                maxW={{ base: "100%", md: "599px" }}
                color="#595F4F"
                fontSize={{ base: "sm", md: "md" }}
                wordBreak="break-word"
              >
                Hello Hello Matashree, Happy Mothers day tapai lai. Aba uta huna
                nha payeni etai bata wish gardai xu. I miss you mom.
              </Text>
              <Text
                marginTop="10px"
                maxW={{ base: "100%", md: "599px" }}
                color="#595F4F"
                fontSize={{ base: "sm", md: "md" }}
                wordBreak="break-word"
              >
                Aba Thank you ta kati bhanne bhanne ho so tesma jadi nha mha.
                But thank you for always being there for me mom, Idk where I
                would be if it wasn't for you!!! Wishing you the bestest Mothers
                day ❤️❤️!!! Even tho I am not there :p
              </Text>
            </Collapse>
            <Button
              width={{ base: "min(100%, 200px)", md: "150px" }}
              marginTop="10px"
              onClick={handleToggle}
              backgroundColor="#C769AA"
              color="white"
              _hover={{ bg: "#D287BB" }}
            >
              Click here
            </Button>
            <audio ref={audioRef} loop>
              <source src="/Amma.m4a" type="audio/mp4" />
              <source src="/bg-music.mp3" type="audio/mpeg" />
            </audio>
          </Flex>
          <Image
            w={{ base: "min(92vw, 380px)", sm: "min(85vw, 440px)", md: "500px", lg: "700px" }}
            maxW="100%"
            h="auto"
            objectFit="contain"
            src="/mother.png"
            marginLeft={{ base: 0, md: "40px", lg: "100px" }}
            padding="10px"
            flexShrink={0}
          />
        </Box>
      </main>
    </div>
  );
}
