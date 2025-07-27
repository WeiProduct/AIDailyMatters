#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# 创建占位符图片
def create_placeholder(filename, size, text):
    img = Image.new('RGB', size, color='#f0f0f0')
    draw = ImageDraw.Draw(img)
    
    # 绘制边框
    draw.rectangle([0, 0, size[0]-1, size[1]-1], outline='#ddd', width=2)
    
    # 绘制文字
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
    except:
        font = ImageFont.load_default()
    
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (size[0] - text_width) // 2
    y = (size[1] - text_height) // 2
    draw.text((x, y), text, fill='#999', font=font)
    
    img.save(f"images/{filename}")
    print(f"Created {filename}")

# App Store badge
create_placeholder("app-store-badge.png", (200, 60), "App Store")

# Hero mockup
create_placeholder("hero-mockup.png", (600, 800), "App Mockup")

# Screenshots
for i in range(1, 6):
    create_placeholder(f"screenshot-{i}.png", (390, 844), f"Screenshot {i}")

# QR Code
create_placeholder("qr-code.png", (200, 200), "QR Code")

print("All placeholder images created!")