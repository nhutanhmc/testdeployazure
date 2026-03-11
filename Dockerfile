# Sử dụng Node 20 bản nhẹ
FROM node:20-alpine

# Cài đặt OpenSSL (bắt buộc cho Prisma khi dùng Alpine Linux)
RUN apk add --no-cache openssl

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy các file quản lý thư viện và cài đặt
COPY package*.json ./
RUN npm install

# Copy thư mục prisma và generate client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy toàn bộ source code còn lại
COPY . .

# Build TypeScript sang JavaScript
RUN npm run build

# Mở port 3000
EXPOSE 3000

# Lệnh chạy app
CMD ["npm", "start"]