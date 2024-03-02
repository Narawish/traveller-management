import { useState } from "react";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Container,
  theme,
  Heading,
  Text,
  Flex,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function Form() {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleSubmitButton = () => {
    var diffMs = Math.abs(new Date(endTime) - new Date(startTime));
    var diffMins = diffMs / 1000 / 60;
    const items = {
      location: location,
      budget: budget,
      startTime: startTime,
      endTime: endTime,
      totalTime: diffMins,
    };
    console.log(items);
  };

  //Button Props
  var nullCondition =
    location === "" || budget === "" || startTime === null || endTime === null;
  var buttonColor = nullCondition ? "white" : "green";
  var isDisable = nullCondition ? true : false;

  var isLocationError = location === "";
  return (
    <ChakraBaseProvider theme={theme}>
      <Flex
        width={"100vw"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Container maxW="full" p={0}>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
            bg="red.50"
          >
            <VStack spacing={4} alignItems="flex-start">
              <Heading>Travellers' Friend</Heading>
              <Text>Please input all information below:</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w={"full"}>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input
                    type="string"
                    placeholder="e.g. Bangkok"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  {!isLocationError ? (
                    <FormHelperText>
                      Enter the location you want to go.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Location is required.</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Budget (in THB)</FormLabel>
                  <Input
                    type="number"
                    placeholder="e.g. 3000"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Starting Date</FormLabel>
                  <Input
                    size="md"
                    type="datetime-local"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Ending Date</FormLabel>
                  <Input
                    size="md"
                    type="datetime-local"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button
                  w={"full"}
                  variant="outline"
                  onClick={handleSubmitButton}
                  bg={buttonColor}
                  isDisabled={isDisable}
                >
                  Create Plan
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Container>
      </Flex>
    </ChakraBaseProvider>
  );
}

export default Form;
