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
    title: 'Male',
    value: 'Male'
  },
  {
    title: 'Female',
    value: 'Female'
  }
];

const maritalOptions = [
  {
    title: 'Male',
    value: 'Male'
  },
  {
    title: 'Female',
    value: 'Female'
  }
];

const LoginForm = ({ onSubmit }) => (
  <Form
    onSubmit={values => onSubmit(values).then(() => {}, err => err)}
    validate={loginValidation}
    render={({ handleSubmit, submitError }) => (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-section section-item-container">
          <Field name="name" type="text" component={Input} label="Name" />
          <Field name="age" type="text" component={Input} label="Age" />
          <Field name="gender" component={Select} label="Gender" options={sexOptions} />
          <Field name="maritalStatus" component={Select} label="Marital Status" options={maritalOptions} />
        </div>
        <div className="form-section section-item-container">
          <Field name="login" type="text" component={Input} label="Login" />
          <Field name="email" type="text" component={Input} label="Email" />
        </div>
        <div className="form-section section-item-container">
          <Field name="password" type="password" component={Input} label="Password" />
          <Field name="password" type="password" component={Input} label="Password Confirmation" />
        </div>
        {submitError && (
          <p className="text-danger">
            <strong>{submitError}</strong>
          </p>
        )}
        <button className="btn btn-success" type="submit">
          <i className="fa fa-sign-in" /> Registration
        </button>
      </form>
    )}
  />
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
