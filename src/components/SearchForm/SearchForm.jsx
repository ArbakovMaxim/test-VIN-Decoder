import { BtnSearch, Eror, FormSearc, Input } from './SearchForm.styled';
import * as yup from 'yup';
import { Formik } from 'formik';

export const SearchForm = ({ fetchAuto }) => {
  let schema = yup.object().shape({
    code: yup.string().trim().max('17', 'Максимум 17 символов').required(),
  });

  const hendleSubmit = (values, { resetForm }) => {
    fetchAuto(values.code);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ code: '' }}
      validationSchema={schema}
      onSubmit={hendleSubmit}
    >
      <FormSearc>
        <Input type="text" name="code" />
        <Eror name="code" component="div" />
        <BtnSearch type="submit">Submit</BtnSearch>
      </FormSearc>
    </Formik>
  );
};
