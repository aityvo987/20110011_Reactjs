# 20110011_ReactJS_Blog
*Trong Visual Studio:
+ Sử dụng các lệnh sau: npm install, npm install react-router-dom axios, npm install express, npm install cors
+ Sử dụng command:  node index.js

*Mở blog trên trình duyệt: 
- http://localhost:5000/blogs
- http://localhost:5000/blogs/1
*Xài trong terminal (command prompt của máy):
- Thêm một blog : curl -X POST -H "Content-Type: application/json" -d "{\"title\": \"Third post\", \"content\":\"Lololo\"}" "http://localhost:5000/posts"
- Update một blog (không thay đổi comments): curl -X PUT -H "Content-Type: application/json" -d "{\"title\": \"Hello lololol\", \"content\":\"Testing Update\"}" "http://localhost:5000/blogs/1"
- Comment vào một blog: curl -X POST -H "Content-Type: application/json" -d "{\"blogId\": \"1\", \"content\":\"Lololo\"}" "http://localhost:5000/comments"
- Update một comment: curl -X PUT -H "Content-Type: application/json" -d "{\"content\":\"Testing Update\"}" "http://localhost:5000/comments/1"
- Xoá một blog (VD: ID 2): curl -X DELETE "http://localhost:5000/blogs/2"
