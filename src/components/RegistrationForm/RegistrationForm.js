import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import loginValidation from './registrationValidation';

const Input = ({
  input, label, type, meta: { touched, error, submitError }, ...rest
}) => (
  <div className={`form-group ${(error || submitError) && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className="col-sm-2">
      {label}
    </label>
    <div className="col-sm-10">
      <input {...input} {...rest} type={type} className="form-control" />
      {(error || submitError) && touched && <span className="glyphicon glyphicon-remove form-control-feedback" />}
      {(error || submitError)
        && touched && (
        <div className="text-danger">
          <strong>{error || submitError}</strong>
        </div>
      )}
    </div>
  </div>
);

const Select = ({
  input, label, type, meta: { touched, error, submitError }, options, ...rest
}) => (
  <div className={`form-group ${(error || submitError) && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className="col-sm-2">
      {label}
    </label>
    <div className="col-sm-10">
      <select {...input} {...rest} type={type} className="form-control">
        {options && options.map(item => (
          <option value={item.value}>{item.title}</option>
        ))}
      </select>
      {(error || submitError) && touched && <span className="glyphicon glyphicon-remove form-control-feedback" />}
      {(error || submitError)
      && touched && (
        <div className="text-danger">
          <strong>{error || submitError}</strong>
        </div>
      )}
    </div>
  </div>
);

Input.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired
};

const sexOptions = [
  {
    title: 'Чоловік',
    value: 'Жінка'
  },
  {
    title: 'Female',
    value: 'Female'
  }
];

const maritalOptions = [
  {
    title: 'Не одружений',
    value: 'Male'
  },
  {
    title: 'Female',
    value: 'Female'
  }
];

const LoginForm = ({
  onSubmit, submitButtonName, submitButtonIcon, isSubmitting, initialValues
}) => (
  <Form
    onSubmit={values => {
      if (isSubmitting) {
        onSubmit(values).then(() => {}, err => err);
      }
    }}
    validate={loginValidation}
    initialValues={initialValues}
    render={({ handleSubmit, submitError }) => (
      <form className={`form-horizontal ${isSubmitting && 'submitting-form'}`} onSubmit={handleSubmit}>
        <div className="form-section section-item-container">
          <Field name="name" type="text" component={Input} label="Ім'я" />
          <Field name="age" type="text" component={Input} label="Вік" />
          <Field name="gender" component={Select} label="Стать" options={sexOptions} />
          <Field name="maritalStatus" component={Select} label="Шлюбний статус" options={maritalOptions} />
        </div>
        <div className="form-section section-item-container">
          <Field name="login" type="text" component={Input} label="Login" />
          <Field name="email" type="text" component={Input} label="Email" />
        </div>
        {isSubmitting && (
          <div className="form-section section-item-container">
            <Field name="password" type="password" component={Input} label="Пароль" />
            <Field name="password" type="password" component={Input} label="Підтвердження пароля" />
          </div>
        )}
        {submitError && (
          <p className="text-danger">
            <strong>{submitError}</strong>
          </p>
        )}
        <button className="btn btn-success" type="submit">
          <i className={`fa ${submitButtonIcon || 'fa-arrow-right'}`} /> {submitButtonName || 'Зареєструватись'}
        </button>
      </form>
    )}
  />
);

LoginForm.defaultProps = {
  isSubmitting: true,
  submitButtonName: false,
  submitButtonIcon: false,
  initialValues: {},
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  submitButtonName: PropTypes.string,
  submitButtonIcon: PropTypes.string,
  initialValues: PropTypes.object,
};

export default LoginForm;
