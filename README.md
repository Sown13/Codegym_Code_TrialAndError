Board game:

I/ Cách chơi:

 2 hay nhiều người chơi, roll xúc xắc để quyết định
số ô được di chuyển trên bàn cờ.
    Ai về ô đích trước là thắng
    Hoặc ai hết máu trước là thua

II/ Tính năng game:

1/ Chọn lựa nhân vật (hoặc random - có thể thêm việc lựa chọn trước khi
bắt đầu game như: chọn nhân vật, nhân vật ngẫu nhiên)
- nhập vào số người chơi
- Chuyển turn nhân vật bằng cách đặt một biến thay đổi giá trị liên tục sau mỗi lần
roll xúc xắc ( 1-2;1-2)(1-2-3;1-2-3)
- Nhân vật là object có các thuộc tính:
        <br> Name: tên nv
        <br>+ HP (về 0 là thua)
        <br>+ size (size có thể scale với hp)
        <br>+ Move speed (nhân vật có speed khác nhau, ví dụ 
            2-6, hoặc 4-8, sử dụng thuật toán random* thuộc tính
            movespeed để làm điều này)
        <br>+ Atk: nhân vật có atk cao hơn sẽ chiếm được ô
        nếu 2 nhân vật đứng trên cùng 1 vị trí
        <br>+ trait: tính năng đặc biệt của nhân vật, tìm cách 
          đặt tính năng gì đó có thể quy đổi thành giá trị số;
        <br>+ method: như nói hoặc hành động hoặc biến đổi hình ảnh khi
          thỏa mãn điều kiện gì đó.

2/ Vật cản (hoặc Event):

- Khi nhân vật gặp vật cản, sẽ phải thực hiện nhiệm vụ
được giao trong vật cản đó (lùi về, tụt HP,tiến lên hoặc
trả lời câu hỏi, tung đồng xu để quyết định thắng thua).
- Vật cản cũng có thể là buff như trang bị, bùa (+hp, +atk)
- Khi hai nhân vật gặp nhau, nhân vật có atk cao hơn sẽ được quyền đứng ô đó,
nhân vật có atk thấp hơn sẽ bị lùi về sau (có thể lùi về số ô = atk cao - atk thấp)
- 