from fastapi import FastAPI, Response
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/getResponse")
def read_root(response: Response):
    response.headers["X-Cat-Dog"] = "alone in the world"
    return {"Hello": "World"}

@app.get("/")
def connect_with_frontend():
    return {"Hello": "World"}

if __name__ == "__main__":
    uvicorn.run(app=app, host="localhost", port=8000)