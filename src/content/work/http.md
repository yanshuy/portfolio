---
title: HTTP/1.1 Server
summary: An HTTP/1.1 server in Go with streaming request parsing, protocol validation, malformed request rejection, and chunked transfer encoding.
role: Networking & Systems Engineering
date: 2025-11-15
tags: [Go, HTTP/1.1, Networking, TCP/IP, Protocol Validation]
repo: https://github.com/yanshuy/http
featured: true
draft: false
---

An RFC 7230/7231 compliant HTTP/1.1 server implemented from the ground up over raw TCP sockets in Go, emphasizing rigorous protocol validation, streaming I/O, and malformed packet rejection.

### Key Highlights

- **Streaming Request Parser**: Implemented a buffer-efficient streaming request parser capable of incremental header and body decoding without buffering whole payloads into memory.
- **Strict Protocol Validation**: Enforced rigorous compliance rules for request lines, header normalization, content lengths, host headers, and URI path parsing, safeguarding against HTTP request smuggling and malformed queries.
- **Chunked Transfer Encoding**: Built bidirectional support for `Transfer-Encoding: chunked`, allowing seamless transmission of dynamically-sized streaming data without pre-calculated Content-Length headers.
- **Connection Management & Keep-Alive**: Designed connection lifecycle management honoring persistent HTTP/1.1 TCP connections (`Connection: keep-alive`), graceful teardowns, and read/write timeout deadlines.
- **Robust Test Harness**: Authored comprehensive integration and unit tests simulating edge-case packet fragmentation, slow clients, pipelining, and fuzzing payloads.
