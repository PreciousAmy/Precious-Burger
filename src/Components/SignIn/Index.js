import React from 'react'
import { FormButton, Container, FormWrapper, Icon, FormContent, Form, FormInput,FormSelect, FormOption, FormH1,FormLabel } from './SignEle'

const SignIn = () => {
  return (
    <div>
        <Container>
            <FormWrapper>
                <Icon to='/'> Blink-Burger</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Order-Form</FormH1>
                        <FormSelect>Burger Type
                          <FormOption value="Burger">Meaty Burger</FormOption>
                          <FormOption value="Burger">Cheesy Burger</FormOption>
                          <FormOption value="Burger">Family-sized Burger</FormOption>
                        </FormSelect>  



                        <FormLabel htmlfor='for'>Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlfor='for'>Phone Number</FormLabel>
                        <FormInput type='number' required />
                        <FormLabel htmlfor='for'>Address</FormLabel>
                        <FormInput type='text' required />

                        <FormButton>Request</FormButton>
                      




                    </Form>
                </FormContent>
            </FormWrapper>
        </Container>
      
    </div>
  )
}

export default SignIn
