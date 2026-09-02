from typing import TypedDict, List, Dict, Any


class ReviewState(TypedDict):

    chunks: List[dict]

    bug_results: str
    security_results: str
    quality_results: str

    final_report: Dict[str, Any]