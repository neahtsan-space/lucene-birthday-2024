import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
# Define the path to your input .txt file and the output .json file
input_txt_file_path = os.path.join(dir_path, 'slang.txt')
output_json_file_path = os.path.join(dir_path, 'slang.json')

# Initialize an empty list to hold the slang words
slang_words = []

# Open and read the .txt file line by line
with open(input_txt_file_path, 'r', encoding='utf-8') as file:
    for line in file:
        # Strip newline characters and any leading/trailing whitespace
        word = line.strip()
        # Add the cleaned word to the list
        slang_words.append(word)

# Write the list of slang words to a .json file
with open(output_json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(slang_words, json_file, ensure_ascii=False, indent=2)

print(f"Converted {input_txt_file_path} to {output_json_file_path} successfully.")