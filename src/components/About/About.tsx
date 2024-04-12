import React from 'react';

import ContentContainer from '../ContentContainer';

const About = () => {
  return (
    <ContentContainer id='about' label='About' className='lg:h-[543px] lg:pt-[88px]'>
      <p className='w-full text-base font-normal leading-normal text-dark-grey-500 dark:text-dark-grey-200'>
        Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
        lobortis. Ut <span className='dark:text-white text-black font-semibold'>commodo</span>{' '}
        efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
        <br />
        <br />
        Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
        lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac,
        vestibulum eu nisl.
      </p>
    </ContentContainer>
  );
};

export default About;
