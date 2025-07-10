# ScreenClient

## Initialization

```python
client = ScreenClient()
```

---

## Example

```python
client = ScreenClient()
response = client.find_image(
    subpath="a/b",
    start_point=Point(0, 0),
    end_point=Point(1920, 1080),
    threshold=0.9,
    min_template_side=30
)
```

---

## find_image

Find a single matching image in the specified region.

> subpath: $project_folder/data/images/\{subpath\}.png

```python
response = client.find_image(
    subpath="a/b",
    start_point=Point(0, 0),
    end_point=Point(1920, 1080),
    threshold=0.9,
    min_template_side=30
)
```

---

## find_images

Find all matching images in the specified region.

> subpath: $project_folder/data/images/\{subpath\}.png

```python
response = client.find_images(
    subpath="a/b",
    start_point=Point(100, 100),
    end_point=Point(800, 600),
    threshold=0.85,
    min_template_side=30
)
```

---

## find_relative_colors

Find relative color combinations based on a vertex color in the region.

```python
response = client.find_relative_colors(
    vertex_hex="#ffffff",
    relative_points=[
        ColoredPoint(x_offset=5, y_offset=0, hex_color="#000000")
    ],
    start_point=Point(0, 0),
    end_point=Point(1920, 1080),
    rgb_offset=RgbOffset(r=10, g=10, b=10)
)
```

---

## find_colors

Find specific colors in the specified region.

```python
response = client.find_colors(
    hex_colors=["#ff0000", "#00ff00"],
    start_point=Point(0, 0),
    end_point=Point(1280, 720),
    rgb_offset=RgbOffset(r=10, g=10, b=10)
)
```

---

## recognize_text

Recognize text within a specific screen region.

```python
response = client.recognize_text(
    start_point=Point(100, 100),
    end_point=Point(500, 200)
)
```

---

## save_frame

Save the current frame image to a specific path.

```python
response = client.save_frame(path="/path/to/frame.png")
```

---

## get_mouse_location

Get the current mouse position.

```python
response = client.get_mouse_location()
print(response.data.x, response.data.y)
```

---

## click_left

Simulate a left mouse click.

```python
client.click_left()
```

---

## click_right

Simulate a right mouse click.

```python
client.click_right()
```

---

## press_left

Press the left mouse button (without releasing).

```python
client.press_left()
```

---

## press_right

Press the right mouse button (without releasing).

```python
client.press_right()
```

---

## release_left

Release the left mouse button.

```python
client.release_left()
```

---

## release_right

Release the right mouse button.

```python
client.release_right()
```

---

## move_absolute

Move the mouse to an absolute screen coordinate.

```python
client.move_absolute(absolute_point=Point(500, 300))
```

---

## move_relative

Move the mouse relative to its current position.

```python
client.move_relative(offset=Point(10, -20))
```

---

## scroll_vertical

Scroll vertically.

```python
client.scroll_vertical(length=-100)
```

---

## scroll_horizontal

Scroll horizontally.

```python
client.scroll_horizontal(length=50)
```

---

## press_key

Press a specific key (without releasing).

```python
client.press_key(key=Key.Return)
```

---

## release_key

Release a previously pressed key.

```python
client.release_key(key=Key.Return)
```

---

## click_key

Click a key (press and then release).

```python
client.click_key(key=Key.Space)
```

---

## input_copy

Simulate a copy operation (Ctrl+C / ⌘C).

```python
client.input_copy()
```

---

## input_paste

Simulate a paste operation (Ctrl+V / ⌘V).

```python
client.input_paste()
```

---

## input_cut

Simulate a cut operation (Ctrl+X / ⌘X).

```python
client.input_cut()
```

---

## input_select_all

Simulate a select-all operation (Ctrl+A / ⌘A).

```python
client.input_select_all()
```

---

## input_text

Type a given text string.

```python
client.input_text(text="Hello, World!")
```
