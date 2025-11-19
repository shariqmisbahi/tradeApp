from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "UST Python API is running!"}
