# -*- coding: utf-8 -*-

from PIL import Image

# 创建一个1x1像素的几乎空的图片
image = Image.new("RGB", (1, 1), color="white")

# 保存图片文件，压缩质量设为最低
image.save("1_byte_image.jpg", quality=1)
