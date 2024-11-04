import os

def get_image_names(folder_path):
    # List to store image names
    image_names = []

    # Loop through the directory
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            # Check if the file is an image based on its extension
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.webp')):
                # Append the image file name to the list
                image_names.append(file)

    return image_names

# Specify the folder containing images
folder_path = 'image\client'  # Change this to your folder path

# Get the image names
image_names_array = get_image_names(folder_path)

# Print the array of image names
print(image_names_array)
