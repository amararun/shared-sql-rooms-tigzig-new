# SQL Rooms AI @Tigzig

**Original repositories:**
- Main repository: [SQLRooms GitHub](https://github.com/sqlrooms/sqlrooms)
- AI Example: [SQLRooms AI Example](https://github.com/sqlrooms/sqlrooms/tree/main/examples/ai)

This app is built on [SQLRooms](https://github.com/sqlrooms/sqlrooms), an open-source React toolkit for building AI-powered data analytics applications. SQLRooms provides robust in-browser SQL analytics powered by DuckDB-WASM, supporting multiple file formats (CSV, Parquet, JSON), AI query generation with multi-provider support (OpenAI, Anthropic, Google, Ollama), interactive data visualization with Vega charts, session save/load functionality, and a clean panel-based UI for managing data sources and query results.

This deployment adds several customizations for my typical use cases: DDL/DML query support (CREATE TABLE, INSERT, UPDATE), table export to CSV/Parquet/Excel formats, database import for .db/.duckdb files, enhanced error recovery with retry logic and "same error twice" detection, out-of-memory detection, and a single-file build option for offline use.
