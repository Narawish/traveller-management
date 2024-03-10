import React, { useState, useEffect } from "react";

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
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Select, useChakraSelectProps } from "chakra-react-select";
import AxiosInstance from "./Axios";
import Map from "./Map";

function Form() {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isShown, setIsShwon] = useState(false);

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
    setIsShwon(true);
  };

  //Button Props
  var inValidEndingDate = endTime <= startTime && endTime;
  var inValidBudget = budget < 0;
  var nullCondition =
    location === "" ||
    budget === "" ||
    startTime === null ||
    endTime === null ||
    inValidEndingDate;
  var buttonColor = nullCondition ? "white" : "green";
  var isDisable = nullCondition ? true : false;
  // Get Province name
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setProvinces(
            result
              .map((item) => ({
                label:
                  item.name_en.charAt(0).toUpperCase() + item.name_en.slice(1),
                value: item.name_en,
              }))
              .sort((a, b) => a.label.localeCompare(b.label))
          );
        });
    })();
  }, []);

  return (
    <ChakraBaseProvider theme={theme}>
      <Container maxW="full" p={0}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={4} alignItems="flex-start">
            <Heading>Travellers' Friend</Heading>
            <Text>Please input all information below:</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w={"full"}>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Select
                  options={provinces}
                  value={location}
                  onChange={setLocation}
                  selectedOptionStyle="check"
                ></Select>
                <FormHelperText>
                  Enter the location you want to go.
                </FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isInvalid={inValidBudget}>
                <FormLabel>Budget (in THB)</FormLabel>
                <Input
                  type="number"
                  placeholder="e.g. 3000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
                {!inValidBudget ? (
                  <FormHelperText>
                    Enter your budget for this trip.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Budget must greater than 0
                  </FormErrorMessage>
                )}
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
                <FormHelperText>When do you want to go?</FormHelperText>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl isInvalid={inValidEndingDate}>
                <FormLabel>Ending Date</FormLabel>
                <Input
                  size="md"
                  type="datetime-local"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
                {inValidEndingDate ? (
                  <FormErrorMessage>
                    Ending date should greater than starting date
                  </FormErrorMessage>
                ) : (
                  <FormHelperText>When will you come back?</FormHelperText>
                )}
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                id="submit-button"
                w={"full"}
                variant="outline"
                onClick={handleSubmitButton}
                isDisabled={isDisable}
                bg="white"
                _hover={{ bg: buttonColor, color: "white" }}
              >
                Create Plan
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Container>
      <Container maxW="full" p={10}>
        {isShown && <Map />}
      </Container>
    </ChakraBaseProvider>
  );
}

export default Form;
