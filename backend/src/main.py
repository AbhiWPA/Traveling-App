from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/getResponse")
def read_root():
    return {"Hello": "World"}

if __name__ == "__main__":
    uvicorn.run(app=app, host="localhost", port=8000)