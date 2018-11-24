import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section from './Section';
import LandingSplash from './LandingSplash';
import BodyWrapper from './BodyWrapper';
import '../overrides.css';
import Faq from './Faq';
import Blurbs from './blurbs';
import Members from './members/Members';
import WwdCarousel from './WwdCarousel';

const sectionList = ['home', 'what we do', 'members', "where we've worked", 'faqs'];

const Home = () => (
  <ReactFullpage
    navigation
    sectionsColor={['rgba(0,0,0,0)', '#24306c', '#24306c', '#24306c', '#24306c']}
    navigationTooltips={sectionList}
    render={() => (
      <div>
        <LandingSplash />

        <div className="section">
          <Section
            titleWhite="what we "
            titlePink="do()"
            leftComponent={(
              <div>
                <WwdCarousel />
              </div>
)}
            bodyComponent={(
              <BodyWrapper style={{ minHeight: '100%', minWidth: '100%' }} basic>
                <Blurbs section="what we do" />
              </BodyWrapper>
)}
            widthRatio={4}
            heightRatio={3}
          />
        </div>

        <Members />

        <div className="section">
          <Section
            leftComponent={(
              <div>
                <h1> JANE LI </h1>
              </div>
)}
            titleWhite="members"
            titlePink="[]"
            bodyComponent={<h1> BOOM </h1>}
            widthRatio={4}
            heightRatio={3}
          />
        </div>
        <div className="section">
          <Section
            titleWhite="faq"
            titlePink="?"
            bodyComponent={<Faq />}
            widthRatio={4}
            heightRatio={3}
          />
        </div>
      </div>
    )}
  />
);

export default Home;
