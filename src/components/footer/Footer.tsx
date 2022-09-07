import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>Corp @.</p>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus, quas ratione,
          quisquam, fugiat ullam nam nulla nisi nihil dignissimos voluptatum! Possimus sit
          necessitatibus eaque, numquam minima rem unde sequi!
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur
            inventore ducimus perspiciatis harum iste, voluptates architecto consectetur distinctio
            nam, modi optio obcaecati illo alias quae est accusantium ut veniam.
          </span>
        </div>
        <p>Voluptatibus obcaecati ullam, molestiae ipsa officiis necessitatibus impedit vitae.</p>
      </FooterContainer>
    </FooterWrapper>
  );
};
export default Footer;

const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 365px;
  width: 100%;
  background-color: ${props => props.theme.blackColor};
`;

const FooterContainer = styled.div`
  max-width: 90%;
  color: ${props => props.theme.fontColor};

  & p:first-child {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 32px;
  }

  & span {
    color: ${props => props.theme.fontSubColor};
  }

  & p:last-child {
    text-align: center;
    margin: 0 auto;
    margin-top: 32px;
    font-weight: bold;
  }
`;
