import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  HStack,
  Button,
  InputGroup,
  Container,
} from "@chakra-ui/react";

function App() {
  const [location, setLocation] = useState();
  const [budget, setBudget] = useState(null);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleSubmitButton = () => {
    const items = {
      location: location,
      budget: budget,
      startTime: startTime,
      endTime: endTime,
      totalTime: endTime.getDate - startTime.getDate,
    };
    console.log(items);
  };
  return <div></div>;
}

export default App;
