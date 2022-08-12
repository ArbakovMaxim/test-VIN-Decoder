import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormSearc = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const BtnSearch = styled.button`
  padding: 10px;
  width: 120px;
  background: #2196f3;
  color: white;
  font-size: 14px;
  border: 1px solid grey;
  cursor: pointer;
`;

export const Input = styled(Field)`
  width: 300px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: 1px solid #cecece;
  background: #f6f6f6;
  border-radius: 8px;
`;

export const Eror = styled(ErrorMessage)`
  width: 180px;
`;
