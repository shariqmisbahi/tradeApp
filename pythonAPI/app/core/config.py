import os
from functools import lru_cache
from typing import List

class Settings:
    PROJECT_NAME: str = "FastAPI Angular Starter"
    API_V1_STR: str = "/api/v1"
    ENV: str = os.getenv("API_ENV", "local")

    # For simplicity, CORS is static; you can extend this to parse a CSV list from env.
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:4200",
        "http://127.0.0.1:4200"
    ]

@lru_cache
def get_settings() -> Settings:
    return Settings()
