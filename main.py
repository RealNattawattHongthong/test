from PIL import Image
import os

def convert_jpg_to_webp(input_folder, output_folder, quality=80):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(".jpg") or filename.lower().endswith(".jpeg"):
            img_path = os.path.join(input_folder, filename)
            img = Image.open(img_path)
            
            webp_filename = os.path.splitext(filename)[0] + ".webp"
            webp_path = os.path.join(output_folder, webp_filename)
            
            img.save(webp_path, "WEBP", quality=quality)
            print(f"Converted: {filename} -> {webp_filename}")

# Example usage
input_folder = "/Users/nattawatthongthong/Documents/cake-website/test/img/cake_img30.jpg"  # Replace with actual folder path
output_folder = "/Users/nattawatthongthong/Documents/cake-website/test/img_webp"  # Replace with actual folder path
convert_jpg_to_webp(input_folder, output_folder)
