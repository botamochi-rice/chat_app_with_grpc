import { MessengerClient } from './messenger/MessengerServiceClientPb';

export type GRPCClients = {
  messengerClient: MessengerClient;
};

export const gRPCClients = {
  messengerClient: new MessengerClient(`http://localhost:10000`),
  // You need 'http://' and ':<PORT>' even if it is 80.
};