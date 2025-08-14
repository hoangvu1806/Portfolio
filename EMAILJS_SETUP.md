# EmailJS Setup Guide

## Bảo mật thông tin

File `.env.local` chứa các thông tin nhạy cảm và **KHÔNG** được commit lên GitHub. File này đã được thêm vào `.gitignore`.

## Cách setup cho người khác

1. **Copy file environment:**
   ```bash
   cp .env.example .env.local
   ```

2. **Điền thông tin EmailJS của bạn vào `.env.local`:**
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id  
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Cách tạo EmailJS Template

Trong EmailJS dashboard, tạo template với các biến sau:

```html
Subject: New message from {{from_name}} - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## Template Variables

- `{{from_name}}` - Tên người gửi
- `{{from_email}}` - Email người gửi  
- `{{subject}}` - Tiêu đề tin nhắn
- `{{message}}` - Nội dung tin nhắn
- `{{to_email}}` - Email nhận (được set cứng trong code)

## Bảo mật

- ✅ Sử dụng environment variables
- ✅ File .env.local không được commit
- ✅ Có validation form phía client
- ✅ Có error handling
- ✅ Rate limiting tự nhiên qua EmailJS

## Lưu ý

- EmailJS có giới hạn 200 emails/tháng cho tài khoản miễn phí
- Public key có thể được expose ở client-side (đây là thiết kế của EmailJS)
- Để bảo mật cao hơn, có thể setup private key và server-side validation