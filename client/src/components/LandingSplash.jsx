import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../fonts.css';
import Delay from 'react-delay';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import chevron from '../assets/svgs/cata_chevron.svg';
import colors from '../colors';

const Canvas = styled(Paper)`
  background-color: rgba(0, 0, 0, 0) !important;
  padding-right: 10% !important;
`;

const Catalyst = styled(Typography)`
  font-family: HKGrotesk !important
  color: ${colors.gray} !important
  font-size: 160pt !important
`;

const CatalystChevron = styled.img`
  margin-bottom: -25px;
`;

const Subheader = styled(Typography)`
  font-family: GlacialIndifference !important
  color: #515151 !important
  font-size: 30pt !important
`;

const LandingSplash = () => (
  <Canvas className="section" elevation={0}>
    <Grid
      container
      style={{ minHeight: '100%', zIndex: 1, backgroundColor: 'rba(0,0,0,0)' }}
      justify="center"
      alignItems="flex-end"
      direction="column"
    >
      <Grid item>
        <Delay wait={100}>
          <Fade>
            <Catalyst variant="h5" component="h3">
              <CatalystChevron src={chevron} width="130" alt="Catalyst logo" />
              catalyst
            </Catalyst>
          </Fade>
        </Delay>
      </Grid>
      <Grid item>
        <Delay wait={100}>
          <Fade>
            <Subheader component="p">
              dukes premier shitposting tech frat ben hubsch yolo swag.
            </Subheader>
          </Fade>
        </Delay>
      </Grid>
      <svg
        viewBox="0 0 2917 2753"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          zIndex: -1,
          paddingTop: '150%',
          marginLeft: '25%',
        }}
      >
        <path
          d="M3765.97 1754.37C3908.47 1068.3 3980.09 582.793 3896 588C3612 605.585 2130.5 752 1784.5 334.5C1575.01 81.7189 1258.84 -216.121 573.499 231.5C269.754 429.887 135.122 1000.92 97.602 1714.63L3765.97 1754.37Z"
          fill="#222E70"
        />
      </svg>
    </Grid>
  </Canvas>
);
export default LandingSplash;
