'use client'
import * as React from 'react'
import { Formik, Form } from 'formik';
import { TextField, Box, Button } from '@mui/material';
import { Textarea } from '@mui/joy';
import { PostClass } from '@/lib/posts/Posts';
import { useRouter } from 'next/navigation';
import SendIcon from '@mui/icons-material/Send';

interface initialFormValues {
    author: string,
    content: string,
    title: string
}
export default function FormCreate(): React.JSX.Element {
    const router = useRouter()

    const InputStyles = {
        width: "70%",
        margin: "1rem"
    }
    const initialValues: initialFormValues = {
        author: "",
        content: "",
        title: ""
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={values => {
                let errors: { title?: string, content?: string, author?: string } = {};
                if (!values.title) {
                    errors.title = 'Titulo requerido';
                }
                if (!values.content) {
                    errors.content = 'Contenido requerido';
                }
                if (!values.author) {
                    errors.author = 'Autor requerido';
                }
                return errors;
            }}
            onSubmit={async (values: initialFormValues, { setSubmitting }) => {
                console.log(values);
                const { data } = await PostClass.generatePost(values);
                if (data) {
                    router.push(`/posts/${data.id}`);
                }
                setSubmitting(false);
            }}
        >
            {({
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting
            }) => (
                <Box component={Form} sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={handleSubmit}>
                    <TextField
                        error={!!errors.author}
                        onChange={handleChange}
                        value={values.author}
                        helperText={errors.author ? errors.author : null}
                        sx={InputStyles}
                        fullWidth
                        id="author"
                        name="author"
                        label="Autor"
                        variant="outlined"
                    />
                    <TextField
                        error={!!errors.title}
                        onChange={handleChange}
                        value={values.title}
                        helperText={errors.title ? errors.title : null}
                        sx={InputStyles}
                        fullWidth
                        id="title"
                        name="title"
                        label="Titulo"
                        variant="outlined"
                    />
                    <Textarea
                        error={!!errors.content}
                        onChange={handleChange}
                        value={values.content}
                        sx={InputStyles}
                        id="content"
                        name="content"
                        size="lg"
                        placeholder="Contenido"
                        variant="outlined"
                    />
                    <Button id="submited" type="submit" startIcon={<SendIcon />} disabled={isSubmitting}>
                        Agregar Post
                    </Button>
                </Box>
            )}
        </Formik>
    )
}