// import axios from "utils/axios";

const fake = [
  {
    id: "1",
    name: "Cần tuyển marketing làm việc online",
    category: "Bán thời gian",
    expect_balance: [8000000, 12000000],
    overview:
      "Vì lý do phát triển nên chúng tôi cần tuyển một bạn Maketing Manager làm việc online hoặc fulltime. Chịu trách nhiệm trực tiếp cho cả 3 thương hiệu kể trên. ",
    description:
      "- Tạo ra các chương trình khuyến mãi, event nhằm thu hút khách hàng và tăng nhận diện thương hiệu - Đề xuất ý tưởng phát triển giao diện rạp mỗi ngày lễ, tết trong năm ",
  },
  {
    id: "2",
    name: "Tích hợp thanh toán vietcombank php",
    category: "Dự án",
    expect_balance: [3000000, 35000000],
    overview: "Tích hợp api thanh toán vietcombank php ",
    description:
      " Tích hợp api thanh toán vietcombank php Quả ảnh demo: https://i.imgur.com/hoWwHJd.jpg Vấn đề sử dụng ajax để check chuyển khoản thành công và liên quan đến database mình sẽ tự xử lý. Gửi cho mình đoạn code php để check là được. ",
  },
];

class JobService {
  async getAll() {
    return fake;
  }
  async getByID(id) {
    return fake.filter((x) => x.id === id)[0];
  }
}

export default new JobService();
