import { useCallback } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { DonationCard } from './donation-card';


export const DonationsNotifications = () => {
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
          title="Ways To Donate"
        />
        <Divider />
        <CardContent>
          <Grid container direction="row" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid             
            xs={12}
            sm={6}
            lg={6}>
                <DonationCard 
                bgmcolor= "success"
                title="Money Support" 
                sx={{height:'100%' , width:'100%'}}
                description='We are purely volunteer based organization, hence any donation will help our operation'/>
            </Grid>
            <Grid             
            xs={12}
            sm={6}
            lg={6}>
                <DonationCard 
                bgmcolor='error'
                title="Money Support" 
                sx={{height:'100%' , width:'100%'}}
                description='We are purely volunteer based organization, hence any donation will help our operation'/>
            </Grid>            
            <Grid             
            xs={12}
            sm={6}
            lg={6}>
                <DonationCard 
                bgmcolor='primary'
                title="Money Support" 
                sx={{height:'100%' , width:'100%'}}
                description='We are purely volunteer based organization, hence any donation will help our operation'/>
            </Grid>            
            <Grid             
            xs={12}
            sm={6}
            lg={6}>
                <DonationCard 
                bgmcolor='warning'
                title="Money Support" 
                sx={{height:'100%' , width:'100%'}}
                description='We are purely volunteer based organization, hence any donation will help our operation'/>
            </Grid>
        </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save Lives now
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};