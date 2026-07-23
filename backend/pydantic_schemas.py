from pydantic import BaseModel

class SafetyReport(BaseModel):
    location: str
    status: str
    risk_level: int
