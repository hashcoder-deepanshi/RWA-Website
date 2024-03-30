import { useCallback } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { IssueCard } from './IssueCard';


export const SettingsNotifications = () => {
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="See various issues in your locality"
          title="Issues Near me "
        />
        <Divider />
        <CardContent>
          <Grid container direction="row" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid>
              <IssueCard title="Roads" 
              subtitle="Potholes on Roads" 
              activeStep={2}/>
            </Grid>
            <Grid>
              <IssueCard title="Sanitation"
              subtitle="Garbage Dumping in Public Places" 
              activeStep={5}/>
            </Grid>
            <Grid>
              <IssueCard title="Sanitation"
              subtitle="Garbage Dumping in Public Places" 
              activeStep={5}/>
            </Grid>            
            <Grid>
              <IssueCard title="Sanitation"
              subtitle="Garbage Dumping in Public Places" 
              activeStep={5}/>
            </Grid>
        </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Raise a Complaint
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
