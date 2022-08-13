import { BtnSearch, Eror, FormSearc, Input } from './SearchForm.styled';
import * as yup from 'yup';
import { Formik } from 'formik';

export const SearchForm = ({ setSearchQuery }) => {
  let schema = yup.object().shape({
    vinCode: yup.string().trim().max('17', 'maximum 17 characters').required(),
  });

  const hendleSubmit = (values, { resetForm }) => {
    setSearchQuery(values.vinCode);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ vinCode: '' }}
      validationSchema={schema}
      onSubmit={hendleSubmit}
    >
      <FormSearc>
        <Input type="text" name="vinCode" />
        <Eror name="vinCode" component="div" />
        <BtnSearch type="submit">Submit</BtnSearch>
      </FormSearc>
    </Formik>
  );
};
