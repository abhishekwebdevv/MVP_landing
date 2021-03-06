import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function useBreakpoints() {
  const theme = useTheme();

  // xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 900px
  // lg, large: 1280px
  // xl, extra-large: 1500px
  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery('(min-width:1281px)');
  const xl = useMediaQuery('(min-width:1500px)');

  return { xs, sm, md, lg, xl };
}
