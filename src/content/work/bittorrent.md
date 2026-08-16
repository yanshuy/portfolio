---
title: BitTorrent Client
summary: A BitTorrent client in Erlang with Bencode parsing, magnet link resolution via peer extension protocol, and concurrent piece downloads.
role: P2P & Distributed Systems
date: 2025-08-10
tags: [Erlang, BitTorrent, P2P, BEP Extension Protocols, Concurrency]
repo: https://github.com/yanshuy/bittorrent
featured: true
draft: false
---

A concurrent, peer-to-peer BitTorrent client written in Erlang, leveraging the BEAM virtual machine's actor model and lightweight concurrency to coordinate distributed file distribution across swarms.

### Key Highlights

- **Bencode Codec**: Built a parser and serializer for the BitTorrent Bencode specification supporting integers, byte strings, lists, and ordered dictionaries with fast binary pattern matching.
- **Tracker Communication & Peer Discovery**: Implemented HTTP and UDP tracker request protocols to announce presence, handle SHA-1 infohash handshakes, and dynamically retrieve active swarm peer lists.
- **Magnet Link Resolution & BEP-0009**: Developed metadata exchange support over the Extension Protocol (BEP-0010 and BEP-0009/ut_metadata) to resolve magnet links directly from connected peers without an upfront `.torrent` file.
- **Concurrent Piece Downloader**: Coordinated piece scheduling with choking/unchoking states, bitfield bitmasks, rarest-first piece strategy, and parallel block pipelining across multiple peer actor processes.
- **Data Integrity**: Validated downloaded blocks against SHA-1 piece hashes on disk before committing to final file assembly.
