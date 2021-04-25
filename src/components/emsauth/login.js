import React from 'react'
import { Field, Formik } from "formik";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Ems from "../../assets/ems.png";
import Arabic from "../../assets/arabic.png";

import './login.scss'

function login() {
    return (
        <section className="how">
            <div className='left'>

                <div className='img_div'>
                    <img src={Ems} width={250} height={150} />
                </div>
                <div className="form_div">
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            checkedB: true,
                        }}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ handleChange, handleSubmit, isSubmitting, errors, values }) => (
                            <form onSubmit={handleSubmit}>
                                <Field className="email_field" type="email" name="email" value={values.email} placeholder="Email/Student ID" onChange={handleChange} />
                                <Field className="password_field" type="password" name="password" value={values.password} placeholder="Password" onChange={handleChange} />
                                <div className="password-forget">
                                    <div>
                                        Keep me logged in?
                                        </div>
                                    <div className="forgot-link" onClick={() => console.log("forgot")}>
                                        Forgot password ?
                                        </div>
                                </div>
                                <FormControlLabel
                                    control={<IOSSwitch checked={values.checkedB} onChange={handleChange} name="checkedB" />}
                                />
                                <div className='signin_button'>
                                    <button className="button">Sign in</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>

            </div>


            <div className='right'>
                <div className='upper_part'>
                    <h2 className='top_heading' >
                        Online Exams Management System
                        </h2>
                    <img src={Arabic} width={250} height={150} className='arabic' />

                </div>

                <div className='lower_part'>
                    <p>Powered by COMBAT EXAM</p>
                    <small className='small' >Copyright 2020</small>
                </div>

            </div>
        </section>

    )
}

export default login




const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#2D8504',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

