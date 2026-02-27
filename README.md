> [\!NOTE]
> This repository is a working example of the concept described below. It may not yet include all recommended security hardening measures. My newer repositories now have robust security at both frontend and backend layers — rate limiting, SQL validation, concurrency controls, error sanitization, and more. You can use this repo to understand the core concept, but please apply security best practices before deploying to production. See my [80+ item Security Checklist](https://tigzig.com/security) and [live hardened examples](https://tigzig.com/security-examples) for reference.

# SQL Rooms AI @Tigzig

**Original repositories:**
- Main repository: [SQLRooms GitHub](https://github.com/sqlrooms/sqlrooms)
- AI Example: [SQLRooms AI Example](https://github.com/sqlrooms/sqlrooms/tree/main/examples/ai)

This app is built on [SQLRooms](https://github.com/sqlrooms/sqlrooms), an open-source React toolkit for building AI-powered data analytics applications. SQLRooms provides robust in-browser SQL analytics powered by DuckDB-WASM, supporting multiple file formats (CSV, Parquet, JSON), AI query generation with multi-provider support (OpenAI, Anthropic, Google, Ollama), interactive data visualization with Vega charts, session save/load functionality, and a clean panel-based UI for managing data sources and query results.

This deployment adds several customizations for my typical use cases: DDL/DML query support (CREATE TABLE, INSERT, UPDATE), table export to CSV/Parquet/Excel formats, database import for .db/.duckdb files, enhanced error recovery with retry logic and "same error twice" detection, out-of-memory detection, and a single-file build option for offline use.


## Author

Built by [Amar Harolikar](https://www.linkedin.com/in/amarharolikar/)

Explore 30+ open source AI tools for analytics, databases & automation at [tigzig.com](https://tigzig.com)
