from fastapi import APIRouter, Query

router = APIRouter()

@router.get("/hello")
async def say_hello(name: str = Query("World", description="Name to greet")):
    return {"message": f"Hello, {name} from FastAPI!"}

@router.get("/items")
async def list_items():
    sample_items = [
        {"id": 1, "name": "UST Notebook", "price": 9.99},
        {"id": 2, "name": "UST Hoodie", "price": 49.99},
        {"id": 3, "name": "UST Coffee Mug", "price": 14.99},
    ]
    return {"items": sample_items}
