import React from 'react';
import ReactDOM from "react-dom/client";
import Button from '@atlaskit/button';
import TextArea from '@atlaskit/textarea';
import TextField from '@atlaskit/textfield';
import axios from 'axios';
import Form, { Field, FormFooter } from '@atlaskit/form';

const baseUrl = window.location.origin
export async function sampleFunc() {
  console.log("inside samplefunc")
  try {
      const resp = await fetch(`${baseUrl}/plugins/servlet/`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // add more headers if needed
        },
      })
      const data = await resp.json();
      console.log("data ",{data})
      return data;

    
  } catch (error) {
    console.error("Error ", error);
  }
}
//export default class MyForm extends Component {
  export default function MyForm(){
   
  console.log("form here")
  sampleFunc()
    return (
       <div>Hello world</div>

  //  <div
  //   style={{
  //     display: 'flex',
  //     width: '400px',
  //     margin: '0 auto',
  //     flexDirection: 'column',
  //   }}
  // >
  //   {/* {sampleFunc()} */}
  //   <Form onSubmit={data => axios.post(document.getElementById("contextPath").value + "/plugins/servlet/form", data)}>
  //     {({ formProps }) => (
  //       <form {...formProps} name="text-fields">
  //         <Field name="firstname" defaultValue="" label="First name" isRequired>
  //           {({ fieldProps }) => <TextField {...fieldProps} />}
  //         </Field>

  //         <Field name="lastname" defaultValue="" label="Last name" isRequired>
  //           {({ fieldProps: { isRequired, isDisabled, ...others } }) => (
  //             <TextField
  //               disabled={isDisabled}
  //               required={isRequired}
  //               {...others}
  //             />
  //           )}
  //         </Field>
  //         <Field
  //           name="description"
  //           defaultValue=""
  //           label="Description"
  //         >
  //           {({ fieldProps }) => <TextArea {...fieldProps} />}
  //         </Field>

  //         <Field
  //           name="comments"
  //           defaultValue=""
  //           label="Additional comments"
  //         >
  //           {({ fieldProps }) => <TextArea {...fieldProps} />}
  //         </Field>
  //         <FormFooter>
  //           <Button type="submit" appearance="primary">
  //             Submit
  //           </Button>
  //         </FormFooter>
  //       </form>
  //     )}
  //   </Form>
  //</div>

);

}
// window.addEventListener('load', function() {
//     const wrapper = document.getElementById("container");
//     console.log({wrapper})
//     // eslint-disable-next-line no-unused-expressions
//     wrapper ? ReactDOM.render(<RecoilRoot><MyForm/></RecoilRoot>,wrapper) :false;
// });
window.addEventListener("load", function () {
  const wrapper = document.getElementById("container");
  if (!wrapper) {
    console.error("Error! No wrapper element found in DOM!");
    return;
  }
  console.log({ wrapper });
  const root = ReactDOM.createRoot(wrapper);
  root.render(
    
        <MyForm/>
    
  );
});