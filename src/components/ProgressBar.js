import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

const ProgressBarLayout = styled.div`
    border-bottom: 1px solid lightgrey;
`

const ProgressBar = ({ activeStep, steps }) => {
    const classes = useStyles();

    return (
        <ProgressBarLayout className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </ProgressBarLayout>
    )
}

export default ProgressBar;
