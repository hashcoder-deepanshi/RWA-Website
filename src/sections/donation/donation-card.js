import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Stack,
  Avatar,SvgIcon
} from '@mui/material';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';

export const DonationCard = (props) => {
    const { description, title ,bgmcolor} = props;

    return (
      <Card variant="outlined" sx={{backgroundColor: `${bgmcolor}.lightest`, borderColor:`${bgmcolor}.main`}} >
        <CardContent>
          <Stack
            alignItems="flex-start"
            direction="row"
            justifyContent="space-between"
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography
                color="text.primary"
                variant="h6"
              >
                {title}
              </Typography>
              <Typography                 
                color="text.secondary"
                variant="body2">
                {description}
              </Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: `${bgmcolor}.main`,
                height: 56,
                width: 56
              }}
            >
              <SvgIcon>
                <CurrencyDollarIcon />
              </SvgIcon>
            </Avatar>
          </Stack>
        </CardContent>
      </Card>
    );
};

DonationCard.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    bgmcolor: PropTypes.string
  };