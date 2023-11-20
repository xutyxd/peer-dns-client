# Peer DNS Client ![NPM Downloads](https://img.shields.io/npm/dw/peer-dns-client)
A small client to connect to a [Peer DNS Server](https://github.com/xutyxd/peer-dns)

## **Installation**
``` bash
npm install peer-dns-client
```

## **Description**
This client implements events of the Peer DNS Server to always stay aligned with server package updates

## **Events**

- **Link**: An event triggered when a new peer connect to a domain that you are listening.
It`s emits an object param with two properties: 
   - **id**: Identifier of external connection
   - **offer**: Optional parameter of type [RTCSessionDescription](https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription)
- **Candidates**: An event triggered when a peer with offer exchanged share it's candidates
It`s emits an object param with two properties:
  - **id**: Identifier of external connection
  - **candidates**: An array of [RTCIceCandidate](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate)

## **Methods**

- **Query**: Need only a parameter indicating a domain to join a listen for new connections

- **send.link**: Used to response a link event with received id and optional offer

- **send.candidates**: Used to share candidates with an id indicating the other peer and an array of candidates

- **exit**: Used to stop listening connections in a domain

- **close**: Used to close connection with Peer DNS Server