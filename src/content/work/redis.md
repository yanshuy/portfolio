---
title: Redis Server
summary: A Redis clone in Go supporting 40+ commands, replication, transactions (WATCH/MULTI/EXEC), Pub/Sub, blocking streams, and RDB persistence.
role: Backend & Systems Engineering
date: 2026-02-01
tags: [Go, Distributed Systems, Redis RESP, TCP/IP, Concurrency]
repo: https://github.com/yanshuy/redis
featured: true
draft: false
---

A complete in-memory data structure store and Redis clone built from scratch in Go, designed to explore high-throughput network programming, wire protocols, state machine replication, and persistence architectures.

### Architecture & Capabilities

- **Command Processing Engine**: Implemented 40+ standard Redis commands spanning strings, lists, sets, sorted sets, hashes, and streams.
- **Custom Wire Protocol (RESP v2)**: Built a custom serialization and deserialization layer for REdis Serialization Protocol (RESP v2), handling simple strings, errors, integers, bulk strings, and arrays with zero-copy stream parsing where possible.
- **Master-Slave Replication**: Engineered real-time asynchronous replication using the `PSYNC` handshaking mechanism and propagation of write command streams to replica nodes.
- **Transactions & Concurrency**: Implemented ACID transaction pipeline support (`MULTI`, `EXEC`, `DISCARD`) with optimistic concurrency control (`WATCH`) to detect concurrent key modifications.
- **Blocking Operations & Streams**: Developed Redis stream primitives (`XADD`, `XRANGE`, `XREAD`) with blocking timeout mechanics (`BLOCK`) allowing concurrent consumer groups to await incoming data.
- **RDB Snapshot Persistence**: Built parser and generator engines for Redis RDB disk persistence, serializing in-memory key-value state to disk and restoring snapshots during server boot.
- **Pub/Sub Subsystem**: Integrated real-time message brokering over subscriber channels with pattern-based matching.
