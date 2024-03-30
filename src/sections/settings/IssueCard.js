import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box
} from '@mui/material';

const steps = [
    'Issue Registered',
    'Forwarded to Authorities',
    'Action Intiated',
    'Action In Progress',
    'Issue Resolved'
  ];
  

export const IssueCard = (props) => {

  
    return(
        <Card sx={{width: 300}}>
        <CardHeader
          subheader={props.subtitle}
          title= {props.title}
        />
        <CardContent>
        <Stepper activeStep={props.activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
        </CardContent>
      </Card>
    );

};