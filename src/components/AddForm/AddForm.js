import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import loginValidation from './addValidation';

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

// const Select = ({
//   input, label, type, meta: { touched, error, submitError }, options, ...rest
// }) => (
//   <div className={`form-group ${(error || submitError) && touched ? 'has-error' : ''}`}>
//     <label htmlFor={input.name} className="col-sm-2">
//       {label}
//     </label>
//     <div className="col-sm-10">
//       <select {...input} {...rest} type={type} className="form-control">
//         {options && options.map(item => <option value={item.value}>{item.title}</option>)}
//       </select>
//       {(error || submitError) && touched && <span className="glyphicon glyphicon-remove form-control-feedback" />}
//       {(error || submitError)
//         && touched && (
//         <div className="text-danger">
//           <strong>{error || submitError}</strong>
//         </div>
//       )}
//     </div>
//   </div>
// );

const DateTimeInput = ({ input, label, meta: { touched, error, submitError } }) => (
  <div className={`form-group ${(error || submitError) && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className="col-sm-2">
      {label}
    </label>
    <div className="col-sm-10">
      <DatePicker
        // selected={this.state.startDate}
        // onChange={this.handleChange}
        // showTimeSelect
        // timeFormat="HH:mm"
        // timeIntervals={15}
        // dateFormat="MMMM d, yyyy h:mm aa"
        // timeCaption="time"
        inline
      />
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

DateTimeInput.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired
};

const FileInput = ({ input, label, meta: { touched, error, submitError } }) => (
  <div className={`form-group ${(error || submitError) && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className="col-sm-2">
      {label}
    </label>
    <div className="col-sm-10">
      <Dropzone>
        <p className="file-uploaded">Перетягніть файли сюди, або натисніть для вибору файлів для завантаження.</p>
      </Dropzone>
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

FileInput.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired
};

Input.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired
};

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
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-section section-item-container">
          <Field name="title" type="text" component={Input} label="Заголовок" />
          <Field name="description" type="text" component={Input} label="Опис" />
          <Field name="url" type="text" component={Input} label="Посилання, куди веде реклама" />
          {/* <Field
            name="gender"
            component={Select}
            label="Стать"
            options={[
              {
                value: 'active',
                title: 'Активний'
              }
            ]}
          />
          <Field name="maritalStatus" component={Select} label="Шлюбний статус" options={maritalOptions} /> */}
          <Field name="image_src" type="text" component={FileInput} label="Зображеня" />
          <Field name="begin_date" type="text" component={Input} label="Дата початку показу" />
          <Field name="end_date" type="text" component={Input} label="Дата завершення показу" />
        </div>
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
  initialValues: {}
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  submitButtonName: PropTypes.string,
  submitButtonIcon: PropTypes.string,
  initialValues: PropTypes.object
};

export default LoginForm;
