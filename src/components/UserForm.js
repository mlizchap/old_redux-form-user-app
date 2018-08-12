import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../actions'
import './UserForm.css';

class UserForm extends Component {
    onSubmit(values) {
        console.log(values) 
        this.props.createUser(values)
    }
    renderField(field) {
        const errorClass = {
            border: '1px solid #e43972'
        }
        return (
            <div>
                <label>{field.label}</label><br />
                <input
                    style={field.meta.touched && field.meta.error ? errorClass : null}
                    type="text"
                    autoComplete="off"
                    {...field.input}
                />
                {console.log(field.meta.error)}
                <div className="error">{field.meta.touched ? field.meta.error : ''}</div>
            </div>
        )
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field autocomplete="off" label="Username:" name="username" component={this.renderField} />
                <Field label="Email:" name="email" component={this.renderField} />
                <Field label="Favorite movie:" name="movie" component={this.renderField} />
                <Field label="Favorite book:" name="book" component={this.renderField} />
                <button type="submit">submit</button>
            </form>
        );
    }
}

function validate(values) {
    
    const errors = {}

    if (!values.username) {
        errors.username = "Enter a username"
    }
    if (!values.email) {
        errors.email = "Enter your email"
    }
    if (!values.movie) {
        errors.movie = "Enter your favorite movie"
    }
    if (!values.book) {
        errors.book = "Enter your favorite book"
    }
    console.log("errors", errors)
    return errors;
} 

export default reduxForm({
    validate: validate,
    form: 'UserForm'
})(
    connect(null, { createUser })(UserForm)
)