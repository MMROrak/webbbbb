// netlify/functions/login.js
exports.handler = async function(event, context) {
    const { email, password } = JSON.parse(event.body);

    // تحقق من البريد الإلكتروني وكلمة المرور (تأكد من أنهما صحيحان في تطبيقك الفعلي)
    const storedEmail = "user@example.com";
    const storedPassword = "password123"; // تأكد من استخدام أسلوب آمن لتخزين كلمات المرور في الواقع

    // تحقق من البريد الإلكتروني وكلمة المرور
    if (email === storedEmail && password === storedPassword) {
        // توليد رمز JWT (لأغراض تجريبية فقط)
        const token = "jwt_token_example";  // في تطبيق حقيقي استخدم مكتبة مثل jsonwebtoken

        // إرسال استجابة إيجابية
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, token: token, role: 'user' })
        };
    } else {
        // في حالة فشل التحقق
        return {
            statusCode: 401,
            body: JSON.stringify({ success: false, message: "Invalid email or password" })
        };
    }
};
