import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

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
        {options && options.map(item => <option value={item.value}>{item.title}</option>)}
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

const statusOptions = [
  {
    title: 'Активний',
    value: '1'
  },
  {
    title: 'Не активний',
    value: '0'
  }
];

const AddForm = ({
  onSubmit, submitButtonName, submitButtonIcon, initialValues
}) => (
  <Form
    onSubmit={onSubmit}
    initialValues={initialValues}
    render={({ handleSubmit, submitError }) => (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-section section-item-container">
          <Field name="title" type="text" component={Input} label="Заголовок" />
          <Field name="description" type="text" component={Input} label="Опис" />
          <Field name="link_to" type="text" component={Input} label="Посилання, куди веде реклама" />
          <Field name="image_file" type="text" component={FileInput} label="Зображеня" />
          <Field name="image" type="text" component={Input} label="Зображеня посилання" />
          <Field name="status" type="text" component={Select} options={statusOptions} label="Статус" />
          <Field name="begin_date" component={Input} type="date" label="Дата початку показу" />
          <Field name="end_date" component={Input} type="date" label="Дата завершення показу" />
          <div style={{ display: 'none' }}>
            <Field name="advetiser_id" component={Input} type="text" />
            <Field name="interest_id" component={Input} type="text" />
          </div>
        </div>
        {submitError && (
          <p className="text-danger">
            <strong>{submitError}</strong>
          </p>
        )}
        <button className="btn btn-success" type="submit" onClick={() => console.log('click')}>
          <i className={`fa ${submitButtonIcon || 'fa-arrow-right'}`} /> {submitButtonName || 'Зареєструватись'}
        </button>
      </form>
    )}
  />
);

AddForm.defaultProps = {
  submitButtonName: false,
  submitButtonIcon: false,
  initialValues: {}
};

AddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  submitButtonName: PropTypes.string,
  submitButtonIcon: PropTypes.string
};

export default AddForm;
