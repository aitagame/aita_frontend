import { ContentWrapper, RoomHeader, RoomListWrapper, RoomButton } from './styled';

export const RoomsList = () => {
  return (
    <ContentWrapper>
      <RoomListWrapper>
        <RoomHeader>Friendly Game</RoomHeader>
        <RoomButton>Join</RoomButton>
      </RoomListWrapper>
      <RoomListWrapper>
        <RoomHeader>Normal Game</RoomHeader>
        <RoomButton>Join</RoomButton>
      </RoomListWrapper>
      <RoomListWrapper>
        <RoomHeader>Rating Game</RoomHeader>
        <RoomButton>Join</RoomButton>
      </RoomListWrapper>
    </ContentWrapper>
  );
};
