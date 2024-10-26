import os

def create_html_from_images_in_folder(folder_path):
    # Supported image extensions
    supported_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff')

    # Get all image files in the specified folder
    image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(supported_extensions)]

    if not image_files:
        print("No supported image files found in the specified folder.")
        return

    for image_file in image_files:
        image_path = os.path.join(folder_path, image_file)

        # Get the image name without extension
        image_name = os.path.splitext(image_file)[0]

        # Create HTML content
        html_content = f"""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{image_name}</title>
        </head>
        <body>
            <h1>{image_name}</h1>
            <img src="{image_path}" alt="{image_name}" style="max-width:100%; height:auto;">
        </body>
        </html>
        """

        # Create HTML file with the same name as the image
        html_file_path = os.path.join(folder_path, f"{image_name}.html")
        try:
            with open(html_file_path, 'w') as html_file:
                html_file.write(html_content)
            print(f"HTML file created: {html_file_path}")
        except Exception as e:
            print(f"An error occurred while writing the HTML file for {image_name}: {e}")

# Example usage
folder_path = 'image\product'  # Change this to your folder path
create_html_from_images_in_folder(folder_path)
