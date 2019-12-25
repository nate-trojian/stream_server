# Stream Server
## Overview
This application is meant to function as a middle-man server for H264 Video Streaming using [Socket.IO](https://socket.io).

It will package the video data and redirect it to all connected end users.

This project compliments the [stream_client](https://github.com/nate-trojian/stream_client)

## Usage
To run this application, run:

`npm start`

The application takes in environment variables as parameters:

`
PORT => port that the server will bind to
`

## TODO
1. Containerize
