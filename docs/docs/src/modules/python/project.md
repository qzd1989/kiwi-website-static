# Kiwi Project

You need to understand the basic syntax of Python first.

## Project structure

```toml
.venv/ #If the project is moved, Kiwi will reinitialize the Python environment.
.vscode/
data/
    images/ #The template images are stored here.
main.py # Entry point of the project.
config.toml #If you’re not using VSCode, you can customize the `edit_command`.
```

---

## Example

```python
import time
from kiwi import (
    ColoredPoint,
    Key,
    Point,
    Response,
    RgbOffset,
    ScreenClient,
    System,
    WeightPoint,
)

client = ScreenClient()

while True:
    response = client.get_mouse_location()
    data = response.data
    print("location:", data.x, data.y)
    System.sleep(milliseconds=1000)
```
