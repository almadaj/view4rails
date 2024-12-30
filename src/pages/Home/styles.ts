import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  background-color: aliceblue;
  padding-bottom: 3rem;
`;

export const GreetingContainer = styled.div`
  flex-direction: column;
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  flex-grow: 1;
  margin: 0 0.5rem;
  max-width: 100%;
  max-height: 20%;
`;

export const WelcomeText = styled.h2`
  font-size: 1.3rem;
  color: rgb(102, 102, 102);
  margin-bottom: -1.8rem;
`;

export const Title = styled.h2`
  font-size: 1.7rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
`;

export const AddButton = styled.button`
  background-color: #062e70;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.7rem 1.5rem;
  height: 3rem;
  margin-top: 2.7rem;
  border: 0 none;
  cursor: pointer;
`;

export const Notification = styled.button`
  display: flex;
  background-color: #fff;
  color: #062e70;
  border-radius: 50%;
  border: 0 none;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-top: 2.7rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  padding: 0 1rem;
  gap: 1rem;
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3.2rem;
  height: 100%;
  width: 66.66%;
  border-radius: 10px;
  min-width: 500px;
  max-width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 66.66%;
  margin: 0 0;
  margin-left: 3.2rem;
  padding: 0;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

export const ChartCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  max-width: max-content;
  height: min-content;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CompanyCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  max-width: max-content;
  height: min-content;
  padding: 1rem;
  margin-top: 2rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ChartTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  padding: 10px 15px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const SectorButton = styled.button`
  background-color: #062e70;
  color: white;
  font-size: 1.05rem;
  font-weight: bold;
  border-radius: 15px;
  padding: 0.7rem 1.5rem;
  height: 3rem;
  width: 50%;
  border: 0 none;
  cursor: pointer;
`;
