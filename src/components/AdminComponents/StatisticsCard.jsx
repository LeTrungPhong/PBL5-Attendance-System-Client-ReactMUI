import PropTypes from 'prop-types';
// material-ui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports


// assets
import { TrendingDown, TrendingUp } from "../icon.jsx"; 
import MainCard from './MainCard';

const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

export default function StatisticsCard({ color = 'primary', title, count, percentage, isLoss, extra }) {
  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Stack sx={{ gap: 0.5 }}>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Grid container alignItems="center">
          <Grid>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
          </Grid>
          {percentage && (
            <Grid>
              <Chip
                variant="combined"
                color={color}
                icon={isLoss ? <TrendingDown style={iconSX} /> : <TrendingUp style={iconSX} />}
                label={`${percentage}%`}
                sx={{ ml: 1.25, pl: 1 }}
                size="small"
              />
            </Grid>
          )}
        </Grid>
      </Stack>
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="text.secondary">
          You made an extra{' '}
          <Typography variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
            {extra}
          </Typography>{' '}
          this year
        </Typography>
      </Box>
    </MainCard>
  );
}

StatisticsCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string
};
