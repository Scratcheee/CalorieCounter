import { Box, FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, Text, NumberInputStepper, Radio, RadioGroup, Stack, Switch, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const SetupScreen = () => {

  const [weight, setWeight] = useState(0);
  const [heightFt, setHeightFt] = useState(0)
  const [heightIn, setHeightIn] = useState(0)
  const [gender, setGender] = useState('')
  const [activity, setActivity] = useState('')
  const [age, setAge] = useState()
  const [bmr, setBmr] = useState(0)
  const [edee, setEdee] = useState(0)

 

  const handleSubmit = (e) => {
    e.preventDefault()
    if(gender === 'male'){
      setBmr((4.536 * weight) + (15.88 * ((heightFt * 12) + heightIn) ) - (5 * age) + 5)
    } else if(gender === 'female') {
      setBmr((4.536 * weight) + (15.88 * ((heightFt * 12) + heightIn) ) - (5 * age) - 161)
    }
    setEdee(bmr * (parseFloat(activity)))
    
    
  }



  return (
    <Box maxW={480}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Gender:</FormLabel>
            <RadioGroup onChange={setGender} value={gender} >
              <Stack direction={'row'}>
                <Radio value={'male'}  >Male</Radio>
                <Radio value={'female'}  >Female</Radio>
              </Stack>
            </RadioGroup>
            {/* <FormLabel>
              Use Metric?
            </FormLabel>
            <Switch /> */}
            <FormLabel>Weight:</FormLabel>
            <Stack direction={'row'}>
              <NumberInput allowMouseWheel min={0} value={weight} onChange={(value) => setWeight(value)} isRequired>
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>lbs</Text>
            </Stack>
            <FormLabel>
              Height:
            </FormLabel>
            <Stack direction={'row'}>
            <Stack direction={'row'}>
              <NumberInput allowMouseWheel min={1} value={heightFt} onChange={(value) => setHeightFt(parseInt(value))} isRequired>
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>ft</Text>
            </Stack>
            <Stack direction={'row'}>
              <NumberInput allowMouseWheel min={1} max={11} value={heightIn} onChange={(value) => setHeightIn(parseInt(value))} isRequired>
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>in</Text>
            </Stack>
            </Stack>
            <FormLabel>
              Age:
            </FormLabel>
            <NumberInput allowMouseWheel min={1} max={120} value={age} onChange={(value) => setAge(parseInt(value))} isRequired>
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <FormLabel>Activity Level:</FormLabel>
            <RadioGroup onChange={setActivity} value={activity} >
              <Stack direction={'row'}>
                <Radio value={'1.2'} >Sedentary</Radio>
                <Radio value={'1.375'} >Low Active</Radio>
                <Radio value={'1.55'} >Active</Radio>
                <Radio value={'1.9'} >Very Active</Radio>

              </Stack>
            </RadioGroup>
            <Button type='submit'  >Submit</Button>
            <Text>Your Base Metamolic Rate is: {Math.round(bmr)}</Text>
            <Text>Your Estimated Daily Energey Expenditure is: {Math.round(edee)}</Text>


        </FormControl>
      </form>
    </Box>
  )
}

export default SetupScreen