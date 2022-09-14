import { Container, Typography, Grid, Button, Box } from "@material-ui/core";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { FormTextField } from "./Field";
import * as yup from "yup";
import "../../App.css";
import UploadImage from "./UploadImage";

interface FormValues {
  product_name: string;
  description: string;
  quantity: string;
  unit_price: string;
}

const validationSchema = yup.object().shape({
  product_name: yup.string().required("Required"),
  description: yup.string().required("Required"),
  quantity: yup.string().required("Required"),
  unit_price: yup.string().required("Required"),
});

export default function MyForm() {
  return (
    <Container maxWidth="md">
      <Box mb={3} p={2}>
        <Typography
          align="center"
          variant="h5"
          style={{ lineHeight: 1.25, marginBottom: 16 }}
        >
          Add New Product
        </Typography>
      </Box>
      <Formik
        initialValues={{
          product_name: "",
          description: "",
          quantity: "",
          unit_price: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          alert(JSON.stringify(values, null, 2));
          formikHelpers.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form noValidate autoComplete="off">
            <Grid container spacing={2} xs={12}>
              <Grid item xs={12}>
                <Field
                  name="product_name"
                  label="Product Name"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12} style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <UploadImage />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="description"
                  label="Description"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="quantity"
                  label="Quantity"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="unit_price"
                  label="Unit Price"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  size="large"
                  color="primary"
                  disabled={formikProps.isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
