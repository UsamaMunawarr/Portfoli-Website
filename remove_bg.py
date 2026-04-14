from rembg import remove
from PIL import Image
import os

input_path = 'p1.png'
output_path = 'p1-bg-removed.png'

if os.path.exists(input_path):
    input_img = Image.open(input_path)
    output_img = remove(input_img)
    output_img.save(output_path)
    print("Background removed successfully.")
else:
    print("developer.jpeg not found.")
