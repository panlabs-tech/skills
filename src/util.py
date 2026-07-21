import os


def read_env(name: str) -> str:
    return os.environ.get(name, "")


def join(parts: list[str]) -> str:
    return "/".join(parts)
