// import axios from "utils/axios";

const fake = [
  {
    id: 1412,
    employer: {
      id: 1,
      name: "Tào Mạnh Đức",
      job: "Software Engineer",
      avatar: "https://i.loli.net/2021/04/16/BnZIhjMmzTDecEH.jpg",
      city: "TP Hồ Chí Minh",
      created_at: "2021-04-14 20:32:15",
      posted: 3,
    },
    category: {
      name: "Marketing",
    },
    title: "Cần tuyển marketing làm việc online",
    expect_balance: 12000000,
    expect_day: 7,
    job_type: "Bán thời gian",
    description:
      "Vì lý do phát triển nên chúng tôi cần tuyển một bạn Maketing Manager làm việc online hoặc fulltime. Chịu trách nhiệm trực tiếp cho cả 3 thương hiệu kể trên. ",
    end_receive_date: "2021-05-09 19:09:52",
    created_at: "2021-04-14 20:32:15",
    updated_at: "2021-04-14 20:32:15",
    state: "offer",
  },
  {
    id: 8080,
    employer: {
      id: 2,
      name: "Triệu Tử Long",
      job: "Software Engineer",
      avatar: "https://i.loli.net/2021/04/16/BnZIhjMmzTDecEH.jpg",
      city: "TP Hồ Chí Minh",
      created_at: "2021-04-14 20:32:15",
      posted: 3,
    },
    category: {
      name: "Web",
    },
    title: "Cần hoàn thành trang web xổ số",
    expect_balance: 40000000,
    expect_day: 14,
    job_type: "Dự án",
    description:
      "Tạo ra các chương trình khuyến mãi, event nhằm thu hút khách hàng và tăng nhận diện thương hiệu - Đề xuất ý tưởng phát triển giao diện rạp mỗi ngày lễ, tết trong năm ",
    end_receive_date: "2021-05-09 19:09:52",
    created_at: "2021-04-14 20:32:15",
    updated_at: "2021-04-14 20:32:15",
    state: "pending",
  },
];

class JobService {
  async getAll() {
    return fake;
  }
  async getByID(id) {
    return fake.filter((x) => x.id === id)[0];
  }
  async getByState(state) {
    console.log(
      "🚀 ~ file: job.js ~ line 64 ~ JobService ~ getByState ~ state",
      state
    );
    return fake.filter((x) => x.state === state);
  }
}

export default new JobService();
