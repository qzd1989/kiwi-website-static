# ColoredPoint

The `ColoredPoint` represents a 2D coordinate with hex color.

## Example

```python
client = ScreenClient()
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
