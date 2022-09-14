import { Container, Typography, Grid, Button, Box } from "@material-ui/core";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { FormTextField } from "./Field";
import * as yup from "yup";
import "../../App.css";
import UploadImage from "./UploadImage";
import { useState } from "react";
import { addProduct } from "../../utils/api/Product";
import firebase from "../../Firebase-global";
interface FormValues {
  name: string;
  price: number;
  description: string;
  quantity: number;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  description: yup.string().required("Required"),
  quantity: yup.string().required("Required"),
  price: yup.string().required("Required"),
});

export default function MyForm({ setOpen }: any) {
  const [url, setUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);

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
          name: "",
          description: "",
          quantity: 1,
          price: 200,
        }}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          console.log(values);
          if (selectedImage === null) {
            addProduct({ ...values, url: "" });
            setOpen(false);
          } else {
            firebase
              .storage()
              .ref("/images" + selectedImage.name)
              .put(selectedImage)
              .then((data) => {
                firebase
                  .storage()
                  .ref("/images" + selectedImage.name)
                  .getDownloadURL()
                  .then((url) => {
                    addProduct({ ...values, url });
                    setOpen(false);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          }
          formikHelpers.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form noValidate autoComplete="off">
            <Grid container spacing={2} xs={12}>
              <Grid item xs={12}>
                <Field
                  name="name"
                  label="Product Name"
                  size="small"
                  component={FormTextField}
                />
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
                  type="number"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="price"
                  label="Unit Price"
                  type="number"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <UploadImage
                  url={url}
                  setUrl={setUrl}
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
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
